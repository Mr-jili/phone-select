<template>
    <view class="home">
        <view class="home-header">
            <img :src="staticState.headerImg" alt="">
        </view>
        <view class="home-search">
            <view class="home-search-top">
                <view class="home-search-title">地区</view>
                <view class="home-search-content">
                    <view class="home-search-content-item" @click="handleClickArea"
                        style="display: flex;align-items: center;color:#00006b;background-color: #ffefce;">江苏
                        <uni-icons type="bottom" size="16"></uni-icons>
                    </view>
                    <view class="home-search-content-item"
                        :style="{ background: !item.active ? 'hsla(0, 0%, 100%, 0.2)' : '#ffffff', color: !item.active ? '#fff' : '#000' }"
                        v-for="(item, index) in areaState.defaultArea" :key="item.id" @click="handleClickItem(index)">
                        {{ item.name }}
                    </view>
                </view>
            </view>
            <view class="home-search-bottom">
                <view class="home-search-title">热搜</view>
                <view class="home-search-content">
                    <view class="home-search-content-item"
                        :style="{ background: !item.active ? 'hsla(0, 0%, 100%, 0.2)' : '#ffffff', color: !item.active ? '#fff' : '#000' }"
                        v-for="(item, index) in topSearchState.list" :key="item.name" @click="handleClickTopItem(index)">
                        {{ item.name }}
                    </view>
                    <view class="home-search-content-item" style="display: flex;align-items: center;padding-right: 0;">不含四
                        <radio style="transform: scale(0.5);" :checked="params.nofour" />
                    </view>
                    <view class="home-search-content-item">全部</view>
                </view>
            </view>
            <view class="home-search-input">
                <input style="margin-left: 16px;" placeholder="请输入您喜欢的数字" />
                <checkbox>尾号</checkbox>
                <view class="home-search-input-btn">搜索</view>
            </view>
        </view>
        <view class="home-list">
            <uni-row :gutter="10" style="padding: 10px 10px 0 10px" v-if="listData.list.length > 0">
                <uni-col :span="12" v-for="item in listData.list" :key="item.number" @click="handleClick(item)">
                    <view class="home-list-item">
                        <view class="home-list-item-top">
                            <text class="home-list-item-top-phone">{{ item.number }}</text>
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
        <view class="home-pagination">
            <view class="home-pagination-pre">上一页</view>
            <view class="home-pagination-next">下一页</view>
        </view>
        <view class="home-footer">
            <img :src="staticState.footerImg1" alt="">
            <img :src="staticState.footerImg2" alt="">
        </view>

        <!-- 城市选择 -->
        <uni-data-picker ref="cityPicker" :localdata="areaState.areaList" :map="{ text: 'name', value: 'id' }"
            popup-title="请选择" @change="onchange"></uni-data-picker>


        <!-- 提交订单弹窗 -->
        <uni-popup ref="popupOpen" type="bottom">
            <SubmitModal :query="params"></SubmitModal>
        </uni-popup>
    </view>
</template>

<script setup>
import { getAreaListApi, getAreaFeatureApi, getNumberListApi } from '@/api/index'
import { reactive, ref, onMounted, watch } from 'vue';
import SubmitModal from '@/components/submitModal'
const staticState = reactive({
    headerImg: new URL('@/static/image/headerImg.jpg', import.meta.url).href,
    footerImg1: new URL('@/static/image/footerImg1.jpg', import.meta.url).href,
    footerImg2: new URL('@/static/image/footerImg2.jpg', import.meta.url).href,
})

const cityPicker = ref()
const popupOpen = ref()
// 地区
const areaState = reactive({
    areaList: [],
    defaultArea: []
})
// 热搜
const topSearchState = reactive({
    list: []
})

// 传参
const params = reactive({
    cityId: '287',
    type: 0,
    feature: '',
    keyword: '',
    nofour: false,
    phone: ''
})

const listData = reactive({
    list: [],
    total: 0
})


// 获取号码地区列表
const getAreaList = async () => {
    const { data } = await getAreaListApi({})
    areaState.areaList = data.lists
    areaState.defaultArea = data.lists[9].children.map(item => {
        return {
            ...item,
            active: false
        }
    })
    // params.cityId = areaState.defaultArea[0].id
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

const getNumberList = async () => {
    const { data } = await getNumberListApi({ ...params })
    listData.list = data.data
}

const handleClickArea = () => {
    areaState.show = true
    cityPicker.value.show()
}

const handleClick = (item) => {
    popupOpen.value.open()
    params.phone = item.number
}

const handleClickItem = (index) => {
    areaState.defaultArea = areaState.defaultArea.map(item => {
        return {
            ...item,
            active: false
        }
    })
    areaState.defaultArea[index].active = true
    params.cityId = areaState.defaultArea[index].id
    getAreaFeature()
}

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

const onchange = () => {

}

onMounted(() => {
    getAreaList()
})
</script>

<style lang="scss">
page {
    width: 100%;
    background-color: #ad0b1f;
}

@import "./index.scss"
</style>
