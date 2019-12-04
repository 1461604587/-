<template>
  <div class="home">
    <div class="header">
     <p><input type="text" v-model="txt"><span @click="sousuo">搜索</span></p> 
    </div>
 <div class="main">
   <router-view></router-view>
 </div>
 <div class="footer">
   <router-link to="/shou">首页</router-link>
   <router-link to="/cart">啦啦</router-link>
 </div>
  </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
  data(){
return{
txt:''
}
  },
  methods:{
   ...mapActions(['setKeyword']),
sousuo(){
  this.setKeyword=this.txt;
}
  }
}
</script>
<style lang="scss">
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header{
      width: 100%;
      height: 50px;
      input{
        width: 100%;
        height: 100%;
      }
    }
    .main{
      flex: 1;
      width: 100%;
      overflow: auto
    }
    .footer{
      width: 100%;
      height: 50px;
      display: flex;
      a{
        flex: 1;
        line-height: 50px;
        text-align: center;
        &.router-link-exact-active{
          background: red;
          color: white;
        }
      }
    }
  }
</style>

