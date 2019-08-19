<template>
    <div>
        <div class="container pt-5">
            <div class="row d-flex justify-content-center mt-5">
                <div class="col-md-8 text-center ">
                    <h2 class="text-main mt-4 mt-md-0"><strong>8月優惠活動</strong></h2>
                    <hr>
                    <h6 class="text-text-light"><i class="fas fa-sun mr-2"></i>新加入會員首次購物享95折。</h6>
                    <h6 class="text-text-light"><i class="fas fa-sun mr-2"></i>當月壽星結帳可再折扣NT $50。</h6>
                    <h6 class="text-text-light"><i class="fas fa-sun mr-2"></i>結帳額滿指定價格可使用以下優惠券！</h6>
                </div>
            </div>
            <div class="row d-flex justify-content-center mt-3">
                <div class="col-7 col-md-4 wrap text-center py-2">
                    <div class="dashLine text-center">
                        <i class="fas fa-hand-holding-usd fa-4x text-info mt-3"></i>
                        <p class="h6 mt-3">結帳金額滿 999 (含)以上</p>
                        <p class="h6">輸入專屬優惠碼 , 即可享有優惠價!</p>
                    </div>
                </div>
                <div class="col-4 col-md-2 code text-center">
                    <div class="h1 mt-4 text-danger">
                        <strong>9折</strong>
                    </div>
                    <div class="text-white">結帳時請輸入優惠碼</div>
                    <div class="h6 text-danger mt-2">
                        <strong>candle90</strong>
                    </div>
                </div>
                <div class="grad"></div>
            </div>
            <div class="row d-flex justify-content-center my-5">
                <div class="col-7 col-md-4 wrap text-center py-2">
                    <div class="dashLine text-center">
                        <i class="fas fa-hand-holding-usd fa-4x text-info mt-3"></i>
                        <p class="h6 mt-3">結帳金額滿 1399 (含)以上</p>
                        <p class="h6">輸入專屬優惠碼 , 即可享有優惠價!</p>
                    </div>
                </div>
                <div class="col-4 col-md-2 code text-center">
                    <div class="h1 mt-4 text-danger">
                        <strong>8折</strong>
                    </div>
                    <div class="text-white">結帳時請輸入優惠碼</div>
                    <div class="h6 text-danger mt-2">
                        <strong>candle80</strong>
                    </div>
                </div>
                <div class="grad"></div>
            </div>
            <div class="row d-flex justify-content-center my-5">
                <div class="col-md-8 text-center ">
                    <h2 class="text-main mt-4 mt-md-0" id="service"><strong>顧客服務</strong></h2>
                    <hr>
                    <h6 class="text-text-light">運送方式</h6>
                    <p>提供超商店到店、郵寄、宅配。</p>
                    <h6 class="text-text-light">付款方式</h6>
                    <p>提供線上刷卡、專屬轉帳帳號，暫不提供到貨付款。</p>
                    <h6 class="text-text-light">會員優惠</h6>
                    <p>每月都有指定優惠，請定期關注！</p>
                </div>
            </div>
            <div class="row d-flex justify-content-center my-5">
                <div class="col-md-8 text-center ">
                    <h2 class="text-main mt-4 mt-md-0" id="about"><strong>關於我們</strong></h2>
                    <hr>
                    <h6 class="text-text-light">實體店面</h6>
                    <p>台中市安安區好好路一段111號</p>
                    <h6 class="text-text-light">一般問題</h6>
                    <p>提供線上刷卡、專屬轉帳帳號，暫不提供到貨付款。</p>
                    <h6 class="text-text-light">人才招募</h6>
                    <p>誠徵門市人員：上班時間 10:00~19:00</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrap {
  background-color: #f6e5e5;
  width: 500px;
}
.dashLine {
  border: dashed 2px #ca3e47;
}
.code {
  position: relative;
  background-color: #ff9776;
  cursor: pointer;
}
.grad {
  box-sizing: border-box;
  width: 5px;
  background-size: 10px 15px;
  background-image: radial-gradient(
    transparent 0px,
    transparent 3px,
    rgb(255, 151, 118) 3px,
    rgb(255, 151, 118)
  );
  background-position: 0 7px;
}
</style>

<script>
export default {
  methods: {
    // 從本地找到儲存的id錨點
    // 設置方法跳轉至id錨點
    getlocal() {
      let selectId = localStorage.getItem('toId')
      let toElement = document.getElementById(selectId)
      if(selectId) { // 如果對應Id在 就跳轉
        toElement.scrollIntoView()
      }
    }
  },
  created() { // 已取得data 屬性 方法 事件 僅有el目前不可見
  // $nextTick: 是在下次DOM更新循環結束後執行延遲回調 
  // 在修改數據之後使用 則可以在回調中獲取更新後的DOM
    this.$nextTick(() => {
        this.getlocal()
    })
  },
  mounted() { // el被創建階段
    let vm = this
    vm.$nextTick(function() {
      window.addEventListener('scroll',vm.handleScroll)  
    })
  },
  destroyed() { // 離開頁面id銷毀 避免其他入口進來有錨點問題
    localStorage.setItem('toId','')
  }
}
</script>
