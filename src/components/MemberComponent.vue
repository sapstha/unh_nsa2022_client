<template>
<div class="memberContainer">
    <div id="memberTitle"><b>Executive Boards</b></div>
    <div id="member1">
        <label class="memName"><b>Anisha Shrestha</b></label><br>
        First President<br>
        MS in Business Analytics<br>
        enisha@unh.newhaven.edu
    </div>
    <div id="member2">
          <label class="memName"><b>Shambhu Adhikari</b></label><br>
        First Vice President<br>
        MS in Data Science<br>
        shambhu@unh.newhaven.edu
    </div>
    <div id="member3">
        <label class="memName"> <b>Sapana Shrestha</b></label><br>
        First Secretary<br>
        MS in Computer Science<br>
        sap@unh.newhaven.edu
    </div>
    <div id="member4">
       <label class="memName">  <b>Jyoti Bhandari</b></label><br>
        First Treasurer<br>
        MS in Data Science<br>
        jyoti@unh.newhaven.edu
    </div>
    <div id="member5">
        <label class="memName"> <b>Saurav Shrestha</b></label><br>
        First Program Coordinator<br>
        MBA <br>
        saurav@unh.newhaven.edu
    </div>
</div>

</template>
<script>
export default({
    name:'MemberComponent',
})
</script>
<style scoped>
.memberContainer{
    height:100vh;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: /*1*/0.1fr /*2*/0.2fr;;
    grid-template-areas:
    "memberTitle memberTitle memberTitle memberTitle memberTitle"
    "member1 member2 member3 member4 member5";
     grid-gap:1.5rem;
}

#member1{
    background-color: #009FFD;
    grid-area: member1;
    border-radius: 5%;
    padding: 1px;
     align-items: center;
      text-align: center;
         justify-content: center;
         font-size: 25px;
}
#member2{
    background-color: #009FFD;
    grid-area: member2;
    border-radius: 5%;
    padding: 1px;
    align-items: center;
      text-align: center;
         justify-content: center;
         font-size: 25px;
}
#member3{
    background-color:#009FFD;
    grid-area:member3;
    border-radius: 5%;
    padding: 1px;
    align-items: center;
      text-align: center;
         justify-content: center;
         font-size: 25px;
}
#member4{
    background-color: #009FFD;
    grid-area: member4;
    border-radius: 5%;
    padding: 1px;
    align-items: center;
      text-align: center;
         justify-content: center;
         font-size: 25px;
}
#member5{
    background-color: #009FFD;
    grid-area:member5;
    border-radius: 5%;
    padding: 1px;
    align-items: center;
      text-align: center;
         justify-content: center;
         font-size: 25px;
}
#memberTitle{
    grid-area: memberTitle;
  
    font-size: 50px;;
padding: 10px;
color: #F6AE2D;
 text-align: center;
}
.memName{
    font-size: 32px;;
   
}
</style>
