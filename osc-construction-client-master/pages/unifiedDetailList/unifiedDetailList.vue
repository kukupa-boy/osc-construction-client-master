<template>
	<view class="container">
		<view class="cu-bar" style="background-color: rgb(75, 162, 255);background:url(/static/topbanner.png) no-repeat; background-size: 100.2% auto;">
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
			  统一清单
			</view>
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-homefill text-white"></text>
			</view>
		</view>
		<view class="unifiedBanner">
			<image src="../../static/unifiedForm/unifiedDetailList.png"></image>
		</view>
		<view class="yellowDetail">
			即四川省工程建设项目审批管理系统运行事项清单，包括：
		</view>
		<view class="yellowList">
			<view class="yellow-item">
				<image src="../../static/unifiedForm/yellowNumOne.png"></image>
				<text>审批事项标准目录清单</text>
			</view>
			<view class="yellow-item">
				<image src="../../static/unifiedForm/yellowNumTwo.png"></image>
				<text>中介服务事项标准目录清单</text>
			</view>
			<view class="yellow-item">
				<image src="../../static/unifiedForm/yellowNumThree.png"></image>
				<text>公共服务事项标准目录清单</text>
			</view>
		</view>
		<view class="pageDetail pageDetailTwo">
			    四川省纳入工程建设项目审批系统办理的事项清单（79个大项）、中介服务(45项）、市政公用（8项）   
		</view>
		<view class="blueDetail">
			事项清单新增、取消合并原因：
		</view>
		<view class="blueList">
			<view class="blue-item first-item">
				<image src="../../static/unifiedForm/blueNumOne.png"></image>
				<text>省委编办行权动态调整拟取消该项 </text>
			</view>
			<view class="blue-item">
				<image src="../../static/unifiedForm/blueNumTwo.png"></image>
				<text>我省已实行电子招标、有的事项，电子招标中即可办理，无需纳入审批管理系统 </text>
			</view>
			<view class="blue-item">
				<image src="../../static/unifiedForm/blueNumThree.png"></image>
				<text>因事项出现重复</text>
			</view>
			<view class="blue-item">
				<image src="../../static/unifiedForm/blueNumFour.png"></image>
				<text>分类错误</text>
			</view>
			<view class="blue-item">
				<image src="../../static/unifiedForm/blueNumfive.png"></image>
				<text>因政策调整，不符合目前的政策</text>
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
			}
		}
	}
</script>

<style scoped lang="scss">
	page{
		background-color: white;
	}
	.unifiedBanner{
		padding-top:157rpx;
		image{
			width:100%;
			height:351rpx;
		}
	}
	.yellowDetail,.blueDetail{
		margin: 40rpx 63rpx;
		font-size: 24rpx;
		font-weight: bold;
		color: #000000;
	}
	.pageDetail{
		background: #EFF0FD;
		border-radius: 16rpx;
		padding:17rpx 42rpx 22rpx 37rpx;
		box-sizing: border-box;
		margin:30rpx 50rpx;
		font-size: 20rpx;
		color: #000000;
		font-weight: 400;
		line-height: 36rpx;
		text-align: justify;
		text-indent: 40rpx;
		text{
			color:#f3ad5b;
		}
	}
	.yellowList{
		.yellow-item{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding-left:70rpx;
			padding-right: 50rpx;
			box-sizing: border-box;
			text{
				font-size: 24rpx;
				color: #000000;
				line-height: 30rpx;
				margin-left: 20rpx;
			}
			image{
				width:40rpx;
				height:40rpx;
			}
		}
		.yellow-item:nth-of-type(2),.yellow-item:nth-of-type(3){
			margin-top:30rpx;
		}
	}
	.pageDetailTwo{
		margin-top:63rpx;
		
	}
	.blueList{
		margin-bottom: 40rpx;
		.blue-item{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin-left:70rpx;
			margin-right: 50rpx;
			text{
				font-size: 24rpx;
				color: #000000;
				line-height: 36rpx;
				margin-left: 20rpx;
				text-align: justify;
				display: inline-block;
				width:529rpx;
			}
			image{
				width:49rpx;
				height:40rpx;
			}
		}
		.blue-item:not(.first-item){
			margin-top:30rpx;
		}
	}
</style>

