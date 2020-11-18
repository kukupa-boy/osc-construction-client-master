<template>
	<view class="container">
		<view class="cu-bar" style="background-color: rgb(75, 162, 255);background:url(/static/topbanner.png) no-repeat; background-size: 100.2% auto;">
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
			  办事预约
			</view>
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-homefill text-white"></text>
			</view>
		</view>
		<view class="container-warpper">
			正在建设中...
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			navBack() {
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #FFFFFF;
	}
	.container-warpper {
		padding: 200rpx 30rpx 0rpx;
		width:100%;
		height: 100%;
		text-align: center;
	}
</style>
