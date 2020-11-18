<template>
	<view class="container">
		<view class="cu-bar" style="background-color: rgb(75, 162, 255);background:url(/static/topbanner.png) no-repeat; background-size: 100.2% auto;">
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
			  统一表单
			</view>
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-homefill text-white"></text>
			</view>
		</view>
		<view class="unifiedBanner">
			<image src="../../static/unifiedForm/unifiedFormBanner.png"></image>
		</view>
		<view class="pageDetail">
			基于<text>“在企业办事过程中，表单填写多份，相同信息重复提 交多次”</text>这一现状，针对工程建设项目事项涉及的60多张申请表单进行统一电子结构化梳理，实行线下表单电子化。
		</view>
		<view class="yellowList">
			<view class="yellow-item">
				<image src="../../static/unifiedForm/yellowNumOne.png"></image>
				<text>对不同事项的申请表单的400多个公共字段进行归集</text>
			</view>
			<view class="yellow-item">
				<image src="../../static/unifiedForm/yellowNumTwo.png"></image>
				<text>表单内填写内容相同的字段进行标准规范化梳理</text>
			</view>
			<view class="yellow-item">
				<image src="../../static/unifiedForm/yellowNumThree.png"></image>
				<text>基础的字段已能够实现数据共享及复用</text>
			</view>
		</view>
		<view class="pageDetail pageDetailTwo">
			      同时，前期我们已基于不同工程阶段内的事项以及业务表单， 形成了四个阶段性的大表单。   
		</view>
		<view class="blueList">
			<view class="blue-item">
				<image src="../../static/unifiedForm/blueNumOne.png"></image>
				<text>从业务的角度出发，秉着让用户“少提交数据“多跑路”的原则，将几张表单中的业务字段进行同向融合、纵向分类。 </text>
			</view>
			<view class="blue-item">
				<image src="../../static/unifiedForm/blueNumTwo.png"></image>
				<text>最终形成每个阶段的一张大表单。从而避免多 张表错综复杂的情况出现。  </text>
			</view>
			<view class="blue-item">
				<image src="../../static/unifiedForm/blueNumThree.png"></image>
				<text>从而实现深层次的业务融合，推动工程建设项 目业务流程革命性优化再造。 </text>
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
	.pageDetail{
		background: #EFF0FD;
		border-radius: 16rpx;
		padding:17rpx 42rpx 22rpx 37rpx;
		box-sizing: border-box;
		margin:30rpx 50rpx;
		font-size: 20rpx;
		color: #000000;
		line-height: 36rpx;
		text-align: justify;
		font-weight: bold;
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
		.blue-item:nth-of-type(2),.blue-item:nth-of-type(3){
			margin-top:30rpx;
		}
	}
</style>
