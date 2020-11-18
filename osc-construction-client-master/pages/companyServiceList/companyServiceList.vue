<template>
	<view class="container">
		<view class="cu-bar" style="background-color: rgb(75, 162, 255);background:url(/static/topbanner.png) no-repeat; background-size: 100.2% auto;">
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
			  企业服务
			</view>
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-homefill text-white"></text>
			</view>
		</view>
		<view class="container-warpper">
			<view class="scroll-group">
				<view class="company-box">
					<view class="com-item"  @click="navTo('/pages/ctlelectrical/ctlelectrical')">
						<image src="/static/icon-com1.png" mode="aspectFit"></image>
						<view class="title">
							<view class="title-lx">水电气信报装</view>
							<view class="title-sm">登记申请快速申装</view>
						</view>
					</view>
					<view class="com-item" @click="navTo('/pages/ctlmediation/ctlmediation')">
						<image src="/static/icon-com2.png" mode="aspectFit"></image>
						<view class="title">
							<view class="title-lx">中介服务</view>
							<view class="title-sm">查看竞价或办结结果</view>
						</view>
					</view>
					<view class="com-item" @click="navTo('/pages/project/project1?id=5')">
						<image src="/static/icon-com3.png" mode="aspectFit"></image>
						<view class="title">
							<view class="title-lx">联合测绘</view>
							<view class="title-sm">测绘数据与互通</view>
						</view>
					</view>
					<view class="com-item" @click="navTo('/pages/project/project1?id=4')">
						<image src="/static/icon-com4.png" mode="aspectFit"></image>
						<view class="title">
							<view class="title-lx">印章申请</view>
							<view class="title-sm">电子印章在线申请</view>
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
