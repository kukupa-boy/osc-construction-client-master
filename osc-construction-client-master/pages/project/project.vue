<template>
	<view class="container">
		<view class="cu-bar" style="background-color: rgb(75, 162, 255);background:url(/static/topbanner.png) no-repeat; background-size: 100.2% auto;">
			<view class="action" @click="navBack">
			  <text class="cuIcon cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
			  新建商品房
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
				<view class="title">
					申办方式 : 方式一：立即申报    方式二：向各级政务服务中心工程建设综合服务窗口提出申请。
				</view>
			</view>
			<view class="nav-box" v-if="tabCurrentIndex==1">
				<view class="list-box">
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-red">【主】</text>企业投资项目备案
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-red">【主】</text>建设项目用地预审与选址意见书
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-red">【主】</text>建设用地（含临时用地）规划许可证核发（出让用地）
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-blue">【辅】</text>改变绿化规划、绿化用地的使用性质审批
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-blue">【辅】</text>与航道有关的工程建设项目对航道通航条件影响评价审核
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-blue">【辅】</text>勘查、开采矿藏和各项建设工程占用或者征收、征用林地审核
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-blue">【辅】</text>进入林业系统地方级自然保护区建立机构和修筑设施审批
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-blue">【辅】</text>取水许可证新办审批
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-blue">【辅】</text>文物保护单位的保护范围内进行其他建设工程或者爆破、钻探、挖掘等作业的许可
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-blue">【辅】</text>文物保护单位的建设控制地带内进行建设工程的许可
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-blue">【辅】</text>文物埋藏区域内建设项目前期考古调查、勘探与发掘审批
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-blue">【辅】</text>建设项目压覆重要矿产资源审批
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-blue">【辅】</text>核实建设项目落实人民防空要求
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-blue">【辅】</text>新建、扩建、改建建设工程避免危害气象探测环境审批
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-blue">【辅】</text>乡村建设规划许可证核发
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-blue">【辅】</text>一般建设项目环境影响报告表审批
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-blue">【辅】</text>水工程洪水影响评价审批
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-blue">【辅】</text>生产建设项目水土保持方案审批（新办）
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-right text-blue"></text>
						<text class="text-blue">【辅】</text>固定资产投资项目节能审查（企业技术改造项目除外）
					</view>
				</view>
			</view>
			<view class="nav-box" v-if="tabCurrentIndex==2">
				<view class="previewimg" @click="onShowImage('http://gcjs.sczwfw.gov.cn/mongo/lctView/9C907E27-1EF4-4080-BA39-B488402D28A7')">
					<image  src="http://gcjs.sczwfw.gov.cn/mongo/lctView/9C907E27-1EF4-4080-BA39-B488402D28A7"></image>
				</view>
			</view>
			<view class="nav-box" v-if="tabCurrentIndex==3">
				<view class="list-box">
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>企业投资项目备案
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>建设项目用地预审与选址意见书
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>建设用地（含临时用地）规划许可证核发（出让用地）
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>改变绿化规划、绿化用地的使用性质审批
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>与航道有关的工程建设项目对航道通航条件影响评价审核
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>勘查、开采矿藏和各项建设工程占用或者征收、征用林地审核
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>进入林业系统地方级自然保护区建立机构和修筑设施审批
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>取水许可证新办审批
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>文物保护单位的保护范围内进行其他建设工程或者爆破、钻探、挖掘等作业的许可
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>文物保护单位的建设控制地带内进行建设工程的许可
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>文物埋藏区域内建设项目前期考古调查、勘探与发掘审批
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>建设项目压覆重要矿产资源审批
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>核实建设项目落实人民防空要求
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>新建、扩建、改建建设工程避免危害气象探测环境审批
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>乡村建设规划许可证核发
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>一般建设项目环境影响报告表审批
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>水工程洪水影响评价审批
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>生产建设项目水土保持方案审批（新办）
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-file text-blue margin-right-sm"></text>固定资产投资项目节能审查（企业技术改造项目除外）
					</view>
				</view>
			</view>
			<view class="nav-box" v-if="tabCurrentIndex==4">
				<view class="list-box">
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>使用林地现场查验表
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>新建、改建、扩建建设工程概况
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>节能审查请示文件
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>有关自然保护区管理机构对拟建立机构或修筑设施的意见
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>申请文件
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>调规和永久基本农田补划方案
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>水土保持方案报告书
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>规划调整或拆迁已取得同意或者已达成一致的承诺函、协议材料
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>取水验收报告
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>新建、改建、扩建建设工程规划总平面图
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>审批的规划图纸
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>踏勘论证报告、选址论证报告
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>个人的身份证明
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>申请审批的请示及同意公示的函
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>取水许可证核发申请
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>拟建立机构或修筑设施的单位或个人的申请文件
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>企业法人营业执照或法人组织机构代码复印件（申请人为公民：申请人身份证复印件）...
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>人防部门审查申请表（样表）
					</view>
					
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>取水申请批准文件
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>关于xxxx压覆已查明重要矿产资源的申请函
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text> 市、县林业主管部门上报的审查意见
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>文物考古调查、勘探及影响评估报告
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>节能报告
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>省自然资源主管部门要求提交的其他有关材料（申请单位的有效通信地址和通讯方式、...
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>拟建机构或修筑设施对自然保护区自然资源、自然生态系统和主要保护对象的影响的评...
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>节地评价报告
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>环境影响报告书、公示本、光盘
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>建设项目使用林地可行性报告或林地现状调查表
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>航道通航条件影响评价审核申请书
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>建设项目（预）可行性研究报告或工程建设方案（项目申请报告、备案材料）
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>建设工程避免危害气象探测环境行政许可申请表；
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>选址意见书附图
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>文物影响评估报告（工程对文物可能产生破坏或影响的评估报告，为保护文物安全及历...
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>建设项目有关批准文件
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>环境影响评价报告书
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>自然保护区所在市（州）或者扩权强县试点县林业行政主管部门的审查意见
					</view>
					
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>建设工程设计方案（内容包括：建设单位名称、建设项目、建设地点、建设规模、必须...
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>建设单位与矿业权人签订的含矿业权人同意压覆并不动用已批准压覆的矿产资源的协议...
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>与拟修筑设施单位达成的保护、管理和补偿等协议
					</view>
					<view class="list-title">
						<text class="cuIcon cuIcon-title text-black margin-right-sm"></text>项目用地红线坐标数据
					</view>
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
				categories: [
					{
						id: 1,
						name: '基础信息'
					},
					{
						id: 2,
						name: '办理事项'
					},
					{
						id: 3,
						name: '办理流程'
					},
					{
						id: 4,
						name: '申请表单'
					},
					{
						id: 5,
						name: '应交资料'
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
			onShowImage(url) {
				uni.previewImage({
					urls: [url],
					longPressActions: {
						itemList: ['保存图片'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
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
		position: relative;
		.nav {
			width: 100%;
			position: sticky;
			top: 160rpx;
			left: 0rpx;
		}
		.line {
			width: 100%;
			height: 14rpx;
			background: #F5F6F8;
		}
		.nav-box {
			padding: 30rpx 0rpx 0rpx;
			.title {
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
			.previewimg {
				width: 100%;
				padding: 30rpx;
				image {
					width: 100%;
				}
			}
		}
	}
</style>
