<template>
    <view class="home">
        <view class="home-header">
            <img :src="staticState.headerImg" alt="">
        </view>
        <view class="home-search">
            <view class="home-search-top">
                <view class="home-search-title">地区</view>
                <view class="home-search-content">
                    <view :class="['home-search-content-item', 'area']" @click="openCityModal">
                        {{ areaState.defaultArea }}
                        <uni-icons type="bottom" size="16"></uni-icons>
                    </view>
                    <!-- <uni-data-picker ref="cityPicker" :localdata="areaState.areaList" :map="{ text: 'name', value: 'id' }"
                        popup-title="请选择" @change="onchange">
                    </uni-data-picker> -->
                    <view :class="['home-search-content-item', item.active ? 'active' : '']"
                        v-for="(item, index) in areaState.defaultAreaList" :key="item.id" @click="handleClickItem(index)">
                        {{ item.name }}
                    </view>
                </view>
            </view>
            <view class="home-search-bottom">
                <view class="home-search-title">热搜</view>
                <view class="home-search-content">
                    <view :class="['home-search-content-item', item.active ? 'active' : '']"
                        v-for="(item, index) in topSearchState.list" :key="item.name" @click="handleClickTopItem(index)">
                        {{ item.name }}
                    </view>
                    <view :class="['nofour', 'home-search-content-item', params.nofour ? 'active' : '']"
                        @click="handleTopSearchNoFour">不含四
                        <radio @click="handleTopSearchNoFour" style="transform: scale(0.5);" :checked="params.nofour" />
                    </view>
                    <view :class="['home-search-content-item', listData.isAll ? 'active' : '']" @click="handleTopSearch">全部
                    </view>
                </view>
            </view>
            <view class="home-search-input">
                <input @input="(event) => params.keyword = event.detail.value" :value="params.keyword"
                    style="margin-left: 16px;" placeholder="请输入您喜欢的数字" />
                <checkbox @click.stop="params.type = !params.type" :checked="params.type">尾号</checkbox>
                <view class="home-search-input-btn" @click="getNumberList()">搜索</view>
            </view>
        </view>
        <view class="home-list">
            <uni-row :gutter="10" style="padding: 10px 10px 0 10px" v-if="listData.list.length > 0">
                <uni-col :span="12" v-for="item in listData.list" :key="item.number" @click="handleClick(item)">
                    <view class="home-list-item">
                        <view class="home-list-item-top">
                            <number-style :list="item.numberArray"></number-style>
                            <text class="home-list-item-top-area">{{ item.province }}</text>
                        </view>
                        <view class="home-list-item-bottom">
                            <text class="home-list-item-bottom-price">￥{{ item.sold }}</text>
                            <text class="home-list-item-bottom-info">限时出售</text>
                        </view>
                    </view>
                </uni-col>
            </uni-row>
        </view>
        <view class="home-pagination" v-if="listData.list.length > 0">
            <uni-pagination title="标题文字" :current="params.page" :pageSize="params.pagesize" :total="listData.total"
                @change="onPageChange"></uni-pagination>
        </view>
        <view class="home-footer">
            <img :src="staticState.footerImg1" alt="">
            <img :src="staticState.footerImg2" alt="">
        </view>

        <!-- 城市联动弹窗 -->
        <uni-popup background-color="#fff" ref="cityPickerPopup">
            <CityPicker :showParams="{ provinceId: params.provinceId, cityId: params.cityId }"
                :province="areaState.areaList" @change="onchange"></CityPicker>
        </uni-popup>

        <!-- 提交订单弹窗 -->
        <SubmitModal ref="submitModalEle" @loadRefresh="getNumberList"></SubmitModal>
    </view>
</template>

<script setup>
import { getAreaListApi, getAreaFeatureApi, getNumberListApi } from '@/api/index'
import { reactive, ref, onMounted, watch } from 'vue';
import SubmitModal from '@/components/submitModal';
import NumberStyle from '@/components/numberStyle';
import CityPicker from '@/components/cityPicker';
import { filterLevel } from '@/utils'

const staticState = reactive({
    headerImg: new URL('@/static/image/headerImg.jpg', import.meta.url).href,
    footerImg1: new URL('@/static/image/footerImg1.jpg', import.meta.url).href,
    footerImg2: new URL('@/static/image/footerImg2.jpg', import.meta.url).href,
})

const cityPickerPopup = ref()
const submitModalEle = ref()
// 地区
const areaState = reactive({
    receivingAddressList: [], // 收货地址
    areaList: [],
    defaultAreaList: [],
    defaultArea: ''
})
// 热搜
const topSearchState = reactive({
    list: [],
    isAll: false
})
// 传参
const params = reactive({
    provinceId: '', // 省id
    cityId: '', // 市id
    type: false, // 类型
    feature: '',
    keyword: '',
    nofour: false,
    phone: '',
    pagesize: 30
})

// 列表
const listData = reactive({
    list: [],
    total: 0
})

// 获取号码地区列表
const getAreaList = async (isSearch = false) => {
    const { data } = await getAreaListApi({ cityId: String(params.cityId) })
    areaState.areaList = filterLevel(data.lists, 2)
    areaState.receivingAddressList = filterLevel(data.lists, 3)
    areaState.defaultAreaList = data.lists[data.provinceIndex].children.map(item => {
        return {
            ...item,
            active: false
        }
    })

    // 地区搜索后
    if (isSearch) {
        const index = areaState.defaultAreaList.findIndex(item => item.id === params.cityId)
        areaState.defaultAreaList[index].active = true
        areaState.defaultArea = data.lists.find(item => item.id === params.provinceId)?.name
    } else {
        // 初始化

        // 省
        areaState.defaultArea = data.lists[data.provinceIndex].name
        params.provinceId = data.lists[data.provinceIndex].id

        // 城
        const index = areaState.defaultAreaList.findIndex(item => item.id === data.locationCityId)
        params.cityId = areaState.defaultAreaList[index].id
        areaState.defaultAreaList[index].active = true
    }

    getAreaFeature()
}

// 获取指定城市号码规则列表
const getAreaFeature = async () => {
    const { data } = await getAreaFeatureApi({ cityId: params.cityId })
    topSearchState.list = data.map(item => {
        return {
            name: item,
            active: false
        }
    })
    getNumberList()
}

// 获取号码列表
const getNumberList = async (page = 1) => {
    const dataJson = {
        ...params,
        type: Number(params.type),
        nofour: Number(params.nofour),
        page: page
    }
    const { data } = await getNumberListApi({ ...dataJson })
    data?.data?.forEach((item) => {
        item.numberArray = Array.from(item.number).map((n, i) => {
            return {
                i: n,
                f: Array.from(item.default_high_light_bits)[i] == 1
            }
        })
    })
    listData.list = data ? data.data : []
    listData.total = data ? data.total : 0
}

// 领取弹窗
const handleClick = (item) => {
    submitModalEle.value.open({ ...item, receivingAddressList: areaState.receivingAddressList })
}

// 地区选择
const handleClickItem = (index) => {
    areaState.defaultAreaList = areaState.defaultAreaList.map(item => {
        return {
            ...item,
            active: false
        }
    })
    areaState.defaultAreaList[index].active = true
    params.cityId = areaState.defaultAreaList[index].id
    getAreaFeature()
}

// 热搜选择
const handleClickTopItem = (index) => {
    topSearchState.list = topSearchState.list.map(item => {
        return {
            ...item,
            active: false
        }
    })
    topSearchState.list[index].active = true
    params.feature = topSearchState.list[index].name
    getNumberList()
}

// 不含4
const handleTopSearchNoFour = () => {
    params.nofour = !params.nofour
    getNumberList()
}

// 全选
const handleTopSearch = () => {
    listData.isAll = !listData.isAll
    topSearchState.list = topSearchState.list.map(item => {
        return {
            ...item,
            active: false
        }
    })
    params.feature = ''
    getNumberList()
}

<<<<<<< HEAD
const onchange = (value) => {
    params.cityId = value.cityId
    params.provinceId = value.provinceId
    cityPickerPopup.value.close()
    getAreaList(true)
=======

// 地区城市
const onchange = (event) => {
    params.cityId = event.detail.value[1]?.value
    getAreaList()
>>>>>>> f8e7c315c335fe132bddad77b4d72c39a8e793c4
}

// 分页
const onPageChange = ({ current }) => {
    getNumberList(current)
}

const openCityModal = () => {
    cityPickerPopup.value.open('left')
}

onMounted(() => {
    getAreaList()
})
</script>

<style lang="scss" scoped>
page {
    width: 100%;
    overflow: hidden;
    background-color: #ad0b1f;
}

@import "./index.scss"
</style>
