<template>
    <view class="number-style">
        <text v-for="(v, i) in props.list" :key="i + 'A'" :style="{ color: v.f ? textHighColor : textColor }">
            {{ v.i }}
        </text>
    </view>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    list: {
        require: true,
        type: Array,
        default: () => []
    },
    textColor: {
        type: String,
        default: 'rgb(92, 92, 119)'
    },
    textHighColor: {
        type: String,
        default: 'rgb(221, 46, 253)'
    },
})
</script>

<style lang="scss" scoped>
.number-style {
    font-size: 18px;
    font-weight: 600;
}
</style>