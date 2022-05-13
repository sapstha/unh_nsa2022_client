<template>
<div class="aboutContainer">
<p id="name"><b>University of New Haven<br>
Nepalese Student Association</b></p>

</div>
<div>
<div class="aboutUstitle"><b>About US</b></div>
<div class="desc">
        UNH NSA is a non-profit student organization run by Nepalese students at University of New haven.
        We thrive to promote Nepalese culture toUNH Family through regular participation in cultural, 
        educational and social events. We aim to be a to-go place for international students, one where 
        they can smile, laugh and interact through their ideas and stories. If you want to explore Nepalese 
        culture and enjoy Nepalese cordiality, you are welcome to join us.
    </div>
</div>
</template>
<script>

export default({
    name:'AboutUs'
})
</script>
<style>
.aboutContainer{ 
  height:300px;  
  background: linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),url("../assets/img/nepal.jpg") no-repeat center;
  background-size:contain;
  background-size:cover;
  
}

.aboutUstitle{
  padding: 10px;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  font-size: 50px;;
padding: 10px;
color: #F6AE2D;

}
.desc{
    font-size: 20px;
    padding: 10px;
}
#name{
    font-size:50px;
    text-align:right;
    color:white;
    padding-top: 50px;
    padding-right: 10px;
    
   
}
</style>
