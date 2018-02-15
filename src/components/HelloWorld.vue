<template>
<div class="container">
  <div class="row" v-if="token">
    <div class="col-lg-3">
      <h5 class="my-4">Search Your Soulmatch</h5>
      <form>
        <label for="exampleFormControlInput1">Jenis Kelamin</label>
        <select class="form-control form-control-sm" v-model="searchGender">
                      <option></option>
                      <option>male</option>
                      <option>female</option>
                    </select>
        <br>
        <label for="exampleFormControlInput1">Umur dibawah @th</label>
        <select v-model="searchAge" class="form-control form-control-sm">
                      <option></option>
                      <option v-for="a of 100">{{a}}</option>
                    </select>
        <br>
        <label for="exampleFormControlInput1">Tinggi di bawah @cm</label>
        <select v-model="searchHeight" class="form-control form-control-sm">
                      <option></option>
                      <option v-for="a of 200">{{a}}</option>
                    </select>
        <br>
        <label for="exampleFormControlInput1">Berat Badan dibawah @kg</label>
        <select v-model="searchWeight" class="form-control form-control-sm">
                      <option></option>
                      <option v-for="a of 200">{{a}}</option>
                    </select>
        <br>
        <button type="submit" class="btn btn-primary" @click="search">Search</button>
      </form>
    </div>
    <div class="col-lg-9">
      <h3 class="my-4 text-center text-lg-left">Your Option

        </h3>

      <div class="row text-center text-lg-left" v-for="(d,i) of data">
        <div class="col-lg-3 col-md-4 col-xs-6">
          <a v-b-modal.modallg href="#" class="d-block mb-4 h-100" @click="modalPro(d._id)">
              <img class="img-fluid img-thumbnail" :src="d.profpict" alt="profil">
            </a>
        </div>
      </div>

    </div>
  </div>
  <b-modal id="modallg" size="lg" title="SOULMATCH" v-if="modal[0]">
    <!-- <div class="modal-header">
      <b-container fluid class="p-4 bg-dark"  width="10px">
        <b-row>
          <b-col>
            <b-img thumbnail fluid src="https://lorempixel.com/250/250/technics/4/" alt="Thumbnail" />
          </b-col>
          <b-col>
            <b-img thumbnail fluid src="https://lorempixel.com/250/250/technics/8/" alt="Thumbnail" />
          </b-col>
          <b-col>
            <b-img thumbnail fluid src="https://lorempixel.com/250/250/technics/4/" alt="Thumbnail" />
          </b-col>
        </b-row>
      </b-container>
    </div> -->
    <div class="modal-body">
      <center>
        <img :src="modal[0].profpict" name="aboutme" width="140" height="140" border="0" class="img-circle"></a>
        <h3 class="media-heading">{{modal[0].name}}</h3>
        <span><strong>Chat: </strong></span>
        <a target="_blank" :href="'https://api.whatsapp.com/send?phone=62'+modal[0].handphone">
                            <img src="http://icons.iconarchive.com/icons/dtafalonso/android-l/256/WhatsApp-icon.png" alt="icon" style="width:30px">
                          </a>
      </center>
      <hr>
      <center>
        <p class="text-left"><strong>Bio: </strong><br> age : {{modal[0].age}} year<br> gender: {{modal[0].gender}}<br> height: {{modal[0].height}} CM<br> weight: {{modal[0].weight}} kilogram
        </p>
        <br>
      </center>
    </div>
    <div class="modal-footer">
      <center>
        <button type="button" class="btn btn-default" data-dismiss="modal">Thanks for using this app 😘😘</button>
      </center>
    </div>
  </b-modal>
</div>
</template>

<script>
import axios from 'axios'
var baseUrl = `http://neoal.xyz:3006/users/`
export default {
  name: 'HelloWorld',
  data() {
    return {
      token: localStorage.getItem('token')||null,
      searchGender: null,
      searchAge: null,
      searchHeight: null,
      searchWeight: null,
      dataBaku: [],
      data: [],
      modal: [],
    }
  },
  created() {
    //do something after creating vue instance
    this.getData()
  },
  methods: {
    getData() {
      axios.get(`${baseUrl}all`, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(resp => {
          console.log(resp);
          this.data = resp.data.data.map(e=>{
            if(!e.profpict){
              e.profpict= "https://pes.edu/wp-content/uploads/2017/07/blank-image.jpg"
            }
            return e
          })
          this.dataBaku = resp.data.data
          console.log(this.data);
        })
        .catch((err) => {
          console.error(err);
        })
    },
    search() {
      var itemDummy = this.dataBaku.slice(0)
      var dataSearch = null
      if (this.searchGender) {
        console.log('gender');
        dataSearch = itemDummy.filter(e => {
          let a = false
          if (e.gender == this.searchGender) {
            a = true
          }
          return a
        })
      }
      if (this.searchAge) {
        console.log('age');
        dataSearch = itemDummy.filter(e => {
          let a = false
          if (e.age <= Number(this.searchAge)) {
            a = true
          }
          return a
        })
      }
      if (this.searchHeight) {
        console.log('height');
        dataSearch = itemDummy.filter(e => {
          let a = false
          if (e.height <= Number(this.searchHeight)) {
            a = true
          }
          return a
        })
      }
      if (this.searchWeight) {
        console.log('weight');
        dataSearch = itemDummy.filter(e => {
          let a = false
          if (e.weight <= Number(this.searchWeight)) {
            a = true
          }
          return a
        })
      }
      console.log(this.searchGender);
      console.log(dataSearch);
      if (dataSearch) {
        this.data = dataSearch
      }
    },
    modalPro(id) {
      this.modal = this.data.filter(e => {
        return e._id == id
      })
    },
  }
}
</script>

<style>

</style>
