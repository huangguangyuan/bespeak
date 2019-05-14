<template>
  <div class="commodityDetails">
    <!-- 顶部信息 -->
    <van-nav-bar title="商品详情" left-arrow fixed @click-left="onClickLeft"/>
    <!-- banner -->
    <div class="banner">待受理</div>
    <!-- 内容 -->
    <ul class="list">
      <li v-for="(item,index) in queryTableDate" :key="index">
        <div class="container">
          <div class="info">
            <van-icon name="map-marked" color="#fa4521" size="28px"/>
            <div class="info-right">
              <p>
                <span>收货人：{{item.get_goods_name}}</span>
                <span>{{item.phone}}</span>
              </p>
              <p>{{item.address}}</p>
            </div>
          </div>
          <div class="proInfo">
            <p>
              <span>ID 号: {{item.id}}</span>
              <span>产品名称: {{item.goods_name}}</span>
              <span>产品型号: {{item.pro_siez}}</span>
              <span>产品颜色: {{item.color}}</span>
            </p>
            <van-checkbox v-model="item.checked" checked-color="#fb2812"></van-checkbox>
          </div>
        </div>
        <div class="remarks">
          <p>买家留言：{{item.buyer_msg}}</p>
          <p>卖家备注：{{item.buyer_remarks}}</p>
        </div>
        <div class="logistics">
          <p>物流状态：{{item.express_status}}</p>
        </div>
      </li>
    </ul>
    <!-- 分页 -->
    <div class="pagination">
      <van-pagination
        v-model="currentPage"
        :page-count="pageTotal"
        :show-page-size="pageSize"
        force-ellipses
      />
    </div>
    <!-- 按钮 -->
    <div class="btn-ground">
      <van-button type="primary" size="large" class="btn-custom" @click="confirmFn">确认</van-button>
      <van-button size="large" class="cancelBtn">取消</van-button>
    </div>
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      dataList: [], //数据列表
      currentPage: 1, //当前页数
      pageSize: 3, //页面数据多少
      total: 0 //总计
    };
  },
  mounted() {
    var _this = this;
    _this.getDate();
  },
  methods: {
    // 获取数据列表
    getDate() {
      var _this = this;
      var reqUrl = "/index/appointment/get_online_order_list";
      var data = {};
      _this.$http
        .post(reqUrl, data)
        .then(res => {
          if (res.data.code == 200) {
            _this.dataList = res.data.data;
            _this.dataList.checked = false;
            _this.total = _this.dataList.length;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 确认
    confirmFn() {
      var _this = this;
      var idList = _this.dataList
        .filter(item => {
          return item.checked;
        })
        .map(item => {
          return item.id;
        });

      if (idList.length == 0) {
        _this.$dialog.alert({
          title: "提 示",
          message: "请选择商品~"
        });
        return false;
      }
      _this.$store.commit({
        type: "getOrdersId",
        installOrdersId: idList
      });
      _this.$router.go(-1);
    },
    // 返回按钮
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  computed: {
    queryTableDate() {
      var _this = this;
      var begin = (_this.currentPage - 1) * _this.pageSize;
      var end = _this.currentPage * _this.pageSize;
      return _this.dataList.slice(begin, end);
    },
    pageTotal() {
      var _this = this;
      var pageTotal = Math.ceil(_this.total / _this.pageSize);
      return pageTotal;
    }
  }
};
</script>
<style scoped lang="scss">
.commodityDetails {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  background-color: #ededed;
  padding-top: 46px;
  .banner {
    width: 100%;
    height: 75px;
    background-color: #ff9600;
    text-align: center;
    line-height: 75px;
    font-size: 25px;
    color: #ffffff;
  }
  .list {
    li {
      margin-top: 10px;
    }
    .container {
      padding: 0 13px;
      background-color: #ffffff;
      .info {
        display: flex;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px #e0e0e0 solid;
        .info-right {
          margin-left: 15px;
          p {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: #202020;
          }
          p:nth-child(2) {
            margin-top: 5px;
          }
        }
      }
      .proInfo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        p {
          font-size: 14px;
          color: #202020;
          span {
            display: block;
            margin-top: 5px;
          }
        }
      }
    }
    .remarks {
      background-color: #ffffff;
      min-height: 120px;
      padding: 13px;
      border-top: 1px #e0e0e0 solid;
      border-bottom: 1px #e0e0e0 solid;
      margin-top: 10px;
      p {
        font-size: 14px;
        color: #202020;
      }
    }
    .logistics {
      background-color: #ffffff;
      min-height: 229px;
      padding: 13px;
      border-top: 1px #e0e0e0 solid;
      border-bottom: 1px #e0e0e0 solid;
      margin-top: 10px;
      p {
        font-size: 14px;
        color: #202020;
      }
    }
  }
  .btn-ground {
    width: 350px;
    margin: 40px auto;
    .cancelBtn {
      margin-top: 20px;
    }
  }
  .pagination {
    width: 350px;
    margin: 40px auto 0;
    background-color: #ffffff;
  }
}
</style>


