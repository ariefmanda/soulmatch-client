<template>
  <div class="container">
     <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion1 >SignUp</b-btn>
      </b-card-header>
      <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
        
         <b-form-group>
           <b-form-input type="number" placeholder="nomor" v-model="nomor"></b-form-input>
           <b-form-input type="password" placeholder="password" v-model="password"></b-form-input>
           <b-button @click="signup">Daftar</b-button>
         </b-form-group>
        
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion2 >SignIn</b-btn>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
       
           <b-form-group>
           <b-form-input type="number" placeholder="nomor" v-model="nomor"></b-form-input>
           <b-form-input type="password" placeholder="password" v-model="password"></b-form-input>
           <b-button @click="signin">Masuk</b-button>
         </b-form-group>
        
      </b-collapse>
    </b-card>
  </div>
  <a href="http://www.abgqq.com/?ref=abgqq176" target="_blank" rel="nofollow" onclick="closeAds('ads-pop')"><img src="http://s23.postimg.org/b3c14cabv/Abgqq_fix_rev.gif" width="300" height="250">
       <img src="http://s23.postimg.org/b3c14cabv/Abgqq_fix_rev.gif" width="300" height="250">
   </a>
  </div>
</template>

<script>
import router from '@/router'
import axios from 'axios'
let baseUrl = `http://neoal.xyz:3006`
export default {
  name : 'login',
  data(){
    return{
      nomor:'',
      password:''
    }
  },
  methods:{
    signup(){
      axios.post(`${baseUrl}/users/create`,{handphone : this.nomor,password : this.password})
      .then(response => {
        console.log('terdaftar')
      }).catch(err => {
        console.log(err)
      })
    },
    signin(){
     axios.post(`${baseUrl}/users/login`,{handphone : this.nomor,password : this.password})
      .then(response => {
        console.log(response.data.token)
        localStorage.setItem('token',response.data.token)
        router.push({name : 'profile'})
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
.kecilin{
  align-items: center 
}
</style>
