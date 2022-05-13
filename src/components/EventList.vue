<template>
   <p class="error" v-if="error">{{ error }}</p>
     <div class ="post-container">
     
      <div class="title"><b>{{ post.title}}</b></div>
      <hr>
      <div class="mainInfo">
       <label class="date">Posted On: {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/
       ${post.createdAt.getFullYear()}` }}</label>
       <div><p class="text">{{ post.text }}</p></div>
       </div>
       <div class="addInfo">
       <label>Duration: {{ post.duration }}</label><br>
       <label>Location:{{ post.location }}</label><br>
       <label>Status:{{ post.eventStatus}}</label>
       </div>
    
     </div>
</template>

<script>


export default {
 name: "EventList",
  props: {
    post: [],
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at{
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15 px 5px 15px;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
.title{
  font-size: 32px;
  padding: 10px;
  color:black;
  font-family: 'Courier New', Courier, monospace;
}
.mainInfo{
  padding: 10px;
  color:rgb(83, 83, 145);
  font-size: 22px;
}
.addInfo{
  padding: 10px;
  color:blue;
  font-size: 20px;
}
.date{
  color: rgb(189, 57, 57);
}
</style>
