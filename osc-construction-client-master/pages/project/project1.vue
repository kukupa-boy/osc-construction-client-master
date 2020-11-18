<template>
	<view class="container">
		<view class="cu-bar" style="background-color: rgb(75, 162, 255);background:url(/static/topbanner.png) no-repeat; background-size: 100.2% auto;">
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
			  {{names[id]}}
			</view>
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-homefill text-white"></text>
			</view>
		</view>
		<view class="container-warpper">
			<view class="article-content" :style="id==13?'top:60rpx;height:calc(100vh - 80rpx)':'top:200rpx'">
				<web-view class="webview" :src="urls[id]"></web-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				names: ['新建污水处理厂','新建学校','新建城市道路排水','电力报装外接线工程','印章申请','联合测绘',
				'水电气信-联合报装','水电气信-供水报装','水电气信-供电报装','水电气信-供气报装','水电气信-通信报装','水电气信-广电报装',
				'建筑工人欠薪追讨查询','水电气信','住建人员资质','住建工程项目信息','建筑工程企业资质'],
				urls: ['http://gcjs.sczwfw.gov.cn/gcjs/bszn?typeThemeId=MjAyMDA2MjkwOTM2NDA0NDMyMTA=&viewType=Mg==',
				'http://gcjs.sczwfw.gov.cn/gcjs/bszn?typeThemeId=MjAyMDA2MjkwOTQwMTg0NTMwMTA=&viewType=Mg==',
				'http://gcjs.sczwfw.gov.cn/gcjs/bszn?typeThemeId=MjAyMDA2MjkwOTQ5NTQ0ODM2MTA=&viewType=Mg==',
				'http://gcjs.sczwfw.gov.cn/gcjs/bszn?typeThemeId=MjAyMDA4MDQxMTI2MTg0MjYyMTA=&viewType=Mg==',
				'http://103.203.218.97:5080/OnlineApplySeal/?code=u54TH7#/home',
				'http://gcjs.sczwfw.gov.cn/lhch/index/lhch/index',
				'http://sdqx-gc.sczwfw.gov.cn:8765/Home/BSZN',
				'http://sdqx-gc.sczwfw.gov.cn:8765/Home/BSZN',
				'http://sdqx-gc.sczwfw.gov.cn:8765/Home/BSZN',
				'http://sdqx-gc.sczwfw.gov.cn:8765/Home/BSZN',
				'http://sdqx-gc.sczwfw.gov.cn:8765/Home/BSZN',
				'http://sdqx-gc.sczwfw.gov.cn:8765/Home/BSZN',
				'http://202.61.88.67:8080/open-platform-exchange/exchange/getResource?resourceCode=ZYZC2019110100000091&applyCode=YYSQ2019110400000069&sysCode=0004',
				'http://103.203.218.90:4000',
				'http://103.203.218.90:8080/open-platform-exchange/exchange/getResource?resourceCode=ZYZC2020092700016528&applyCode=YYSQ2020092700000998&sysCode=0003',
				'http://103.203.218.90:8080/open-platform-exchange/exchange/getResource?resourceCode=ZYZC2020092700016527&applyCode=YYSQ2020092700000997&sysCode=0003',
				'http://103.203.218.90:8080/open-platform-exchange/exchange/getResource?resourceCode=ZYZC2020092700016526&applyCode=YYSQ2020092700000996&sysCode=0003']
			}
		},
		onLoad(options) {
			this.id = Number(options.id);
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

<style lang="scss">
	page {
		background: #FFFFFF;
	}
	.container-warpper {
		padding: 200rpx 30rpx 0rpx;
		width:100%;
		height: 100%;
		text-align: center;
		position: relative;
		.article-content {
			width: 100%;
			position: absolute;
			top: 200rpx;
			left: 0rpx;
			height: calc(100vh - 180rpx);
			overflow: hidden;
			.webview {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
