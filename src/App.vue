<template>
  <div id="app">
    <hr />
    <h4>router</h4>
    <div class="block">
      <div class="links">
        <router-link exact to="/">Main</router-link>
        <router-link to="/foo">Foo</router-link>
        <router-link to="/bar">Bar</router-link>
      </div>
    </div>
    <hr />
    <router-view></router-view>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="stylus">
  @import '../src/assets/styl/default.styl';

  .block
    margin-top 60px
    display flex
    justify-content space-evenly
    align-items center
    flex-wrap wrap

 .links
    display flex
    justify-content space-around;
    align-items center
    width 100%
    max-width 300px
    a
      color #2c3e50
      transition color .5s ease
      &:hover
        color #5f9ea0
    .router-link-active
      color #5f9ea0
      font-weight bold
</style>
