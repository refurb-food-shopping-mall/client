<template>
  <main>
  <div class="container">
  <div id="cancel" class="pt-5">
    <div class="row md-p-5">
      <div class="col-md-3 d-flex justify-content-center">
        <div class="list-group col-9 text-center d-none d-lg-block">
          <router-link
            to="profileupdate"
            href="#"
            class="list-group-item list-group-item-action"
            >회원정보 수정
          </router-link>
          <a href="#" class="list-group-item list-group-item-action"
            >배송지 관리</a
          >
          <a href="#" class="list-group-item list-group-item-action"
            >카드/계좌 관리</a
          >
          <a href="#" class="list-group-item list-group-item-action"
            >교환/환불</a
          >
        </div>
      </div>

      <div class="col-12 col-lg-9">
        <div class="card p-4">
          <h3>교환/환불요청</h3>

          <div class="row pt-5 pb-3 border-bottom border-2">
            <span class="col-6 text-dark">상품 정보</span>
            <span class="col-2 text-center text-dark">수량</span>
            <span class="col-2 text-center text-dark">가격</span>
            <span class="col-2 text-center text-dark">배송비</span>
          </div>

          <div class="row border-bottom border-2 pt-3 pb-3">
            <div class="col-2 col-md-2 col-lg-2 col-xl-1 p-0">
              <a class="align-self-center" style="cursor: pointer"
                ><img 
                  v-if="image"
                  :src="getImgUrl(image)"
                  class="img-fluid"
              /></a>
            </div>

            <div class="col-4 col-lg-4 col-xl-5 align-self-center">
              <div
                class="align-self-center pb-3 text-dark"
                style="text-align: left"
              >
                {{product.product_name}}
              </div>
              <div style="cursor: pointer">{{product.product_price.toLocaleString("ko-KR")}}원</div>
            </div>
            <div class="col-2 d-flex justify-content-center align-items-center">
              <span>{{product_amount}}</span>
            </div>
            <span class="col-2 align-self-center text-center text-dark"
              >{{(product_amount*product.product_price).toLocaleString("ko-KR")}}원</span
            >
            <span class="col-2 align-self-center text-center text-dark"
              >{{product.delivery_price.toLocaleString("ko-KR")}}원</span
            >
          </div>

          <div class="row border-bottom border-2 pt-3 pb-3">
            <div class="col-md-2">교환/환불 선택</div>
              <div class="col">
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
                    교환
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
                    환불
                  </label>
                </div>
              </div>
          </div>
          <div class="row border-bottom border-2 pt-3 pb-3">
            <div class="col-md-2">환불 사유</div>
            <div class="col">
              <div class="form-group">
                <select class="form-select" id="exampleSelect1">
                  <option>상품정보 상이</option>
                  <option>서비스 불만족</option>
                  <option>품질 저하</option>
                  <option>낮은 신선도</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row border-bottom border-2 pt-3 pb-3">
            <div class="col-md-2">상세 사유 입력</div>
            <div class="col">
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleTextarea"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-primary m-2">이전 페이지</button>
          <button type="button" class="btn btn-secondary my-2">
            취소요청하기
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      detail: {},
      image: {},
      product: {
        product_name : "",
        product_price : 0,
        delivery_price : 0,
        
      },
      product_id: 0,
      user_id: 0,
      product_amount: 0,
    };
  },
  mounted() {
    this.getOrder();
  },
  methods: {
     getOrder() {
      this.$axios
        .get(`${this.$domain}/paymentdetail_cancel/${this.$route.params.id}`)
        .then((res) => {
          this.detail = res.data.detail
          this.product_id = res.data.detail.product_id 
          console.log(this.product_id)
          this.product = this.detail.product
          // console.log(this.product)
          this.product_amount = this.detail.product_amount
        })
        .then(
          this.$axios
          .post(`${this.$domain}/paymentdetail_cancel_image`, {
            product_id: this.product_id
          })
          .then(res => {
            console.log(this.product_id)
            console.log(res.data)
            this.image = res.data.image
            console.log(this.image)
          })
        )
          
    },
    getImgUrl(product_image) {
      if(product_image != {}){
      let pic = product_image.path.split("/")[2];
      return require("../assets/" + pic);
      }
    },
  }
};
</script>

<style scoped>
</style>