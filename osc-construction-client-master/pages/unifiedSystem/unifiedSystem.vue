<template>
	<view class="container">
		<view class="cu-bar" style="background-color: rgb(75, 162, 255);background:url(/static/topbanner.png) no-repeat; background-size: 100.2% auto;">
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
			  统一制度
			</view>
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-homefill text-white"></text>
			</view>
		</view>
		<view class="unifiedBanner">
			<image src="../../static/unifiedForm/unifiedSystem.png"></image>
		</view>
		<view class="pageDetail">
			即对标广东、浙江和成都等先进地区，<text>强化我省工程建设项目审批制度体系建设</text>。从国家、省、市三个层面，
			对工程建设项目审批制度进行梳理汇总，<text>目前已归纳国家级制度8份，省级制度16份，21个地市州制度251份。</text>            
		</view>
		<view class="systemAnanisis">
			<view class="title">共计{{total}}制度</view>
			<view class="countrySystem">
				<text>国家级制度</text>
				<view class="cu-progress round xs">
				  <view class="bgcolor size" :style="handleTotal(countryTotal)"></view>
				</view>
				<text>{{countryTotal}}</text>
			</view>
			<view class="privinceSystem">
				<text>省级制度</text>
				<view class="cu-progress round xs">
				  <view class="bgcolor size" :style="handleTotal(provinceTotal)"></view>
				</view>
				<text>{{provinceTotal}}</text>
			</view>
			<view class="areaSystem">
				<view>
					<text>21个地市州制度</text><text>{{areaTotal}}</text>
				</view>
				<view class="cu-progress round xs">
				  <view class="bgcolor size" :style="handleTotal(areaTotal)"></view>
				</view>
			</view>
			<view class="areaDetailSystem" v-for="(item,index) in areaItem" :key="index">
				<text>{{item.name}}</text>
				<view class="cu-progress round xs">
				  <view class="bgcolor size" :style="handleAreaTotol(item.num)"></view>
				</view>
				<text>{{item.num}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading:'61.8%',
				total:"275份",
				countryTotal:"8份",
				provinceTotal:"16份",
				areaTotal:"251份",
				areaItem:[
					{
						name:'成都',
						num:'11份'
					},
					{
						name:'自贡',
						num:'3份'
					},
					{
						name:'攀枝花',
						num:'5份'
					},
					{
						name:'泸州',
						num:'8份'
					},
					{
						name:'德阳',
						num:'13份'
					},
					{
						name:'绵阳',
						num:'6份'
					},
					{
						name:'广元',
						num:'23份'
					},
					{
						name:'遂宁',
						num:'24份'
					},
					{
						name:'内江',
						num:'13份'
					},
					{
						name:'乐山',
						num:'16份'
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
			handleTotal(value){
				return {
					width:parseInt(value) / parseInt(this.total).toFixed(2)*100+'%',
				}
			},
			handleAreaTotol(value){
				return {
					width:parseInt(value) / parseInt(this.areaTotal).toFixed(2)*100+'%',
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@mixin uniqueSystem($width:30rpx,$bg:#EFF0FD){
		width:590rpx;
		margin: $width auto;
		background:$bg;
		border-radius: 8rpx;
		padding:20rpx 30rpx;
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
	.pageDetail{
		background: #EFF0FD;
		border-radius: 16rpx;
		padding:17rpx 42rpx 22rpx 37rpx;
		box-sizing: border-box;
		margin:30rpx 50rpx;
		font-size: 20rpx;
		color: #000000;
		line-height: 36rpx;
		text-align: justify;
		font-weight: bold;
		text-indent: 40rpx;
		text{
			color:#f3ad5b;
		}
	}
	.systemAnanisis{
		margin:30rpx 50rpx 18rpx 50rpx;
		padding:30rpx;
		background: #FFFFFF;
		box-shadow: 1rpx 2rpx 13rpx 1rpx rgba(62, 58, 236, 0.15);
		border-radius: 16rpx;
		.title{
			font-size: 22rpx;
			color: #000000;
			line-height: 30rpx;
		}
		.countrySystem,.privinceSystem,.areaDetailSystem{
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			height:59rpx;
			@include  uniqueSystem;
			text{
				font-size: 20rpx;
				color: #000000;
				display:block;
			}
			text:nth-of-type(1){
				width:120rpx;
			}
			text:nth-of-type(2){
				width:80rpx;
				text-align: right;
			}
			.xs{
				height:5rpx;
				width:322rpx;
			}
		}
		.areaSystem{
			@include  uniqueSystem;
			view:nth-of-type(1){
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				text{
					font-size: 20rpx;
					color: #000000;
				}
			}
			.xs{
				height:5rpx;
				width:480rpx;
			}
		}
		.areaDetailSystem{
			background-color: transparent;
			margin-top: 20rpx!important;
			height:39rpx!important;
			margin-bottom: 0!important;
		}
		.bgcolor{
			background-color:#325AFA;
		}
		.cu-progress{
			background-color:#BAD0FC;
		}
		
	}
</style>
