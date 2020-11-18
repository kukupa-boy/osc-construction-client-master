<template>
	<view class="container">
		<view class="cu-bar" style="background-color: #ffffff;border-bottom:1rpx solid #f8f8f8">
			<view class="action">
			</view>
			<view class="content text-bold">
			  办事大厅
			</view>
			<view class="action" @click="navHome">
			  <image src="../../static/office/findIcon.png"></image>
			</view>
		</view>
		
		<view class="topView">
			<view @click="navTo('/pages/ctlmediation/ctlmediation')">
				<image src="../../static/office/top-icon1.png"></image>
				<text>中介服务</text>
			</view>
			<view @click="navTo('/pages/project/project1?id=13')">
				<image src="../../static/office/top-icon2.png"></image>
				<text>水电气信</text>
			</view>
			<view @click="navTo('/pages/ctlappoint/ctlappoint')">
				<image src="../../static/office/top-icon3.png"></image>
				<text>办事预约</text>
			</view>
			<view @click="navTo('/pages/ctlinproress/ctlinproress',true)">
				<image src="../../static/office/top-icon4.png"></image>
				<text>进度查询</text>
			</view>
		</view>
		<view class="themView">
			<view class="title">
				<view>
					主题办事
					<view class="lineBox"></view>
				</view>
			</view>
			<view class="content">
				<view class="content-item" v-for="(item,index) in themView" :key="index" @click="navTo(item.url)">
					<view class="item-title">{{item.title}}</view>
					<view class="item-content">{{item.content}}</view>
					<image class="watermark" :src="item.imageurl"></image>
				</view>
			</view>
		</view>
		<view class="sceneView">
			<view class="title">
				<view>
					场景服务
					<view class="lineBox"></view>
				</view>
			</view>
			<view class="scene-content">
				<view class="scene-content-item" v-for="(item,index) in sceneView" :key="index" @click="navTo(item.url)">
					<image :src="item.imageurl"></image>
					<view class="scene-text">{{item.name}}</view>
				</view>
			</view>
		</view>
		<view class="companyServe">
			<view class="title">
				<view>
					企业服务
					<view class="lineBox"></view>
				</view>
			</view>
			<view class="serve-content">
				<view class="serve-content-item"   v-for="(item,index) in serveView" :key="index" :style="judgeType(index)" @click="navTo(item.url)">
					<view class="serve-title"> {{item.title}}</view>
					<view class="serve-content">{{item.content}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
	    mapState,
		mapMutations
	} from 'vuex'; 
	export default {
		data() {
			return {
				themView:[
					{
						title:"房建",
						content:"房屋建设、修缮维护等",
						imageurl:'../../static/office/watermark1.png',
						url: '/pages/project/project'
				    },
					{
						title:"市政",
						content:"公共服务、安全服务等",
						imageurl:'../../static/office/watermark2.png'
					},
					{
						title:"交通",
						content:"道路新建、修缮维护等",
						imageurl:'../../static/office/watermark3.png',
						url: '/pages/project/project1?id=2'
					},
					{
						title:"水利",
						content:"水利建设、修缮维护等",
						imageurl:'../../static/office/watermark4.png'
					},
					{
						title:"能源",
						content:"能源开采、技术支持等",
						imageurl:'../../static/office/watermark5.png',
						url: '/pages/project/project1?id=3'
					},
					{
						title:"矿山",
						content:"矿山开采、工程支持等",
						imageurl:'../../static/office/watermark6.png',
						url: '/pages/project/project1?id=5'
					},
				],
				sceneView:[
					{
						imageurl:"../../static/office/scene-icon1.png",
						name:"新建商品房",
						url: '/pages/project/project?id=1'
					},
					{
						imageurl:"../../static/office/scene-icon2.png",
						name:"新建污水处理厂"
					},
					{
						imageurl:"../../static/office/scene-icon3.png",
						name:"新建学校"
					},
					{
						imageurl:"../../static/office/scene-icon4.png",
						name:"新建厂房"
					},
					{
						imageurl:"../../static/office/scene-icon5.png",
						name:"城市道路排水"
					},
					{
						imageurl:"../../static/office/scene-icon6.png",
						name:"电力外线"
					}
				],
				serveView:[
					{
						title:'水电气信报装',
						content:'登记申请快速申报',
						url: '/pages/project/project1?id=13'
					},
					{
						title:'中介服务',
						content:'查看竞价或办理结果',
						url: '/pages/ctlmediation/ctlmediation'
					},
					{
						title:'联合测绘',
						content:'测绘数据与互通',
						url: '/pages/project/project1?id=5'
					},
					{
						title:'印章申请',
						content:'电子印章在线申请',
						url: '/pages/project/project1?id=4'
					}
				],
				servebg:{
					firstType:'background: url(../../static/office/serve-bg0.png);background-size: 100% 100%;',
					secondType:'background: url(../../static/office/serve-bg1.png);background-size: 100% 100%;'
				}
			}
		},
		computed:{
			...mapState(['storeStatusBar','hasLogin','userInfo','config'])
		},
		methods: {
			judgeType(index){
				if(index % 4 === 0 ){
					return this.servebg.firstType;
				}else if(index % 4=== 1){
					return this.servebg.secondType;
				}else if(index % 4=== 2){
					return this.servebg.secondType;
				}else if(index % 4=== 3){
					return this.servebg.firstType;
				}
			},
			navTo(url,needlogin){
				if(needlogin && !this.hasLogin) {
					uni.navigateTo({
						url:'/pages/login/login'
					})
					return;
				} 
				uni.navigateTo({  
					url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@mixin titleStyle(){
		font-size: 36rpx;
		font-weight: 800;
		color: #000000;
		line-height: 28rpx;
		display: inline-block;
	}
	@mixin lineBox() {
		width: 60rpx;
		height: 5rpx;
		background: #308FE0;
		border-radius: 3rpx;
		margin:0 auto ;
		margin-top:8rpx;
	}
	.container{
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
		.topView{
			margin-top:160rpx ;
			display: flex;
			justify-content: space-between;
			padding:30rpx 60rpx;
			background-color: #ffffff;
			view{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				image{
					width:84rpx;
					height:84rpx;
				}
				text{
					margin-top: 21rpx;
					font-size: 28rpx;
					color: #000000;
					line-height: 28rpx;
					text-align: center;
				}
			}
			
		}
		.themView{
			padding:40rpx 30rpx;
			margin-top: 14rpx;
			background-color: #ffffff;
			.title{
				@include titleStyle
				.lineBox{
					@include lineBox
				}
			}
			.content{
				.content-item:nth-of-type(2n){
					margin-left:30rpx
				}
				.content-item{
					margin-top:30rpx;
					background: #FFFFFF;
					box-shadow: 1rpx 2rpx 13rpx 3rpx rgba(107, 107, 107, 0.2);
					border-radius: 8rpx;
					padding-left:30rpx;
					overflow: hidden;
					position: relative;
					display: inline-block;
					width:330rpx;
					.item-title{
						font-size: 30rpx;
						font-weight: 800;
						color: #000000;
						line-height: 28rpx;
						margin-top:40rpx
					}
					.item-content{
						margin-top:20rpx;
						font-size: 24rpx;
						font-weight: 500;
						color: #909090;
						line-height: 28rpx;
						margin-bottom: 39rpx;
						position: relative;
						z-index: 1;
					}
					image{
						width:74rpx;
						height:74rpx;
						position: absolute;
						left:243rpx;
						top:69rpx;
						z-index:0;
					}
				}
			}
		}
		.sceneView{
			padding:40rpx 30rpx;
			margin-top: 14rpx;
			background-color: #ffffff;
			.title{
				@include titleStyle
				.lineBox{
					@include lineBox
				}
			}
			.scene-content{
				display: inline-flex;
				flex-wrap:wrap;
				justify-content: space-between;
				.scene-content-item{
					width: 199rpx;
					background: #FFFFFF;
					box-shadow: 1rpx 2rpx 13rpx 3rpx rgba(107, 107, 107, 0.2);
					border-radius: 8rpx;
					overflow: hidden;
					margin-top: 30rpx;
					display: inline-block;
					image{
						display: block;
						width:93rpx;
						height:93rpx;
						margin-top: 9rpx;
						margin: 0 auto;
					}
					.scene-text{
						font-size: 24rpx;
						font-weight: 800;
						color: #000000;
						line-height: 28rpx;
						margin-bottom: 20rpx;
						text-align: center;
					}
				}
			}
			
		}
		.companyServe{
			padding:40rpx 0;
			margin-top: 14rpx;
			background-color: #ffffff;
			.title{
				padding-left: 30rpx;
				@include titleStyle
				.lineBox{
					@include lineBox
				}
			}
			.serve-content-item{
				width:330rpx;
				position:relative;
				padding-left:30rpx;
				display: inline-block;
				margin-left:30rpx;
				margin-top:30rpx;
				.serve-title{
					padding-top:40rpx;
					font-size: 28rpx;
					font-family: PingFang SC;
					font-weight: 800;
					color: #000000;
					line-height: 28rpx;
				}
				.serve-content{
					padding-top:19rpx;
					font-size: 22rpx;
					font-weight: 500;
					color: #909090;
					line-height: 28rpx;
					padding-bottom: 40rpx;
				}
			}
		}
	}
</style>
