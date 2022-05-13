<template>
<div class="container">
   <div class="navigation_bar">
   <nav id="myTopnav">
            <div class="dropDownIcon"><i class="fa fa-bars "></i></div>
            <ul class="dropDownMenu">               
                <li><a href="#">Home</a></li>
                <li><a href="#aboutUs">About Us</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#members">Executive Members</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>
        </nav>
 </div>
  <div class="about" id="aboutUs"><AboutUs/></div>
  <div class="event" id="events"><EventComponent/></div> 
  <div class="member" id="members"><MemberComponent/></div> 
  <div class="gallery" id="gallery"><GalleryComponent/></div>  
  
</div>
<footer>
           

                <h3>Contact US</h3>
                <p><b>sshre7@unh.newhaven.edu</b><br>
                 <b>sshre8@unh.newhaven.edu</b><br>
                 <b>smbhu@unh.newhaven.edu</b><br>
                              </p>

          
        </footer>
</template>

<script>
import EventComponent from './components/EventComponent.vue'
import AboutUs from './components/AboutUs.vue'
import MemberComponent from './components/MemberComponent.vue'
import GalleryComponent from './components/GalleryComponent.vue'
export default {
  name: 'App',
  components: {
     EventComponent,
      AboutUs,
      MemberComponent,
      GalleryComponent
  }
}
</script>

<style>
#myTopnav{
margin: 1px auto;
overflow: auto;
padding: 5px;
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
    padding: 7px;
   
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
.container {
  margin: 1px auto;
  overflow: auto;
  padding: 1px;
  border-radius: 5px;
}
.about{
  height: 200px;
  margin-top: 50px;
}
.event{
  margin-top:300px;
   margin-bottom:10px;
  padding: 10px;
}
.member{
  height: 300px;
  margin-top: 25px;
 padding: 10px;
}
.gallery{
  height: 300px;
  margin-top: 20px;
 padding: 10px;
}
footer{
    background-color:#009FFD;
    grid-area: footer;
    text-align: center;
    height:130px;
    color:rgb(226, 213, 213);
    font-size: 20px;
}
</style>
