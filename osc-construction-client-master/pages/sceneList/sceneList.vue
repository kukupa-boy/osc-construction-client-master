<template>
	<view class="container">
		<view class="cu-bar" style="background-color: rgb(75, 162, 255);background:url(/static/topbanner.png) no-repeat; background-size: 100.2% auto;">
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
			  场景式
			</view>
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-homefill text-white"></text>
			</view>
		</view>
		<view class="bg-white imagenav">
			  <view class="cu-item first" @click="navTo('/pages/project/project?id=1')">
				<view class="item-box">
					<image src="/static/images/acjbl1.jpg"></image>
					<view class="title">新建商品房</view>
				</view>
			  </view>
			  <view class="cu-item" @click="navTo('/pages/project/project1?id=0')">
				<view class="item-box">
					<image src="/static/images/acjbl2.jpg"></image>
					<view class="title">新建污水处理厂</view>
				</view>
			  </view>
			  <view class="cu-item" @click="navTo('/pages/project/project1?id=1')">
					<view class="item-box">
						<image src="/static/images/acjbl3.jpg"></image>
						<view class="title">新建学校</view>
					</view>
			  </view>
			  <view class="cu-item">
					<view class="item-box">
						<image src="/static/images/acjbl4.jpg"></image>
						<view class="title">新建厂房</view>
					</view>
			  </view>
			  <view class="cu-item" @click="navTo('/pages/project/project1?id=2')">
					<view class="item-box">
						<image src="/static/images/acjbl5.jpg"></image>
						<view class="title">新建城市道路排水</view>
					</view>
			  </view>
			  <view class="cu-item" @click="navTo('/pages/project/project1?id=3')">
					<view class="item-box">
						<image src="/static/images/acjbl6.jpg"></image>
						<view class="title">电力报装外线工程</view>
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
