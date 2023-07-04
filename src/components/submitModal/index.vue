<template>
    <uni-popup ref="popupOpen" type="bottom">
        <view class="submit-modal">
            <uni-icons class="submit-modal-close" type="clear" size="24" color="#c8c9cc" @click="handleMore"></uni-icons>
            <view class="submit-modal-title">
                不得不说，您选择的
                <NumberStyle :list="showParams.numberArray" textHighColor="#ff7900"></NumberStyle>
                真的是太棒了！
            </view>
            <view class="form">
                <view class="form-title"> \\ 填写信息 包邮到家 \\</view>
                <view class="form-item">
                    <view class="form-item-label">收货地址：</view>
                    <uni-data-picker class="form-item-value" ref="cityPicker" :border="false" placeholder="请选择省/市/区"
                        :localdata="showParams.receivingAddressList" :map="{ text: 'name', value: 'id' }" popup-title="请选择"
                        @change="onchange">
                    </uni-data-picker>
                </view>
                <view class="form-item" style="position: relative;margin-top: -6px;">
                    <uni-easyinput type="textarea" placeholder="亲，什么小区几幢几零几？送货上门哦~"
                        @input="handleInput($event, 'address')"></uni-easyinput>
                    <uni-icons class="form-item-help" type="help" size="20" @click="handleHelpToast"></uni-icons>
                </view>
                <view class="form-item">
                    <view class="form-item-label">联系方式：</view>
                    <uni-easyinput class="form-item-value" :inputBorder="false" type="phone"
                        @input="handleInput($event, 'tel')" placeholder="留下联系方式，收藏进我心里"></uni-easyinput>
                </view>
                <view class="form-item">
                    <view class="form-item-label">姓名：</view>
                    <uni-easyinput class="form-item-value" :inputBorder="false" type="text"
                        @input="handleInput($event, 'name')" placeholder="留下联系方式，收藏进我心里"></uni-easyinput>
                </view>
                <view class="form-item" style="margin-bottom: 0;" v-if="queryParams.name">
                    <view class="form-item-label">身份证：</view>
                    <uni-easyinput class="form-item-value" :inputBorder="false" type="idcard"
                        @input="handleInput($event, 'idcardNo')" placeholder="放心吧，加密了很安全"></uni-easyinput>
                </view>
            </view>
            <view class="detail">
                <view class="detail-title"> \\ 套餐 \\</view>
                <view class="detail-content">
                    <view class="detail-content-item" style="width: 24%;">
                        <view class="detail-content-item-top">国内语音：</view>
                        <view class="detail-content-item-bottom">0.1元/分钟</view>
                    </view>
                    <view class="detail-content-plus">+</view>
                    <view class="detail-content-item" style="width: 33%;">
                        <view class="detail-content-item-top">国内流量：</view>
                        <view class="detail-content-item-bottom">20G全国通用流量+30G定向流量</view>
                    </view>
                    <view class="detail-content-plus">=</view>
                    <view class="detail-content-item" style=" width: 15%;">
                        <view class="detail-content-item-top">月费：</view>
                        <view class="detail-content-item-bottom">59元</view>
                    </view>
                    <view class="detail-recommend">
                        <view class="detail-recommend-left">
                            <img :src="chooseImg" alt="">
                            <text>推荐</text>
                        </view>
                        <view class="detail-recommend-right">59套餐</view>
                    </view>
                    <img class="detail-check" :src="checkNumberImg" alt="">
                </view>
                <view class="detail-more" @click="handleMore">更多低价号码>></view>
            </view>
            <view class="info">
                <view class="info-item">
                    <text class="info-item-title">资费</text>
                    <text class="info-item-content">
                        ：月租仅需59元，每月畅享20GB全国通用流量和30G腾讯系、头条系、阿里系、百度系、网易系定向流量，通话0.1元/分钟，全国无漫游，当月流量超出5元/GB月租宝，短信0.1元/条
                    </text>
                </view>
                <view class="info-item">
                    <text class="info-item-title">协议</text>
                    <text class="info-item-content">
                        ：要求在网时长
                        <text>120</text>
                        个月且月承诺通信费
                        <text>50</text>
                        元；
                        <text>120</text>
                        个月后取消月承诺通信费限制；
                    </text>
                </view>
            </view>
            <view class="submit-modal-footer">
                <view class="submit-modal-footer-btn" @click="handleSubmit">立即领取 包邮到家</view>
                <radio style="transform: scale(0.8);" :checked="showParams.isAgree" @click="handleAgree">阅读并同意</radio>
                <view class="submit-modal-footer-rich">
                    <text @click="handleClick(1)">《入网服务及业务协议》</text>
                    <text @click="handleClick(2)">《个人信息授权及保护声明》</text>
                    <text @click="handleClick(3)">《联通客户移动业务靓号入网补充协议》</text>
                </view>
            </view>
            <uni-popup ref="popupRichText" type="bottom">
                <view class="rich-text">
                    <rich-text :nodes="richText.nodes"></rich-text>
                </view>
            </uni-popup>
        </view>
    </uni-popup>
</template>
<script setup>
import { reactive, ref, onMounted, defineProps, defineExpose, watch } from 'vue';
import { setOrderAddApi } from '@/api'
import { chooseImg, checkNumberImg } from '@/static/js/base64.js'
import NumberStyle from '@/components/numberStyle';
import richText1 from '@/static/js/richText1'
import richText2 from '@/static/js/richText2'
import richText3 from '@/static/js/richText3'

const emitLoad = defineEmits()

const popupRichText = ref()
const popupOpen = ref()

const richText = reactive({
    nodes: [],
    richText1: richText1,
    richText2: richText2,
    richText3: richText3,
})

const showParams = reactive({
    numberArray: [],
    receivingAddressList: [],
    isAgree: false
})

const queryParams = reactive({
    cityId: '',
    name: '',
    tel: '',
    address: '',
    idcardNo: '',
    number: ''
})

// 立即领取
const handleSubmit = async () => {
    if (!showParams.isAgree) {
        uni.showToast({
            title: '您要先勾选阅读并同意相关协议哦',
            icon: 'none'
        })
        return
    }
    if (!queryParams.name) {
        uni.showToast({
            title: '请输入姓名',
            icon: 'none'
        })
        return
    }
    if (!queryParams.tel) {
        uni.showToast({
            title: '请输入手机号码',
            icon: 'none'
        })
        return
    }
    if (!queryParams.address) {
        uni.showToast({
            title: '请输入详细地址',
            icon: 'none'
        })
        return
    }
    if (!queryParams.cityId) {
        uni.showToast({
            title: '请选择省/市/区',
            icon: 'none'
        })
        return
    }
    await setOrderAddApi({ ...queryParams })
    uni.showToast({
        title: '领取成功',
        icon: 'none'
    })
    emitLoad('loadRefresh')
    popupOpen.value.close()
}

const open = (value) => {
    showParams.numberArray = value.numberArray
    showParams.receivingAddressList = value.receivingAddressList
    queryParams.cityId = value.cityId
    queryParams.number = value.number
    popupOpen.value.open()
}

const handleClick = (index) => {
    popupRichText.value.open()
    richText.nodes = richText['richText' + index]
}

const onchange = (event) => {
    queryParams.cityId = event.detail.value[2]?.value
}
const handleInput = (value, type) => {
    queryParams[type] = value
}

const handleAgree = () => {
    showParams.isAgree = !showParams.isAgree
}

const handleMore = () => {
    emitLoad('loadRefresh')
    popupOpen.value.close()
}

const handleHelpToast = () => {
    uni.showToast({
        title: '请输入详细地址',
        icon: 'none'
    })
}

defineExpose({
    open
})
</script>
<style lang="scss" scoped>
@import "./index.scss"
</style>