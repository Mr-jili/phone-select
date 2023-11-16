<template>
    <view class="popup-content">
        <view class="ul">
            <view :class="['li', c.active ? 'active' : '']" v-for="c in state.province" :key="c.id"
                @click="handleProvince(c)">
                {{ c.name }}
            </view>
        </view>
        <view class="ul">
            <view :class="['li', v.active ? 'active' : '']" v-for="v in state.city" :key="v.id" @click="handleCity(v)">{{
                v.name }}</view>
        </view>
    </view>
</template>
<script setup>
import { reactive, onMounted, defineProps, defineEmits } from 'vue';
const props = defineProps({
    // 初始数据
    province: {
        type: Array,
        default: () => []
    },
    // 数据回显
    showParams: {
        type: Object,
        default: () => { }
    }
})

const emit = defineEmits()

const state = reactive({
    province: [],
    city: [],
    provinceId: '',
    cityId: ''
})

// 省
const handleProvince = (value) => {
    state.provinceId = value.id
    state.city = value.children
    state.province.forEach(item => {
        item.active = false
    })
    value.active = true
}

// 市
const handleCity = (value) => {
    state.cityId = value.id
    state.city.forEach(item => {
        item.active = false
    })
    value.active = true
    emit('change', {
        provinceId: state.provinceId,
        cityId: state.cityId
    })
}

onMounted(() => {
    state.province = props.province

    // 回显省
    if (props.showParams.provinceId) {
        state.province.forEach(item => {
            item.active = false
            item.active = props.showParams.provinceId === item.id
        })
    }
    // 回显市
    if (props.showParams.cityId) {
        const index = props.province.findIndex(item => item.id === props.showParams.provinceId)
        state.city = props.province[index].children

        // 清空选中状态
        state.city.forEach(item => {
            item.active = false
            item.active = props.showParams.cityId === item.id
        })
    }
})

</script>
<style lang="scss">
.popup-content {
    width: 468rpx;
    display: flex;

    .ul {
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;

        .li {
            width: 180rpx;
            overflow: hidden;
            padding: 24rpx;
            color: #666;
            font-size: 30rpx;
            text-align: center;
            cursor: pointer;
            border-bottom: 1px solid #f4f4f4;
            // text-overflow: ellipsis;
            // white-space: nowrap;
        }

        .active {
            color: #d0663c;
        }

        &:first-of-type {
            border-right: 1px solid #efefef;
            box-shadow: 4px 0 5px -3px #efefef;
        }
    }
}
</style>