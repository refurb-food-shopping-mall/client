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
          <div style="text-align: center">{{$store.state.user.userName}}님</div>
        </div>
        <!-- ------------------------------------------------------------------------------------ -->
        <div
          id="row1_statebox"
          class="col-12 col-lg-9 border-top border-bottom border-primary"
        >
          <div class="row text-center mt-2">
            <div class="col-4"><strong>배송중</strong></div>
            <div class="col-4"><strong>배송완료</strong></div>
            <div class="col-4"><strong>교환/반품</strong></div>
          </div>
          <div class="row mt-3">
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
                  2
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="row">
                <div class="col-8 d-flex justify-content-end">
                  <img
                    class="img-fluid"
                    src="https://image.flaticon.com/icons/png/128/869/869129.png"
                  />
                </div>
                <div
                  class="col-4 d-flex align-items-center text-secondary fs-1"
                >
                  1
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
                  0
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
          </div>
        </div>
        <!-- LIST pc end -->
        <div id="row2_items" class="col-lg-9">
          <div class="row d-flex align-items-center">
            <div class="col-3">
              <img
                class="img-fluid"
                src="@/assets/onion2.jpg"
              />
            </div>
            <div class="col-6">
              <div class="fs-5">무안 양파 5kg/10kg/15kg</div>
              <div>2021.05.05</div>
              <div>5,000원</div>
              <div class="text-secondary">배송중</div>
            </div>
            <div class="col-3 text-center">
              <div>
                <button type="button" class="btn btn-primary">배송조회</button>
              </div>
              <div class="mt-3"></div>
              <div>
                <router-link to="/paymentdetail">
                  <button type="button" class="btn btn-primary">
                    결제상세
                  </button>
                </router-link>
              </div>
            </div>
          </div>
          <div id="line" class="row">
            <div
              class="col-12 mt-4 mb-4"
              style="border-bottom: 1px solid mediumaquamarine"
            ></div>
          </div>
          <!-- Add a new item here. -->
          <div class="row d-flex align-items-center">
            <div class="col-3">
              <img
                class="img-fluid"
                src="@/assets/onion2.jpg"
              />
            </div>
            <div class="col-6">
              <div class="fs-5">무안 양파 5kg/10kg/15kg</div>
              <div>2021.05.06</div>
              <div>5,000원</div>
              <div class="text-secondary">배송중</div>
            </div>
            <div class="col-3 text-center">
              <div>
                <button type="button" class="btn btn-primary">배송조회</button>
              </div>
              <div class="mt-3"></div>
              <div>
                <router-link to="/paymentdetail">
                  <button type="button" class="btn btn-primary">
                    결제상세
                  </button>
                </router-link>
              </div>
            </div>
          </div>
          <div id="line" class="row">
            <div
              class="col-12 mt-4 mb-4"
              style="border-bottom: 1px solid mediumaquamarine"
            ></div>
          </div>
          <!-- Add a new item here. -->
          <div class="row d-flex align-items-center">
            <div class="col-3">
              <img
                class="img-fluid"
                src="@/assets/onion2.jpg"
              />
            </div>
            <div class="col-6">
              <div class="fs-5">무안 양파 5kg/10kg/15kg</div>
              <div>2021.05.01</div>
              <div>5,000원</div>
              <div>배송완료</div>
            </div>
            <div class="col-3 text-center">
              <div class="d-none d-lg-block">
                <button type="button" class="btn btn-primary">
                  교환/반품요청
                </button>
              </div>
              <!-- mobile -->
              <div class="d-lg-none">
                <button type="button" class="btn btn-primary">
                  교환/<br />반품요청
                </button>
              </div>
              <!-- mobile -->
              <div class="mt-3"></div>
              <div>
                <router-link to="/writereview">
                  <button type="button" class="btn btn-primary">
                    리뷰쓰기
                  </button>
                </router-link>
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
export default {
  data() {
    return {
      oday:{},
      getorders:{},
      date1:'',
      date2:'',
      date3:'',
    };
  },
  mounted() {
    //this.getget();
  },
  methods: {
    searchList(){
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
    //
    getget(params) {
      console.log(params);
      this.$axios
        .post(`http://localhost:3000/api/getDate`, {
          dayarr: [this.date1, this.date3]
        })
        .then((res) => {
          this.getorders = res.data.getgett;
          console.log(this.getorders);
        })  
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
  /* border border-primary */
}
</style>
