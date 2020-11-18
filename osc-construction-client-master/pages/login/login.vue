<template>
	<view>
		<view class="bg"></view>
		<view class="form">
			<view class="boxOne">
				<input type="text" v-model="phone" :maxlength="11" placeholder="请输入手机号" />
				<image style="width:23rpx;height:35rpx" src="../../static/login/mobile.png"></image>
			</view>
			<view class="boxTwo">
				<input type="text" v-model="company" :maxlength="16" placeholder="公司名称" />
				<image style="width:32rpx;height:17rpx" src="../../static/login/moveBottom.png"></image>
			</view>
			<view class="boxThree">
				<input type="text" v-model="code" placeholder="请输入短信验证码"/>
				<view>获取验证码</view>
			</view>
		</view>
		<view class="buttonBox">
			<button class="loginButton" @click="navTo('/pages/ctlinproress/ctlinproress')">登陆</button>
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
				phone:'',
				company:'',
				code:''
			}
		},
		computed:{
			...mapState(['storeStatusBar','hasLogin','userInfo','rtlClazz','config'])
		},
		methods: {
			...mapMutations(['login']),
			navTo(url) {
				this.login({
					id: 111,
					name: 'demo'
				})
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.bg{
		height:767rpx;
		width:100%;
		background: url(../../static/login/login.png) 100% 100%;
		background-size: 100%;
	}
	.form{
		width: 600rpx;
		height: 406rpx;
		margin: 0 auto;
		background: #FFFFFF;
		box-shadow: 1px 10px 29px 2px rgba(0, 0, 0, 0.16);
		border-radius: 24px;
		overflow: hidden;
		top:-312rpx;
		position: relative;
		z-index: 1;
		view{
			margin: 0 auto;
			width: 500rpx;
			height: 54rpx;
			background: #EEEEEE;
			border-radius: 27rpx;
			input{
				font-size: 26rpx;
				font-weight: 400;
				color: #4A4A4A;
			}
			
		}
		.boxOne{
			margin-top:76rpx;
			position:relative;
			input{
				height:100%;
				text-indent: 81rpx;
			}
			image{
				position: absolute;
				top:9rpx;
				left:31rpx;
			}
		}
		.boxTwo{
			margin-top:46rpx;
			position:relative;
			input{
				height:100%;
				text-indent: 81rpx;
			}
			image{
				position: absolute;
				top:17rpx;
				right:32rpx;
			}
		}
		.boxThree{
			margin-top:46rpx;
			position:relative;
			input{
				height:100%;
				text-indent: 81rpx;
			}
			view{
				position: absolute;
				width:170rpx;
				height:100%;
				border: 2rpx solid #308FE0;
				border-radius: 27rpx;
				top:0rpx;
				right:0rpx;
				font-size: 24rpx;
				font-weight: 500;
				color: #3090E0;
				line-height: 53.3rpx;
				text-align: center;
			}
		}
	}
	
	.buttonBox{
		position: absolute;
		top:932rpx;
		width:100%;
	}
	.loginButton{
		width: 400rpx;
		height: 66rpx;
		background: linear-gradient(90deg, #308FE0 0%, #95BFE2 100%);
		box-shadow: 1rpx 3rpx 10rpx 0rpx rgba(0, 0, 0, 0.2);
		border-radius: 33rpx;
		font-size: 36rpx;
		line-height: 66rpx;
		font-weight: bold;
		color: #FFFFFF;
		margin: 0 auto;;
	}
</style>
