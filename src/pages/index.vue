<template>
  <div class="box">
    <SideMenu v-if="isBannerVisible" id="banner"/>
   <div class="navbar" :class="isBannerVisible?'active':'sidemenu'">
         <button class="navShow" :class="isBannerVisible?'clockbox':'navShow'" type="submit"  @click="isBannerVisible = !isBannerVisible">
       <span></span>
       <span></span>
       <span></span>
       <span></span>
    </button>
     <h1>Dashboard Vuejs</h1>
<div class="navmenu">
     <a href="https://stackblitz.com/edit/react-c7wxkn?file=README.md">Login </a>&nbsp;
      <router-link to="/Boards">Boards</router-link>
      </div>
   </div>
  <Slider/>
 </div>
</template>

<script lang="ts">
//https://wlada.github.io/vue-carousel-3d/guide/
import {defineComponent} from 'vue';
import { ScrollView } from '@progress/kendo-vue-scrollview';
import { RadioGroup } from '@progress/kendo-vue-inputs';
import Slider from '../components/Slider.vue';
import SideMenu from '../components/SideMEnu.vue';
//import { Button as KButton } from "@progress/kendo-vue-buttons";
export default defineComponent({
  name: "MyHome",
  components: {
  Slider,
  SideMenu,
},
   data() {
    return {
      enabled: true,
      isBannerVisible :false,
      dataItems: [
        {
          label: 'Enable arrows',
          value: true,
        },
        {
          label: 'Disable arrows',
          value: false,
        },
      ],
      items: [
        {
          title: 'Balloons',
          position: 1,
          url: 'https://demos.telerik.com/blazor-ui/images/photos/1.jpg',
        },
        {
          title: 'Forest',
          position: 2,
          url: 'https://demos.telerik.com/blazor-ui/images/photos/2.jpg',
        },
        {
          title: 'Flower',
          position: 3,
          url: 'https://demos.telerik.com/blazor-ui/images/photos/3.jpg',
        },
        {
          title: 'Painting',
          position: 4,
          url: 'https://demos.telerik.com/blazor-ui/images/photos/4.jpg',
        },
        {
          title: 'Grass',
          position: 5,
          url: 'https://demos.telerik.com/blazor-ui/images/photos/5.jpg',
        },
      ],
    };
  },
  methods: {
    onChange(e) {
      this.enabled = e.value;
    },
    
  },

})
</script>


<style scoped>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.navShow{
width:40px;
height:40px;
display:flex;
left:-90px;
flex-direction:column;
position:relative;
align-items:center;

}
.navShow:focus .clockbox{
transition:all 0.4 ease-out;
border-radius:20%;
transform:rotateZ(60deg) rotateX(450deg);
}
.navShow:focus .active{
transition:all 2s ease-out;
transform:translateX(150px) skewY(2px);
}
.navShow:focus >span:nth-child(1){
transition:all 0.4 ease-out;
transform-origin: center center;
transform: scale(1.2) ;
}
.navShow:focus >span:nth-child(2){
transition:all 0.5 ease-out;
transform-origin: center center;
transform: scale(.8);
}
.navShow:focus >span:nth-child(3){
transition:all 0.7 ease-out;
transform-origin: center center center;
transform: scale(.4) ;
}
.navShow:focus >span:nth-child(4){
transition:all 0.4 ease-out;
transform-origin: center center center;
transform: scale(0.2);
}
.navShow > span:nth-child(1) {
width:40px;
height:2px;
border-radius:15px;
position:relative;
padding-top:5px;
margin-bottom:3px;
background-color:white;
}
.navShow > span:nth-child(2) {
width:40px;
height:2px;
border-radius:15px;
position:relative;
margin-bottom:3px;
padding-top:5px;
background-color:white;
}
.navShow > span:nth-child(3) {
width:40px;
height:2px;
border-radius:15px;
margin-bottom:3px;
position:relative;
padding-top:5px;
background-color:white;
}
.navShow > span:nth-child(4) {
width:40px;
height:2px;
border-radius:15px;
margin-bottom:3px;
position:relative;
padding-top:5px;
background-color:white;
}
.box{
  width:100vw;
  height:100vh;
  position:relative;
  display:flex;
  flex-direction:column;
}
.card-boards{
  position:relative;
  margin-top:25px;
  display:flex;
  flex-direction:row;
  width:100vw;
  height:450px;
  padding:5px;
  background-color:#C5CAE9 ;
}
 .km-ios .checkout { background-color: green; }
    .km-android .checkout { background-color: red; }
.navbar{
position:fixed;
top:0;
left:0;
width:100vw;
height:70px;
background-color:#772540;
border-bottom:2px solid #c8c8c8;
color:"#c12845";
font-family:forte;
font-weight:200;
font-size:25px;
justify-content:space-around;
margin-bottom:45px;
}
.navmenu{
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin-left:10px;
  padding-left:3px;
  align-items:center;
}
.navmenu > a:hover {
color:#FED8DD
}
.gallery {
  display:block;
  position:absolute;
  color:#f12700;
   font-family:forte;
  font-weight:35px;
  font-size:26px;
  justify-content:center;
  align-items:center;
  margin-top:20px;
  background: #c8c8c8;
  width:100vw;
  height:100vh;
  padding-left:50px;
}




</style>
