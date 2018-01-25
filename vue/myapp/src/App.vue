<template>
  <div id="app">

    <router-view name= "header"></router-view>

    <router-view name = "content"></router-view>

    <router-view name = "footer"></router-view>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
@import "~@/lib/reset.scss";

html,body,#app{
	@include rect(100%,100%);
	}


#app{
	@include flexbox();
	@include flex-direction(column);
	@include align-content(space-around);
	@include background-color(#f5f5f5);
	
	header{
        height:0.5rem;
        @include flexbox();
        @include align-items(center);
         
    }	 
    .content{
    	flex:1;
    	overflow:auto;
    }
}
    


</style>
