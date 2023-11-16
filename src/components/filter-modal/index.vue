<template>
    <view class="popup-content">
        <view class="popup-content-header">
            <view class="popup-content-close" @click="emit('close')">
                <uni-icons type="left" size="20"></uni-icons>
                关闭
            </view>
            <view class="popup-content-title">筛选条件</view>
        </view>
        <view class="popup-content-cell">
            <view class="popup-content-cell-content">
                <CustomCell title="配送方式" defaultValue="2" style="border-top-style: none;" :data="Enum.deliveryMethod">
                </CustomCell>
                <CustomCell title="运营商" defaultValue="1" :data="Enum.serviceProviderFilter"></CustomCell>
                <CustomCell title="号段" defaultValue="1" :data="Enum.sectionList"></CustomCell>
                <CustomCell title="靓号规则" defaultValue="1" :data="Enum.serviceProviderFilter"></CustomCell>
                <CustomCell title="价格" defaultValue="1" :data="Enum.priceList"
                    :option="{ label: 'ruleName', value: 'ruleCode' }"></CustomCell>
                <CustomCell title="月低消" defaultValue="1" :data="Enum.priceLowCostList"
                    :option="{ label: 'ruleName', value: 'ruleCode' }"></CustomCell>
                <CustomCell title="包含数字" defaultValue="1" :data="Enum.priceLowCostList"></CustomCell>
                <CustomCell title="吉祥数字" defaultValue="1" :data="Enum.luckyNumber"></CustomCell>
            </view>
        </view>
        <view class="popup-content-footer">
            <view class="popup-content-footer-wrapper">
                <view class="foot-btn foot-btn-clear">重置</view>
                <view class="foot-btn foot-btn-ok">确定</view>
            </view>
        </view>
    </view>
</template>
<script setup>
import { reactive, onMounted, defineProps, defineEmits } from 'vue';
import CustomCell from '../cell';
import * as Enum from '@/pages/index/enumParams'
const props = defineProps({
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


onMounted(() => {

})

</script>
<style lang="scss" scoped>
.popup-content {
    width: 630rpx;

    &-header {
        @include flex();
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 20rpx;
    }

    &-close {
        position: absolute;
        left: 0;
        @include flex();
        align-items: center;
        color: #666;
        font-size: 30rpx;
    }

    &-title {
        text-align: center;
        color: #666;
        font-size: 34rpx;
    }

    &-cell {
        height: calc(100vh - 220rpx);
        overflow-x: hidden;
        overflow-y: auto;
        padding-bottom: 160rpx;
        box-sizing: border-box;
        background-color: #f2f2f2;

        &-content {
            padding: 0 20rpx;
            background-color: #fff;
        }
    }

    &-footer {
        background-color: #f2f2f2;
        bottom: 0;
        left: 0;
        padding-bottom: env(safe-area-inset-bottom);
        position: absolute;
        right: 0;
        z-index: 2;
        border-top: 1px solid #e4393c;

        &-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #e4393c;
            border: 1px solid #e4393c;
            border-radius: 24px;
            margin: 30rpx 40rpx;
        }

        .foot-btn {
            display: block;
            font-size: 34rpx;
            height: 40px;
            line-height: 40px;
            text-align: center;
            width: 50%;
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
</style>
