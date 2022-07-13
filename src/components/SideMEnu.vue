<template>
  <div class="sidemenu">
 <img src="https://vuejsforge.com/images/logo.svg" alt="vuejsforge" class="vuejsforge"/>
  <section class="divider"></section>
    <ul>
      <li> <a><i class="fa-solid fa-heart fa-beat" style="--fa-animation-duration: 0.5s;" ></i> Link Pages</a></li>

      <li><router-link to="/Boards">Boards</router-link></li>

      <li><a href="#">Contacts</a></li>
        <font-awesome-icon icon="fa-solid fa-user-secret" />

    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideMenu",
});
</script>

<style scoped>
.sidemenu {
  display: flex;
  position: absolute;
  flex-direction: column;
  background-color: #FED8DD;
  z-index: 999;
  top: 70px;
  left: 0;
  padding-top: 70px;
  padding-left: 40px;
  width: 350px;
  height: 100vh;
  font-size: 32px;
  font-weight: italic;
  font-family: "arial", sans-serif;
}
.divider{
    width:340px;
    height:3px;
    background-color: #ccc;
    margin-left: -35px;
}
.sidemenu :hover {
  padding-left: 10px;
  color: #1e000a;
  font-size: 27px;
  font-weight: bold;
}
.sidemenu :hover ul > li {
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  background-color: #c12a5d;
  
  width: 70px;
  height: 40px;
  padding: 5px;
  color: #6f1940;
  font-size: 24px;
  font-weight: bold;
}

.sidemenu > ul {
  padding-left: 10px;
  padding-right: 10px;
  background-color: transparent;
  width: 90%;
  height: auto;
  padding: 5px;
  color: #6f1940;
  font-size: 24px;
  font-weight: bold;
}
 ul > li {
  padding-left: 10px;
  padding-right: 10px;
  background-color: #e69db5;
  align-items: center;
  justify-content:center;
  text-align: center;
  width: 100%;
  height: 50px;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  border: 1px solid #d39eb0;
  color: #6f1940;
  font-size: 24px;
  font-weight: bold;
}
.sidemenu >h1{
    margin-top:-39px;
    margin-bottom:5px;
color:#FFF176;
}
h1 >span{
 color:#ff0000;

}
.sidemenu > .vuejsforge{
    position:relative;
    left:-35px;
    margin-top:-19px;
}
</style>
