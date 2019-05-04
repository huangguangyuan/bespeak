<template>
    <div class="bespeakDetails">
        <van-nav-bar
            title="预约详情"
            left-arrow
            fixed
            @click-left="onClickLeft"
        />
        <div class="container">
            <van-steps class="steps" direction="vertical" active-color='#ff541f'>
                <van-step>
                    <h3>维 修</h3>
                    <p>工作人员将于24小时内和您取得联系，请耐心等待...工作人员将于24小时内和您取得联系，请耐心等待...</p>
                    <van-tag plain type="danger" size='large'>待受理</van-tag>
                    <p>03-04 19:23</p>
                </van-step>
                <van-step>
                    <h3>维 修</h3>
                    <p>工作人员将于24小时内和您取得联系，请耐心等待...</p>
                    <van-tag plain type="danger" size='large'>待受理</van-tag>
                    <p>03-04 19:23</p>
                </van-step>
                <van-step>
                    <h3>维 修</h3>
                    <p>工作人员将于24小时内和您取得联系，请耐心等待...</p>
                    <van-tag plain type="danger" size='large'>待受理</van-tag>
                    <p>03-04 19:23</p>
                </van-step>
            </van-steps>
        </div>
    </div>
</template>
<script>
import qs from 'qs';
export default {
    name:'bespeakDetails',
    data(){
        return{
            
        }
    },
    mounted(){
        this.getDetailsFun();
    },
    methods:{
        onClickLeft(){
            this.$router.push({path:'/'});
        },
        getDetailsFun(){
            var _this = this;
            var reqUrl = '/index/appointment/myOrderList';
            var data = {};
            _this.$http.get(reqUrl,qs.stringify(data)).then(res => {
                console.log(res.data);
            })
        }
    }
}
</script>
<style scoped lang="scss">
.bespeakDetails{
    position: absolute;width: 100%;height: 100%;top:0;left: 0;box-sizing: border-box;background-color: #ededed;padding-top:46px;
    .container{
        background-color: #ffffff;border-bottom: 1px #e0e0e0 solid;border-top: 1px #e0e0e0 solid;padding:20px 0;
        .steps{
            h3{font-size: 14px;}
            p{margin: 10px 0;}
        }
    }
}
</style>







