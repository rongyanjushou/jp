<template>
  <header>
  	<router-link to="/store" class="iconfont icon-fanhui" tag="i"></router-link>
        <h2>{{arr1[this.$route.params.id].name}}</h2>
  </header>
</template>
<script src="./script.js"></script>
<style  scoped lang="scss" src="./style.scss"></style>