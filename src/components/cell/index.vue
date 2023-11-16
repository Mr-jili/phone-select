<template>
    <view class="cell">
        <view class="cell-header" @click="handleToggle">
            <view class="cell-header-title">{{ props.title }}</view>
            <view class="cell-header-icon">
                <slot name="icon">
                    <text>{{ state.value }}</text>
                    <uni-icons :type="!toggle ? 'right' : 'bottom'" size="14"></uni-icons>
                </slot>
            </view>
        </view>
        <Transition mode="out-in" name="fade">
            <view class="cell-content" v-if="toggle" key="animate">
                <view :class="['cell-content-item', item.active ? 'active' : '']" v-for="item in optionData"
                    :key="item.value" @click="handleClick(item)">
                    {{ item.label }}
                </view>
            </view>
        </Transition>
    </view>
</template>
<script setup>
import { reactive, onMounted, defineProps, computed, defineEmits, ref, Transition } from 'vue';
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
    value: ''
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
    state.value = value.active ? value.label : ''
    emit('change', value)
}

onMounted(() => {
    optionData.value = props.data.map(item => {
        item.active = false
        if (item.value == props.defaultValue) {
            item.active = true
            state.value = item.label
        }
        if (props.option) {
            item.label = item[props.option.label]
            item.value = item[props.option.value]
        }
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
            text {
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
}
</style>