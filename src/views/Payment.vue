<template>
  <div class="container-fluid" style="max-width: 700px">
    <div class="row border-bottom border-5">
      <div class="fw-bolder fs-4 text-dark pb-4">신선한 못난이</div>
    </div>
    <div class="row">
      <div class="fw-bold fs-5 text-dark pt-4 pb-4">주문 상품</div>
    </div>
    <div class="row pb-4" :key="i" v-for="(product, i) in productdetail">
      <div class="col-3 col-md-2">
        <a class="align-self-center" style="cursor: pointer"
          ><img
            src="@/assets/onion2.jpg"
            class="img-fluid"
        /></a>
      </div>
      <div class="col-9 col-md-10">
        <div class="text-dark pb-3">{{product.product_name}}</div>
        <div>
          <span class="text-dark">{{$store.state.cart.cart[i].productQty}}개</span>
          <span class="text-dark"> / </span>
          <span class="text-dark">{{product.product_price * $store.state.cart.cart[i].productQty}}원</span>
        </div>
      </div>
    </div>
    <div class="row border-top pb-4 pt-4">
      <span class="col-6 text-dark align-self-center fw-bolder">상품 합계</span>
      <span class="col-6 text-end fs-5 fw-bolder text-primary align-self-center"
        >{{this.totalprice}}</span
      >
    </div>
    <div class="row border-top border-5">
      <div class="text-dark fw-bold fs-5 pt-4 pb-4">주문자</div>
      <div class="text-dark pb-1">{{this.user.user_name}}</div>
      <div class="text-dark pb-1">{{this.user.phone_number}}</div>
      <div class="text-dark pb-1">{{this.user.user_email}}</div>
    </div>
    <router-link 
      to="/userprofileupdate" 
      class="row pt-4 pb-4" 
      style="text-decoration: none;"
    >
      <button type="button" class="btn btn-outline-primary">수정하기</button>
    </router-link>  
    <div class="row border-top border-5">
      <div class="text-dark fw-bold fs-5 pt-4 pb-5">배송지</div>
    </div>
    <div class="row pb-3">
      <label class="form-check-label col-4 col-md-3">
        <input
          @click="AlterStatusDefaultAddress()"
          type="radio"
          class="form-check-input"
          name="selectaddress"
          id="selectaddress"
          value="selectaddress"
          v-bind:checked="default_address_button"
        />
        기본배송지
      </label>
      <label class="form-check-label col-4 col-md-3">
        <input
          @click="AlterStatusNewAddress()"
          type="radio"
          class="form-check-input"
          name="selectaddress"
          id="selectaddress"
          value="defaultaddress"
          v-bind:checked="new_address_button"
        />
        신규배송지
      </label>
      <div class="col-4 col-md-6">
        <button type="button" class="btn btn-outline-primary btn-sm">
          배송지 목록
        </button>
      </div>
    </div>
    <div v-if="default_address_button">
      <DefaultAddress :default_address="this.userdefaultaddress.useraddress[0]" />
    </div>
    <div v-if="new_address_state">
      <NewAddress />
    </div>
    <div v-if="selected_address_state">
      <SelectedAddress />
    </div>
    
    <div class="row pb-4 pt-2">
      <div class="form-group">
        <label class="col-form-label text-dark pb-2" for="deliveryrequest"
          >배송 시 요청 사항</label
        >
        <input type="text" class="form-control" id="deliveryrequest" v-model="orderinfo.del_requirement" />
      </div>
    </div>
    <div class="row border-top border-5">
      <div class="text-dark fw-bold fs-5 pt-4">결제 정보</div>
    </div>
    <label for="exampleInputEmail1" class="form-label mt-4 text-dark pb-1"
      >적립금 (보유 적립금 {{this.user.user_point_money}}원)</label
    >
    <div class="row form-group border-bottom border-2 pb-4">
      <div class="col-9 col-md-10">
        <input type="number" class="form-control" id="inputDefault" v-model="orderinfo.used_point"/>
      </div>
      <div v-if="usedpoint > this.user.user_point_money">
        {{AlertMaxPoint()}}
      </div>
      <div class="col-3 col-md-2 d-flex justify-content-end">
        <button type="button" class="btn btn-outline-primary" @click="UseMaxPoint()">전액사용</button>
      </div>
    </div>
    <div>
      <div class="row pt-3">
        <div class="col-6 text-dark">상품 합계</div>
        <div class="col-6 text-dark text-end fw-bolder">{{this.totalprice}}원</div>
      </div>
      <div class="row pt-3">
        <div class="col-6 text-dark">배송비</div>
        <div class="col-6 text-dark text-end fw-bolder">{{this.totaldeliveryprice}}원</div>
      </div>
      <div class="row pt-3 pb-3 border-bottom border-2">
        <div class="col-6 text-dark">총 할인 금액</div>
        <div class="col-6 text-dark text-end fw-bolder">{{usedpoint}}원</div>
      </div>
      <div class="row pt-3 pb-3">
        <div class="col-6 text-dark fw-bolder align-self-center">결제 금액</div>
        <div class="col-6 text-primary text-end fs-5 fw-bolder">{{this.totalprice + this.totaldeliveryprice - this.usedpoint}}</div>
      </div>
    </div>
    <div class="row border-top border-5">
      <div class="text-dark fw-bold fs-5 pt-3 pb-4">결제 수단</div>
    </div>
    <div class="row">
      <label class="form-check-label col-6 pb-2">
        <input
          type="radio"
          class="form-check-input"
          name="optionsRadios"
          id="optionsRadios1"
          value="option1"
          checked=""
        />
        카카오페이
      </label>
      <label class="form-check-label col-6">
        <input
          type="radio"
          class="form-check-input"
          name="optionsRadios"
          id="optionsRadios1"
          value="option1"
          checked=""
        />
        가상 계좌
      </label>
      <label class="form-check-label col-6 pb-3">
        <input
          type="radio"
          class="form-check-input"
          name="optionsRadios"
          id="optionsRadios1"
          value="option1"
          checked="1"
        />
        신용 / 체크카드
      </label>
      <label class="form-check-label col-6">
        <input
          type="radio"
          class="form-check-input"
          name="optionsRadios"
          id="optionsRadios1"
          value="option1"
          checked=""
        />
        계좌 이체
      </label>
    </div>
    <router-link to="/paymentdetail">
      <div class="row pt-3">
        <button type="button" class="btn btn-primary btn-lg pb-3 pt-3">
          {{this.totalprice + this.totaldeliveryprice - this.usedpoint}} 결제하기
        </button>
      </div>
    </router-link>
  </div>
</template>

<script>

import NewAddress from "../components/payment/NewAddress";
import DefaultAddress from "../components/payment/DefaultAddress";
import SelectedAddress from "../components/payment/SelectedAddress";

export default {
  components: { 
    NewAddress,
    DefaultAddress,
    SelectedAddress
  },
  
  data(){
    return {
      user: {},
      usedpoint : 0,
      pidarray : [],
      productdetail: [],
      totalprice : 0,
      totaldeliveryprice : 0,
      userdefaultaddress : null,   
      default_address_button : false,
      new_address_button : false,
      new_address_state : true,
      selected_address_state : false,
      // savenewaddress : {
      //   user_id : 0,
      //   receiver : "",
      //   phonenumber : "",
      //   address_name : "",
      //   post_code : "",
      //   address : "",
      //   detail_adress : "",
      //   address_type : 0,
      //   default_address : 0,
      // },
      orderinfo : {
        user_id : 0,
        product_id : 0,
        address_id : 0,
        product_amount : 0,
        order_status : "입금대기",
        del_requirement : "",
        used_point : "",
        payment_method : 0     
      }
    }    
  },
  created(){
    this.GetUserDetailInfo();
    this.GetTotalPriceProductInfo();
  },
  methods: {
      //유저정보를 가져오는 함수
      async GetUserProfile(){
          await this.$axios({
              url: `${this.$domain}/auth/user`,
              method: 'get',         
              headers: {'authorization': `Bearer ${this.$store.state.auth.token}`},
          })
          .then((res) => {
            this.user = res.data.user;
            //console.log(this.user);
          })
          .catch((err) => {
            console.log(err);
          }) 
      },

      //상품정보와 썸네일이미지를 가져오는 함수
      async GetProductDetail(){
          await this.$axios({
              url: `${this.$domain}/product/thumnail`,
              method: 'post',
              data: {
                productarray : this.pidarray
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

      //vuex의 배열로부터 productIdx만 분리하여 따로 배열에 넣어주는 함수 
      DivideProductid(){
        for(let i = 0 ; i < this.$store.state.cart.cart.length ; i++){
          this.pidarray.push(this.$store.state.cart.cart[i].productIdx);
        }
      },
     
      //상품 합계 금액을 가져오는 함수
      TotalPrice(){
        for(let i = 0 ; i < this.productdetail.length ; i++){
          this.totalprice = this.totalprice + this.productdetail[i].product_price * this.$store.state.cart.cart[i].productQty;
          this.totaldeliveryprice = this.totaldeliveryprice + this.productdetail[i].delivery_price;
        }
      },

      //DiviedPid, GetProductDetail 함수를 동기적으로 실행시켜주는 함수
      async GetTotalPriceProductInfo(){
        await this.DivideProductid();
        await this.GetProductDetail();
        this.TotalPrice();
      },  

      //보유 포인트 이상의 포인트를 사용하려할 때 호출할 함수
      AlertMaxPoint(){
        alert('보유 포인트 이상 사용은 불가능 합니다.');
        this.usedpoint = this.user.user_point_money;
      },

      //포인트 전액 사용버튼 클릭시 호출할 함수
      UseMaxPoint(){
        this.usedpoint = this.user.user_point_money
      },

      // 유저의 기본배송지를 가져오는 함수
      GetDefaultAddress(){
        this.$axios
          .post(`${this.$domain}/address/default`, { 
            userid : this.user.id,
            default_address : 1
          })
          .then((res) => {
            this.userdefaultaddress = res.data;
            console.log(this.userdefaultaddress);
          })
          .catch((err) => {
            console.log(err);
          })
      },

      // GetUserProfile -> GetDefaultAddress 동기적 처리함수
      async GetUserDetailInfo(){
        await this.GetUserProfile();
        this.GetDefaultAddress();
      },

      // 기본배송지 radio버튼을 클릭하였을 때 실행될 함수
      AlterStatusDefaultAddress(){
        if(this.default_address_button == false){
          this.default_address_button = !this.default_address_button;
          this.new_address_button = false;
          this.new_address_state = false;
          this.selected_address_state = false;
        } else if(this.default_address_button == true) {
          this.default_address_button = !this.default_address_button;
          this.new_address_state = true;
        }       
      },

      // 신규배송지 radio버튼을 클릭하였을 때 실행될 함수
      AlterStatusNewAddress(){
        if(this.new_address_button == false){
          this.new_address_button = !this.new_address_button;
          this.new_address_state = true;
          this.default_address_button = false;
          this.selected_address_state = false;
        } else if (this.new_address_button == true) {
          this.new_address_button = !this.new_address_button;
        }
      
      }


  }
};
</script>

<style scoped>
#payment {
  border: 2px dashed green;
}
</style>