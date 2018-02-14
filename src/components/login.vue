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
  </div>
</template>

<script>
import router from '@/router'
import axios from 'axios'
let baseUrl = `http://localhost:3000`
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

    },
    signin(){
      console.log('apapun cok');
      
      router.push({name : 'profile'})
    }
  }
}
</script>

<style>
.kecilin{
  align-items: center 
}
</style>
