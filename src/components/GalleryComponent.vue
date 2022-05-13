<template>
<div class="galleryContainer">
    <div id="galleryTitle"><b>Gallery</b></div>
    <div id="img1">
        <img src="../assets/img/img1.jpg">
    </div>
    <div id="img2">
        <img src="../assets/img/img2.jpg">
    </div>
    <div id="img3">
        <img src="../assets/img/img3.jpg">
    </div>
    <div id="img4">
        <img src="../assets/img/img4.jpg">
    </div>
    <div id="img5">
        <img src="../assets/img/img5.jpg">
    </div>
    <div id="img6">
        <img src="../assets/img/img6.jpg">
    </div>
     <div id="img7">
        <img src="../assets/img/img7.jpg">
    </div>
    <div id="img8">
        <img src="../assets/img/img8.jpg">
    </div>
</div>

</template>
<script>
export default({
    name:'GalleryComponent',
})
</script>
<style scoped>
.galleryContainer{
    height:100vh;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: /*1*/0.1fr /*2*/0.2fr /*3*/0.2fr;
    grid-template-areas:
    "galleryTitle galleryTitle  galleryTitle galleryTitle galleryTitle"
    "img1 img2 img3 img4 img5"
    "img6 img7 img8  img8 img8  ";
     grid-gap:1.5rem;
}
img{
    width:400px;
    height:300px;
}
#img1{
    grid-area: img1;
    border-radius: 5%;
    padding: 10px;

}
#img2{
    grid-area: img2;
    border-radius: 5%;
    padding: 10px;
}
#img3{
   grid-area: img3;
    border-radius: 5%;
    padding: 10px;
}
#img4{
    grid-area: img4;
    border-radius: 5%;
    padding: 10px;
}
#img5{
    grid-area: img5;
    border-radius: 5%;
    padding: 10px;
}
#img6{
    grid-area: img6;
    border-radius: 5%;
    padding: 10px;
}
#img7{
    grid-area: img7;
    border-radius: 5%;
    padding: 10px;
}
#img8{
    grid-area: img8;
    border-radius: 5%;
    padding: 10px;
}
#galleryTitle{
    grid-area: galleryTitle;  
    font-size: 50px;;
padding: 10px;
color: #F6AE2D;
}

</style>
