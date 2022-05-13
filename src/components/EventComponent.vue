<template>
  <div class="eventBox">
    <label class="eventTitle"><b>Events</b></label>
    <div class="post"
    v-for="(post, index) in posts"
    v-bind:item="post"
    v-bind:index="index"
    v-bind:key="post._id"
   >
   <EventList :post="post"/>
  </div>
  </div>
</template>

<script>
import EventList from "./EventList.vue"
import PostService from "../PostService"
export default {
  name:'EventComponent',
  components:{
    EventList
  },
  data(){
    return{
      posts:[],
      error:'',
      text:'',
      duration:''
    }
  },
  async created(){
    try{
this.posts=await PostService.getPosts();
    }catch(err){
this.error=err.message
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bookBox{
  background-color: bisque;
  padding:1em;
  color:gray;
}
.eventTitle{
font-size: 50px;;
padding: 10px;
color: #F6AE2D;
}
</style>
