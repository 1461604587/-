<template>
  <div>
    <Item v-for="item in lala" :key="item.id" :item="item"/>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
import Item from "../components/Item"
export default {
components:{
  Item
},
computed:{
...mapState(['lala'])
},
created(){
  this.getList()
},
methods:{
  ...mapActions(['getList'])
}
}
</script>

<style>

</style>