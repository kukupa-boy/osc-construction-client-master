<template>
	<view class="container">
		<view class="cu-bar" style="background-color: rgb(75, 162, 255);background:url(/static/topbanner.png) no-repeat; background-size: 100.2% auto;">
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
			  中介服务
			</view>
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-homefill text-white"></text>
			</view>
		</view>
		<view class="container-warpper">
			<scroll-view scroll-x class="flex bg-white nav shadow" scroll-with-animation :scroll-left="scrollLeft">
				<view class="flex text-center">
					<view class="flex-sub cu-item" :class="index==tabCurrentIndex?'text-blue cur':''" v-for="(item,index) in categories" :key="index"
					 @tap="tabSelect" :data-id="index">
						<view class="linetext">{{ item.name }}</view>
					</view>
				</view>
			</scroll-view>
			<view class="nav-box" v-if="tabCurrentIndex==0">
				<view class="scroll-group">
					<scroll-view scroll-x class="bg-white nav titlenav" scroll-with-animation scroll-left="true">
					  <view class="cu-item">
					    <view><text class="cuIcon cuIcon-similar text-blue margin-right-sm"></text>中介服务事项</view>
					  </view>
					</scroll-view>
				</view>
				<view class="nav-links">
					<view class="link-box">
						<view class="title">交通影响评价</view>
						<view class="line"></view>
						<view class="title">航道通航条件影响评价报告</view>
					</view>
					<view class="link-box">
						<view class="title">建设项目土地复垦方案及评审表</view>
						<view class="title">安全验收评价报告</view>
					</view>
					<view class="link-box">
						<view class="title">河道管理范围内有关活动涉河方案报告</view>
						<view class="title">取水验收报告</view>
					</view>
					<view class="link-box">
						<view class="title">土地评估机构（国土）</view>
						<view class="title">造价咨询服务（预算编制、评审）</view>
					</view>
					<view class="link-box">
						<view class="title">工程造价咨询机构（国资）</view>
						<view class="title">建设项目压覆矿产资源调查评估报告编制</view>
					</view>
					<view class="link-box">
						<view class="title">白蚁预防工程</view>
						<view class="title">房地产评估机构（国资）</view>
					</view>
					<view class="link-box">
						<view class="title">造价咨询〔竣工决（结）算审核〕</view>
						<view class="title">更多...</view>
					</view>
					
				</view>
				<view class="line"></view>
				<view class="scroll-group">
						<scroll-view scroll-x class="bg-white nav titlenav" scroll-with-animation scroll-left="true">
						  <view class="cu-item">
						    <view><text class="cuIcon cuIcon-shop text-blue margin-right-sm"></text>中介服务机构</view>
						  </view>
						</scroll-view>
				</view>
				<view class="nav-links">
					<view class="link-box">
						<view class="title">四川盛祥泰吉机械有限公司</view>
						<view class="line"></view>
						<view class="title">四川易证通数字证书数据服务有限公司</view>
					</view>
					<view class="link-box">
						<view class="title">遂宁岩石建设工程有限公司</view>
						<view class="title">四川省中锦工程咨询有限公司</view>
					</view>
					<view class="link-box">
						<view class="title">广元零八一建筑勘察设计院有限公司</view>
						<view class="title">四川星悦绿水工程咨询有限公司</view>
					</view>
					<view class="link-box">
						<view class="title">德阳润成工程咨询有限公司</view>
						<view class="title">新腾数致网络科技有限公司</view>
					</view>
					<view class="link-box">
						<view class="title">叙永县顺发中介服务部</view>
						<view class="title">泸州市纳溪区鼎勤房屋中介服务部</view>
					</view>
					<view class="link-box">
						<view class="title">新疆清风朗月环保科技有限公司</view>
						<view class="title">新疆鑫旺德盛土地环境工程有限公司</view>
					</view>
					<view class="link-box">
						<view class="title">鸿利项目管理有限公司</view>
						<view class="title">更多...</view>
					</view>
					
				</view>
				<view class="line"></view>
				<view class="scroll-group">
						<scroll-view scroll-x class="bg-white nav titlenav" scroll-with-animation scroll-left="true">
						  <view class="cu-item">
						    <view><text class="cuIcon cuIcon-profile text-blue margin-right-sm"></text>主管部门</view>
						  </view>
						</scroll-view>
				</view>
				<view class="nav-links">
					<view class="link-box">
						<view class="title">省发展改革委</view>
						<view class="line"></view>
						<view class="title">自然资源厅</view>
					</view>
					<view class="link-box">
						<view class="title">生态环境厅</view>
						<view class="title">住房城乡建设厅</view>
					</view>
					<view class="link-box">
						<view class="title">交通运输厅</view>
						<view class="title">水利厅</view>
					</view>
					<view class="link-box">
						<view class="title">省卫生健康委</view>
						<view class="title">应急厅</view>
					</view>
					<view class="link-box">
						<view class="title">省市场监管局</view>
						<view class="title">省林草局</view>
					</view>
					<view class="link-box">
						<view class="title">省广电局</view>
						<view class="title">省文物局</view>
					</view>
					<view class="link-box">
						<view class="title">省地震局</view>
						<view class="title">更多...</view>
					</view>
					
				</view>
				
			</view>
			<view class="nav-box" v-if="tabCurrentIndex==1">
				<view class="imgnav-box">
					<view class="imgnav-item bg-gray shadow">
						<image src="../../static/imd/icon-service1.png"></image>
						<view>机构入驻</view>
					</view>
					<view class="imgnav-item">
						<image src="../../static/imd/icon-service2.png"></image>
						<view>项目委托</view>
					</view>
					<view class="imgnav-item">
						<image src="../../static/imd/icon-service3.png"></image>
						<view>多评合一</view>
					</view>
					<view class="imgnav-item">
						<image src="../../static/imd/icon-service4.png"></image>
						<view>区域评估</view>
					</view>
				</view>
			</view>
			<view class="nav-box" v-if="tabCurrentIndex==2">
				<view class="tag-box">
					<button class="cu-btn" :class="tagIndex==0?'bg-blue':'line-gray'" @click="tagChange(0)">选取公告</button>
					<button class="cu-btn" :class="tagIndex==1?'bg-blue':'line-gray'" @click="tagChange(1)">结果公告</button>
					<button class="cu-btn" :class="tagIndex==2?'bg-blue':'line-gray'" @click="tagChange(2)">流标公告</button>
				</view>
				<view class="list-empty" v-if="tagIndex!=1">
					暂无数据
				</view>
				<view class="list-box" v-if="tagIndex==1">
					<view class="list-title"><text class="cuIcon cuIcon-right text-blue"></text><text class="text-green">【中选-洪水影响评价报告编制】</text>安居区琼江河堤沿岸景观提升工程</view>
					<view class="list-title"><text class="cuIcon cuIcon-right text-blue"></text><text class="text-green">【中选-固定资产投资项目节能报告评审】</text>安居区琼江河堤沿岸景观提升工程</view>
					<view class="list-title"><text class="cuIcon cuIcon-right text-blue"></text><text class="text-green">【中选-建设工程文物影响评估报告】</text>安居区琼江河堤沿岸景观提升工程</view>
					<view class="list-title"><text class="cuIcon cuIcon-right text-blue"></text><text class="text-green">【中选-施工图设计文件审查（联合审图，含消防、人防、技防等）】</text>遂宁金融商业中心·莲韵（D区）</view>
					<view class="list-title"><text class="cuIcon cuIcon-right text-blue"></text><text class="text-green">【中选-施工图设计文件审查（联合审图，含消防、人防、技防等）】</text>金色维也纳二期</view>
					<view class="list-title"><text class="cuIcon cuIcon-right text-blue"></text><text class="text-green">【中选-施工图设计文件审查（联合审图，含消防、人防、技防等）】</text>东城玉苑</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabCurrentIndex: 0,
				tagIndex: 0,
				categories: [
					{
						id: 1,
						name: '服务指南'
					},
					{
						id: 2,
						name: '快速通道'
					},
					{
						id: 3,
						name: '交易信息'
					}
				]
			}
		},
		methods: {
			navBack() {
				uni.navigateBack({
					delta:1
				})
			},
			tabSelect(e) {
				this.tabCurrentIndex = e.currentTarget.dataset.id;
			},
			tagChange(index) {
				this.tagIndex = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #FFFFFF;
	}
	.container-warpper {
		padding: 180rpx 0rpx 0rpx;
		width:100%;
		height: 100%;
		.nav {
			width: 100%;
		}
		.line {
			width: 100%;
			height: 14rpx;
			background: #F5F6F8;
		}
		.nav-box {
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
				
			}
			.nav-links {
				width: 100%;
				padding: 0rpx 30rpx 0rpx 80rpx;
				font-size: 26rpx;
				.link-box {
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 30rpx 0rpx;
					.line {
						height: 20rpx;
						width: 2rpx;
						background: blue;
					}
					.title {
						width: 40%;
						white-space:nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
			.imgnav-box {
				display: flex;
				flex-wrap:wrap;
				justify-content:flex-start;
				align-content: flex-start;
				padding: 30rpx;
				.imgnav-item {
					width: 50%;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					background: #FFFFFF;
					padding: 20rpx;
					box-shadow:0upx 10upx 20upx 0px rgba(0, 0, 0, 0.08);
					border-radius:16rpx;
					width: 46%;
					margin: 0rpx 2% 20rpx 2%;
					image {
						width: 100rpx;
						height: 100rpx;
					}
				}
			}
			.tag-box {
				display: flex;
				justify-content: space-around;
				align-items: center;
				padding: 30rpx;
			}
			.list-box {
				padding: 0rpx 30rpx;
				.list-title {
					line-height: 40rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					padding: 30rpx 0rpx;
					border-bottom: 2rpx solid #f8f8f8;
					display:-webkit-box;
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2;
				}
			}
			.list-empty {
				padding: 90rpx 30rpx;
				text-align: center;
				color: #999999;
			}
		}
		
	}
</style>
