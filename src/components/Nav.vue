<template>
  <div>
    <ul class="nav row justify-content-between align-items-center py-2 pr-0 bg-main  no-gutters">
      <li class="col col-md-5 logo d-flex justify-content-center align-items-center mt-2 mt-md-0 ml-md-2" >
        <router-link to="/home">
          <img src="../assets/images/title02.png" height="30">
        </router-link>
      </li>
      <div class="col-12 col-md-5 col-lg-4 d-flex justify-content-center align-items-center mt-2 mt-md-0 ">
        <!-- <li class="nav-item searchWrap">
          <div class="icon d-none d-md-inline-flex align-items-center">
            <input type="text" class="searchInput">
            <a class="nav-link " href="#"><i class="fas fa-search navIcon"></i></a>
          </div>
        </li> -->
        <li class="nav-item">
          <router-link to="/controller">
            <a class="nav-link" href="#"><i class="fas fa-cog navIcon"></i></a>
          </router-link>
        </li>

        <li class="nav-item ">
          <a class="nav-link" href="#" @click.prevent="openModal"><i class="far fa-comment navIcon"></i></a>
        </li>

        <li class="nav-item">
          <router-link to="/bulletin">
            <a class="nav-link" href="#"><i class="fas fa-bullhorn navIcon"></i></a>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/login">
            <a class="nav-link" href="#"><i class="far fa-user navIcon"></i></a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cart">
            <i class="fas fa-shopping-cart navIcon"></i>
            <span class="badge badge-pill badge-danger">{{ cartLength }}</span>
          </router-link>
        </li>
      </div>
    </ul>
    <!-- Modal -->
    <div class="modal fade " id="modalQA" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">留言給我們</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row d-flex justify-content-center">
              <div class="col-md-10">
                <div class="form-group">
                  <label for="name" class="d-flex align-items-center mb-1">
                    <i class="fas fa-user-circle fa-2x mr-2"></i>
                    <span>姓名</span>
                  </label>
                  <input type="text" name="name" v-model="message.name"
                  v-validate="'required'" :class="{'is-invalid': errors.has('name')}"
                  class="form-control" id="name" placeholder="王小美">
                  <span class="text-danger" v-if="errors.has('name')">請輸入姓名或暱稱</span>
                </div>

                <div class="form-group">
                  <label for="email" class="d-flex align-items-center mb-1">
                    <i class="far fa-envelope fa-2x mr-2"></i>
                    <span>Email</span>
                  </label>
                  <input type="text" id="email" name="email" v-model="message.email"
                  v-validate="'required'" :class="{'is-invalid': errors.has('email')}"
                  class="form-control" placeholder="abc@email.com">
                  <span class="text-danger" v-if="errors.has('email')">請輸入email</span>
                </div>

                <div class="form-group">
                  <label for="comments" class="d-flex align-items-center mb-1">
                    <i class="far fa-comment-dots fa-2x mr-2"></i>
                    <span>留言</span>
                  </label>
                  <textarea cols="20" rows="5" name="comments" v-model="message.message"
                  v-validate="'required'" :class="{'is-invalid': errors.has('comments')}"
                  class="form-control" id="comments" placeholder="歡迎給予我們意見，小幫手將會盡快回覆您！"></textarea>
                  <span class="text-danger" v-if="errors.has('comments')">請輸入訊息</span>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-main btnModal w-100"
            @click="sendMessage"
            ><i class="fas fa-paper-plane fa-2x"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .nav{
    position: fixed;
    z-index: 99;
    width: 100%;
  }
  .navIcon{
    font-size: 18px;
    color: #fff;
    &.far:hover,&.fas:hover{
      color: #fdef96;
    }
  }
  .icon:hover .searchInput{
    border: solid 1px #f4f4f4;
    padding-left: 10px;
    //position: relative;
    animation: move .8s;
    animation-fill-mode: forwards;
    //animation-play-state: move 2s;
  }
  .searchInput{
    border-radius: 5px;
    border: 0;
    height: 30px;
    width: 0;
  }
  @keyframes move{
    0% {opacity: .0; width: 0;}
    100% {opacity: .8; width: 150px;}
  }
  .badge{
    position: relative;
    top: -9px;
    left: -6px;
  }
//Modal
  .btnModal{
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  label{
    font-size: 15px;
    cursor: pointer;
    color: #574f7d;
  }
  .modal .fade .show{
    padding-right: 0;
  }
</style>

<script>
import $ from 'jquery'
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      message: {}
    }
  },
  methods: {
    ...mapActions('cartModules', ['getCart']),
    openModal () {
      $('#modalQA').modal('show')
    },
    sendMessage () {
      const vm = this
      vm.message = {
        name: '',
        email: '',
        message: ''
      }
      vm.$validator.validate().then(valid => {
        if (valid) {
          $('#modalQA').modal('hide')
          vm.message = {}
        } else {
          alert('欄位不完整')
        }
      })
    }
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('cartModules', ['cart', 'cartLength'])
  },
  created () {
    this.$store.dispatch('cartModules/getCart')
  }
}
</script>
