<template>
  <div id="app">
    <div id="nav">
      <Header>
         <Registration slot="signup"></Registration>
         <Login slot="login"></Login>
      </Header>
      
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
import Registration from './components/Registration'
import Login from './components/Login'
export default {
  components:{
    Header,
    Registration,
    Login
  }
}
</script>
<style lang="scss">
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
