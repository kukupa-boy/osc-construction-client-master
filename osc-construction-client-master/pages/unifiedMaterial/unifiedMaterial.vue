<template>
	<view class="container">
		<view class="cu-bar" style="background-color: rgb(75, 162, 255);background:url(/static/topbanner.png) no-repeat; background-size: 100.2% auto;">
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
			  统一材料
			</view>
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-homefill text-white"></text>
			</view>
		</view>
		<view class="unifiedBanner">
			<image src="../../static/unifiedForm/unifiedMaterial.png"></image>
		</view>
		<view class="detail">
			<view class="detailOne">
				<image src="../../static/unifiedForm/unifiedMaterial-one.png"></image>
				<view class="dilog">
					<view class="dilogicon"></view>
					<text>着眼于企业办事需求,针对不同的项目、工程类型和阶段，梳理形成了统一的材料清单,全省共649份材料</text>
				</view>
			</view>
			<view class="detailTwo">
				<view class="dilog">
					<view class="dilogicon"></view>
					<text>这样可以一次性告知办件人需要提交哪些材料，同时提交过的材料自动入库,系统将在以后智能匹配, 避免反复提交</text>
				</view>
				<image src="../../static/unifiedForm/unifiedMaterial-two.png"></image>
			</view>
		</view>
		<view class="yellowList">
			<view class="yellow-item">
				<image src="../../static/unifiedForm/yellowNumOne.png"></image>
				<text> 依托于统一材料库进行材料共享，尽量使申请人同一份材料只需要提交一次，避免重复提交</text>
			</view>
			<view class="yellow-item">
				<image src="../../static/unifiedForm/yellowNumTwo.png"></image>
				<text>一次性告知企业申报需要提交的材料清单，依托于容缺机制及承诺机制减轻申请人的申报时间</text>
			</view>
			<view class="yellow-item">
				<image src="../../static/unifiedForm/yellowNumThree.png"></image>
				<text> 通过材料标准化，梳理材料的样表和空表，让申请人一目了然 </text>
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
	@mixin dilogicon($top,$left,$bottom,$right){
		width:40rpx;
		height:36rpx;
		border-width:20rpx;
		border-style:dashed;
		border-color:$top $left $bottom $right;
	}
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
	.detail{
		padding:50rpx;
		.detailOne,.detailTwo{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.dilog{
				width: 365rpx;
				background: #EFF0FD;
				border-radius: 16rpx;
				padding:30rpx 50rpx 34rpx 43rpx;
				text{
					font-size: 22rpx;
					color: #000000;
					line-height: 40rpx;
				}
				position: relative;
				text-align: justify;
			}
		}
		.detailOne{
			image{
				width:95rpx;
				height:200rpx;
				margin-left:90rpx;
			}
			.dilog{
				.dilogicon{
					position: absolute;
					left:-40rpx;
					top:50%;
					margin-top:-20rpx;
					@include dilogicon(transparent,#EFF0FD,transparent,transparent);
				}
			}
		}
		.detailTwo{
			margin-top:40rpx;
			image{
				width:221rpx;
				height:141rpx;
			}
			.dilog{
				.dilogicon{
					position: absolute;
					right:-40rpx;
					top:50%;
					margin-top:-20rpx;
					@include dilogicon(transparent,transparent,transparent,#EFF0FD);
				}
			}
		}
	}
	.yellowList{
		padding:40rpx 68rpx 78rpx 50rpx;
		margin: 50rpx;
		background: #EFF0FD;
		border-radius: 24rpx;
		.yellow-item{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			text{
				font-size: 22rpx;
				color: #000000;
				line-height: 36rpx;
				margin-left: 30rpx;
				width:460rpx;
				display: inline-block;
				text-align: justify;
			}
			image{
				width:40rpx;
				height:40rpx;
			}
		}
		.yellow-item:nth-of-type(2),.yellow-item:nth-of-type(3){
			margin-top:40rpx;
		}
	}
</style>
