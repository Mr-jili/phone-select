<template>
    <view class="cell">
        <view class="cell-content">
            <view class="search" v-if="props.showInput">
                <view class="search-input">
                    <van-field class="search-input-value" v-model="state.minPrice" type="number" :clearable="true"
                        placeholder="最低" />
                    <view class="search-input-line">-</view>
                    <van-field class="search-input-value" type="number" v-model="state.maxPrice" :clearable="true"
                        placeholder="最高" />
                </view>
                <view class="search-footer" v-if="props.showInput">
                    <view class="search-footer-wrapper">
                        <view class="foot-btn foot-btn-clear" @click="handleRest">重置</view>
                        <view class="foot-btn foot-btn-ok" @click="handleFinish">确定</view>
                    </view>
                </view>
            </view>

            <!-- 靓号专用 -->
            <view v-if="showLHRule">
                <van-checkbox shape="square" icon-size="30rpx" v-model="filterChecked">
                    <view class="cell-rule">
                        <text>包含0元号码的规则（带有</text>
                        <text class="cell-rule-high">免</text>
                        <text>标识）</text>
                    </view>
                </van-checkbox>
                <view class="other" v-for="item in optionData" :key="item.label">
                    <view class="other-title">{{ item.label }}</view>
                    <view class="other-content">
                        <view :class="['cell-content-item', value.active ? 'active' : '']" v-for="value in item.children"
                            :key="value.value" @click="handleLHClick(item, value)">
                            {{ value.label }}
                        </view>
                    </view>
                </view>
            </view>

            <!-- 其他 -->
            <view v-else :class="['cell-content-item', item.active ? 'active' : '']" v-for="item in optionData"
                :key="item.value" @click="handleClick(item)">
                {{ item.label }}
            </view>
        </view>
    </view>
</template>
<script setup>
import { reactive, onMounted, defineProps, defineExpose, defineEmits, ref, Transition } from 'vue';
const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
    title: {
        type: String,
        default: ''
    },
    defaultValue: {
        type: String,
        default: ''
    },
    defineOpen: {
        type: Boolean,
        default: false
    },
    option: {
        type: Object,
        default: {
            label: 'label',
            value: 'value'
        }
    },
    // 售价、月低消
    showInput: {
        type: Boolean,
        default: false,
    },
    // 靓号规则专用
    showLHRule: {
        type: Boolean,
        default: false
    },
})

const emit = defineEmits()
const optionData = ref()
const toggle = ref(props.defineOpen)
const filterChecked = ref('') // 筛选靓号规则
const state = reactive({
    value: '',
    minPrice: '',
    maxPrice: '',
})

const handleToggle = () => {
    toggle.value = !toggle.value
}

const handleClick = (value) => {
    optionData.value = optionData.value.map(item => {
        if (value.value === item.value) {
            if (item.active) {
                item.active = false
            } else {
                item.active = true
            }
        } else {
            item.active = false
        }
        return item
    })
    // 月底消 价格单独处理
    if (value.priceRange) {
        const splitPrice = value.priceRange.split(',')
        state.minPrice = splitPrice[0]
        state.maxPrice = splitPrice[1]
    }

    if (value.active) {
        state.value = value.label
        emit('change', value)
    } else {
        state.value = ''
        emit('change', {})
    }
}

// 靓号规则单独处理
const handleLHClick = (value, childValue) => {
    optionData.value = optionData.value.map(item => {
        if (item.children && item.children.length > 0) {
            item.children.forEach(itemChild => {
                if (childValue.value === itemChild.value) {
                    if (itemChild.active) {
                        itemChild.active = false
                    } else {
                        itemChild.active = true
                    }
                } else {
                    itemChild.active = false
                }
            })
        }
        return item
    })
    if (childValue.active) {
        state.value = childValue.label
        emit('change', childValue)
    } else {
        emit('change', {})
    }
}

onMounted(() => {
    optionData.value = props.data.map(item => {
        // 2级处理
        if (props.option.children) {
            item.children = item[props.option.children]
            if (item.children && item.children.length > 0) {
                item.children.forEach(child => {
                    child.active = false
                    child.label = child[props.option.label]
                    child.value = child[props.option.value]

                    if (child.value == props.defaultValue) {
                        child.active = true
                        state.value = child.label
                    }
                })
            }
        } else {
            item.active = false

            item.value = item[props.option.value] ?? ''

            if (item.value == props.defaultValue) {
                item.active = true
                state.value = item.label
            }

        }
        item.label = item[props.option.label]
        return item
    })
})

defineExpose({
    handleToggle,
    toggle
})
</script>
<style lang="scss" scoped>
.cell {
    background-color: #f2f2f7;
    padding: 32rpx 20rpx;

    &-header {
        @include flex();
        // align-items: center;
        // justify-content: space-between;
        // height: 100rpx;

        &-title {
            color: #333;
            font-size: 32rpx;
            font-weight: 700;
        }

        &-icon {
            &-text {
                width: 100rpx;
                color: #e4393c;
                padding: 0 10rpx;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        }
    }

    &-content {
        @include flex();
        flex-wrap: wrap;
        justify-content: space-between;

        &-item {
            width: calc((100% - 40rpx) / 3);
            background: #f7f7f7;
            border: 1px solid transparent;
            background: #f7f7f7;
            border-radius: 8rpx;
            color: #666;
            font-size: 30rpx;
            line-height: 68rpx;
            text-align: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 20rpx;
            overflow: hidden;
            padding: 0 10rpx;
            box-sizing: border-box;
        }

        .active {
            background: rgba(255, 0, 54, .06);
            border: 1px solid #e4393c;
            border-radius: 1.6vw;
            color: #e4393c;
            font-size: 32rpx;
        }
    }

    &-rule {
        @include flex();
        align-items: center;
        margin: 20rpx 0 20rpx 0;

        &-high {
            background: #ff6363;
            border-radius: 25rpx 25rpx 25rpx 0;
            color: #fff;
            display: inline-block;
            font-size: 32rpx;
            height: 40rpx;
            line-height: 40rpx;
            text-align: center;
            width: 50rpx;
            margin: 0 4rpx;
        }
    }

    .other {
        &-title {
            font-size: 28rpx;
            font-weight: 600;
            padding: 8rpx 10rpx;
        }

        &-content {
            @include flex();
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }

    .search {
        @include flex();
        align-items: center;
        justify-content: space-between;

        &-input {
            flex: 1;
            @include flex();
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20rpx;

            &-value {
                border: 1px solid #f2f2f2;
                color: #606060;
                flex: 1;
                border-radius: 4px;
                height: 70rpx;
                font-size: 32rpx;
            }

            &-line {
                padding: 0 20rpx;
            }
        }

        &-footer {
            @include flex();
            align-items: center;

            &-wrapper {
                @include flex();
                align-items: center;
                justify-content: center;
                background: #e4393c;
                border: 1px solid #e4393c;
                border-radius: 24px;
                margin: 20rpx 30rpx;
            }

            .foot-btn {
                display: block;
                font-size: 34rpx;
                height: 30px;
                line-height: 30px;
                text-align: center;
                width: 80rpx;
            }

            .foot-btn-clear {
                background-color: #fff;
                border-radius: 24px 0 24px 24px;
                color: #e4393c;
                text-decoration: underline;

            }

            .foot-btn-ok {
                background-color: #e4393c;
                border-radius: 0 24px 24px 0;
                color: #fff;
            }
        }
    }
}
</style>