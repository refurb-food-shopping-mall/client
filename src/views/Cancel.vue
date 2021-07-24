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
                    <input 
                    type="radio" 
                    @click="toggle(1)" 
                    class="form-check-input" 
                    name="optionsRadios" 
                    id="optionsRadios1" 
                    value="option1" 
                    data-bs-toggle="tooltip" data-bs-placement="right" 
                    title="교환은 동일 상품, 동일 수량으로 진행됩니다">
                    교환
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input @click="toggle(0)" type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
                    환불
                  </label>
                </div>
              </div>
          </div>
          <div v-if="togg===1" class="row border-bottom border-2 pt-3 pb-3">
            <div class="col-md-2">교환 사유</div>
            <div class="col">
              <div class="form-group">
                <select class="form-select" id="exampleSelect1">
                  <option>품질 저하</option>
                  <option>낮은 신선도</option>
                </select>
              </div>
            </div>
          </div>
          <div v-else-if="togg===0" class="row border-bottom border-2 pt-3 pb-3">
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
          <router-link :to="`/shipping`" class="btn btn-primary m-2">이전 페이지</router-link>
          <button @click="exchange()" v-if="togg===1" type="button" class="btn btn-secondary my-2">
            교환 요청하기
          </button>
          <button @click="refund()" v-else-if="togg===0" type="button" class="btn btn-secondary my-2">
            환불 요청하기
          </button>
        </div>
      </div>
    </div>
  </div>
  </div>
  </main>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      togg : 2,
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
    console.log(this.$router.currentRoute)
  },
  methods: {
     getOrder() {
      this.$axios
        .get(`${this.$domain}/paymentdetail_cancel/${this.$route.params.id}`)
        .then((res) => {
          this.product = res.data.pd_info.product
          this.image = res.data.pd_image
          this.product_amount = res.data.pd_info.product_amount
        })
    },
    getImgUrl(product_image) {
      if(product_image != {}){
      let pic = product_image.path.split("/")[2];
      return require("../assets/" + pic);
      }
    },
    toggle(number) {
      this.togg = number;
    },
    // exchange() {
    //   this.$axios
    //   .post(`${this.$domain}/exchange`, {
    //     id: this.$route.params.id
    //   })
    //   .then(res => {
    //     console.log(res.data)
    //     alert('교환 요청되었습니다')
    //   })
    //   this.$router.push("/shipping")
    // },
    exchange() {
      Swal.fire({
      title: '교환 요청 하시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5ab395',
      cancelButtonColor: '#F08080',
      confirmButtonText: '예',
      cancelButtonText: "아니오",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.$axios
          .post(`${this.$domain}/exchange`, {
            id : this.$route.params.id,
          })
          .then((res) => {
            console.log(res.data);
          });
        this.exchange2 ();
      }
    })
    },
    async exchange2 (){
      await Swal.fire({
      title: '교환 요청되었습니다!',
      icon: 'success',
      confirmButtonText: '확인',
      confirmButtonColor: '#5ab395',
    })
    this.$router.push("/shipping");
    },
    refund() {
      Swal.fire({
      title: '환불 요청 하시겠습니까?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5ab395',
      cancelButtonColor: '#F08080',
      confirmButtonText: '예',
      cancelButtonText: "아니오",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.$axios
          .post(`${this.$domain}/exchange`, {
            id : this.$route.params.id,
          })
          .then((res) => {
            console.log(res.data);
          });
        this.refund2 ();
      }
    })
    },
    async refund2 (){
      await Swal.fire({
      title: '환불 요청되었습니다!',
      icon: 'success',
      confirmButtonText: '확인',
      confirmButtonColor: '#5ab395',
    })
    this.$router.push("/shipping");
    },
  }
};
</script>

<style scoped>
</style>