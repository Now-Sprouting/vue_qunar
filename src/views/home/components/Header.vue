<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont iconfanhui back-icon"></div>
    </div>
    <div class="header-input">
      <span class="iconfont iconfangdajing"></span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont iconsanjiao arrow-icon"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  computed: {}
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.header {
  display: flex;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    min-width: 1.04rem;
    padding: 0 0.1rem;
    float: right;
    text-align: center;
    color: #fff;

    .arrow-icon {
      margin-left: -0.04rem;
      font-size: .06rem;
    }
  }
}
</style>
