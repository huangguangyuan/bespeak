<template>
  <div class="bespeakDetails">
    <van-nav-bar title="预约详情" left-arrow fixed @click-left="onClickLeft"/>
    <ul class="container">
      <li v-for="item in dataList">
        <div class="timer">{{item.appoint_time}}</div>
        <div class="center">
          <span class="line"></span>
          <img src="@/assets/images/ico-repair.png" alt>
        </div>
        <div class="content">
          <h5>{{item.install_type==1?'安装':'维修'}}</h5>
          <p>{{item.txt}}</p>
          <van-button plain size="small" @click="clickFun(item)">{{item.install_status_words}}</van-button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import qs from "qs";
export default {
  name: "bespeakDetails",
  data() {
    return {
      dataList: []
    };
  },
  mounted() {
    this.getDetailsFun();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    getDetailsFun() {
      var _this = this;
      var reqUrl = "/index/appointment/myOrderList";
      var data = {};
      _this.$http.get(reqUrl, qs.stringify(data)).then(res => {
        if (res.data.code == 200) {
          _this.dataList = res.data.data.map(item => {
            switch (item.install_status) {
              case 0:
                item.install_status_words = "未开始";
                break;
              case 1:
                item.install_status_words = "已接单";
                break;
              case 2:
                item.install_status_words = "待评价";
                break;
              case 3:
                item.install_status_words = "已完成";
                break;
            }

            if (item.install_status == 0) {
              item.txt = "工作人员将于24小时内和您取得联系，请耐心等待...";
            } else {
              item.txt = `为您派送工程师${item.installer_name}  于${
                item.appoint_time
              }到${item.install_address}安装！`;
            }
            return item;
          });
        } else {
          _this.$dialog
            .alert({
              title: "提 示",
              message: "您还没绑定手机号，现在去绑定"
            })
            .then(() => {
              _this.$router.push({ path: "/binding" });
            });
        }
      });
    },
    clickFun(res) {
      var _this = this;
      if (res.install_status == 2) {
        _this.$store.commit({
          type: "saveEvaluateInfo",
          evaluateInfo: res
        });
        _this.$router.push({ path: "/evaluateFrom" });
      }
    }
  }
};
</script>
<style scoped lang="scss">
.bespeakDetails {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  background-color: #ededed;
  padding-top: 46px;
  .container {
    background-color: #ffffff;
    border-bottom: 1px #e0e0e0 solid;
    border-top: 1px #e0e0e0 solid;
    padding: 20px 0;
    li {
      display: flex;
      box-sizing: border-box;
      padding: 0 10px;
      .timer {
        font-size: 12px;
        width: 160px;
        text-align: right;
      }
      .center {
        margin: 0 10px;
        position: relative;
        span {
          position: absolute;
          width: 2px;
          height: 100%;
          left: 50%;
          margin-left: -1px;
          top: 0;
          background-color: #e0e0e0;
        }
      }
      img {
        width: 23px;
        position: relative;
      }
      .content {
        padding-bottom: 30px;
        width: 500px;
        h5 {
          font-size: 14px;
        }
        p {
          font-size: 12px;
          margin: 10px 0;
        }
      }
    }
  }
}
</style>







