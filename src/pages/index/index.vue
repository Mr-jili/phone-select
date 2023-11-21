<template>
    <view class="index">
        <van-sticky>
            <view class="index-search">
                <view class="index-search-header">
                    <view class="index-search-header-left" @click="onSearchMode">
                        <text>{{ params.searchMode ? '精确' : '模糊' }}</text>
                        <uni-icons class="index-search-header-icon" custom-prefix="iconfont" type="icon-icon_change"
                            size="14" color="#df000f"></uni-icons>
                    </view>
                    <view class="index-search-header-mh_center" v-if="!params.searchMode">
                        <van-field type="tel" :border="false" :clearable="true" v-model="params.searchNumber"
                            :maxlength="11" placeholder="请输入数字" />
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
                    <van-dropdown-menu ref="dropMenu">
                        <van-dropdown-item @open="openCityModal">
                            <template #title>
                                <view class="index-search-center-item">
                                    <uni-icons class="index-search-center-icon" custom-prefix="iconfont" type="icon-zuobiao"
                                        size="20" color="#ff0000"></uni-icons>
                                    <view class="index-search-center-title">{{ areaState.defaultArea }}</view>
                                </view>
                            </template>
                        </van-dropdown-item>
                        <van-dropdown-item v-model="params.serviceProvider" :options="Enum.serviceProvider">
                            <template #title>
                                <view :style="{ color: params.serviceProvider === 0 ? '#787878' : '#fc3e5a' }">
                                    {{ params.serviceProvider === 0 ? '运营商' : Enum.serviceProvider.find(item => item.value
                                        === params.serviceProvider)?.text }}
                                </view>
                            </template>
                        </van-dropdown-item>
                        <van-dropdown-item v-model="params.sort" :options="Enum.defaultSort">
                            <template #title>
                                <view :style="{ color: params.sort === 1 ? '#787878' : '#fc3e5a' }">
                                    {{ Enum.defaultSort.find(item => item.value === params.sort)?.text }}
                                </view>
                            </template>
                        </van-dropdown-item>
                        <van-dropdown-item @open="onFilterPopup">
                            <template #title>
                                <text :style="{ color: !filterNum ? '#787878' : '#fc3e5a' }">筛选{{ filterNum ?
                                    `(${filterNum})`
                                    : '' }}</text>
                            </template>
                        </van-dropdown-item>
                    </van-dropdown-menu>
                </view>
                <view class="index-search-bottom">
                    <view class="index-search-bottom-list" id="scroll-wrapper">
                        <!-- <view :class="['index-search-bottom-item', params.filterParams.value4?.value == 4 ? 'active' : '']"
                            @click="handleNoFour">
                            <text>不含四</text>
                        </view> -->

                        <!-- <view class="index-search-bottom-item" :style="customNoFourStyle()" @click="handleNoFour">
                            <text>不含四</text>
                        </view> -->
                        <template v-for="item in searchBottomList">
                            <view v-if="item.isClick" :class="['index-search-bottom-item']" :key="item.label"
                                :style="customNoFourStyle()" @click="handleSearch(item)">
                                <text>{{ item.label }}</text>
                            </view>
                            <view v-else :key="item.label"
                                :class="['index-search-bottom-item', showContent === item.type && showActive ? 'active' : '']"
                                @click="handleSearch(item)" :style="customStyle(params.filterParams[item.value]?.label)">
                                <text>{{ params.filterParams[item.value]?.label || item.label }}</text>
                                <uni-icons :type="showContent === item.type && showActive ? 'top' : 'bottom'"
                                    :color="customStyle(params.filterParams[item.value]?.label)" size="14"></uni-icons>
                            </view>
                        </template>

                        <!-- <view :class="['index-search-bottom-item', showContent === 2 && showActive ? 'active' : '']"
                            @click="handleSearch(2)">
                            <text>售价</text>
                            <uni-icons type="bottom" size="14"></uni-icons>
                        </view>
                        <view :class="['index-search-bottom-item', showContent === 3 && showActive ? 'active' : '']"
                            @click="handleSearch(3)">
                            <text>月低消</text>
                            <uni-icons type="bottom" size="14"></uni-icons>
                        </view>
                        <view :class="['index-search-bottom-item', showContent === 4 && showActive ? 'active' : '']"
                            @click="handleSearch(4)">
                            <text>优质号段</text>
                            <uni-icons type="bottom" size="14"></uni-icons>
                        </view> -->
                    </view>
                    <view class="index-search-bottom-modal">
                        <CustomCell v-if="showContent == 1 && showActive" :defaultValue="params.filterParams.value4?.value"
                            :data="Object.values(Enum.numberSegmentRule)"
                            :option="{ label: 'ruleName', children: 'ruleList', value: 'ruleCode' }"
                            @change="onCellChange($event, 'value4')" :showLHRule="true">
                        </CustomCell>
                        <CustomCell v-if="showContent == 2 && showActive" :defaultValue="params.filterParams.value5?.value"
                            :data="Enum.priceList" :option="{ label: 'ruleName', value: 'priceRange' }"
                            @change="onCellChange($event, 'value5')" :showInput="true">
                        </CustomCell>
                        <CustomCell v-if="showContent == 3 && showActive" :defaultValue="params.filterParams.value6?.value"
                            :data="Enum.priceLowCostList" :option="{ label: 'ruleName', value: 'priceRange' }"
                            @change="onCellChange($event, 'value6')" :showInput="true">
                        </CustomCell>
                        <CustomCell v-if="showContent == 4 && showActive" :defaultValue="params.filterParams.value6?.value"
                            :data="Enum.sectionList" :option="{ label: 'ruleName', value: 'priceRange' }"
                            @change="onCellChange($event, 'value6')">
                        </CustomCell>
                    </view>
                </view>
            </view>
        </van-sticky>

        <view class="index-content">
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
        <!-- 城市联动弹窗 -->
        <uni-popup background-color="#fff" ref="cityPickerPopup">
            <CityPicker :showParams="{ provinceId: params.provinceId, cityId: params.cityId }"
                :province="areaState.areaList" @change="onchange"></CityPicker>
        </uni-popup>

        <!-- 筛选弹窗 -->
        <uni-popup background-color="#fff" ref="filterPopup">
            <FilterModal :showParams="params.filterParams" @ok="handleFilterOK"
                @close="filterPopup.close(); dropMenu.close()">
            </FilterModal>
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
import CityPicker from '@/components/cityPicker';
import FilterModal from '@/components/filter-modal';
import CustomCell from "@/components/cell";
import {
    filterLevel
} from '@/utils'

const cityPickerPopup = ref()
const filterPopup = ref()
const dropMenu = ref()
const dropdownMenuRef = ref()
const showKeyboard = ref(false);
const filterNum = ref()
const showContent = ref()
const showActive = ref(false)

const searchBottomList = ref([{
    label: '不含4',
    isClick: true,
    active: false,
    value: 'value8'
}, {
    label: '靓号规则',
    type: '1',
    active: false,
    value: 'value4'
}, {
    label: '售价',
    type: '2',
    active: false,
    value: 'value5'
}, {
    label: '月低消',
    type: '3',
    active: false,
    value: 'value6'
}, {
    label: '优质号段',
    type: '4',
    active: false,
    value: 'value7'
}])


// 传参
const params = reactive({
    checked: false, // 尾号
    searchMode: false, // false是模糊 true是精确
    serviceProvider: 0,  // 运营商
    sort: 1, // 排序
    searchNumber: '', // 号码
    provinceId: '', // 省id
    cityId: '', // 市id
    filterParams: {},

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

// 筛选数据
const handleFilterOK = (value) => {
    filterNum.value = Object.values(value).filter(item => item.value).length
    params.filterParams = value
    filterPopup.value.close()
    dropMenu.value.close()
}

const onCellChange = (value, type) => {
    params.filterParams[type] = value;
    showActive.value = false
}

// 获取地区列表
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
        areaState.defaultArea = data.currentCity.name
    } else {
        // 初始化
        params.provinceId = data.lists[data.provinceIndex].id
        areaState.defaultArea = data.currentCity.name
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

const onchange = (value) => {
    params.cityId = value.cityId
    params.provinceId = value.provinceId
    cityPickerPopup.value.close()
    dropMenu.value.close()
    getAreaList(true)
}

const handleSearch = (item) => {
    if (item.isClick) {
        item.active = !item.active
        // searchBottomList[0].active = !item.active
        if (item.active) {
            params.filterParams.value8 = {
                value: 4,
                label: '不含4'
            }
        } else {
            params.filterParams.value8 = null
        }
        return false
    }
    if (showContent.value === item.type) {
        showActive.value = !showActive.value
    } else {
        showActive.value = true
        showContent.value = item.type
    }
}

// const handleNoFour = () => {
//     params.filterParams.value8 = {
//         value: 4,
//         label: '不含4'
//     }
// }

const customNoFourStyle = () => {
    const value = params.filterParams.value8?.value
    console.log(value, 555)
    return {
        color: value ? '#fff' : '#787878',
        backgroundColor: value ? '#e74e4b' : 'f2f2f7'
    }
}

const customStyle = (value) => {
    return {
        color: value ? '#fff' : '#787878',
        backgroundColor: value ? '#e74e4b' : 'f2f2f7'
    }
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