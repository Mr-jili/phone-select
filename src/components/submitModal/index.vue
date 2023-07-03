<template>
    <view class="submit-modal">
        <view class="submit-modal-title">不得不说，您选择的{{ props?.params?.phone }}真的是太棒了！</view>
        <view class="form">
            <view class="form-item">
                <view>收货地址：</view>
                <uni-easyinput type="text" placeholder="请选择省/市/区"></uni-easyinput>
                <uni-icons type="right" size="20"></uni-icons>
            </view>
            <view class="form-item">
                <textarea type="text" placeholder="亲，什么小区几幢几零几？送货上门哦~" />
                <uni-icons type="help" size="20"></uni-icons>
            </view>
            <view class="form-item">
                <view>联系方式：</view>
                <uni-easyinput type="phone" placeholder="留下联系方式，收藏进我心里"></uni-easyinput>
            </view>
            <view class="form-item">
                <view>姓名：</view>
                <uni-easyinput type="phone" placeholder="留下联系方式，收藏进我心里"></uni-easyinput>
            </view>
            <view class="form-item">
                <view>身份证：</view>
                <uni-easyinput type="phone" placeholder="放心吧，加密了很安全"></uni-easyinput>
            </view>
        </view>
        <view class="submit-modal-footer">
            <button>立即领取 包邮到家</button>
            <radio check="true">
                阅读并同意
                <text @click="handleClick(1)">《入网服务及业务协议》</text>
                <text @click="handleClick(2)">《个人信息授权及保护声明》</text>
                <text @click="handleClick(3)">《联通客户移动业务靓号入网补充协议》</text>
            </radio>
        </view>

        <uni-popup ref="popupRichText" type="bottom">
            <view class="rich-text">
                <rich-text :nodes="richText.nodes"></rich-text>
            </view>
        </uni-popup>
    </view>
</template>
<script setup>
import { reactive, ref, onMounted, defineProps, watch } from 'vue';
import richText1 from '@/static/js/richText1'
import richText2 from '@/static/js/richText2'
import richText3 from '@/static/js/richText3'


const props = defineProps({
    params: {
        type: Object,
        default: () => { }
    }
})

const popupRichText = ref()

const richText = reactive({
    nodes: [],
    richText1: richText1,
    richText2: richText2,
    richText3: richText3,
})

const handleClick = (index) => {
    popupRichText.value.open()
    richText.nodes = richText['richText' + index]
}
</script>
<style lang="scss" scoped>
.submit-modal {
    height: 800px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #fff;
}

.rich-text {
    background-color: #fff;
    max-height: 600px;
    padding: 10px;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>