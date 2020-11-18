<template>
	<view class="container">
		<view class="cu-bar" style="background-color: #ffffff;">
			<view class="action">
			</view>
			<view class="content text-bold">
			   
			</view>
			<view class="action">
			  <image src="../../static/center/my-setting.png"></image>
			</view>
		</view>
		<view class="userNews">
			<view class="userAvater">
				<image src="../../static/center/my_avater.png"></image>
			</view>
			<view class="my_info">
				<view class="my_info_top">
					用户D1234
				</view>
				<view class="my_info_bottom">
					<view>
						<text>去实名</text> 
						<image src="../../static/center/my_right_arrow.png"></image>
					</view>
				</view>
			</view>
			<view class="right_bg">
				<image src="../../static/center/my_news_bg.png"></image>
			</view>
		</view>
		<view class="newsFunc">
			<view class="newsFuncItem" v-for="(item,index) in newsFuncItem" :key="index">
				<view>
					<image :src="item.url"></image>
				</view>
				<view>
					<text>{{item.title}}</text>
				</view>
			</view>
		</view>
		<view class="my_item1">
			<view class="my_item1_detail" v-for="(item,index) in my_item1_detail" :key="index" @click="navTo(item.url)">
				<view class="title">{{item.name}}</view>
				<text class="cuIcon cuIcon-right text-gray arrow"></text>
			</view>
		</view>
		<view class="my_item2">
			<view class="my_item2_detail" v-for="(item,index) in my_item2_detail" :key="index">
				<view class="title">{{item}}</view>
				<text class="cuIcon cuIcon-right text-gray arrow"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsFuncItem:[
					{
						url:'../../static/center/my_item1.png',
						title:'项目申报'
					},
					{
						url:'../../static/center/my_item2.png',
						title:'我的代办'
					},
					{
						url:'../../static/center/my_item3.png',
						title:'项目管理'
					},
					{
						url:'../../static/center/my_item4.png',
						title:'企业绑定'
					},
					{
						url:'../../static/center/my_item5.png',
						title:'审批管理'
					}
				],
				my_item1_detail:[
					{
						name: '扫一扫'
					},
					{
						name: '去好评'
					},
					{
						name: '意见反馈',
						url: '/pages/feedback/feedback'
					}
				],
				my_item2_detail:[
					"推荐工程建设专题","国家、省级平台推荐"
				]
			}
		},
		methods: {
			navTo(url) {
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style lang="scss" scope>
.container{
	border:1rpx solid transparent;
	margin-top:-2rpx;
	.cu-bar{
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
	}
	.userNews{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 156rpx;
		background-color:#FFFFFF ;
		.userAvater{
			padding-left: 30rpx;
			image{
				width:130rpx;
				height:130rpx;
				border-radius:50%;
			}
		}
		.my_info{
			.my_info_top{
				font-size: 32rpx;
				font-weight: 800;
				color: #000000;
			}
			.my_info_bottom{
				margin-top: 9rpx;
				width: 127rpx;
				height: 40rpx;
				background: #00CF5E;
				border-radius: 20rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				text{
					font-size: 24rpx;
					// font-weight: 500;
					color: #FEFEFE;
					vertical-align: middle;
					line-height: 40rpx;
				}
				image{
					margin-left: 4rpx;
					width:28rpx;
					height:28rpx;
					line-height: 40rpx;
					vertical-align: middle ;
				}
			}
		}
		.right_bg{
			image{
				width: 342rpx;
				height:255rpx
			}
		}
	}
	.newsFunc{
		margin-top: -2rpx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-content: space-between;
		flex-wrap: wrap;
		padding-left: 60rpx;
		padding-right: 60rpx;
		padding-bottom: 30rpx;
		.newsFuncItem{
			width:20.5%;
			margin-top: 30rpx;
			view{
				text-align: center;
				image{
					width:80rpx;
					height:80rpx;
					border-radius: 100%;
				}
				text{
					margin-top: 19rpx ;
					font-size: 26rpx;
					// font-weight: 500;
					color: #000000;
				}
			}
			
		}
	}
	.my_item1,.my_item2{
		background-color: #FFFFFF;
		margin-top: 14rpx;
		margin-bottom: 14rpx;
		.my_item1_detail,.my_item2_detail{
			padding: 30rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1rpx solid #f8f8f8;
			.title{
				font-size: 32rpx;
				// font-weight: 500;
				color: #010101;
			}
		}
	}
}
</style>
