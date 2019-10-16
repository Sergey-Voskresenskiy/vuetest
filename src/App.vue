<template>
  <div id="app">
    <nav>
      <router-link exact to="/" class="logo">Vue Test</router-link>
      <div class="links">
        <router-link exact to="/">Main</router-link>
        <router-link to="/quizs">Quiz</router-link>
        <router-link to="/bar">Bar</router-link>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="stylus">
  @import '../src/assets/styl/default.styl';

  .fade-enter-active
  .fade-leave-active
    transition opacity .5s
  .fade-enter
  .fade-leave-to
    opacity 0

  .block
    margin-top 60px
    display flex
    justify-content space-evenly
    align-items center
    flex-wrap wrap

  nav
    display flex
    justify-content space-between
    align-items center
    padding 20px
  .logo
    font-size 24px
    font-weight 900
    letter-spacing 4px
    color #2c3e50
    transition all .5s ease
    &:hover
      color #5f9ea0
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
