<template>
<header>
<h1>AWA</h1>
  <div id="nav">
    <router-link to="/">Home</router-link> 
    <router-link to="/services">Nos services</router-link>
    <router-link to="/about">About</router-link> 
   
  </div>
</header>
<router-view />

</template>

<style scoped>

@font-face {
  font-family: myfont;
  src: url("../police/alfa-slab-one/AlfaSlabOne-Regular.ttf");
}
template{
  background-color: #D7D7D7D7;
}
header{
background-color: $headercolor;
}
h1{
  font-family: myfont;
  color: $textcolor;
  display: flex;
  justify-content: center;
}
#nav{

display: flex;
justify-content: space-around;
}
a{
  text-decoration: none;
  font-family: myfont;
  color: black;
}

</style>
