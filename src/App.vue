<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <h2>{{ fullTime }}</h2>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => {
    return {
      title: "test",
      fullTime: ""
    };
  },
  mounted() {
    const date = new Date();
    this.fullTime = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }
};
</script>
<style lang="stylus">

@import '../src/assets/styl/default.styl';

</style>
