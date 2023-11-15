<template>
    <view class="home">

        <uni-card>
            <view>
                <view>
                    <text>模糊</text>
                    <uni-icons custom-prefix="iconfont" type="icon-icon_change" size="10" color="#df000f"></uni-icons>
                </view>
                <view>
                    <input class="uni-input" confirm-type="search" placeholder="请输入数字" />
                    <view>
                        <checkbox value="cb" checked="true" />选中
                    </view>                    
                </view>
                <!-- <uni-search-bar radius="20" @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus"
                    @input="input" @cancel="cancel" @clear="clear">
                    <template v-slot:searchIcon>
                        <view style="width: 100rpx;">
                            
                        </view>
                    </template>
                    <template v-slot:clearIcon>
                        <view style="color: #999999">X</view>
                    </template>
                </uni-search-bar> -->
            </view>
        </uni-card>

        <!-- 城市联动弹窗 -->
        <uni-popup background-color="#fff" ref="cityPickerPopup">
            <CityPicker :showParams="{ provinceId: params.provinceId, cityId: params.cityId }"
                :province="areaState.areaList" @change="onchange"></CityPicker>
        </uni-popup>
    </view>
</template>

<script setup>
import {
    getAreaListApi,
    getAreaFeatureApi,
    getNumberListApi
} from '@/api/index'
import {
    reactive,
    ref,
    onMounted,
    watch
} from 'vue';
import SubmitModal from '@/components/submitModal';
import NumberStyle from '@/components/numberStyle';
import CityPicker from '@/components/cityPicker';
import {
    filterLevel
} from '@/utils'

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
    const {
        data
    } = await getAreaListApi({
        cityId: String(params.cityId)
    })
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
    const {
        data
    } = await getAreaFeatureApi({
        cityId: params.cityId
    })
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
    const {
        data
    } = await getNumberListApi({
        ...dataJson
    })
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
    submitModalEle.value.open({
        ...item,
        receivingAddressList: areaState.receivingAddressList
    })
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

const onchange = (value) => {
    params.cityId = value.cityId
    params.provinceId = value.provinceId
    cityPickerPopup.value.close()
    getAreaList(true)
}

// 分页
const onPageChange = ({
    current
}) => {
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
    min-height: 100vh;
    overflow: hidden;
    background: url('../../static/image/bg-1.png') fixed;
    background-size: 100% auto;
}

@import "./index.scss"
</style>