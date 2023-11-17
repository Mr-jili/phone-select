<template>
    <view class="cell">
        <view class="cell-header" @click="handleToggle">
            <view class="cell-header-title">{{ props.title }}</view>
            <view class="cell-header-icon">
                <text class="cell-header-icon-text" v-if="props.title === '运营商'">{{ state.value ? state.value : '不限'
                }}</text>
                <text class="cell-header-icon-text" v-else>{{ state.value }}</text>
                <uni-icons :type="!toggle ? 'right' : 'bottom'" size="14"></uni-icons>
            </view>
        </view>
        <Transition mode="out-in" name="fade">
            <view class="cell-content" v-if="toggle" key="animate">
                <view class="input" v-if="props.showInput">
                    <van-field class="input-value" v-model="state.minPrice" type="number" :clearable="true"
                        placeholder="最低" />
                    <view class="input-line">-</view>
                    <van-field class="input-value" type="number" v-model="state.maxPrice" :clearable="true"
                        placeholder="最高" />
                </view>
                <view v-if="!showLHRule" :class="['cell-content-item', item.active ? 'active' : '']"
                    v-for="item in optionData" :key="item.value" @click="handleClick(item)">
                    {{ item.label }}
                </view>
                <!-- 靓号专用 -->
                <view v-if="showLHRule">
                    <view class="other" v-for="item in optionData" :key="item.label">
                        <view class="other-title">{{ item.label }}</view>
                        <view class="other-content">
                            <view :class="['cell-content-item', value.active ? 'active' : '']"
                                v-for="value in item.children" :key="value.value" @click="handleLHClick(item, value)">
                                {{ value.label }}
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </Transition>
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
    showInput: {
        type: Boolean,
        default: false,
    },
    // 靓号规则专用
    showLHRule: {
        type: Boolean,
        default: false
    },
    // 数据回显
    showParams: {
        type: Object,
        default: () => { }
    }
})

const emit = defineEmits()
const optionData = ref()
const toggle = ref(props.defineOpen)
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
    state.value = value.active ? value.label : ''
    emit('change', value.value)
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
    state.value = childValue.active ? childValue.label : ''
    emit('change', childValue.value)
}

onMounted(() => {
    optionData.value = props.data.map(item => {
        // 2级处理
        if (props.option.children) {
            item.children = item[props.option.children]
            if (item.children && item.children.length > 0) {
                item.children.forEach(child => {
                    child.active = false
                    if (child.value == props.defaultValue) {
                        child.active = true
                        state.value = child.label
                    }
                    child.label = child[props.option.label]
                    child.value = child[props.option.value]
                })
            }
        } else {
            item.active = false
            if (item.value == props.defaultValue) {
                item.active = true
                state.value = item.label
            }
            item.value = item[props.option.value]
        }
        item.label = item[props.option.label]
        return item
    })
})
</script>
<!-- <style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0.5;
}

.v-enter-to,
.v-leave-from {
    opacity: 1;
}
</style> -->
<style lang="scss" scoped>
.cell {
    border-color: hsla(0, 0%, 59%, .1);
    border-top-style: solid;
    border-width: 1px;

    &-header {
        @include flex();
        align-items: center;
        justify-content: space-between;
        height: 100rpx;

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

    .input {
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
}
</style>