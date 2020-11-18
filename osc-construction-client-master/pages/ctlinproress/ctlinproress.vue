<template>
	<view class="container">
		<view class="cu-bar" style="background-color: rgb(75, 162, 255);background:url(/static/topbanner.png) no-repeat; background-size: 100.2% auto;">
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
			   项目查找
			</view>
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-homefill text-white"></text>
			</view>
		</view>
		<view class="container-warpper">
			<view class="position-search">
				<view class="search-box">
					<text class="cuIcon cuIcon-search"></text><input type="text" class="search-input" placeholder="请输入公司名称" />
				</view>
			</view>
			<view class="company-box" @click="toProjectList" v-for="(item,index) in 10" :key="index">
				<view class="title">第二幼儿园建设项目</view>
				<view class="middle">
					<view class="num">
						<image src="/static/ctlinprogress/icon-2.png"></image>
						<view class="detail">
							<view class="name">项目投资总金额（万元）</view>
							<view class="detailNum">12100.0000</view>
						</view>
					</view>
					<view class="count">
						<image src="/static/ctlinprogress/icon-1.png"></image>
						<view class="detail">
							<view class="name">项目进度</view>
							<view class="detailNum">已办结</view>
						</view>
					</view>
				</view>
				<view class="footview">
					<view>未办工程0个</view>
					<view class="spaceline"><view></view></view>
					<view>在办工程0个</view>
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
			toProjectList(){
				uni.navigateTo({
					url:"/pages/projectList/projectList"
				})
			},
			navBack() {
				uni.navigateBack({
					delta:2
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #FFFFFF;
	}
	.container{
		
		padding-bottom: 30rpx;
	}
	.container-warpper {
		padding: 180rpx 30rpx 0rpx;
		width:100%;
		height: 100%;
		position: relative;
		background: #FFFFFF;
		.position-search {
			display: flex;
			justify-content: space-around;
			align-items: center;
			.position-box {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				image {
					width: 37rpx;
					height: 44rpx;
					margin-right: 16rpx;
				}
			}
			.search-box {
				width: 100%;
				height: 66.7rpx;
				background: #F5F6F8;
				border-radius: 34rpx;
				padding: 0rpx 30rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				.cuIcon {
					margin-right: 10rpx;
					color: #B6B0B0;
					font-size: 32rpx;
				}
				.search-input {
					font-size: 32rpx;
				}
			}
		}
		.company-box {
			width: 100%;
			padding: 30rpx 30rpx 35rpx;
			box-shadow: 0rpx 10rpx 29rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 16rpx;
			margin-top: 19rpx;
			background: #FFFFFF;
			.title {
				font-size: 34rpx;
				font-weight: bold;
				color:#343434;
			}
			.middle{
				display:flex ;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				margin-top:38rpx;
				.num{
					flex:1.1
				}
				.count{
					flex:0.9;
				}
				.num, .count{
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
					image{
						width:57rpx;
						height:57rpx;
					}
					.detail{
						padding-left:19rpx;
						color:#343434;
						.name{
							font-size: 24rpx;
							color:#4A4A4A;
						}
						.detailNum{
							padding-top: 12rpx;
							box-sizing: border-box;
							font-size: 28rpx;
							font-weight: bold;
						}
					}
				}
			}
			.footview{
				display:flex;
				justify-content: space-between;
				align-items: center;
				flex-direction: row;
				margin:0 auto;
				margin-top:63rpx;
				margin-left:112rpx;
				margin-right:113rpx;
				view{
					font-size:26rpx;
				}
				.spaceline{
					view{
						width: 1rpx;
						height: 34rpx;
						background: #666666;
					}
				}
			}
		}
	}
</style>
