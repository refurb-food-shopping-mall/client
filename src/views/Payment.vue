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
            :src="getImgUrl(product.t_product_images[0])"
            class="img-fluid"
        /></a>
      </div>
      <div class="col-9 col-md-10">
        <div class="text-dark pb-3">{{product.product_name}}</div>
        <div>
          <span class="text-dark">{{$store.state.cart.cart[i].productQty}}개</span>
          <span class="text-dark"> / </span>
          <span class="text-dark">{{(product.product_price * $store.state.cart.cart[i].productQty).toLocaleString("ko-KR")}}원</span>
        </div>
      </div>
    </div>
    <div class="row border-top pb-4 pt-4">
      <span class="col-6 text-dark align-self-center fw-bolder">상품 합계</span>
      <span class="col-6 text-end fs-5 fw-bolder text-primary align-self-center"
        >{{this.totalprice.toLocaleString("ko-KR")}}원</span
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
        <AddressListModal v-if="modalview" @close="GetSelectedAddress" :useraddresslist="useraddresslist">
          <!-- <h3 slot="header">
            알림!
          </h3> -->
          <!-- <div slot="body">
            할 일을 입력하세요
          </div> -->
        </AddressListModal>       
        <button type="button" class="btn btn-outline-primary btn-sm" @click="GetUserAddressList()">
          배송지 목록
        </button>

      </div>
    </div>
    <div v-if="default_address_button">
      <DefaultAddress :default_address="this.userdefaultaddress" />
    </div>
    <div v-if="selected_address_state">
      <SelectedAddress :address="this.selectedaddress"/>
    </div>
    <div v-if="new_address_state">
        <div class="form-group pb-1">
            <label for="receiver" class="form-label mt-1 text-dark"
            >수령인</label
            >
            <input
            v-model="newaddress.receiver"
            type="text"
            class="form-control"
            id="receiver"
            aria-describedby="emailHelp"
            autocomplete="off"
            />
        </div>
        <label for="userphonenumber" class="form-label mt-3 text-dark"
            >연락처</label
        >
        <input
            v-model="newaddress.phonenumber"
            type="text"
            class="form-control"
            id="userphonenumber"
            aria-describedby="emailHelp"
            placeholder="-없이 숫자만 입력해주세요."
            autocomplete="off"
        />
        <div class="form-group">
            <label for="addressname" class="form-label mt-4 text-dark"
            >배송지명</label
            >
            <input
            v-model="newaddress.address_name"
            type="text"
            class="form-control"
            id="addressname"
            aria-describedby="emailHelp"
            autocomplete="off"
            />
        </div>
        <label for="postcode" class="form-label mt-4 pb-1 text-dark"
            >우편번호</label
        >
        <div class="row form-group">
            <div class="col-9 col-md-10">
            <input type="text" class="form-control" id="postcode" autocomplete="off" v-model="newaddress.post_code" />
            </div>
            <div class="col-3 col-md-2 d-flex justify-content-end">
            <button type="button" class="btn btn-outline-primary">검색하기</button>
            </div>
        </div>
        <div class="row">
            <div class="form-group">
            <label class="col-form-label mt-3 text-dark" for="address"
                >주소</label
            >
            <div class="pb-2">
                <input type="text" class="form-control" id="address" v-model="newaddress.address" />
            </div>
            <div>
                <input type="text" class="form-control" id="detailaddress" v-model="newaddress.detail_adress" />
            </div>
            </div>
        </div>
        <div class="row pt-3 pb-2" style="padding-left: 12px">
            <div class="form-check col-6 col-md-4">
                <input class="form-check-input" type="checkbox" id="flexCheckDefault1" v-model="newaddress.default_address" />
                <label class="form-check-label" for="flexCheckDefault1">
                    기본 배송지로 설정하기
                </label>
            </div>
            <div class="form-check col-6 col-md-8">
                <input class="form-check-input" type="checkbox" id="flexCheckDefault2" v-model="newaddress.address_list"/>
                <label class="form-check-label" for="flexCheckDefault2">
                    배송지목록에 추가하기
                </label>
            </div>
        </div>
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
      >적립금 (보유 적립금 {{Number(user.user_point_money).toLocaleString("ko-KR")}}원)</label
    >
    <div class="row form-group border-bottom border-2 pb-4">
      <div class="col-9 col-md-10">
        <input type="number" class="form-control" id="inputDefault" v-model="orderinfo.used_point"/>
      </div>
      <div v-if="orderinfo.used_point > user.user_point_money">
        {{AlertMaxPoint()}}
      </div>
      <div class="col-3 col-md-2 d-flex justify-content-end">
        <button type="button" class="btn btn-outline-primary" @click="UseMaxPoint()">전액사용</button>
      </div>
    </div>
    <div>
      <div class="row pt-3">
        <div class="col-6 text-dark">상품 합계</div>
        <div class="col-6 text-dark text-end fw-bolder">{{totalprice.toLocaleString("ko-KR")}}원</div>
      </div>
      <div class="row pt-3">
        <div class="col-6 text-dark">배송비</div>
        <div class="col-6 text-dark text-end fw-bolder">{{totaldeliveryprice.toLocaleString("ko-KR")}}원</div>
      </div>
      <div class="row pt-3 pb-3 border-bottom border-2">
        <div class="col-6 text-dark">총 할인 금액</div>
        <div class="col-6 text-dark text-end fw-bolder">{{orderinfo.used_point.toLocaleString("ko-KR")}}원</div>
      </div>
      <div class="row pt-3 pb-3">
        <div class="col-6 text-dark fw-bolder align-self-center">결제 금액</div>
        <div class="col-6 text-primary text-end fs-5 fw-bolder">{{totalprice + totaldeliveryprice - orderinfo.used_point}}원</div>
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
          value="카카오페이"          
          v-model="orderinfo.payment_method"         
        />
        카카오페이
      </label>
      <label class="form-check-label col-6">
        <input
          type="radio"
          class="form-check-input"
          name="optionsRadios"
          id="optionsRadios1"
          value="가상 계좌"
          v-model="orderinfo.payment_method"                  
        />
        가상 계좌
      </label>
      <label class="form-check-label col-6 pb-3">
        <input
          type="radio"
          class="form-check-input"
          name="optionsRadios"
          id="optionsRadios1"
          v-model="orderinfo.payment_method"
          value="신용 / 체크카드"         
        />
        신용 / 체크카드
      </label>
      <label class="form-check-label col-6">
        <input
          type="radio"
          class="form-check-input"
          name="optionsRadios"
          id="optionsRadios1"
          v-model="orderinfo.payment_method"
          value="계좌 이체"         
        />
        계좌 이체
      </label>
    </div>
    <!-- <router-link to="/paymentdetail"> -->
      <div class="row pt-3">
        <button type="button" class="btn btn-primary btn-lg pb-3 pt-3" @click="Order()">
          {{totalprice + totaldeliveryprice - orderinfo.used_point}}원 결제하기
        </button>
      </div>
    <!-- </router-link> -->
  </div>
</template>

<script>

import DefaultAddress from "../components/payment/DefaultAddress";
import SelectedAddress from "../components/payment/SelectedAddress";
// import AddressModal from "../components/payment/AddressModal";
import AddressListModal from "../components/payment/AddressListModal";

export default {
  components: { 
    DefaultAddress,
    SelectedAddress,
    // AddressModal
    AddressListModal,
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
      modalview : false,
      useraddresslist : null,
      selectedaddress : 1,
      newaddressid : null,

      newaddress : {
        user_id : 0,
        receiver : "",
        phonenumber : "",
        address_name : "",
        post_code : "",
        address : "",
        detail_adress : "",
        default_address : false,
        address_list : false,
                
      },
      orderinfo : {
        user_id : 0,
        product_id : 0,
        address_id : 0,
        product_amount : 0,
        order_status : "입금대기",
        del_requirement : "",
        used_point : 0,
        payment_method : 0,
        order_number : ""     
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
              url: `${this.$domain}/userinfo`,
              method: 'get',         
              headers: {'authorization': `Bearer ${this.$store.state.auth.token}`},
          })
          .then((res) => {
            this.user = res.data.user;
            // console.log(this.user);
            
          })
          .catch((err) => {
            console.log(err);
          }) 
      },

      // 유저의 기본배송지를 가져오는 함수
      GetDefaultAddress(){
        this.$axios
          .post(`${this.$domain}/address/default`, { 
            userid : this.user.id,
            default_address : 1
          })
          .then((res) => {
            this.userdefaultaddress = res.data.useraddress;
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
            // console.log(this.productdetail)
          })
          .catch((err) => {
            console.log(err);
          })
      },

      getImgUrl(product_image) {
        let pic = product_image.path.split("/")[2];
        return require("../assets/" + pic);
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
        this.orderinfo.used_point = this.user.user_point_money;
      },

      //포인트 전액 사용버튼 클릭시 호출할 함수
      UseMaxPoint(){
        this.orderinfo.used_point = this.user.user_point_money
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
      },
      // 배송지 목록 버튼을 클릭하였을 때 해당 유저의 배송지 목록을 가져옴
      GetUserAddressList(){
        this.modalview=true;
        this.$axios
        .post(`${this.$domain}/address/list`,{
          user_id : this.user.id
        })
        .then((res) => {
          // console.log(res.data);
          this.useraddresslist = res.data.useraddresslist;
        })
        .catch((err) => {
          console.log(err);
        })
      },
      // 배송지 목록 모달에서 선택한 주소를 저장
      GetSelectedAddress(address){
        this.modalview=false;
        this.selectedaddress = address;
        console.log(this.selectedaddress);
        this.selected_address_state = true;
        this.default_address_button = false;
        this.new_address_state = false;
        this.new_address_button = false;
      },
      //주문 버튼을 실행했을 떄 실행할 함수 후에 결제 완료후에 실행시킬 함수
      //신규배송지인지 기본배송지인지 배송지 목록에서 선택된 배송지인지에따라 바뀐다
      async Order(){
          if(this.orderinfo.payment_method == 0){
            alert('결제 방법을 선택해주세요');
            return
          }
          if(this.orderinfo.used_point > 0){
            this.$axios
              .post(`${this.$domain}/userpoint`, { used_point : this.orderinfo.used_point, user_id : this.user.id })
              .catch((err) => {
              console.log(err);
            })
          }    
          if(this.default_address_button == true){
            this.saveorder(this.userdefaultaddress.id)
            this.$store.commit('cart/CLEAR_CART');
            
          } else if(this.selected_address_state == true){
            this.saveorder(this.selectedaddress.id)
            this.$store.commit('cart/CLEAR_CART');
          } 
          else if(this.new_address_state == true){
            if(this.default_address == false && this.address_list == false){
              if(this.newaddress.receiver != "" && this.newaddress.phonenumber != "" && this.newaddress.post_code != "" && this.newaddress.detail_adress != "" && this.newaddress.address_name == ""){
                await this.saveaddress()
                this.saveorder(this.newaddressid)
                this.$store.commit('cart/CLEAR_CART');
              } 
            } else if(this.newaddress.receiver == "" || this.newaddress.phonenumber == "" || this.newaddress.post_code == "" || this.newaddress.detail_adress == "" || this.newaddress.address_name == ""){
                alert("배송관련 부분을 작성해주세요")
                return
            } else {
                await this.saveaddress()
                this.saveorder(this.newaddressid)
                this.$store.commit('cart/CLEAR_CART');
            }        
          }
      },
      //신규 주소를 저장하는 함수
      async saveaddress(){
        this.newaddress.user_id = this.user.id
        // console.log(this.newaddress)
          await this.$axios
            .post(`${this.$domain}/address/save`, this.newaddress)
            .then((res) => {
              this.newaddressid = res.data.address_id;
              // console.log(this.newaddressid)
            })
            .catch((err) => {
              console.log(err);
            })
      },
      //주문 정보를 저장하는 함수
      saveorder(addressid){
          this.orderinfo.user_id = this.user.id
          this.orderinfo.address_id = addressid
          let today = new Date()
          this.orderinfo.order_number = `${today.getFullYear()}` + `${today.getMonth() + 1}` + `${today.getDate()}` + `${today.getHours()}` + `${today.getMinutes()}` + `${today.getSeconds()}` + `${this.user.id}`
          // console.log(this.orderinfo.order_number)
          for(let i = 0 ; i < this.$store.state.cart.cart.length ; i++){
            this.orderinfo.product_id = this.$store.state.cart.cart[i].productIdx;
            this.orderinfo.product_amount = this.$store.state.cart.cart[i].productQty;
            this.$axios
              .post(`${this.$domain}/order/create`, this.orderinfo)
              .catch((err) => {
                console.log(err);
              })
          }
          alert('주문이 완료되었습니다.')
          this.$router.push("/shipping");
      }
      
      



  }
};
</script>

<style scoped>
#payment {
  border: 2px dashed green;
}
</style>