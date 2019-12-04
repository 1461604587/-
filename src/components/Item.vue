<template>

<div>
  <div class="box">
    
    <div class="item">
      <div class="one">
        <img :src="item.img" alt="">
      </div>
      <div class="two">
        <h2>{{item.title}}</h2>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import Ipt from "../components/Ipt"
export default {
props:["item"]
}
</script>

<style lang="scss">
.box{
  width: 100%;
  height: 100%;
  input{
    width: 100%;
    height: 50px;
    border: 1px solid black;
  }
  .item{
    width: 100%;
    height: 200px;
    display: flex;
    border-bottom: 2px solid red;
    .one{
      flex: 6;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .two{
      flex: 4;
      h2{
        line-height: 200px;
        text-align: center;
      }
    }
  }
}
</style>