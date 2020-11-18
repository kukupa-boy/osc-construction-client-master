<template>
	<view class="container">
		<view class="cu-bar" style="background-color: #ffffff;border-bottom:1rpx solid #f8f8f8">
			<view class="action">
			</view>
			<view class="content text-bold">
			  消息
			</view>
		</view>
		<view class="newsTop">
			<view class="newTop-left">
				<image src="../../static/news/news.png"></image>
				<view class="news-nav">
					<view class="news-nav-title">系统消息</view>
					<view class="news-nav-content">
						<text>服务提醒</text>
						<text>|</text>
						<text>资讯阅读</text>
					</view>
				</view>
			</view>
			<view class="newTime">
				10:52
			</view>
		</view>
		<view class="newsContent">
			<view class="newsItem" v-for="(item,index) in newsContent" :key="index">
					<view class="newTop-left">
						<image :src="item.avaterUrl"></image>
						<view class="news-nav">
							<view class="news-nav-title">{{item.name}}</view>
							<view class="news-nav-content">
								{{item.content}}
							</view>
						</view>
					</view>
					<view class="newTime">
						10:52
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsContent:[
					{
						avaterUrl:"../../static/news/avater1.png",
						name:"李志明",
						content:"谢谢刘总"
					},
					{
						avaterUrl:"../../static/news/avater2.png",
						name:"刘坦君",
						content:"嗯，明天联系。"
					},
					{
						avaterUrl:"../../static/news/avater3.png",
						name:"张宇",
						content:"我已经到现场了哈。"
					},
					{
						avaterUrl:"../../static/news/avater4.png",
						name:"李星宇",
						content:"嗯，谢谢啦！"
					},
					{
						avaterUrl:"../../static/news/avater5.png",
						name:"王强",
						content:"来讨论下个项目吧。"
					},
					{
						avaterUrl:"../../static/news/avater6.png",
						name:"李一",
						content:"明天下午方便见面谈谈吗？"
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.container{
		border: 1rpx solid transparent;
		.content{
			font-size: 34rpx;
			font-weight: bold;
			color: #010101;
		}
		.action{
			image{
				height:37rpx;
				width:36rpx;
			}
		}
		.newsContent{
			margin-top: 14rpx;
		}
		.newsTop{
			margin-top: 170rpx;
		}
		.newsTop,.newsItem{
			padding: 30rpx;
			display: flex;
			justify-content: space-between;
			background: #FFFFFF;
			display: flex;
			justify-content: space-between;
			.newTime{
				font-size: 22rpx;
				// font-weight: 400;
				color: #999999;
			}
			.newTop-left{
				display: flex;
				justify-content: space-between;
				align-items: center;
				image{
					width:90rpx;
					height:90rpx;
				}
				.news-nav{
					margin-left:30rpx;
					.news-nav-title{
						font-size: 30rpx;
						// font-weight: 500;
						color: #4A4A4A;
					}
					.news-nav-content{
						margin-top:20rpx;
						font-size: 24rpx;
						font-weight: 500;
						color: #999999;
					}
				}
			}
		}
	}
</style>
