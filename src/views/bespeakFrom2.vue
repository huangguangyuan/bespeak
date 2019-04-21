<template>
    <div class="bespeakFrom">
        <van-nav-bar
            title="快速报装"
            left-arrow
            fixed
            @click-left="onClickLeft"
        />
        <van-cell-group>
            <van-field
                label="报装人"
            />
            <van-field
                label="手机号"
            />
            <van-field
                label="区域选择"
                placeholder="请选择省、市、区县"
                readonly
                @click='selectArea'
            >
                <van-icon slot="icon" name="arrow" />
            </van-field>
            <van-field
                label="销售商"
                readonly
                placeholder="请选择销售商"
                @click='isShowSeller = true'
            >
                <van-icon slot="icon" name="arrow" />
            </van-field>
            <van-field
                label="安装地址"
            />
            <van-field
                label="商品详情"
            />
            <van-field
                label="预约时间"
                readonly
                placeholder='请选择预约时间'
                @click='timeParameter.isShowTime = true'
            >
                <van-icon slot="icon" name="arrow" />
            </van-field>
        </van-cell-group>
        <div class="btn-ground">
            <van-button type="primary" size='large' class='btn-custom'>确认</van-button>
            <van-button size='large' class="cancelBtn">取消</van-button>
        </div>
        <!-- 选择省、市、区 -->
        <van-popup v-model="isShowArea" position="bottom">
            <van-area :area-list="areaList" value="110101" title="区域选择" />
        </van-popup>
        <!-- 选择时间 -->
        <van-popup v-model="timeParameter.isShowTime" position="bottom">
            <van-datetime-picker
                v-model="timeParameter.currentDate"
                type="datetime"
                :min-date="timeParameter.minDate"
                :max-date="timeParameter.maxDate"
                title="预约时间"
            />
        </van-popup>
        <!-- 预约成功 -->
        <van-popup v-model="isShowSuccess" class="success-mask">
            <van-icon name="cross" size='30px' color='#e0e0e0' class="closeBtn" />
            <van-icon name="checked" size='120px' color='#ff4e1f' />
            <h3>预约成功</h3>
        </van-popup>
        <!-- 销售商列表 -->
        <van-popup v-model="isShowSeller" position="bottom">
            <van-picker :columns="sellerArr" show-toolbar title="销售商" />
        </van-popup>
    </div>
</template>
<script>
import areaList from '@/lib/ares.js';
export default {
    data(){
        return{
            isShowArea:false,
            areaList:areaList,
            timeParameter:{
                isShowTime:false,
                minHour: 10,
                maxHour: 20,
                minDate: new Date(),
                maxDate: new Date(2020, 12, 31),
                currentDate: new Date()
            },
            isShowSuccess:false,//是否显示成功
            sellerArr:['广东深圳福田区赛格广场店1','广东深圳福田区赛格广场店2','广东深圳福田区赛格广场店3','广东深圳福田区赛格广场店4'],//销售上列表
            isShowSeller:false,//是否显示销售上列表
        }
    },
    methods:{
        // 顶部返回按钮
        onClickLeft(){},
        // 选择省市区
        selectArea(){
            var _this = this;
            _this.isShowArea = true;
        }

    }
}
</script>
<style scoped lang="scss">
.bespeakFrom{
    position: absolute;width: 100%;height: 100%;top:0;left: 0;box-sizing: border-box;background-color: #ededed;padding-top:46px;
    .btn-ground{
        width: 350px;margin: 40px auto 0;
    }
    .cancelBtn{margin-top: 20px;}
    .success-mask{
        width: 80%;padding:40px 10px;display: flex;justify-content: center;align-items: center;flex-direction: column;
        h3{font-size: 16px;color: #202020;margin-top: 10px;}
        .closeBtn{position: absolute;top:10px;right: 10px;}
    }
}

</style>


