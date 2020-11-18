<template>
	<view class="container">
		<view class="cu-bar" style="background-color: rgb(75, 162, 255);background:url(/static/topbanner.png) no-repeat; background-size: 100.2% auto;">
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
			  服务专区
			</view>
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-homefill text-white"></text>
			</view>
		</view>
		<view class="bg-white imagenav">
			  <view class="cu-item first">
					<view class="item-box">
						<image src="/static/images/service1.jpg"></image>
						<view class="title">建筑工程企业资质</view>
					</view>
			  </view>
			  <view class="cu-item">
					<view class="item-box">
						<image src="/static/images/service2.jpg"></image>
						<view class="title">建筑工程项目信息</view>
					</view>
			  </view>
			  <view class="cu-item">
					<view class="item-box">
						<image src="/static/images/service3.jpg"></image>
						<view class="title">建筑人员资质</view>
					</view>
			  </view>
			  <view class="cu-item">
					<view class="item-box">
						<image src="/static/images/service4.jpg"></image>
						<view class="title">建筑工人欠薪追讨</view>
					</view>
			  </view>
			  <view class="cu-item">
					<view class="item-box">
						<image src="/static/images/service5.jpg"></image>
						<view class="title">建筑工人讨薪办理结果</view>
					</view>
			  </view>
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
			},
			navTo(url){
				uni.navigateTo({  
					url
				})
			}
		}
	}
</script>

<style scoped lang='scss'>
page {
	background: #FFFFFF;
}
.imagenav {
	padding-top: 160rpx;
	.cu-item {
		/* height: 300rpx; */
		padding:0rpx;
		margin: 30rpx;
		.first{
			margin-top: -20rpx;
		}
	}
	.item-box {
		margin-left: 25rpx;
		width: 45%;
		float: left;
		height: 270rpx;
		background: #FFFFFF;
		box-shadow: 0rpx -1rpx 13rpx 0rpx rgba(167, 165, 165, 0.18);
		border-radius: 16rpx;
		text-align: center;
		margin-top: 20rpx;
		image {
			width: 100%;
			height: 221rpx;
			border-radius: 16rpx 16rpx 0rpx 0rpx;
		}
		.title {
			line-height: 40rpx;
			color: #000000;
			font-size: 26rpx;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
}
</style>
