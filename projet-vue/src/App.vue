<template>
  <div id="nav">
    <h1>AWA</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/services">Nos services</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: myfont;
  src: url("../police/alfa-slab-one/AlfaSlabOne-Regular.ttf");
}
h1{
  font-family: myfont;
  color: $textcolor;
  display: flex;
  justify-content: center;
  height: 60px;
}
#nav{
background-color: $headercolor;
}

</style>
