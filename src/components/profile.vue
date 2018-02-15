<template>
    <div class="container">
        <div class="row">

          <div class="col-lg-3">
              <h5 class="my-4">ME</h5>
                <div v-if="show == false">
                 <div class="col-lg-10 col-md-4 col-xs-6">
                    <div class="d-block mb-4 h-100">
                     <img class="img-fluid img-thumbnail" :src="me.profpict" alt="harusnya gambar">
                     </div>
                  </div>
                    <label >Nama : {{me.name}} </label>

                    <br>
                    <label >Kontak : {{me.handphone}} </label>
                  
                    <br>
                    <label >Umur : {{me.age}} </label>
                  
                    <br>
                    <label >Tinggi : {{me.height}} </label>
                 
                    <br>
                    <label >Berat Badan : {{me.weight}} </label>
                  
                    <br>
                    <label >Gender : {{me.gender}} </label>
                     <br>
                  <button class="btn btn-primary" @click="toogleEdit">edit</button>
                  </div>
                  <div v-else>
                   <form>
                    <b-form-file id="image" v-model="image" :state="Boolean(image)" placeholder="Choose a file..." required></b-form-file>
                    <br>
                    <b-form-input placeholder="Nama" v-model="nama" :value="me.name"></b-form-input>
                    <br>
                    <b-form-input placeholder="password" v-model="password" ></b-form-input>
                    <br>
                    <b-form-input placeholder="Umur" v-model="umur" :value="me.age"></b-form-input>
                    <br>
                    <b-form-input placeholder="Tinggi" v-model="tinggi" :value="me.height"></b-form-input>
                    <br>
                    <b-form-input placeholder="Berat Badan" v-model="berat" :value="me.weight"></b-form-input>
                    <br>
                    <b-form-select v-model="gender">
                      <option>male</option>
                      <option>female</option>
                    </b-form-select>
                    <br>
                  <button  class="btn btn-primary" @click="updateme">update</button>
                </form>
                </div>
                
          </div>
          <div class="col-lg-9">
        <h3 class="my-4 text-center text-lg-left">Galeries
        </h3>
        <div class="row text-center text-lg-left">

          <div class="col-lg-3 col-md-4 col-xs-6">
            <a href="#" class="d-block mb-4 h-100">
              <img class="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt="">
            </a>
          </div>
          
        </div>
      </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
let baseUrl = `http://neoal.xyz:3006`
let token = localStorage.getItem('token')
export default {
  name:'profile',
  data(){
    return {
      me : null,
      show : false,
      nama : '',
      umur : '',
      tinggi : '',
      berat : '',
      gender : '',
      password : '',
      image : ''
      
    }
  },
  created(){
    this.getme()
  },
  methods:{
    getme(){
      axios.get(`${baseUrl}/users/myaccount`,{
        headers : {
          token : localStorage.getItem('token')
        }
      })
      .then(response => {
        console.log(response.data.data)
        this.me = response.data.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    updateme(){
      let formdata = new FormData()
      formdata.append('name',this.nama || this.me.name)
      formdata.append('age',this.umur || this.me.age)
      formdata.append('password',this.password)
      formdata.append('gender',this.gender || this.me.gender)
      formdata.append('height',this.tinggi || this.me.height)
      formdata.append('weight',this.berat || this.me.weight)
      formdata.append('profpict',document.getElementById("image").files[0])
      axios.put(`${baseUrl}/users/update`,formdata,{
        headers : {
          token : localStorage.getItem('token')
        }
      })
      .then(response => {
        console.log(response.data.data)
        console.log('teredit')
        
        this.getme()
        this.show = !this.show
      })
      .catch(err => {
        console.log(err)
      })
    },
    toogleEdit(){
       this.show = !this.show
    }
  }
}
</script>

<style>

</style>
