<template>
  <div class="box">
 
 <div class="box-boards">
     
     <h1> <span class="title">&nbsp;Boards</span></h1>
     <br/>
 <ul>
  <li><section><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvmnaaxm1pfLsA0COwiSem29s5hIdqSQw0lOHXDLSBLcDeiwNOWmRL_1zrvz01Ew2vws&usqp=CAU"/>
  <h3>Board One</h3>
  </section></li>
              
  <li><section><img src="https://avatars.slack-edge.com/2019-07-11/680425406306_ed2e096c273248ab71b5_512.png"/>
  <h3>Board One</h3>
  </section></li>
  <li><section><img src="https://www.openasapp.com/wp-content/uploads/2020/05/dashboard_2_select_chart_tpe-1-1024x656.png" width="300" height="400"/>
  <h3>Board One</h3>
  </section></li>

  <li v-if="isBannerVisible" id="banner"><section><img src="https://dashboardbuilder.net/images/php-dashboard.png"/>
  <h3>Board One</h3>
  </section></li>
  </ul>
 
<button type="submit" class="submit" @click="isBannerVisible = true">new +</button>

 </div>
 </div>
  
</template>

<script lang="ts">

import {defineComponent,ref} from 'vue';

export default defineComponent({
  name: "MyBoard",
  components: {},
   data() {

    return {
      
      enabled: true,
      isBannerVisible:false,
      items: [{ id:1, message: `<div>{{hello}}</div>` }, {id:2, message: `<div>{{hello}}</div>` }]
  
   
    };
  },
   
  methods: {
    onChange(e) {
      this.enabled = e.value;
    },
      showBanner() {
            this.isBannerVisible = true        
        },
    sendNew(){
         return `
            <template id="banner">
                <div class="banner-page">
                    <sample-component>
                        <p> hello </p>
                    </sample-component>
                </div>
            </template>`; 
    }
  },

})
</script>


<style scoped>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
span.title{
    color:#120000;
    font-size:30px;
    fontweight:bold;
    font-family:forte;

}
.submit{
    width:78px;
    height:120px;
    position:relative;
    align-items:center;
    justify-content:center;
    background-color:#c1c1c1;
     border-top-right-radius:25px;
      border-bottom-right-radius:25px;
right:0;
top:25%;
}
.box{
    width:100vw;
    position: relative;
    display:flex;
    justify-content: center;
    align-items:center;
    margin-top : 75px;  
}
.box-boards{
    position: relative;
    display:flex;
    flex-direction:row;
    overflow: auto;
    width: 98vw;
    border-radius:15px;
    border:2px solid #c9c9c9;
    height:350px;
    margin-left:10px;
    background-color:#A9CED9;

}
ul{
    display: flex;
    flex-direction:row;
}
li > section{
    margin:25px;
    width:250px;
    height:240px;
    background-color:#bbb;
}
 section> img{
    width:100%;
    height:100%;
}


</style>
