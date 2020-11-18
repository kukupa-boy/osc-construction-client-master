<template>
	<view class="container">
		<view class="cu-bar" style="background-color: rgb(75, 162, 255);background:url(/static/topbanner.png) no-repeat; background-size: 100.2% auto;">
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
			  最新政策
			</view>
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-homefill text-white"></text>
			</view>
		</view>
		<view class="article-group">
			<view class="article-item" @click="navTo('/pages/article/article?id=1')">
				<view class="title-box">
					<view class="title">深入学习贯彻习近平总书记对四川工作系列重要指示精神</view>
					<view class="timespan"><text class="red margin-right-sm">置顶</text>2020-09-09</view>
				</view>
				<image src="/static/images/news1.png"></image>
			</view>
			<view class="article-item" @click="navTo('/pages/article/article?id=2')">
				<view class="title-box">
					<view class="title">住房城乡建设厅举办公文写作技能专题讲座</view>
					<view class="timespan">2020-09-09</view>
				</view>
				<image src="/static/images/news2.png"></image>
			</view>
			<view class="article-item" @click="navTo('/pages/article/article?id=3')">
				<view class="title-box">
					<view class="title">住房城乡建设厅建筑企业资质审批突出问题系统治理领导...</view>
					<view class="timespan">2020-09-09</view>
				</view>
				<image src="/static/images/news3.png"></image>
			</view>
			<view class="article-item" @click="navTo('/pages/article/article?id=4')">
				<view class="title-box">
					<view class="title">2020住房城乡建设厅安委会召开第四次会议</view>
					<view class="timespan">2020-09-09</view>
				</view>
				<image src="/static/images/news4.png"></image>
			</view>
		</view>
		<uni-load-more :status="'noMore'"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
		data() {
			return {
				loadingType:"refresh"
			}
		},
		onload(){
			
		},
		components:{
			uniLoadMore
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
			},
			getData(){ // 重新刷新，下拉更多，没有更多，
				
			},
			onPullDownRefresh(){
				setTimeout(()=>{
					uni.stopPullDownRefresh({
						success:(res)=>{
							console.log(res)
							this.getData()
						}
					})
				},1000)
			},
			onReachBottom(){
				console.log("用户滚动到底部了")
			}
		}
	}
</script>

<style scoped lang='scss'>
page {
	background: #FFFFFF;
}
.article-group {
	padding: 180rpx 30rpx 0rpx;
	.article-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 32rpx 0rpx;
		border-bottom: 2rpx solid #E6E6E6;
		.title-box {
			width: 62%;
			.title {
				height: 80rpx;
				font-size: 32rpx;
				color:#4A4A4A;
				overflow: hidden;
				text-overflow: ellipsis;
				display:-webkit-box;
				-webkit-box-orient:vertical;
				-webkit-line-clamp:2;
			}
			.timespan {
				margin-top: 57rpx;
				color:#B6B2B2;
				font-size: 24rpx;
				.red{
					color:#E96467;
				}
			}
		}
		image {
			width: 226rpx;
			height: 173rpx;
			border-radius: 12rpx;
		}
	}
	.article-more {
		color:#27A7F2;
		padding: 30rpx 0rpx;
		text-align: center;
	}
}
</style>
