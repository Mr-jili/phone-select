<template>
    <view class="search-btns">
        <view class="search-btns-content">
            <view class="search-btns-content-item" @click="handleClickArea"
                style="display: flex;align-items: center;color:#00006b;background-color: #ffefce;">江苏
                <uni-icons type="bottom" size="16"></uni-icons>
            </view>
            <view class="search-btns-content-item"
                :style="{ background: !item.active ? 'hsla(0, 0%, 100%, 0.2)' : '#ffffff', color: !item.active ? '#fff' : '#000' }"
                v-for="(item, index) in props.list" :key="props.key || item.id" @click="handleClickItem(index)">
                {{ item.name }}
            </view>
        </view>
    </view>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';

const props = defineProps({
    list: {
        require: true,
        type: Array,
        default: () => []
    },
    key: {
        type: String,
        default: ''
    },
    defaultId: {
        type: String,
        default: ''
    }
})


const handleClickItem = (index) => {

} 
</script>

<style lang="scss">

</style>
