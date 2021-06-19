<template>
  <main>
    <div class="container">
      <div class="row pt-5 pb-4">
        <div class="col-6">
          <span class="fs-4 fw-bold text-dark">장바구니 </span>
          <span class="fs-4 fw-bold text-dark">({{this.productdetail.length}})</span>
        </div>
        <!-- <div class="col-7 col-md-6 col-xs-6 text-end align-self-center">
            <span class="fw-bold text-dark">장바구니</span>
            <span> > 주문/결제 > 완료</span>
          </div> -->
      </div>
      <div class="row pt-5 pb-3 border-bottom border-2">
        <span class="col-md-5 col-lg-6 text-dark d-none d-md-block">상품 정보</span>
        <span class="col-md-3 col-lg-2 text-center text-dark d-none d-md-block"
          >수량</span
        >
        <span class="col-md-2 text-center text-dark d-none d-md-block"
          >가격</span
        >
        <span class="col-md-2 text-center text-dark d-none d-md-block"
          >배송비</span
        >
      </div>

      <div class="row border-bottom border-2 pt-3 pb-3">
        <div class="col-2 col-xxl-1">
          <a class="align-self-center" style="cursor: pointer">
            <img
              src="@/assets/onion2.jpg"
              class="img-fluid"
            />
          </a>
        </div>

        <div
          class="col-md-3 col-lg-4 col-xxl-5 align-self-center d-none d-md-block"
        >
          <div
            class="align-self-center pb-3 text-dark"
            style="text-align: left"
          >
            국산 햇양파 10kg
          </div>
          <div style="cursor: pointer">삭제하기</div>
        </div>
        <div class="col-md-3 col-lg-2 align-self-center d-none d-md-block">
          <div class="input-group d-flex justify-content-center">
              <span
                class="input-group-text text-center"
                style="cursor: pointer;  max-width: 33px; max-height: 30px"
                >-</span
              >
              <input
                type="text"
                class="form-control text-center"
                style="max-width: 37px; max-height: 30px"
                v-model="total"
              />
              <span
                class="input-group-text text-center"
                style="cursor: pointer; max-width: 33px; max-height: 30px"
                >+</span
              >
          </div>
        </div>
        <span
          class="col-md-2 align-self-center text-center text-dark d-none d-md-block"
          >21,900원</span
        >
        <span
          class="col-md-2 align-self-center text-center text-dark d-none d-md-block"
          >2,500원</span
        >

        <div class="col-8 align-self-center d-md-none">
          <!-- 모바일 화면에서의 ui -->
          <div
            class="align-self-center pb-1 text-dark"
            style="text-align: left"
          >
            국산 햇양파 10kg
          </div>
          <div class="d-md-none ">
            <div class="input-group">
              <span
                class="input-group-text text-center"
                style="cursor: pointer; max-height: 30px"
                >-</span
              >
              <input
                type="text"
                class="form-control text-center"
                style="max-width: 35px; max-height: 30px"
                v-model="total"
              />
              <span
                class="input-group-text text-center"
                style="cursor: pointer; max-height: 30px"
                >+</span
              >
            </div>
          </div>
          <div class="row pt-1">
            <div class="col-6 text-dark">가격</div>
            <div class="col-6 text-dark text-center">21,900원</div>
            <div class="col-6 text-dark">배송비</div>
            <div class="col-6 text-dark text-center">2,500원</div>
          </div>
        </div>
        <div class="col-2 d-md-none">
          <div class="d-flex justify-content-end">
            <img
              src="@/assets/cross.png"
              class="img-fluid"
              style="max-width: 19px; max-height: 19px; cursor: pointer"
            />
          </div>
        </div>
        <!-- 모바일 화면에서의 ui -->
      </div>


      <div class="row pt-4">
        <div class="mb-4 col-md-9 text-end d-none d-md-block text-dark">
          상품합계
        </div>
        <div class="col-md-3 text-end d-none d-md-block text-dark">
          41,900원
        </div>
        <div class="mb-1 col-md-9 text-end d-none d-md-block text-dark">
          배송비
        </div>
        <div class="col-md-3 text-end d-none d-md-block text-dark">7,500원</div>
        <div class="d-flex justify-content-end">
          <hr class="d-none d-md-block" style="width: 50%; height: 2px" />
        </div>
        <div class="mb-4 col-6 d-md-none text-dark">상품합계</div>
        <div class="col-6 text-end d-md-none text-dark">41,900원</div>
        <div class="mb-1 col-6 d-md-none text-dark">배송비</div>
        <div class="col-6 text-end d-md-none text-dark">7,500원</div>
        <hr class="d-md-none mt-4" style="height: 2px" />
      </div>
      <div class="row pb-5">
        <span class="col-md-9 text-end text-dark fw-bolder d-none d-md-block"
          >합계</span
        >
        <span class="col-md-3 text-end text-dark fw-bolder d-none d-md-block"
          >49,400원</span
        >
        <span class="col-6 text-dark fw-bolder d-md-none">합계</span>
        <span class="col-6 text-end text-dark fw-bolder d-md-none"
          >49,400원</span
        >
      </div>
      <div class="row pb-5">
        <span class="col-6 col-md-6 d-flex flex-row-reverse">
          <router-link to="/">
            <button type="button" class="btn btn-outline-primary fw-bolder p-3">
              쇼핑 계속하기
            </button>
          </router-link>
        </span>
        <span class="col-6 col-md-6">
          <router-link to="/payment">
            <button type="button" class="btn btn-primary fw-bolder p-3">
              주문하기
            </button>
          </router-link>
        </span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      productdetail: {},
      totalprice : 0,
      totaldeliveryprice : 0,
    };
  },
  created(){
    this.GetTotalPriceProductInfo();
  },
  methods: {
    //상품정보와 썸네일이미지를 가져오는 함수
    async GetProductDetail(){
          await this.$axios({
            url: `${this.$domain}/product/thumnail`,
            method: 'post',
            data: {
              productarray: [{product_id : 5, prodcut_count : 2}, {product_id : 6, prodcut_count : 3}]
            }
          })
          .then((res) => {
            //console.log(res.data);
            this.productdetail = res.data;
          })
          .catch((err) => {
            console.log(err);
          })
      },
      //상품 합계 금액을 가져오는 함수
      TotalPrice(){
        for(let i = 0 ; i < this.productdetail.length ; i++){
          this.totalprice = this.totalprice + this.productdetail[i].product_price * this.productdetail[i].product_count;
          this.totaldeliveryprice = this.totaldeliveryprice + this.productdetail[i].delivery_price;
        }
      },
      //GetProductDetail이후에 TotalPrice함수를 실행하기위해 동기적처리를 해주는 함수
      async GetTotalPriceProductInfo(){
        await this.GetProductDetail();
        this.TotalPrice();
      },
  }
};
</script>

<style scoped>
#cart {
  border: 2px dashed green;
}
</style>