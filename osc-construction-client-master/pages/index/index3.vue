<template>
	<view class="container">
		<view class="cu-bar" style="background-color: rgb(75, 162, 255);background:url(/static/banner1.png) no-repeat; background-size: 100.2% auto;">
			<view class="action">
			  <text class="cuIcon cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
			  <image src="/static/logo_right.png" mode="aspectFit"></image>
			</view>
			<view class="action">
			  <text class="cuIcon cuIcon-homefill text-white"></text>
			</view>
		</view>
		<view class="container-warpper">
			<view class="index-banner">
				<swiper class="swiper" :indicator-dots="indicatorDots" :indicator-color="indicatorColor" :indicator-active-color="indicatorActiveColor" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item>
						<image class="swiper-item" src="/static/banner1.png"></image>
					</swiper-item>
					<swiper-item>
						<image class="swiper-item" src="/static/banner1.png"></image>
					</swiper-item>
					<swiper-item>
						<image class="swiper-item" src="/static/banner1.png"></image>
					</swiper-item>
					<swiper-item>
						<image class="swiper-item" src="/static/banner1.png"></image>
					</swiper-item>
					<swiper-item>
						<image class="swiper-item" src="/static/banner1.png"></image>
					</swiper-item>
				</swiper>
			</view>
			<!-- <view class="banner-btns">
				<button class="cu-btn left"><text class="cuIcon cuIcon-back text-white"></text>统一制度</button>
				<button class="cu-btn right">统一流程<text class="cuIcon cuIcon-right text-white"></text></button>
			</view> -->
			<view class="position-search">
				<!-- <view class="position-box">
					<image src="/static/icon-position.png" mode="aspectFit"></image>
					<text class="text-black">天府工程·成都市</text>
				</view> -->
				<view class="search-box">
					<text class="cuIcon cuIcon-search"></text><input type="text" class="search-input" placeholder="请输入搜索内容" />
				</view>
			</view>
			<view class="main-btns">
				<view class="main-btn-box">
					<view class="cate">
						<image src="/static/icon-cate1.png"></image>
						<view class="text-black">中介服务</view>
					</view>
					<view class="cate">
						<image src="/static/icon-cate2.png"></image>
						<view class="text-black">水电气信</view>
					</view>
					<view class="cate">
						<image src="/static/icon-cate3.png"></image>
						<view class="text-black">办事预约</view>
					</view>
					<view class="cate">
						<image src="/static/icon-cate4.png"></image>
						<view class="text-black">进度查询</view>
					</view>
				</view>
			</view>
			<view class="contrl-btns">
				<view class="contrl-btn-box">
					<view class="cate">
						<image src="/static/icon-ctrl1.png"></image>
						<view class="text-black">房建</view>
					</view>
					<view class="cate">
						<image src="/static/icon-ctrl2.png"></image>
						<view class="text-black">市政</view>
					</view>
					<view class="cate">
						<image src="/static/icon-ctrl3.png"></image>
						<view class="text-black">交通</view>
					</view>
					<view class="cate">
						<image src="/static/icon-ctrl6.png"></image>
						<view class="text-black">水利</view>
					</view>
					<view class="cate">
						<image src="/static/icon-ctrl4.png"></image>
						<view class="text-black">能源</view>
					</view>
					<view class="cate">
						<image src="/static/icon-ctrl5.png"></image>
						<view class="text-black">矿山</view>
					</view>
				</view>
			</view>
			<view class="line"></view>
			<view class="scroll-group">
				<scroll-view scroll-x class="bg-white nav titlenav btmborder" scroll-with-animation scroll-left="true">
				  <view class="cu-item cur">
				    <view>场景式</view>
					<image src="/static/border.png" mode="aspectFit"></image>
				  </view>
				  <view class="cu-item">
					<view>服务专区</view>
					<image src="/static/border.png" mode="aspectFit"></image>
				  </view>
				  <view class="cu-item-more">
					  <text>更多</text>
					  <image src="/static/more.png" mode="aspectFit"></image>
				  </view>
				</scroll-view>
				<scroll-view scroll-x class="bg-white nav imagenav" scroll-with-animation scroll-left="true">
				  <view class="cu-item first">
				    <view class="item-box">
						<image src="/static/images/acjbl1.jpg"></image>
						<view class="title">新建商品房</view>
					</view>
				  </view>
				  <view class="cu-item">
					<view class="item-box">
						<image src="/static/images/acjbl2.jpg"></image>
						<view class="title">新建污水处理厂</view>
					</view>
				  </view>
				  <view class="cu-item">
						<view class="item-box">
							<image src="/static/images/acjbl3.jpg"></image>
							<view class="title">新建学校</view>
						</view>
				  </view>
				  <view class="cu-item">
						<view class="item-box">
							<image src="/static/images/acjbl4.jpg"></image>
							<view class="title">新建厂房</view>
						</view>
				  </view>
				  <view class="cu-item">
						<view class="item-box">
							<image src="/static/images/acjbl5.jpg"></image>
							<view class="title">新建城市道路排水</view>
						</view>
				  </view>
				  <view class="cu-item">
						<view class="item-box">
							<image src="/static/images/acjbl6.jpg"></image>
							<view class="title">电力报装外线工程</view>
						</view>
				  </view>
				</scroll-view>
			</view>
			<view class="line"></view>
			<view class="scroll-group">
				<scroll-view scroll-x class="bg-white nav titlenav" scroll-with-animation scroll-left="true">
				  <view class="cu-item">
				    <view>企业服务</view>
					<image src="/static/border.png" mode="aspectFit"></image>
				  </view>
				  <view class="cu-item-more">
					  <text>更多</text>
					  <image src="/static/more.png" mode="aspectFit"></image>
				  </view>
				</scroll-view>
				<view class="company-box">
					<view class="com-item">
						<view class="title">
							<view class="title-lx">水电气信报装</view>
							<view class="title-sm">登记申请快速申报</view>
						</view>
						<image src="/static/icon-com1.png" mode="aspectFit"></image>
					</view>
					<view class="com-item">
						<view class="title">
							<view class="title-lx">中介服务</view>
							<view class="title-sm">查看竞价或办结结果</view>
						</view>
						<image src="/static/icon-com2.png" mode="aspectFit"></image>
					</view>
					<view class="com-item">
						<view class="title">
							<view class="title-lx">联合测绘</view>
							<view class="title-sm">测绘数据与互通</view>
						</view>
						<image src="/static/icon-com3.png" mode="aspectFit"></image>
					</view>
					<view class="com-item">
						<view class="title">
							<view class="title-lx">消防设计</view>
							<view class="title-sm">消防规划与建设</view>
						</view>
						<image src="/static/icon-com4.png" mode="aspectFit"></image>
					</view>
				</view>
			</view>
			<view class="scroll-group">
				<scroll-view scroll-x class="bg-white nav titlenav" scroll-with-animation scroll-left="true">
				  <view class="cu-item">
				    <view>最新政策</view>
					<image src="/static/border.png" mode="aspectFit"></image>
				  </view>
				  <!-- <view class="cu-item-more">
					  <text>更多</text>
					  <image src="/static/more.png" mode="aspectFit"></image>
				  </view> -->
				</scroll-view>
				<scroll-view scroll-x class="bg-white nav tagnav" scroll-with-animation scroll-left="true">
				  <view class="cu-item">
				    <button class="cu-btn blue round">政策·咨询</button>
				  </view>
				  <view class="cu-item">
				    <button class="cu-btn black round">办事·指南</button>
				  </view>
				  <view class="cu-item">
				    <button class="cu-btn black round">功能·服务</button>
				  </view>
				</scroll-view>
				<view class="article-group">
					<view class="article-item">
						<view class="title-box">
							<view class="title">深入学习贯彻习近平总书记对四川工作系列重要指示精神</view>
							<view class="timespan"><text class="red margin-right-sm">置顶</text>2020-09-09</view>
						</view>
						<image src="/static/images/news1.png"></image>
					</view>
					<view class="article-item">
						<view class="title-box">
							<view class="title">住房城乡建设厅举办公文写作技能专题讲座</view>
							<view class="timespan">2020-09-09</view>
						</view>
						<image src="/static/images/news2.png"></image>
					</view>
					<view class="article-item">
						<view class="title-box">
							<view class="title">住房城乡建设厅建筑企业资质审批突出问题系统治理领导...</view>
							<view class="timespan">2020-09-09</view>
						</view>
						<image src="/static/images/news3.png"></image>
					</view>
					<view class="article-item">
						<view class="title-box">
							<view class="title">2020住房城乡建设厅安委会召开第四次会议</view>
							<view class="timespan">2020-09-09</view>
						</view>
						<image src="/static/images/news4.png"></image>
					</view>
					<view class="article-more">
						<text>查看更多</text>
					</view>
				</view>
			</view>
			<view class="line"></view>
			<view class="scroll-group">
				<scroll-view scroll-x class="bg-white nav titlenav" scroll-with-animation scroll-left="true">
				  <view class="cu-item">
				    <view>猜你想办</view>
					<image src="/static/border.png" mode="aspectFit"></image>
				  </view>
				  <!-- <view class="cu-item-more">
					  <text>更多</text>
					  <image src="/static/more.png" mode="aspectFit"></image>
				  </view> -->
				</scroll-view>
				<scroll-view scroll-x class="bg-white nav guessnav" scroll-with-animation scroll-left="true">
				  <view class="cu-item">
				    <view class="guess-item">
						<view class="title">新建商品房</view>
						<image src="/static/icon-guess1.png" mode="aspectFit"></image>
					</view>
				  </view>
				  <view class="cu-item">
				    <view class="guess-item">
						<view class="title">新建学校</view>
						<image src="/static/icon-guess2.png" mode="aspectFit"></image>
					</view>
				  </view>
				  <view class="cu-item">
				    <view class="guess-item">
						<view class="title">新建安置房</view>
						<image src="/static/icon-guess3.png" mode="aspectFit"></image>
					</view>
				  </view>
				</scroll-view>
				<view class="guess-group">
					<view class="guess-box">
						<view class="box-item dotted">
							<text>新建一般政府投资房屋建筑类的新建商品房</text>
							<image src="/static/icon-right.png"></image>
						</view>
						<view class="box-item">
							<text>新建一般政府投资房屋建筑类的新建学校</text>
							<image src="/static/icon-right.png"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="line"></view>
		</view>
		<view class="rightDialog">
			<view class="left-box" v-if="dialog">
				<view class="cu-chat">
					<view class="cu-item self">
						<view class="main">
						  <view class="content bg-white shadow">
							<view class="citem">
								<image src="../../static/icon-dialog1.png"></image>
								<view>我要咨询</view>
							</view>
							<view class="citem">
								<image src="../../static/icon-dialog2.png"></image>
								<view>我要建议</view>
							</view>
							<view class="citem noborder">
								<image src="../../static/icon-dialog3.png"></image>
								<view>视频辅导</view>
							</view>
						  </view>
						</view>
					</view>
				</view>
			</view>
			<view class="right-box" @click="dialog=!dialog">
				<image src="/static/dialog.png" mode="aspectFit"></image>
				<text>操<br>作<br>指<br>引</text>
			</view>
		</view>
	</view>
</template> 

<script>
	import empty from "@/components/empty";
	import {parseTime} from '@/utils/index';
	import {
	    mapState,
		mapMutations
	} from 'vuex'; 
	export default {
		components: {
			empty
		},
		data() {
			return {
				dialog:false,
				autoplay: true,
				interval: '3000',
				duration: '500',
				indicatorDots: true,
				indicatorColor: 'hsla(0,0%,100%,.3)',
				indicatorActiveColor: '#FFFFFF'
			};
		},
		filters:{
			telephone(value){
				if(value){
					return value.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
				}
				return "";
			}
		},
		computed:{
			...mapState(['storeStatusBar','hasLogin','userInfo','rtlClazz','config']),
			i18n(){
				return this.$t('index');
			}
		},
		onShow() {
			
		},
		onLoad(options){
			
		},
		methods: {
			navTo(url){
				if(!this.hasLogin){
					url = '/pages/public/login';
				}
				uni.navigateTo({  
					url
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	page {
		background: #FFFFFF;
	}
	.container{
		height: 100%;
		position: relative;
		overflow:visible;
		.cu-bar {
			width: 100%;
			height: 160rpx;
			padding-top: 70rpx;
			position:fixed;
			left: 0rpx;
			top: -2rpx;
			z-index: 10;
			.action {
				.cuIcon {
					font-size: 48rpx;
				}
			}
			.content {
				top: 70rpx;
				image {
					width: 100%;
					height: 60rpx;
				}
			}
		}
		.container-warpper {
			background: #FFFFFF;
			.index-banner {
				width: 100%;
				height: 411rpx;
				background: #27A7F2;
				swiper{
					height: 411rpx;
					width: 100%;
				}
				.swiper {
					.swiper-item {
						width:100%;
						height: 411rpx;
					}
				}
			}
			.banner-btns {
				position: absolute;
				top: 4%;
				left: 0rpx;
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 82rpx 0rpx;
				opacity: 0.6;
				.cu-btn {
					width: 202rpx;
					height: 75rpx;
					border: 0rpx;
					// box-shadow: 2rpx 7rpx 24rpx 0px rgba(0, 34, 117, 0.63);
					//border-radius: 38rpx;
					background: transparent;
					padding:0rpx 20rpx;
					color: #FFFFFF;
					font-size: 26rpx;
					&.left {
						display: flex;
						justify-content: flex-start;
					}
					&.right {
						display: flex;
						justify-content: flex-end;
					}
					.cuIcon-back {
						margin-right: 10rpx;
					}
					.cuIcon-right {
						margin-left: 10rpx;
					}
				}
			}
			.position-search {
				display: flex;
				justify-content: space-around;
				align-items: center;
				padding: 30rpx;
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
					height: 60rpx;
					background: #F5F6F8;
					border-radius: 30px;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 0rpx 26rpx;
					.cuIcon {
						margin-right: 10rpx;
						color: #B6B0B0;
					}
					.search-input {
						font-size: 24rpx;
					}
				}
			}
			.main-btns {
				padding: 0rpx 30rpx;
				.main-btn-box {
					width: 100%;
					height: 185rpx;
					background: #FFFFFF;
					box-shadow: 0rpx 0rpx 15rpx 0rpx rgba(107, 203, 248, 0.5);
					border-radius: 16rpx;
					display: flex;
					justify-content: space-around;
					align-items: center;
					.cate {
						text-align: center;
						font-size: 28rpx;
						image {
							width: 120rpx;
							height: 120rpx;
							margin-bottom: -20rpx;
						}
					}
				}
			}
			.contrl-btns {
				padding: 0rpx 30rpx 40rpx;
				.contrl-btn-box {
					display: flex;
					flex-wrap:wrap;
					justify-content:flex-start;
					align-content: flex-start;
					.cate{
						display: flex;
						flex-direction: column;
						align-items: center;
						width: 21%;
						// height: 200upx;84+16/4
						text-align: center;
						margin: 60upx 2% 0upx 2%;
						image {
							width: 50rpx;
							height: 50rpx;
							margin-bottom: 13rpx;
						}
					}
				}
			}
			.line {
				width: 100%;
				height: 14rpx;
				background: #F5F6F8;
			}
			.scroll-group {
				padding: 40rpx 0rpx 0rpx;
				.titlenav {
					position: relative;
					height: 60rpx;
					&.btmborder {
						height: auto;
					}
					.cu-item {
						font-size: 34rpx;
						font-weight: bold;
						color: #343434;
						text-align: center;
						line-height: 34rpx;
						image {
							width: 0px;
							height: 13rpx;
						}
						&.cur {
							border:0rpx;
							image {
								width: 78rpx;
								height: 13rpx;
							}
						}
					}
					.cu-item-more {
						position: absolute;
						right: 30rpx;
						top: 0rpx;
						color: #27A7F2;
						display: flex;
						justify-content: center;
						align-items: center;		
						font-size: 24rpx;
						image {
							width: 17rpx;
							height: 18rpx;
							margin-left:4rpx;
						}
					}
				}
				.imagenav {
					.cu-item {
						height: 300rpx;
						padding:0rpx;
						&.first {
							padding-left: 20rpx;
						}
					}
					.item-box {
						width: 254rpx;
						height: 260rpx;
						background: #FFFFFF;
						box-shadow: 0rpx -1rpx 13rpx 0rpx rgba(167, 165, 165, 0.18);
						border-radius: 16rpx;
						text-align: center;
						image {
							width: 254rpx;
							height: 171rpx;
							border-radius: 16rpx 16rpx 0rpx 0rpx;
						}
						.title {
							line-height: 28rpx;
							color: #000000;
							font-size: 28rpx;
						}
					}
				}
				.company-box {
					display: flex;
					flex-wrap:wrap;
					justify-content:flex-start;
					align-content: flex-start;
					padding: 0rpx 20rpx;
					.com-item{
						display: flex;
						justify-content: space-between;
						align-items: center;
						width: 48%;
						background: #FAFAFA;
						border-radius: 16rpx;
						margin: 0rpx 6rpx 12rpx 6rpx;
						padding: 26rpx 20rpx;
						.title-lx {
							font-size: 28rpx;
							color: #000000;
						}
						.title-sm {
							font-size: 22rpx;
							color: #ADADAD;
							margin-top: 19rpx;
						}
						image {
							width: 70rpx;
							height: 70rpx;
						}
					}
				}
				.tagnav {
					.cu-item{
						padding-right:0rpx;
						margin-right:0rpx;
						.cu-btn {
							border-radius: 28px;
						}
						.blue {
							background: #27A7F2;
							color: #FFFFFF;
						}
						.black {
							border: 2rpx solid #E7E7E7;
							color: #000000;
							background: #FFFFFF;
						}
					}
				}
				.article-group {
					padding: 0rpx 30rpx;
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
				.guessnav {
					padding: 0rpx 0rpx 0rpx 10rpx;
					.cu-item {
						padding-right:0rpx;
						margin-right:0rpx;
						height: auto;
						width: 32%;
						height: 100rpx;
						margin-left:0rpx;
						margin-top:2rpx;
						.guess-item {
							width: 100%;
							height: 91rpx;
							background: #FFFFFF;
							box-shadow: 0rpx 0rpx 14rpx 0rpx rgba(213, 209, 209, 0.43);
							border-radius: 8rpx;
							display: flex;
							justify-content: space-between;
							align-items: center;
							padding: 16rpx;
							.title {
								line-height: 60rpx;
								color:#000000;
								font-size: 24rpx;
								width: 60%;
							}
							image{
								width: 60rpx;
								height: 60rpx;
							}
						}
					}
				}
				.guess-group {
					padding:0rpx 30rpx 30rpx;
					width: 100%;
					.guess-box {
						width: 100%;
						height: 189rpx;
						background: #FFFFFF;
						box-shadow: 0px 0px 14px 0px rgba(213, 209, 209, 0.43);
						border-radius: 8rpx;
						padding: 0rpx 30rpx;
						.box-item {
							display: flex;
							justify-content: space-between;
							align-items: center;
							padding:30rpx 0rpx;
							&.dotted {
								border-bottom: 2rpx dotted #F2F2F2;
							}
							image {
								width: 9rpx;
								height: 20rpx;
							}
						}
					}
				}
			}
		}
		.rightDialog {
			position: fixed;
			bottom: 300rpx;
			right: 0rpx;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			width: 202rpx;
			height: 390rpx;
			.right-box {
				width: 58rpx;
				height: 176rpx;
				min-width: 58rpx;
				position: relative;
				text-align: center;
				display: flex;
				justify-content: center;
				align-items: center;
				padding:0rpx 10rpx;
				color: #FFFFFF;
				font-size: 28rpx;
				image {
					width: 100%;
					height: 100%;
					position: absolute;
					top:0;
					right:0;
					z-index:-1;
				}
			}
			.left-box {
				width: 100%;
				height: 100%;
				.cu-chat {
					width: 100%;
					height: 100%;
					.cu-item {
						padding: 0rpx 20rpx 0rpx 0rpx;
					}
					.self {
						width: 100%;
						height: 100%;
						.main {
							width: 100%;
							height: 100%;
							margin:0rpx;
							max-width: 100%;
							.content {
								width: 100%;
								height: 100%;
								padding: 0rpx;
								flex-direction: column;
								box-shadow: 0rpx -1rpx 7rpx 0rpx rgba(0, 0, 0, 0.14);
								border-radius: 16rpx;
								.citem {
									width: 100%;
									padding: 15rpx 10rpx 10rpx;
									font-size: 24rpx;
									color: #000000;
									text-align: center;
									border-bottom: 2rpx solid #E9E8E8;
									&.noborder {
										border: 0rpx;
									}
									image {
										width: 50rpx;
										height: 50rpx;
									}
								}
							}
							.content:after {
								top: 50%;
								box-shadow: 2rpx -2rpx 2rpx 0rpx rgba(0, 0, 0, 0.14);
							}
						}
					}
				}
			}
		}
	}
</style>
