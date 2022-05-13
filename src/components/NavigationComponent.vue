<template>
 <div class="navigation_bar">
   <nav id="myTopnav">
            <div class="dropDownIcon"><i class="fa fa-bars "></i></div>
            <ul class="dropDownMenu">               
                <li><a href="#">Home</a></li>
                <li><a href="../App.vue/aboutUs">About Us</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#members">Members</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#feedbacks">Feedbacks</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>
        </nav>
 </div>
</template>

<script>
export default {
  name: "NavigationComponent"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#myTopnav{
margin: 1px auto;
overflow: auto;
padding: 1px;
border-radius: 5px;
}
.dropDownIcon{
    float: right;
    padding: 5px;
}
nav{
    background-color: #009FFD;
    grid-area:nav;
}

ul {
    list-style-type: none;
    float: right;
    
  }
  li{
    display: inline-block;
    color: white;
   
   
  }
  .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 20px;
  }
 li a {
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 27px;
    padding: 5px;
   
  }
 a.active {
    color:white;
    transition: .5s;
}
a:hover {
    color: #5DFDCB;
}

@media only screen and (max-width:500px){
  nav{
    background-color:#009FFD
} 

.active{
    display: none;
}
ul{
    width: 100%;
    float: right;
    left:0;
    text-align: center;    
}
nav ul li a {
    color: white;
    font-size: 20px;
  }
nav ul li{
    display: block;    
}
nav.responsive {position: relative;}
nav.responsive .icon {
  position: absolute;
  right: 0;
  top: 0;
}
.topnav.responsive a {
  float: none;
  display: block;
  text-align: left;
} 
}
</style>
