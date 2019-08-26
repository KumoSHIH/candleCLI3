<template>
  <div>
    <div class="nav row justify-content-between py-5 pr-0 no-gutters">
      <div class="col col-md-2 logo d-flex justify-content-center mt-2 mt-md-0 ml-md-5" >
        <router-link to="/home">
          <img src="../assets/images/logo_light.png" height="80">
        </router-link>
      </div>
      <div class="col-12 col-md-5 col-lg-2 d-flex flex-column mt-2 mt-md-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/list">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/bulletin">The News</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cart">
            Shopping Cart
            <div class="badge badge-light">{{ cartLength }}</div>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/controller">Controller</router-link>
        </li>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .nav{
    position: absolute;
    width: 100%;
    z-index: 99;
  }
  .nav-item{
    padding: 5px 0;
  }
  .nav-item a{
    text-decoration: none;
    font-size: 18px;
    letter-spacing: 1.5px;
    color: #fff;
    &:hover{
      color: #DCDCDC
    }
  }
</style>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      message: {}
    }
  },
  methods: {
    ...mapActions('cartModules', ['getCart'])
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
