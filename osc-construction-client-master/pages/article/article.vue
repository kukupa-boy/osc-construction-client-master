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
		<view class="container-warpper" v-if="id==1">
			<view class="text-xl">深入学习贯彻习近平总书记对四川工作系列重要指示精神</view>
			<view class="article-content">
				<web-view class="webview" src="/static/1.html"></web-view>
			</view>
		</view>
		<view class="container-warpper" v-if="id==2">
			<view class="text-xl">住房城乡建设厅举办公文写作技能专题讲座</view>
			<view class="article-content">
				<web-view class="webview" src="/static/2.html"></web-view>
			</view>
		</view>
		<view class="container-warpper" v-if="id==3">
			<view class="text-xl">住房城乡建设厅建筑企业资质审批突出问题系统治理领导小组召开第一次全体会议</view>
			<view class="article-content">
				<web-view class="webview" src="/static/3.html"></web-view>
			</view>
		</view>
		<view class="container-warpper" v-if="id==4">
			<view class="text-xl">2020住房城乡建设厅安委会召开第四次会议</view>
			<view class="article-content">
				<web-view class="webview" src="/static/4.html"></web-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0
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
			height: calc(100vh - 300rpx);
			overflow: hidden;
			.webview {
				width: 100%;
				height: 100%;
				margin-top: 100rpx;
			}
		}
		
	}
</style>
