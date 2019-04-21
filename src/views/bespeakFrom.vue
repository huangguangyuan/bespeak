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
                placeholder='请填写报装人'
            />
            <van-field
                label="手机号"
                placeholder='请填写手机号'
            />
            <van-field
                label="区域选择"
                placeholder="请选择省、市、区县"
                readonly
                @click='selectArea'
                v-model="info.area"
            >
                <van-icon slot="icon" name="arrow" />
            </van-field>
            <van-field
                label="安装地址"
                type="textarea"
                rows="1"
                autosize
                placeholder='请填写安装地址'
                
            />
            <van-cell title="商品详情" is-link to='/commodityDetails'/>
            <van-field
                label="预约时间"
                readonly
                placeholder='请选择预约时间'
                @click='timeParameter.isShowTime = true'
                v-model="info.appoint_time"
            >
                <van-icon slot="icon" name="arrow" />
            </van-field>
        </van-cell-group>
        <div class="btn-ground">
            <van-button type="primary" size='large' class='btn-custom' @click='submitFn'>确认</van-button>
            <van-button size='large' class="cancelBtn">取消</van-button>
        </div>
        <!-- 选择省、市、区 -->
        <van-popup v-model="isShowArea" position="bottom">
            <van-area :area-list="areaList" value="110101" title="区域选择" @confirm='getArea' @cancel='isShowArea = false' />
        </van-popup>
        <!-- 选择时间 -->
        <van-popup v-model="timeParameter.isShowTime" position="bottom">
            <van-datetime-picker
                v-model="timeParameter.currentDate"
                type="datetime"
                :min-date="timeParameter.minDate"
                :max-date="timeParameter.maxDate"
                title="预约时间"
                @cancel='timeParameter.isShowTime = false'
                @confirm = 'getTime'
            />
        </van-popup>
        <!-- 预约成功 -->
        <van-popup v-model="isShowSuccess" class="success-mask">
            <van-icon name="cross" size='30px' color='#e0e0e0' class="closeBtn" />
            <van-icon name="checked" size='120px' color='#ff4e1f' />
            <h3>预约成功</h3>
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
            info:{
                username:'',
                phone:'',
                area:'',
                address:'',
                install_address:'',
                install_orders_id:[],
                appoint_time:''
                
            }//表单信息
        }
    },
    mounted(){
        var _this = this;
    },
    methods:{
        // 顶部返回按钮
        onClickLeft(){
            this.$router.go(-1);
        },
        // 选择省市区
        selectArea(){
            var _this = this;
            _this.isShowArea = true;
        },
        // 获取地区
        getArea(res){
            var _this = this;
            _this.isShowArea = false;
            
            for(var i = 0;i<res.length;i++){
                _this.info.area+= res[i].name;
                _this.info.area += " ";
            }
            console.log(_this.info.area);
        },
        // 获取时间
        getTime(res){
            var _this = this;
            _this.timeParameter.isShowTime = false;
            _this.info.appoint_time = _this.$toolFn.timeFormat(res);
        },
        // 提交表单
        submitFn(){
            alert('提交内容');
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


