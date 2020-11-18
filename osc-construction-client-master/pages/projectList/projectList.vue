<template>
	<view class="container">
		<view class="cu-bar" style="background-color: rgb(75, 162, 255);background:url(/static/topbanner.png) no-repeat; background-size: 100.2% auto;">
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
			  项目列表
			</view>
			<view class="action" @click="navToHome">
			  <text class="cuIcon cuIcon-homefill text-white"></text>
			</view>
		</view>
		<view class="company-box">
			<view class="header">
				<view class="round1"></view>
				<view class="round2"></view>
				<view class="round3"></view>
				<view class="round4"></view>
				<view class="title">第二幼儿园建设项目</view>
			<!-- 	<view class="address"><image src="/static/ctlinprogress/icon-3.png"></image>公司地址</view>
				<view class="userDetail"><image src="/static/ctlinprogress/icon-4.png"></image>联系相关人员</view> -->
			</view>
		</view>
		<view class="projectTabbar">
				  <scroll-view scroll-x class="scroll-h" scroll-with-animation enable-flex='true'>
					  <view class="uni-scroll-view-content">
						  <block  v-for="(tab,index) in tabBars" :key="tab.id">
						  	<view class="uni-tab-item" :class="{'uni-tab-item-title-active' :tabIndex==index}" @tap="tabtap(index)">
						  		 <text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
						  		 <view class="middle">
						  			 <view :class="tabIndex==index ? 'line-active' : ''"></view>
						  		 </view>
						  	</view>
						  </block> 
					  </view>
						           
				    </scroll-view>
					<swiper :style="{ height:scrollHeight+'px'}" :indicator-dots="false" :autoplay="false" class="swiper" :current="tabIndex" ref="swiper" @change="changeScroll">
						<block v-for="(item,index) in scrollViewList" :key="index">
							<swiper-item>
								<scroll-view 
								scroll-y="true" 
								class="swiper-scroll"
								>
									<view class="projectItem"  v-for="(item1,index1) in item" :key="index1">
										<view class="detailInfo">
											<view class="title">{{item1.title}}</view>
											<view class="detail"><text>项目类型：</text>{{item1.type}}</view>
											<view class="detail"><text>所属区域：</text>{{item1.city}}</view>
											<view class="detail"><text>项目金额：</text>{{item1.projectAccount}}</view>
											<view class="line"></view>
										</view>
										<view>
											<button class="cu-btn button" @click="toProjectDetail">查看详情</button>
										</view>
									</view>
									<view v-if="item.length===0 || item==='undefined'" class="empty">
										<image src="../../static/emptyTure.png"></image>
										<text>没有数据</text>
									</view>
									<uni-load-more v-if="!item.length===0 || !item" :status="loadingType"></uni-load-more>
								</scroll-view>
							</swiper-item>
						</block>
					</swiper>
			</view>
			
	</view>	
</template>

<script>
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	var windowHeight = uni.getSystemInfoSync().windowHeight
	export default {
		data() {
			return {
				tabIndex:0,
				tabBars:[
					{ name:"未办工程(0)",id:"unToDoProject"},
					{ name:"办结工程(12)",id:"inProgressProject"},
				],
				scrollViewList: [
					[
						// {
						// 	title:"陶瓷安装",
						// 	type:"一般政府投资项目",
						// 	city:"成都市",
						// 	projectAccount:'120(万元)'
						// },
						// {
						// 	title:"油漆墙面粉刷",
						// 	type:"一般政府投资项目",
						// 	city:"成都市",
						// 	projectAccount:'120(万元)'
						// },
						// {
						// 	title:"陶瓷安装",
						// 	type:"一般政府投资项目",
						// 	city:"成都市",
						// 	projectAccount:'120(万元)'
						// },
						// {
						// title:"油漆墙面粉刷",
						// type:"一般政府投资项目",
						// city:"成都市",
						// projectAccount:'120(万元)'
						// },
						// {
						// 	title:"陶瓷安装",
						// 	type:"一般政府投资项目",
						// 	city:"成都市",
						// 	projectAccount:'120(万元)'
						// },
						// {
						// title:"油漆墙面粉刷",
						// type:"一般政府投资项目",
						// city:"成都市",
						// projectAccount:'120(万元)'
						// }
					],
					[
						{
							title:"陶瓷安装",
							type:"一般政府投资项目",
							city:"成都市",
							projectAccount:'120(万元)'
						},
						{
							title:"油漆墙面粉刷",
							type:"一般政府投资项目",
							city:"成都市",
							projectAccount:'120(万元)'
						},
						{
							title:"陶瓷安装",
							type:"一般政府投资项目",
							city:"成都市",
							projectAccount:'120(万元)'
						},
						{
						title:"油漆墙面粉刷",
						type:"一般政府投资项目",
						city:"成都市",
						projectAccount:'120(万元)'
						},
						{
							title:"陶瓷安装",
							type:"一般政府投资项目",
							city:"成都市",
							projectAccount:'120(万元)'
						},
						{
						title:"油漆墙面粉刷",
						type:"一般政府投资项目",
						city:"成都市",
						projectAccount:'120(万元)'
						}
					]
				],
				windowHeight:windowHeight,
				scrollHeight:"",
				triggered: false,
				loadingType:'noMore',
				_freshing:false
			}
		},
		// onLoad() {
		// 	this.getData()
  //       },
		onReady(){
			let query = uni.createSelectorQuery().in(this).select(".swiper");
			query.boundingClientRect(data => {
				let headerbar = data.top;
				this.scrollHeight=this.windowHeight-headerbar + 2.2
			}).exec();	
		},
		watch:{
			tabIndex(){
				if(this.tabIndex===0){
					console.log(0)
				}else if(this.tabIndex===1){
					console.log(1)
				}else{
					console.log(2)
				}
			}
		},
		methods: {
			tabtap(index){
				this.tabIndex=index;
			},
			getData(){
				this._freshing = false;
				setTimeout(() => {
				    this.triggered = true;
				}, 500)
			},
			changeScroll: function(e) {
				// 令data中定义的currentTab等于当前swiper的current的值，来改变scroll
				this.tabIndex = e.target.current;
			},
			changeSwiper(index) {
				if (this.tabIndex == index) {
					return false;
				} else {
					this.tabIndex = index;
				}
			},
			navBack() {
				uni.navigateBack({
					delta:1
				})
			},
			navToHome(){
				uni.reLaunch({
					url:'/pages/index/index4'
				})
			},			
			toProjectDetail(){
				uni.navigateTo({
					url:"/pages/projectDetail/projectDetail"
				})
			},
			onPulling(e) {
			},
			onRefresh() {
				if (this._freshing) return;
				this._freshing = true;
				setTimeout(() => {
					this.triggered = false;
					this._freshing = false;
				}, 500)
				console.log("fuwei")
			},
			onRestore() {
				this.triggered = 'restore'; 
				console.log(this.triggered)
			},
			onAbort() {
			}
			
		}
	}
</script>

<style lang="scss">
	page {
		background: #FFFFFF;
	}
	.container{
		position: fixed;
		right: 0;
		bottom: calc( var(--window-bottom) + 3px);
		left: 0;
		z-index: 1030;
		margin-bottom: 6;
		padding-bottom: 0;  
		padding-bottom: constant(safe-area-inset-bottom);  
		padding-bottom: env(safe-area-inset-bottom);
	}
	.company-box{
		margin-top:180rpx;
		padding-left:30rpx;
		padding-top:30rpx;
		background: linear-gradient(180deg, #3092E0 0%, #3478DF 100%);
		color:#FFFFFF;
		.header{
			height:316rpx;
			position:relative;
			overflow: hidden;
			.title{
				margin-top: 20rpx;
				font-size: 34rpx;
				font-family: bold;
			}
			.address,.userDetail{
				margin-top:31rpx;
				font-size: 26rpx;
				image {
					width:25rpx;
					height:29rpx;
					margin-right: 20rpx;
				}
				position: relative;
				z-index:1;
			}
			.round1,.round2,.round3,.round4{
				position: absolute;
				z-index: 0;
				background: #85C2F6;
				opacity: 0.5;
				border-radius: 50%;
			}
			.round1,.round2{
				width:124.7rpx;
				height:124.7rpx;
			}
			.round3,.round4{
				width:228.7rpx;
				height:228.7rpx;
			}
			.round1{
				left:7rpx;
				top:156rpx;
			}
			.round2{
				left:52rpx;
				top:107rpx;
			}
			.round3{
				left:513rpx;
				top:7rpx;
			}
			.round4{
				left:621rpx;
				top:52rpx;
			}
		}
	}
	
	.projectTabbar{
		position: relative;
		z-index: 1;
		top:-197rpx;
		margin-left:30rpx;
		margin-right:30rpx;
		width:690rpx;
		border-top-left-radius:24rpx;
		border-top-right-radius:24rpx;
		background: #FFFFFF;
		box-shadow: 1px 10px 29px 2px rgba(0, 0, 0, 0.16);
		.tabs {
			flex: 1;
			flex-direction: column;
			overflow: hidden;
			background-color: #ffffff;
			/* #ifdef MP-ALIPAY || MP-BAIDU */
			height: 100vh;
			/* #endif */
		}
		.scroll-h {
			padding-top:29rpx;
			flex-direction: row;
			/* #ifndef APP-PLUS */
			white-space: nowrap;
			/* #endif */
			display: flex;
			border-bottom:1rpx solid #f2f2f2;
			.uni-scroll-view-content{
				padding-left:120rpx;
				padding-right:120rpx;
				box-sizing: border-box;
				height: 100%;
				width:690rpx;
				display: flex;
				justify-content: space-between;
			}
		}
		.line-h {
			height: 1upx;
			background-color: red;
		}
		.uni-tab-item {
			/* #ifndef APP-PLUS */
			display: inline-block;
			/* #endif */
			display: inline-block;
			// padding-left:35rpx;
			// padding-right:35rpx;
			flex-wrap: nowrap;
			.middle{
				height:30rpx;
				padding-top: 20rpx;
				.line-active{
					margin:0 auto;
					width: 38rpx;
					height: 5rpx;
					background: #3090E0;
					border-radius: 3rpx;
				}
			}
			
		}
		.uni-tab-item-title {
			color: #909090;
			font-weight: bold;
			font-size: 26rpx;
			flex-wrap: nowrap;
			/* #ifndef APP-PLUS */
			white-space: nowrap;
			/* #endif */
		}
		.uni-tab-item-title-active {
			color: #343434;
		}
		.swiper {
			height: 60vh;
			width:690rpx;
			margin:0 auto;
			.swiper-scroll {
				height: 100%;
				.empty{
					height:100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					image{
						width:270rpx;
						height:214rpx;
					}
					text{
						font-size: 30rpx;
						color: #CBCBCB;
						margin-top: 33rpx;
					}
				}
				.projectItem{
					margin:30rpx 30rpx 0;
					padding-bottom: 31rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					border-bottom:1rpx solid #f2f2f2;
					.title{
						font-weight: bold;
						color: #000000;
						font-size:32rpx;
						text-align: left;
						font-weight: bold;
						margin-top: 0;
					}
					.detail{
						margin-top:19rpx;
						color:#000000;
						font-weight: 500;
						font-size: 20rpx;
						text{
							color:#aeaeae;
						}
					}
					.button{
						width:140rpx;
						height:40rpx;
						border-radius: 20rpx;
						color:#3090E0;
						border:3rpx solid #3090E0;
						font-size: 24rpx;
						line-height: 40rpx;
						padding:0;
						text-align: center;
						margin-top:80rpx ;
						background-color: #ffffff;
					}
				}
			}
		}
	}
</style>
