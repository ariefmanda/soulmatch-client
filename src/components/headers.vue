<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <div class="navbar-brand" @click="home">SoulMatch</div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" >
            <span class="navbar-toggler-icon"></span>
          </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto" v-if="token">
        <li class="nav-item active" @click="home">
          <div class="nav-link">Home
              <span class="sr-only">(current)</span>
          </div>
        </li>
        <li class="nav-item">
          <div class="nav-link" @click="toProfil">Profil</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" id="myModal" data-toggle="modal" data-target="#exampleModal" @click="logout">Logout</div>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto" v-else>
        <li class="nav-item active">
          <div class="nav-link">Home
              <span class="sr-only">(current)</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import router from '@/router';
export default{
    data(){
      return{
        token:localStorage.getItem('token')||null
      }
    },
    created() {
      //do something after creating vue instance
    },
    methods: {
      logout() {
        this.token=null
        localStorage.clear()
        router.push({
          name:'login'
        })
      },
      toProfil(){
        router.push({
          name:'profile'
        })
      },
      home(){
        router.push({
          name:'HelloWorld'
        })
      }
    }
}
</script>

<style>

</style>
