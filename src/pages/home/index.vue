<template>
    <view class="home">
        <view class="home-header">
            <img :src="staticState.headerImg" alt="">
        </view>
        <view class="home-search">
            <view class="home-search-top">
                <view class="home-search-title">地区</view>
                <view class="home-search-content">
                    <view class="home-search-content-static">默认</view>
                    <view class="home-search-content-item">南京市</view>
                    <view class="home-search-content-item">无锡市</view>
                    <view class="home-search-content-item">无锡市</view>
                    <view class="home-search-content-item">无锡市</view>
                    <view class="home-search-content-item">无锡市</view>
                    <view class="home-search-content-item">无锡市</view>
                    <view class="home-search-content-item">无锡市</view>
                    <view class="home-search-content-item">无锡市</view>
                    <view class="home-search-content-item">无锡市</view>
                    <view class="home-search-content-item">无锡市</view>
                </view>
            </view>
            <view class="home-search-bottom">
                <view class="home-search-title">热搜</view>
                <view class="home-search-content">
                    <view class="home-search-content-item">豹子号</view>
                    <view class="home-search-content-item">姐妹号</view>
                    <view class="home-search-content-item">情侣号</view>
                    <view class="home-search-content-item">无锡市</view>
                    <view class="home-search-content-item">无锡市</view>
                    <view class="home-search-content-item">无锡市</view>
                    <view class="home-search-content-item">无锡市</view>
                    <view class="home-search-content-item">无锡市</view>
                    <view class="home-search-content-item">无锡市</view>
                    <view class="home-search-content-item">不含四
                        <radio style="transform:scale(0.7)" value="cb" checked="true" />
                    </view>
                    <view class="home-search-content-item">全部</view>
                </view>
            </view>
            <view class="home-search-input">
                <input placeholder="请输入您喜欢的数字" />
                <checkbox>尾号</checkbox>
                <view>搜索</view>
            </view>
        </view>
        <view class="home-list">
            <view class="home-list-item">
                <view class="home-list-item-top">
                    <text class="home-list-item-top-phone">1853930930390</text>
                    <text class="home-list-item-top-area">苏州</text>
                </view>
                <view class="home-list-item-bottom">
                    <text class="home-list-item-top-price">￥0</text>
                    <text class="home-list-item-top-info">七星高照</text>
                </view>
            </view>
            <view class="home-list-item">
                <view class="home-list-item-top">
                    <text class="home-list-item-top-phone">1853930930390</text>
                    <text class="home-list-item-top-area">苏州</text>
                </view>
                <view class="home-list-item-bottom">
                    <text class="home-list-item-top-price">￥0</text>
                    <text class="home-list-item-top-info">七星高照</text>
                </view>
            </view>
        </view>
        <view class="home-pagination">
            <view>上一页</view>
            <view>下一页</view>
        </view>
        <view class="home-footer">
            <img :src="staticState.footerImg1" alt="">
            <img :src="staticState.footerImg2" alt="">
        </view>
    </view>
</template>

<script setup>
import { reactive } from 'vue';
const staticState = reactive({
    headerImg: new URL('@/static/image/headerImg.jpg', import.meta.url).href,
    footerImg1: new URL('@/static/image/footerImg1.jpg', import.meta.url).href,
    footerImg2: new URL('@/static/image/footerImg2.jpg', import.meta.url).href,
})
</script>

<style lang="scss">
page {
    width: 100%;
}

@import "./index.scss"
</style>
