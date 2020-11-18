<template>
	<view class="container">
		<view class="cu-bar" style="background-color: rgb(75, 162, 255);background:url(/static/topbanner.png) no-repeat; background-size: 100.2% auto;">
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
			  水电气信
			</view>
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-homefill text-white"></text>
			</view>
		</view>
		<view class="container-warpper">
			<view class="scroll-group">
				<view class="company-box">
					<view class="com-item" @click="navTo('/pages/project/project1?id=6')">
						<image src="/static/water/water1.png" mode="aspectFit"></image>
						<view class="title">
							<view class="title-lx">联合报装</view>
							<view class="title-sm">联合申请水、气、通信、广电报装业务</view>
						</view>
					</view>
					<view class="com-item" @click="navTo('/pages/project/project1?id=7')">
						<image src="/static/water/water2.png" mode="aspectFit"></image>
						<view class="title">
							<view class="title-lx">供水报装</view>
							<view class="title-sm">申请供水报装业务</view>
						</view>
					</view>
					<view class="com-item" @click="navTo('/pages/project/project1?id=8')">
						<image src="/static/water/water3.png" mode="aspectFit"></image>
						<view class="title">
							<view class="title-lx">供电报装</view>
							<view class="title-sm">申请供电报装业务</view>
						</view>
					</view>
					<view class="com-item" @click="navTo('/pages/project/project1?id=9')">
						<image src="/static/water/water4.png" mode="aspectFit"></image>
						<view class="title">
							<view class="title-lx">供气报装</view>
							<view class="title-sm">申请供气报装业务</view>
						</view>
						
					</view>
					<view class="com-item" @click="navTo('/pages/project/project1?id=10')">
						<image src="/static/water/water5.png" mode="aspectFit"></image>
						<view class="title">
							<view class="title-lx">通信报装</view>
							<view class="title-sm">申请通信报装业务</view>
						</view>
						
					</view>
					<view class="com-item" @click="navTo('/pages/project/project1?id=11')">
						<image src="/static/water/water6.png" mode="aspectFit"></image>
						<view class="title">
							<view class="title-lx">广电报装</view>
							<view class="title-sm">申请广电报装业务</view>
						</view>
						
					</view>
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
			navTo(url) {
				uni.navigateTo({
					url:url
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
		position: relative;
		.scroll-group {
			padding: 0rpx 0rpx 0rpx;
			.company-box {
				// display: flex;
				// flex-wrap:wrap;
				// justify-content:flex-start;
				// align-content: flex-start;
				padding: 0rpx 20rpx;
				.com-item{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					width: 100%;
					background: #FAFAFA;
					border-radius: 16rpx;
					margin: 0rpx 6rpx 30rpx 6rpx;
					padding: 26rpx 45rpx;
					box-shadow:0upx 6upx 8upx 0px rgba(0, 0, 0, 0.06);
					.title-lx {
						font-size: 36rpx;
						color: #000000;
					}
					.title-sm {
						font-size: 22rpx;
						color: #ADADAD;
						margin-top: 19rpx;
					}
					image {
						width: 100rpx;
						height: 100rpx;
						margin-right: 50rpx;
					}
				}
			}
		}
	}
</style>
