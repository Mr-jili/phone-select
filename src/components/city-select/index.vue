<template>
    <view class="city-select">
        <slot></slot>
        <uni-data-picker ref="cityPicker" :localdata="areaState.areaList" :map="{ text: 'name', value: 'id' }"
            popup-title="请选择" @change="onchange"></uni-data-picker>
    </view>
</template>
<script>
import { getAreaListApi } from '@/api/index'
import { reactive, ref, onMounted, defineProps, defineExpose } from 'vue';

const props = defineProps({
    level: {
        type: Number,
        default: 2
    },
    params: {
        type: Object,
        default: () => { }
    }
})

const cityPicker = ref({})
const areaState = reactive({
    areaList: [],
    defaultArea: []
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

const onchange = () => { }

const open = () => {

}

defineExpose({
    open
})

onMounted(() => {
    getAreaList()
})
</script>
<style lang="scss"></style>