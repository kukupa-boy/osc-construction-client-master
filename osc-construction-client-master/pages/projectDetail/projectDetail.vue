<template>
	<view class="container">
		<view class="cu-bar" style="background-color: rgb(75, 162, 255);background:url(/static/topbanner.png) no-repeat; background-size: 100.2% auto;">
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
			  项目详情
			</view>
			<view class="action" @click="navHome">
			  <text class="cuIcon cuIcon-homefill text-white"></text>
			</view>
		</view>
		<view class="container-warpper">
			<view class="projectInfo">
				<view class="title">
					<view></view>
					<text>项目信息</text>
				</view>
				<view class="listItem">
					<text>项目编码：</text>
					<text>2020-51021-01-01-25763</text>
				</view>
				<view class="listItem">
					<text>项目类型：</text>
					<text>一般政府项目</text>
				</view>
				<view class="listItem">
					<text>项目投资总额：</text>
					<text>1070.0000（万元）</text>
				</view>
				<view class="listItem">
					<text>项目开始时间：</text>
					<text>2020-09-10</text>
				</view>
				<view class="listItem">
					<text>项目结束时间：</text>
					<text>2020-09-10</text>
				</view>
			</view>
			<view class="projectInfo">
				<view class="title">
					<view></view>
					<text>单位信息</text>
				</view>
				<view class="listItem">
					<text>单位名称：</text>
					<text>鑫腾网络科技有限公司</text>
				</view>
				<view class="listItem">
					<text>单位统一社会信用代码：</text>
					<text>91510110AL</text>
				</view>
				<view class="listItem">
					<text>项法人代表名称：</text>
					<text>91510110AL</text>
				</view>
				<view class="listItem">
					<text>项目主要负责人：</text>
					<text>李志明</text>
				</view>
				<view class="listItem">
					<text>负责人联系方式：</text>
					<text>15520595959</text>
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
			navHome() {
				uni.reLaunch({
					url:'/pages/index/index4'
				})
			},
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
		background: #FFFFFF;
	}
	.container-warpper{
		padding: 180rpx 30rpx 0rpx;
		width:100%;
		height: 100%;
		position: relative;
		background: #FFFFFF;
		.projectInfo{
			margin-top: 30rpx;
			padding:30rpx;
			background: #FFFFFF;
			box-shadow: 1rpx 10rpx 29rpx 2rpx rgba(0, 0, 0, 0.16);
			border-radius: 24rpx;
			.title{
				display: flex;
				align-items: center;
				padding-bottom: 30rpx;
				border-bottom: 1rpx solid #F2F2F2;
				text{
					font-size: 32rpx;
					font-weight: bold;
					color: #000000;
				}
				view{
					width: 8rpx;
					height: 24rpx;
					background: #3090E0;
					border-radius: 4px;
					margin-right: 18rpx;
				}
			}
			.listItem{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-bottom: 30rpx;
				padding-top: 30rpx;
				border-bottom: 1rpx solid #F2F2F2;
				text:nth-of-type(1){
					color: #AEAEAE;
				}
				text:nth-of-type(2){
					color: #000000;
				}
				text{
					font-size: 27rpx;
					font-weight: 500;
				}
			}
		}
		.projectInfo:nth-of-type(2){
			margin-top: 30rpx;
			margin-bottom: 30rpx;
		}
	}

</style>
