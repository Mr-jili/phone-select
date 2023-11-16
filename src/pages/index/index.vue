<template>
    <view class="index">
        <view class="index-search">
            <view class="index-search-header">
                <view class="index-search-header-left" @click="onSearchMode">
                    <text>{{ params.searchMode ? '精确' : '模糊' }}</text>
                    <uni-icons class="index-search-header-icon" custom-prefix="iconfont" type="icon-icon_change" size="14"
                        color="#df000f"></uni-icons>
                </view>
                <view class="index-search-header-mh_center" v-if="!params.searchMode">
                    <van-field type="tel" :border="false" :clearable="true" v-model="params.searchNumber" :maxlength="11"
                        placeholder="请输入数字" />
                    <view class="index-search-header-checked">
                        <van-checkbox shape="square" icon-size="30rpx" v-model="params.checked">尾号</van-checkbox>
                    </view>
                </view>
                <view class="index-search-header-jq_center" v-else>
                    <van-password-input :value="params.searchNumber" :length="11" :mask="false"
                        :focused="params.showKeyboard" @focus="params.showKeyboard = true" />
                </view>
                <view class="index-search-header-right">
                    <view class="index-search-header-btn">搜索</view>
                </view>
            </view>
            <view class="index-search-center">
                <van-dropdown-menu :close-on-click-overlay="false">
                    <van-dropdown-item @open="openCityModal">
                        <template #title>
                            <view class="index-search-center-item">
                                <uni-icons class="index-search-center-icon" custom-prefix="iconfont" type="icon-zuobiao"
                                    size="20" color="#ff0000"></uni-icons>
                                <text>南京</text>
                                <!-- <uni-icons type="bottom" size="14"></uni-icons> -->
                            </view>
                        </template>
                    </van-dropdown-item>
                    <van-dropdown-item v-model="params.serviceProvider" :options="Enum.serviceProvider">
                        <template #title>
                            <view>
                                {{ params.serviceProvider === 0 ? '运营商' : Enum.serviceProvider.find(item => item.value ===
                                    params.serviceProvider)?.text }}
                            </view>
                        </template>
                    </van-dropdown-item>
                    <van-dropdown-item v-model="params.sort" :options="Enum.defaultSort" />
                    <van-dropdown-item @open="onFilterPopup">
                        <template #title>
                            筛选
                        </template>
                    </van-dropdown-item>
                </van-dropdown-menu>
            </view>
        </view>
        <view class="index-content"></view>
        <!-- 城市联动弹窗 -->
        <uni-popup background-color="#fff" ref="cityPickerPopup">
            <CityPicker :showParams="{ provinceId: params.provinceId, cityId: params.cityId }"
                :province="areaState.areaList" @change="onchange"></CityPicker>
        </uni-popup>

        <!-- 筛选弹窗 -->
        <uni-popup background-color="#fff" ref="filterPopup">
            <FilterModal :showParams="[]" @change="onchange" @close="filterPopup.close()"></FilterModal>
        </uni-popup>

        <van-number-keyboard v-model="params.searchNumber" :show="showKeyboard" @blur="showKeyboard = false" />
    </view>
</template>

<script setup>
import * as Enum from './enumParams'
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
import FilterModal from '@/components/filter-modal';
import {
    filterLevel
} from '@/utils'

const cityPickerPopup = ref()
const filterPopup = ref()
// const submitModalEle = ref()

const showKeyboard = ref(false);

// 传参
const params = reactive({
    checked: false, // 尾号
    searchMode: false, // false是模糊 true是精确
    serviceProvider: 0,  // 运营商
    sort: 1, // 排序
    searchNumber: '', // 号码
    provinceId: '', // 省id
    cityId: '', // 市id
    // type: false, // 类型
    // feature: '',
    // keyword: '',
    // nofour: false,
    // phone: '',
    // pagesize: 30
})

// 地区
const areaState = reactive({
    receivingAddressList: [], // 收货地址
    areaList: [],
    defaultAreaList: [],
    defaultArea: ''
})
// 热搜
// const topSearchState = reactive({
//     list: [],
//     isAll: false
// })

// 列表
const listData = reactive({
    list: [],
    total: 0
})

// 模糊精确搜索
const onSearchMode = () => {
    params.searchMode = !params.searchMode;
    showKeyboard.value = true
    params.searchNumber = ''
}

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
// const handleClick = (item) => {
//     submitModalEle.value.open({
//         ...item,
//         receivingAddressList: areaState.receivingAddressList
//     })
// }

// 地区选择
// const handleClickItem = (index) => {
//     areaState.defaultAreaList = areaState.defaultAreaList.map(item => {
//         return {
//             ...item,
//             active: false
//         }
//     })
//     areaState.defaultAreaList[index].active = true
//     params.cityId = areaState.defaultAreaList[index].id
//     getAreaFeature()
// }

// 热搜选择
// const handleClickTopItem = (index) => {
//     topSearchState.list = topSearchState.list.map(item => {
//         return {
//             ...item,
//             active: false
//         }
//     })
//     topSearchState.list[index].active = true
//     params.feature = topSearchState.list[index].name
//     getNumberList()
// }

// 不含4
// const handleTopSearchNoFour = () => {
//     params.nofour = !params.nofour
//     getNumberList()
// }

// 全选
// const handleTopSearch = () => {
//     listData.isAll = !listData.isAll
//     topSearchState.list = topSearchState.list.map(item => {
//         return {
//             ...item,
//             active: false
//         }
//     })
//     params.feature = ''
//     getNumberList()
// }

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

const onFilterPopup = () => {
    filterPopup.value.open('right')
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

<style lang="scss">
.van-password-input {
    margin: 0 !important;
}

::v-deep {
    .van-password-input__security {
        height: 40px;
    }
}
</style>