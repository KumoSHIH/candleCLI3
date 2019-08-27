<template>
  <div class="listWrap">
    <loading :active.sync="isLoading" :is-full-page="true">
        <CandleLoading/>
    </loading>
    <div class="banner"></div>
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-10">
          <ul class="d-flex justify-content-around">
            <li>
              <a href="#" class="list list-item"
              @click.prevent="listItem = ''"
              :class="{'active': listItem === ''}">全部商品</a>
            </li>
            <li v-for="item in categories" :key="item">
              <a href="#" class="list list-item"
              @click.prevent="listItem = item"
              :class="{'active': item === listItem}"
              >{{ item }}</a>
            </li>
          </ul>
        </div>
        <div class="col-md-10">
          <div class="form-row justify-content-center justify-content-md-start mt-4 mt-md-0 mb-4">
            <div class="col-10 col-md-4 mb-4 mb-md-0" v-for="item in filterData" :key="item.id">
              <Card :card-item="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.listWrap{
  min-height: calc(100vh - 280px);
}
  .banner{
    width: 100%;
    height: 130px;
  }
  @media (max-width: 768px){
    h2{
      margin-top: 100px;
    }
  }
  @media (max-width: 420px){
    .banner{
      background-position: 80% 0;
      background-size: cover;
      height: 400px;
    }
    h2{
      font-size: 40px;
      text-align: center;
      margin-top: 150px;
      color: #f76262;
    }
    h4{
      font-size: 20px;
      text-align: center;
    }
  }
//side Menu
  ul{
    position: sticky;
    top: 70px;
    list-style: none;
    padding: 0;
    border: solid 1px #DCDCDC;
  }
  .list{
    display: block;
    padding: 10px 40px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    letter-spacing: 1.5px;
  }
  .list-item{
    color: #000;
    cursor: pointer;
    transition: .2s;
    &:hover,&:active{
      background-color: lighten(#95adbe, 10%);
      color: #574f7d;
    }
  }
  .active{
    background-color: lighten(#95adbe, 10%);
    color: #fff;
  }
// pagination bs4
  .page-link{
    color: #574f7d;
    border: solid 2px #574f7d;
  }
  .page-item:last-child .page-link{
    border-radius: 0;
  }
  .page-item:first-child .page-link{
    border-radius: 0;
  }
  .activePage{
    //background-color: #574f7d;
    color: #fff;
  }
</style>

<script>
import Card from '../../components/Card'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Card
  },
  data () {
    return {
      listItem: ''
    }
  },
  methods: {
    getParams () {
      if (this.$route.query.category) {
        this.listItem = this.$route.query.category
      }
    },
    ...mapActions('productsModules', ['getProduct'])
  },
  computed: {
    filterData () {
      const vm = this
      if (vm.listItem) {
        return vm.products.filter((item) => {
          const data = item.category.toLowerCase().includes(vm.listItem.toLowerCase())
          return data
        })
      }
      return vm.products
    },
    ...mapGetters('productsModules', ['categories', 'products']),
    ...mapGetters(['isLoading'])
  },
  created () {
    this.getParams()
    this.getProduct()
  }
}
</script>
