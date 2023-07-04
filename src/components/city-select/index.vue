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

defineExpose({
    open
})

onMounted(() => {
    getAreaList()
})
</script>
<style lang="scss"></style>