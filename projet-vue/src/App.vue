<template>
<header>
    <h1>AWA</h1>
</header>
<nav>
        <ul class="desktop">
            <li><a href="/pages/services.html">Nos Services</a></li>
            <li><a href="">Nos Plats</a></li>
            <li><a href="">Nos Boissons</a></li>
            <li><a href="">Vente a Emporter</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>
    <img src="projet-vue/src/assets/AfriknFusion_AfriknMixAgneau.png" alt="homepage">
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
</template>

<style lang="scss">
@mixin dajc{
  display: flex;
  align-items: center;
  justify-content: center; 
}
@font-face {
    font-family: myfont;
    src:url(/projet-vue/police/alfa-slab-one/AlfaSlabOne-Regular.ttf);
  }
header{
    background-color: $headercolor;
    height: 60px;
    padding: 10px;
    margin-bottom: 1px;
  }
  header h1 {
    color: $textcolor;
    font-family: myfont;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem; 
  }
  nav a{
      text-decoration: none;
      color: black;
      font-family: Arial;
      font-weight: bold;
      font-size: 1rem;
      transition:1s ease-in-out;
      /* transform: .5s scale(-1); */
    }
    nav ul {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-around;
      list-style-type: none;
      margin-top: -20px;
    } 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
