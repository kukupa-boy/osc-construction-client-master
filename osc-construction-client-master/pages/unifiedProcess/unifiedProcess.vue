<template>
	<view class="container">
		<view class="cu-bar" style="background-color: rgb(75, 162, 255);background:url(/static/topbanner.png) no-repeat; background-size: 100.2% auto;">
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
			  统一流程
			</view>
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-homefill text-white"></text>
			</view>
		</view>
		<view class="unifiedBanner">
			<image src="../../static/unifiedForm/unifiedProcess.png"></image>
		</view>
		<view class="pageDetail">
			      即按照不同<text>项目类型、投资类型</text>分类细化的项目审批流程。 根据<text>“技术审查或第三方行为”“行政审批主线” “行政审批辅线“</text>三个维度进行归类梳理，包括:
		</view>
		<view class="investCategory">
			<view class="gvInvest">
				<image src="../../static/unifiedForm/unifiedGvm.png"></image>
				<text>政府投资</text>
			</view>
			<view class="line"></view>
			<view class="socialInvest">
				<image src="../../static/unifiedForm/unifiedDep.png"></image>
				<text>政府投资</text>
			</view>
		</view>
		<view class="list-item">
			<view class="blueItem item">
				<view class="detailItem blueDetailItem" v-for="(item,index) in blueItemData" :key="index">
					<view class="circle"></view>
					<view class="content">
						{{ item }}
					</view>
				</view>
			</view>
			<view class="yellowItem item">
				<view class="yellowDetailItem detailItem" v-for="(item,index) in yellowItemData" :key="index">
					<view class="circle"></view>
					<view class="content">
						{{ item }}
					</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<view>
				以一般性社会投资的房屋建筑为例,过去跑动需要<text>202个工作日</text>,现在流程统一后,预计需要<text>83个工作日</text>
                。避免了办事群众在办理过程中出现各地市办理工程建设项目设计事项不统一，同一事项办理材料不一致、
				层级下放不清楚、办理流程又不尽相同的情况。工程建设项目全流程涉及事项繁多,时间跨度较长。
             </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				blueItemData:['一般政府投资项目','园区内工业、仓储及生产配套设施项目'],
				yellowItemData:['一般社会投资项目','中小型社会投资项目','带方案出让土地项目','园区内工业、仓储及生产配套设施项目']
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

<style lang="scss" scoped>
	page{
		background-color: #f8f8f8;
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
		padding:17rpx 17rpx 22rpx 24rpx;
		box-sizing: border-box;
		margin:30rpx 50rpx;
		font-size: 20rpx;
		color: #000000;
		line-height: 36rpx;
		font-weight: bold;
		text-align: justify;
		text-indent: 40rpx;
		text{
			color:#f3ad5b;
		}
	}
	.investCategory{
		display:flex;
		justify-content: center;
		margin-bottom:30rpx;
		.gvInvest,.socialInvest{
			line-height: 54rpx;
			image{
				width:50rpx;
				height:50rpx;
				vertical-align: middle;
				margin-left:42rpx;
			}
			text{
				font-size: 24rpx;
				font-weight: bold;
				color: #000000;
				vertical-align: middle;
				margin-left:22rpx;
				margin-right:41rpx;
			}
		}
		.line{
			height:54rpx;
			width:8rpx;
			background: #818181;
			border-radius: 4rpx;
		}
	}
	.list-item{
		display: flex;
		padding-right:50rpx;
		padding-left:50rpx;
		margin-bottom:30rpx;
		.yellowItem{
			margin-left:26rpx;
			.yellowDetailItem{
				.circle{
					background: #F3AE5C!important;
				}
			}
		}
		.item{
			border: 2rpx solid #BAD0FC;
			border-radius: 16rpx;
			padding:18rpx 44rpx 22rpx 30rpx;
			.detailItem{
				display: flex;
				margin-top: 25rpx;
				.circle{
					width: 15rpx;
					height: 15rpx;
					background: #3E3AEC;
					border-radius: 50%;
					display: inline-block;
					margin-top:7rpx;
				}
				.content{
					width: 202rpx;
					font-size: 20rpx;
					color: #000000;
					line-height: 30rpx;
					margin-left:21rpx;
				}
			}
			.detailItem:nth-of-type(1){
				margin-top:0rpx;
			}
		}
	}
	.footer{
		margin:30rpx 50rpx;
		background: #EFF0FD;
		border-radius: 16rpx;
		padding:20rpx 25rpx 20rpx 20rpx;
		view{
			font-size: 20rpx;
			font-weight: bold;
			color: #000000;
			line-height: 36rpx;
			text-align: justify;
			text-indent: 40rpx;
			text{
				color: #f3ad5b;
			}
		}
	}
</style>
