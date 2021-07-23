<template>
  <main>
    <div class="container">
      <div id="row1" class="row">
        <div id="row1_profile" class="col-12 col-lg-3 text-center">
          <img
            width="200"
            class="img-fluid"
            id="profile"
            src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
          />
          <div style="text-align: center">{{this.user.user_name}}님</div>
        </div>

        <div
          id="row1_statebox"
          class="col-12 col-lg-9 border-top border-bottom border-primary"
        >
          <div class="row text-center mt-2">
            <div class="col-4"><strong>배송준비중</strong></div>
            <div class="col-4"><strong>배송중</strong></div>
            <div class="col-4"><strong>교환/환불요청</strong></div>
          </div>
          <div class="row mt-3">
            <div class="col-4">
              <div class="row">
                <div class="col-8 d-flex justify-content-end">
                  <img
                    class="img-fluid"
                    src="https://image.flaticon.com/icons/png/512/814/814989.png"
                    style="height:80%"
                  />
                </div>
                <div
                  class="col-4 d-flex align-items-center text-secondary fs-1"
                >
                  {{this.cntarr[0]}}
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="row">
                <div class="col-8 d-flex justify-content-end">
                  <img
                    class="img-fluid"
                    src="https://image.flaticon.com/icons/png/128/664/664468.png"
                  />
                </div>
                <div
                  class="col-4 d-flex align-items-center text-secondary fs-1"
                >
                  {{this.cntarr[1]}}
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="row">
                <div class="col-8 d-flex justify-content-end">
                  <img
                    class="img-fluid"
                    src="https://image.flaticon.com/icons/png/128/1585/1585147.png"
                  />
                </div>
                <div
                  class="col-4 d-flex align-items-center text-secondary fs-1"
                >
                  {{this.cntarr[2]}}
                </div>
              </div>
            </div>
          </div>
          <!-- cal pc start -->
          <div class="row justify-content-center mt-2">
            <div class="col-3 d-flex justify-content-end d-none d-lg-block">              
              <input type="date" v-model="date1">
            </div>
            <div class="col-1 fs-4 d-none d-lg-block">~</div>
            <div class="col-3 d-none d-lg-block">              
              <input type="date" v-model="date2">
            </div>
            <div class="col-2 d-none d-lg-block">
              <button
                style="height:30px"
                type="button"
                class="btn btn-outline-primary d-flex align-items-center"
                @click="searchList"
                >
                조회
              </button>
            </div>
          </div>
          <!-- cal pc end -->
        </div>
      </div>
      <!-- cal mobile start -->
      <div class="row">
        <div class="col-5 mt-3">
          <form
            class="d-lg-none"
            name="해당 폼의 이름"
            action="값을 보낼 주소"
            method="post"
          >
            <input type="date" name="userBirthday" value="2021-04-28" />
          </form>
        </div>
        <div class="col-1 d-lg-none mt-3">~</div>
        <div class="col-4 mt-3">
          <form
            class="d-lg-none"
            name="해당 폼의 이름"
            action="값을 보낼 주소"
            method="post"
          >
            <input type="date" name="userBirthday" value="2021-05-28" />
          </form>
        </div>
        <div class="col-2 text-end d-lg-none mt-3">
          <img
            width="20"
            src="https://image.flaticon.com/icons/png/128/107/107122.png"
          />
        </div>
      </div>
      <!-- cal mobile end -->
      <div id="line" class="row">
        <div
          class="col-12 mt-4 mb-5"
          style="border-bottom: 1px solid rgb(214, 214, 214)"
        ></div>
      </div>
      <!-- lalalalalalalalalalalalalalalalalalalalala -->
      <div id="row2" class="row">
        <!-- LIST pc start -->
        <div class="col-lg-3 d-flex justify-content-center d-none d-lg-block">
          <div class="list-group col-9 text-center">
            <router-link
              to="mypage/profileupdate"
              href="#"
              class="list-group-item list-group-item-action"
              >회원정보 수정
            </router-link>
            <router-link to="/addresslist" href="#" class="list-group-item list-group-item-action"
              >배송지 관리</router-link
            >
            <a href="#" class="list-group-item list-group-item-action"
              >카드/계좌 관리</a
            >
          </div>
        </div>
        <!-- LIST pc end -->
        <div id="row2_items" class="col-lg-9">
          
          <div :key="i" v-for="(order, i) in getorders" class="row d-flex align-items-center">
            <div class="col-3">
              <router-link
                :to="`/paymentdetail/${order.id}`"
                class="logo">            
              <img :src="getImgUrl(order)" class="img-fluid" style="cursor: pointer"/>
              </router-link>
            </div>
            <div class="col-6">
              <router-link
                :to="`/paymentdetail/${order.id}`"
                class="logo">
                  <div class="fs-5 text-muted" style="cursor: pointer">{{order.key.product_name}}</div>
                </router-link>              
              <div>{{order.ordered_day.split('T')[0]}}</div>
              <div>{{(order.key.product_price*order.product_amount + order.key.delivery_price + order.key.add_delivery_price).toLocaleString('ko-KR')}}원</div>
              <div class="text-secondary">{{order.order_status}}</div>
            </div>
            <div class="col-3 text-center">
              <div>
                <button @click="cancel(order)"
                type="button" class="btn btn-primary" v-if="order.order_status=='입금대기' || order.order_status=='배송준비중'">
                  주문취소
                </button>
                <button type="button" class="btn btn-primary" v-else-if="order.order_status=='배송중'">
                  배송조회
                </button>
                <button type="button" class="btn btn-primary" v-else-if="order.order_status=='배송완료'">
                  <router-link
                    :to="`/cancel/${order.id}`"
                    class="logo" style="color:white">
                  교환/환불요청</router-link>
                </button>
              </div>
              <div class="mt-3"></div>
              <div>  
                <router-link
                  :to="`/writereview/${order.id}`"
                  class="btn btn-primary"
                  v-if="order.order_status=='배송완료'"
                  >리뷰쓰기
                </router-link>
                <router-link
                  :to="`/paymentdetail/${order.id}`"
                  class="btn btn-primary"
                  v-else
                  >결제상세
                </router-link>                  
              </div>
            </div>
            <div id="line" class="row">
            <div
              class="col-12 mt-4 mb-4"
              style="border-bottom: 1px solid mediumaquamarine"
            ></div>
          </div>
          </div>


          <!-- hello -->
          <div v-if="isStatusOn">
          
          <div :key="'rorder'+j" v-for="(rorder, j) in recentorderarr" class="row d-flex align-items-center">
            <div class="col-3">
              <router-link
                :to="`/paymentdetail/${rorder.id}`"
                class="logo">            
              <img :src="getImgUrl(rorder)" class="img-fluid" style="cursor: pointer"/>
              </router-link>
            </div>
            <div class="col-6">
              <router-link
                :to="`/paymentdetail/${rorder.id}`"
                class="logo">
                  <div class="fs-5 text-muted" style="cursor: pointer">{{rorder.key.product_name}}</div>
                </router-link>              
              <div>{{rorder.ordered_day.split('T')[0]}}</div>
              <div>{{(rorder.key.product_price*rorder.product_amount + rorder.key.delivery_price + rorder.key.add_delivery_price).toLocaleString('ko-KR')}}원</div>
              <div class="text-secondary">{{rorder.order_status}}</div>
            </div>
            <div class="col-3 text-center">
              <div>
                <button @click="cancel(rorder)"
                  type="button" class="btn btn-primary" v-if="rorder.order_status=='입금대기'|| rorder.order_status=='배송준비중'">
                  주문취소
                </button>
                <button type="button" class="btn btn-primary" v-else-if="rorder.order_status=='배송중'">
                  배송조회
                </button>                
                <button type="button" class="btn btn-primary" v-else-if="rorder.order_status=='배송완료'">
                  <router-link
                    :to="`/cancel/${rorder.id}`"
                    class="logo" style="color:white">
                    교환/환불요청</router-link>
                </button>
              </div>
              <div class="mt-3"></div>
              <div>  
                <router-link
                  :to="`/writereview/${rorder.id}`"
                  class="btn btn-primary"
                  v-if="rorder.order_status=='배송완료'"
                  >리뷰쓰기
                </router-link>
                <router-link
                  :to="`/paymentdetail/${rorder.id}`"
                  class="btn btn-primary"
                  v-else
                  >결제상세
                </router-link>                  
              </div>
            </div>
            <div id="line" class="row">
              <div
                class="col-12 mt-4 mb-4"
                style="border-bottom: 1px solid mediumaquamarine"
              ></div>
            </div>

          </div>

          </div>

          
          <!-- Add a new item here. -->
        </div>
        <!-- LIST mobile start -->
        <div class="row mt-5 pt-5">
          <div class="col-4 d-lg-none text-center">
            <a href="#">회원정보 수정</a>
          </div>
          <div class="col-4 d-lg-none text-center">
            <a href="#">배송지 관리</a>
          </div>
          <div class="col-4 d-lg-none text-center">
            <a href="#">카드/계좌 관리</a>
          </div>
        </div>
        <!-- LIST mobile end -->
      </div>
    </div>
  </main>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      getorders:[],
      date1:'',
      date2:'',
      date3:'',
      user:{},
      recentorderarr:[],
      today:'',
      back:'',
      cntarr:[],
      isStatusOn: true,
      num:0,
    };
  },
  mounted() {
    this.Get1();//GetUserProfile->datecal->recentOrder
  },
  methods: {
    //
    searchList(){
      if(this.num==0){
        this.isStatusOn = !this.isStatusOn;
        this.num += 1;
        }
      const params = {
        date1: this.date1,
        date2: this.date2,
      }
      let now = new Date(this.date2.split('-')[0], this.date2.split('-')[1], this.date2.split('-')[2]);
      let tom = new Date(now.setDate(now.getDate() + 1));//다음날짜
      //console.log(tom)
      const dd = tom.getDate()
      const mm = tom.getMonth()
      const yy = tom.getFullYear()
      this.date3 = `${yy}-${mm >= 10 ? mm : '0' + mm}-${dd >= 10 ? dd : '0' + dd}`
      // console.log(this.date3)
      // console.log(typeof (this.date3))

      this.getorders = this.getget(params);
    },
    //기간과 유저에 따른 상품정보 가져오는 함수
    async getget(params) {
      console.log(params);
      await this.$axios
        .post(`http://localhost:3000/api/getDate`, {
          dayarr: [this.date1, this.date3],
          user_id: this.user.id
        })
        .then((res) => {
          this.getorders = res.data.arr;
          console.log(this.getorders);
        })
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
            console.log(this.user);
        })
        .catch((err) => {
            console.log(err);
        }) 
    },
    //상품사진
    getImgUrl(order) {
      let pic = order.key.t_product_images[0].path.split("/")[2];
      //console.log(pic);
      return require("../assets/" + pic);
    },
    //최근주문들불러오기
    async recentOrder(){
      await this.$axios
        .post(`http://localhost:3000/api/getDate`, {
          user_id: this.user.id,
          dayarr: [this.back, this.today],
        })
        .then((res) => {
          this.recentorderarr = res.data.arr;
          this.cntarr = res.data.cntarr;
          console.log(this.recentorderarr);
        });
    },
    //날짜계산
    datecal(){
      let today = new Date();	//현재날짜
      //console.log(today)
      let dd = today.getDate() + 1
      let mm = today.getMonth() + 1
      let yy = today.getFullYear()
      this.today = `${yy}-${mm >= 10 ? mm : '0' + mm}-${dd >= 10 ? dd : '0' + dd}`

      let back = new Date(today.setDate(today.getDate() - 30));//30일이내
      let ddd = back.getDate()
      let mmm = back.getMonth() + 1
      let yyy = back.getFullYear()
      this.back = `${yyy}-${mmm >= 10 ? mmm : '0' + mmm}-${ddd >= 10 ? ddd : '0' + ddd}`
      //console.log(this.back, this.today);
      this.recentorderarr = this.recentOrder();
    },
    //
    async Get1(){
        await this.GetUserProfile();
        this.datecal();
    },
    //alert1
    cancel(order){
      //console.log(order.id)
      Swal.fire({
      title: '주문취소 하시겠습니까?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5ab395',
      cancelButtonColor: '#F08080',
      confirmButtonText: '예',
      cancelButtonText: "아니오",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.$axios
          .post(`http://localhost:3000/api/cancelOrder`, {
            id : order.id,
          })
          .then((res) => {
            console.log(res.data);
          });
        this.cancel2();
      }
    })
    },
  //alert2
  async cancel2(){
    await Swal.fire({
    title: '취소되었습니다!',
    //text: '신용/체크카드 환불은 3~4일 소요됩니다.',
    icon: 'success',
    confirmButtonText: '확인',
    confirmButtonColor: '#5ab395',
  })
  this.$router.go(this.$router.currentRoute);
  },
  
  }
};
</script>

<style scoped>
#shortcut {
  background-color: mediumaquamarine;
  border-color: palevioletred;
  background-color: rgb(214, 214, 214);
  text-align: center;
  color:rgb(80, 80, 80)
  /* border border-primary */
}
.logo{
text-decoration: none;
}
</style>
