<template>
  <div class="container">
    <div class="row">
      <div id="leftside" class="col-12 col-md-3 text-center">
        <img
          width="200"
          class="img-fluid"
          id="profile"
          src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
        />
        <div style="text-align:center">{{this.user.user_name}}님</div>
      </div>

      <div id="rightside" class="col-12 col-md-9 ">
        <!-- 주문 상세정보 s -->
        <br id="m" class="d-lg-none" />
        <div class="row fs-4"><strong>주문 상세정보</strong></div>
        <!-- pc start -->
        <div id="line" class="row d-none d-lg-block">
          <div
            class="col-12 mt-2 mb-2"
            style="border-bottom:2px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row text-center ">
          <div class="col-2 d-none d-lg-block">주문번호</div>
          <div class="col-4 d-none d-lg-block">상품정보</div>
          <div class="col-2 d-none d-lg-block">상품금액(수량)</div>
          <div class="col-2 d-none d-lg-block">배송비</div>
          <div class="col-2 d-none d-lg-block">진행상태</div>
        </div>
        <div id="line" class="row d-none d-lg-block">
          <div
            class="col-lg-12 mt-2 mb-5"
            style="border-bottom:1px solid rgb(214, 214, 214);"
          ></div>
        </div>
        <div class="row ">
          <div class="col-2 d-none d-lg-block text-center">{{orderinfo.order_number}}</div>
          <div class="col-4">
            <div class="row">
              <div class="col-3 text-center">
                <img
                  class="rounded d-none d-lg-block"
                  width="65"
                  height="65"
                  src="@/assets/onion2.jpg"
                />
              </div>
              <div class="col-9 d-none d-lg-block text-center">
                {{product.product_name}}
              </div>
            </div>
          </div>
          <div class="col-2 d-none d-lg-block text-center">
            {{(product.product_price * orderinfo.product_amount).toLocaleString('ko-KR')}}원({{orderinfo.product_amount}}개)
            </div>
          <div class="col-2 d-none d-lg-block text-center">{{(product.delivery_price+product.add_delivery_price).toLocaleString('ko-KR')}}원</div>
          <div class="col-2 d-none d-lg-block text-secondary text-center">
            {{orderinfo.order_status}}
          </div>
        </div>
        <div id="line" class="row d-none d-lg-block">
          <div
            class="col-12 mt-4 mb-3"
            style="border-bottom:1px solid rgb(214, 214, 214);"
          ></div>
        </div>
        <!-- pc end -->
        <!-- mobile start -->
        <div id="line" class="row d-lg-none">
          <div
            class="col-12 mt-2 mb-3"
            style="border-bottom:2px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row text-center">
          <div class="col-4 d-lg-none">주문번호</div>
          <div class="col-8 d-lg-none">상품정보</div>
        </div>
        <div id="line" class="row d-lg-none">
          <div
            class="col-12 mt-2 mb-3"
            style="border-bottom:1px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row text-center">
          <div class="col-4 d-lg-none">{{orderinfo.order_number}}</div>
          <div class="col-8">
            <div class="row">
              <div class="col-3 d-lg-none">
                <img
                  width="65"
                  height="65"
                  class="rounded"
                  src="@/assets/onion2.jpg"
                />
              </div>
              <div class="col-9 d-lg-none">{{product.product_name}}</div>
            </div>
          </div>
        </div>
        <br id="m" class="d-lg-none" />
        <div id="line" class="row d-lg-none">
          <div
            class="col-12 mt-2 mb-3"
            style="border-bottom:1px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row text-center">
          <div class="col-4 d-lg-none">상품금액(수량)</div>
          <div class="col-4 d-lg-none">배송비</div>
          <div class="col-4 d-lg-none">진행상태</div>
        </div>
        <div id="line" class="row d-lg-none">
          <div
            class="col-12 mt-2 mb-3"
            style="border-bottom:1px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row text-center">
          <div class="col-4 d-lg-none">
            {{(product.product_price * orderinfo.product_amount).toLocaleString('ko-KR')}}원({{orderinfo.product_amount}}개)
          </div>
          <div class="col-4 d-lg-none">{{(product.delivery_price+product.add_delivery_price).toLocaleString('ko-KR')}}원</div>
          <div class="col-4 d-lg-none text-secondary">{{orderinfo.order_status}}</div>
        </div>
        <!-- mobile end -->
        <!-- 주문 상세정보 e -->
        <br id="m" class="d-lg-none" />
        <br id="m" class="d-lg-none" />
        <br id="m" class="d-lg-none" />
        <br id="p" class="d-none d-lg-block" />
        <br id="p" class="d-none d-lg-block" />
        <br id="p" class="d-none d-lg-block" />
        <!-- 주문/결제 금액 정보 s -->
        <div class="row fs-4"><strong>주문/결제 금액 정보</strong></div>
        <!-- pc start -->
        <div id="line" class="row d-none d-lg-block">
          <div
            class="col-12 mt-2 mb-2"
            style="border-bottom:2px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row text-center">
          <div class="col-4 d-none d-lg-block">주문금액</div>
          <div class="col-4 d-none d-lg-block">결제상세</div>
          <div class="col-4 d-none d-lg-block">총 주문금액</div>
        </div>
        <div id="line" class="row d-none d-lg-block">
          <div
            class="col-12 mt-2 mb-4"
            style="border-bottom:1px solid rgb(214, 214, 214);"
          ></div>
        </div>
        <div class="row text-center">
          <div class="col-4">
            <div class=" d-flex justify-content-between">
              <div class="d-none d-lg-block">상품금액</div>
              <div class="d-none d-lg-block">{{(product.product_price * orderinfo.product_amount).toLocaleString('ko-KR')}}원</div>
            </div>
            <div class=" d-flex justify-content-between">
              <div class="d-none d-lg-block">배송비</div>
              <div class="d-none d-lg-block">{{(product.delivery_price+product.add_delivery_price).toLocaleString('ko-KR')}}원</div>
            </div>
          </div>
          <div class="col-4">
            <div class=" d-flex justify-content-between">
              <div class="d-none d-lg-block">{{orderinfo.payment_method}}</div>
              <div class="d-none d-lg-block">
                {{(product.product_price * orderinfo.product_amount + product.delivery_price+product.add_delivery_price).toLocaleString('ko-KR')}}원
              </div>
            </div>
          </div>
          <div class="col-4 d-none d-lg-block text-secondary">
            {{(product.product_price * orderinfo.product_amount + product.delivery_price+product.add_delivery_price).toLocaleString('ko-KR')}}원
          </div>
        </div>
        <div id="line" class="row d-none d-lg-block">
          <div
            class="col-12 mt-4 mb-2"
            style="border-bottom:1px solid rgb(214,214,214);"
          ></div>
        </div>
        <!-- pc end -->
        <!-- mobile start -->
        <div id="line" class="row d-lg-none">
          <div
            class="col-12 mt-2 mb-3"
            style="border-bottom:2px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row text-center">
          <div class="col-6 d-lg-none">주문금액</div>
          <div class="col-6 d-lg-none">결제상세</div>
        </div>
        <div id="line" class="row d-lg-none">
          <div
            class="col-12 mt-2 mb-3"
            style="border-bottom:1px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class=" d-flex justify-content-between">
              <div class="d-lg-none">상품금액</div>
              <div class="d-lg-none">
                {{(product.product_price * orderinfo.product_amount).toLocaleString('ko-KR')}}원
              </div>
            </div>
            <div class=" d-flex justify-content-between">
              <div class="d-lg-none">배송비</div>
              <div class="d-lg-none">
                {{(product.delivery_price+product.add_delivery_price).toLocaleString('ko-KR')}}원
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class=" d-flex justify-content-between">
              <div class="d-lg-none">{{orderinfo.payment_method}}</div>
              <div class="d-lg-none">
                {{(product.product_price * orderinfo.product_amount + product.delivery_price+product.add_delivery_price).toLocaleString('ko-KR')}}원
              </div>
            </div>
            <div class=" d-flex justify-content-between">
              <div class="text-secondary d-lg-none">총 주문금액</div>
              <div class="text-secondary d-lg-none">
                {{(product.product_price * orderinfo.product_amount + product.delivery_price+product.add_delivery_price).toLocaleString('ko-KR')}}원
              </div>
            </div>
          </div>
        </div>
        <!-- mobile end -->
        <!-- 주문/결제 금액 정보 e -->
        <br id="m" class="d-lg-none" />
        <br id="m" class="d-lg-none" />
        <br id="m" class="d-lg-none" />
        <br id="p" class="d-none d-lg-block" />
        <br id="p" class="d-none d-lg-block" />
        <br id="p" class="d-none d-lg-block" />
        <!-- 배송지 정보 s -->
        <div class="row fs-4"><strong>배송지 정보</strong></div>
        <!-- pc start -->
        <div id="line" class="row d-none d-lg-block">
          <div
            class="col-12 mt-2 mb-3"
            style="border-bottom:2px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row">
          <div class="col-2 text-center d-none d-lg-block">수령인</div>
          <div class="col-10 d-none d-lg-block">{{address.receiver}}</div>
        </div>
        <div class="row ">
          <div class="col-2 text-center d-none d-lg-block">연락처</div>
          <div class="col-10 d-none d-lg-block">{{address.phonenumber}}</div>
        </div>
        <div class="row ">
          <div class="col-2 text-center d-none d-lg-block">배송지</div>
          <div class="col-10 d-none d-lg-block">
            {{address.address}} {{address.detailed_address}} ({{address.post_code}})
          </div>
        </div>
        <div class="row ">
          <div class="col-2 text-center d-none d-lg-block">배송메모</div>
          <div class="col-10 d-none d-lg-block">{{orderinfo.del_requirement}}</div>
        </div>
        <div id="line" class="row d-none d-lg-block">
          <div
            class="col-12 mt-4 mb-2"
            style="border-bottom:1px solid rgb(214,214,214);"
          ></div>
        </div>
        <!-- pc end -->
        <!-- mobile start -->
        <div id="line" class="row d-lg-none">
          <div
            class="col-12 mt-2 mb-3"
            style="border-bottom:2px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row">
          <div class="col-3 text-center d-lg-none ">수령인</div>
          <div class="col-9 d-lg-none">{{address.receiver}}</div>
        </div>
        <div class="row ">
          <div class="col-3 text-center  d-lg-none">연락처</div>
          <div class="col-9 d-lg-none">{{address.phonenumber}}</div>
        </div>
        <div class="row ">
          <div class="col-3 text-center  d-lg-none">배송지</div>
          <div class="col-9 d-lg-none">
            {{address.address}} {{address.detailed_address}} ({{address.post_code}})
          </div>
        </div>
        <div class="row">
          <div class="col-3 text-center  d-lg-none">배송메모</div>
          <div class="col-9 d-lg-none">{{orderinfo.del_requirement}}</div>
        </div>
        <!-- mobile end -->
        <!-- 배송지 정보 e -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      orderinfo:{},
      address:{},
      user:{},
    };
  },
  mounted() {
    this.Get1();
    this.GetUserProfile();
  },
  methods: {    
    //주문정보 가져오는 함수
    async getOrder() {
      await this.$axios
        .post(`${this.$domain}/paymentdetail/${this.$route.params.id}`)
        .then((res) => {
          this.orderinfo = res.data.getorder[0];
          //console.log(this.orderinfo);
        })  
    },
    //유저의 주소 가져오는 함수
    getAddress() {
      this.$axios
        .post(`http://localhost:3000/api/getAddress`, {
          addressid: this.orderinfo.address_id,
        })
        .then((res) => {
          this.address = res.data.getaddress[0];
          //console.log(this.address);
        });
    },
    //order->address,product
    async Get1(){
        await this.getOrder();
        this.getAddress();
        this.getProduct();
    },
    //상품정보
    getProduct() {
      this.$axios
        .post(`http://localhost:3000/api/getProduct`, {
          productid: this.orderinfo.product_id,
        })
        .then((res) => {
          this.product = res.data.getproduct[0];
          //console.log(this.product);
        });
    },
    //유저정보를 가져오는 함수
    async GetUserProfile(){
        await this.$axios({
            url: `${this.$domain}/userinfo`,
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
    
  }
};
</script>

<style scoped>
#shortcut {
  background-color: mediumaquamarine;
  border-color: palevioletmediumaquamarine;
  background-color: rgb(214, 214, 214);
  text-align: center;
  /* border border-primary */
}
</style>
