<template>
  <div class="home">
    <img alt="homepage" src="../assets/AfriknFusion_AfriknMixAgneau.png">
    <acceuil />
    <HelloWorld msg="Bienvenue" /> 
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import acceuil from "@/components/acceuil.vue";

export default {
  name: "Home",
  components: {
    acceuil
  },
};
</script>

<style scoped>
img{
  width: 100%;
}
</style>
