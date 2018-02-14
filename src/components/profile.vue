<template>
    <div class="container">
        <div class="row">

          <div class="col-lg-3">
              <h5 class="my-4">ME</h5>
                <div v-if="show == false">
                 <div class="col-lg-10 col-md-4 col-xs-6">
                    <div class="d-block mb-4 h-100">
                     <img class="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt="">
                     </div>
                  </div>
                    <label >Nama :</label>
                  
                    <br>
                    <label >Kontak :</label>
                  
                    <br>
                    <label >Umur :</label>
                  
                    <br>
                    <label >Tinggi :</label>
                 
                    <br>
                    <label >Berat Badan :</label>
                  
                    <br>
                    <label >Gender :</label>
                     <br>
                  <button class="btn btn-primary" @click="toogleEdit">edit</button>
                  </div>
                  <div v-else>
                   <form>
                    <b-form-file v-model="image" :state="Boolean(image)" placeholder="Choose a file..."></b-form-file>
                    <br>
                    <b-form-input placeholder="Nama" v-model="nama"></b-form-input>
                    <br>
                    <b-form-input placeholder="password" v-model="password"></b-form-input>
                    <br>
                    <b-form-input placeholder="Umur" v-model="umur"></b-form-input>
                    <br>
                    <b-form-input placeholder="Tinggi" v-model="tinggi"></b-form-input>
                    <br>
                    <b-form-input placeholder="Berat Badan" v-model="berat"></b-form-input>
                    <br>
                    <b-form-input placeholder="Gender" v-model="gender"></b-form-input>
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
let baseUrl = `http://localhost:3000/api`
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
      axios.get(``,{
        headers : {
          // token : token
        }
      })
      .then(response => {
        console.log(response.data.data)

      })
      .catch(err => {
        console.log(err)
      })
    },
    updateme(){
      this.show = !this.show
    },
    toogleEdit(){
       this.show = !this.show
    }
  }
}
</script>

<style>

</style>
