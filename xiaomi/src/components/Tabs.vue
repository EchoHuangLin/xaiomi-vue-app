<template>
  <nav class="tabs border-top">
    <li class="tab">
      <router-link to="/home">
        <i></i>
        <span>首页</span>
      </router-link>
    </li>

    <li class="tab">
      <router-link to="/category">
        <i></i>
        <span>分类</span>
      </router-link>
    </li>

    <li class="tab">
      <router-link to="/cart">
        <i></i>
        <span>购物车</span>
      </router-link>
    </li>

    <li class="tab">
      <router-link to="/mine">
        <i></i>
        <span>个人</span>
      </router-link>
    </li>
  </nav>
</template>

<script>
export default {
  name: "app-tabs"
};
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  height: 49px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  .tab {
    flex: 1;
    a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 4px;
      box-sizing: border-box;
      i {
        display: block;
        background: url(../assets/home.png) no-repeat;
        background-size: 25px;
        width: 23px;
        height: 23px;

      }
      span {
        display: block;
        color: #666;
        font-size: 14px;
      }
      &.router-link-active span {
        color: #ff6700;
      }
    }
  }
    .tab:nth-child(1) {
    a {
      &.router-link-active i {
        background-image: url(../assets/home-a.png);
      }
    }
  }
  .tab:nth-child(2) {
    a {
      i {
        background: url(../assets/cate.png) no-repeat;
        background-size: 23px;
      }
      &.router-link-active i {
        background-image: url(../assets/cate-a.png);
      }
    }
  }
  .tab:nth-child(3) {
    a {
        i{
            background-image: url(../assets/cart.png);
            background-size: 23px;
        }
      &.router-link-active i {
        background-image: url(../assets/cart-a.png);
      }
    }
  }
  .tab:nth-child(4) {
    a {
        i{
            background-image: url(../assets/mine.png);
        }
         &.router-link-active i {
        background-image: url(../assets/mine-a.png);
      }
    }
  }
}


</style>

