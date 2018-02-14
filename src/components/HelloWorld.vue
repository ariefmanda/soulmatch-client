<template>
  <div class="container">
        <div class="row" v-if="!token">
          <div class="col-lg-3">
              <h5 class="my-4">Search Your Soulmatch</h5>
              <form>
                  <label for="exampleFormControlInput1">Jenis Kelamin</label>
                  <select class="form-control form-control-sm" v-model="searchGender">
                      <option disabled>Select option</option>
                      <option>Pria</option>
                      <option>Wanita</option>
                    </select>
                    <br>
                    <label for="exampleFormControlInput1">Umur dibawah @th</label>
                  <select v-model="searchAge" class="form-control form-control-sm">
                      <option disabled>Select option</option>
                      <optionv-for="a of 100">{{a}}</option>
                    </select>
                    <br>
                    <label for="exampleFormControlInput1">Tinggi di bawah @cm</label>
                  <select v-model="searchHeight" class="form-control form-control-sm">
                      <option disabled>Select option</option>
                      <option  v-for="a of 200">{{a}}</option>
                    </select>
                    <br>
                    <label for="exampleFormControlInput1">Berat Badan dibawah @kg</label>
                  <select v-model="searchWidht" class="form-control form-control-sm">
                      <option disabled>Select option</option>
                      <option v-for="a of 200">{{a}}</option>
                    </select>
                    <br>
                  <button type="submit" class="btn btn-primary" @click="search">Search</button>
                </form>
          </div>
          <div class="col-lg-9">
        <h3 class="my-4 text-center text-lg-left">Your Option

        </h3>

        <div class="row text-center text-lg-left" v-for="d of data">
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
var baseUrl=`http://localhost:3000/`
export default {
  name: 'HelloWorld',
  data () {
    return {
      token:localStorage.getItem('token'),
      searchGender: null,
      searchAge: null,
      searchHeight: null,
      searchWidht: null,
      data:['sayang']
    }
  },
  created() {
    //do something after creating vue instance
    // this.getData()
  },
  methods: {
    getData(){
      axios.get(`${baseUrl}api`)
      .then(resp=>{
        // this.data=resp.data
      })
      .catch((err) => {
        console.error(err);
      })
    },
    search() {
      axios.post(`${baseUrl}api`,{
        gender:this.searchGender,
        age:this.searchAge,
        height:this.searchHeight,
        width:this.searchWidht
      }).then(resp=>{
          // this.data=resp.data
      })
      .catch((err) => {
        console.error(err);
      })
    }
  }
}
</script>

<style>

</style>
