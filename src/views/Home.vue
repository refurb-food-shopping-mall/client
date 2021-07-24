<template>
  <div id="home" class="">
    <!-- Page Content-->
    <div>
      <!-- Carousel -->
      <div class="container">
        <div class="row gx-4 gx-lg-5 align-items-center my-3">
          <div class="col-md-6">
            <div class="mb-5">
              <h2 class="text-black">
                <b
                  ><span style="color: #f1747b">신선</span>하고
                  <span style="color: #f1747b">맛</span>있는 못난이들을
                  여러분에게 전해드립니다</b
                >
              </h2>
            </div>
            <p class="text-black" style="font-weight: 550; line-height: 2em">
              못난이 농산물을 아시나요? <br />
              생김새가 이상하다는 이유로 버려지는 신선한 농작물들! <br />
              이제는 저희가 조금 못생겼지만, 신선하고 맛있는🤩 못난이들을
              <br />저렴한 가격으로 여러분에게 전해드립니다.
            </p>
          </div>
          <div class="col-md-6">
            <div
              id="carouselExampleControlsNoTouching"
              class="carousel slide"
              data-bs-touch="false"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="@/assets/main_vegetables.jpg"
                    class="rounded d-block w-100"
                    alt=""
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="@/assets/main_farmer_2.jpg"
                    class="rounded d-block w-100"
                    alt=""
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="@/assets/main_vege.jpg"
                    class="rounded d-block w-100"
                    alt=""
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Brand Info Row -->

      <div class="container">
        <div class="row gx-4 gx-lg-5 align-items-center my-5">
          <div class="col-lg-5">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="@/assets/vegetable_2.jpeg"
              style="height: 300px"
            />
          </div>
          <div class="col-lg-7">
            <div class="mb-5">
              <h2 class="text-black">
                <b
                  ><span style="color: #4cc099">착한채소</span>는 지속가능한
                  환경과 지구를 생각합니다</b
                >
              </h2>
            </div>
            <p class="text-black" style="font-weight: 550; line-height: 2em">
              잘 자란 농산물들의 제 가치를 찾아, 음식물 폐기는 줄이고 소비자의
              건강한 식탁과 미래를 위한 환경이 지속가능하게 합니다. 👍
            </p>
          </div>
        </div>
      </div>

      <!-- Content Row 1 -->
      <div class="container">
        <div class="row gx-4 gx-lg-5">
          <span class="fs-5 mb-3">
            <span class="me-1" style="color: black">후기 많은 상품</span>🍉👌
          </span>
          <!-- 카드 1 -->
          <div
            v-for="(product, idx) in productList.slice(0, 4)"
            :key="idx"
            class="col-md-3 mb-5"
          >
            <router-link :to="`/product/${product.id}`">
              <div class="card text-black" :class="{ featured: idx == 0 }">
                <div
                  v-if="idx == 0"
                  class="hot_tag"
                  style="position: absolute; right: 0; top: 0"
                >
                  <span class="text-white px-2">HOT</span>
                </div>
                <img :src="getImgUrl(product)" class="img-fluid product__img" />

                <div class="mt-2 ms-1" style="">
                  <span class="harvest_tag">
                    21.{{ product.harvested_date.split("-")[1] }}.{{
                      product.harvested_date.split("-")[2]
                    }}
                    수확
                  </span>
                </div>
                <div class="card-body p-0">
                  <div class="my-3">
                    <h5 class="card-title" style="text-align: center">
                      {{ product.product_name }}
                    </h5>
                  </div>
                </div>
                <div
                  class="
                    card-footer
                    d-flex
                    justify-content-between
                    align-items-center
                  "
                >
                  <div>
                    <b>{{ product.product_price.toLocaleString("ko-KR") }}원</b>
                  </div>
                  <div class="bnt_cart btn p-1">
                    <font-awesome-icon
                      icon="shopping-cart"
                      color="rgb(61, 60, 60)"
                    />
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Content Row 2 -->
      <div class="container">
        <div class="row gx-4 gx-lg-5">
          <span class="fs-5 mb-3">
            <span class="me-1" style="color: black">신상품</span>🍇😋
          </span>
          <!-- 카드 1 -->

          <div
            v-for="(product, idx) in productList.slice(4, 9)"
            :key="idx"
            class="col-md-3 mb-5"
          >
            <router-link :to="`/product/${product.id}`">
              <div class="card text-black" :class="{ featured: idx == 2 }">
                <div
                  v-if="idx == 2"
                  class="hot_tag"
                  style="position: absolute; right: 0; top: 0"
                >
                  <span class="text-white px-2">HOT</span>
                </div>
                <img :src="getImgUrl(product)" class="img-fluid product__img" />

                <div class="mt-2 ms-1" style="">
                  <span class="harvest_tag">
                    21.{{ product.harvested_date.split("-")[1] }}.{{
                      product.harvested_date.split("-")[2]
                    }}
                    수확
                  </span>
                </div>
                <div class="card-body p-0">
                  <div class="my-3">
                    <h5 class="card-title" style="text-align: center">
                      {{ product.product_name }}
                    </h5>
                  </div>
                </div>
                <div
                  class="
                    card-footer
                    d-flex
                    justify-content-between
                    align-items-center
                  "
                >
                  <div>
                    <b>{{ product.product_price.toLocaleString("ko-KR") }}원</b>
                  </div>
                  <div class="bnt_cart btn p-1">
                    <font-awesome-icon
                      icon="shopping-cart"
                      color="rgb(61, 60, 60)"
                    />
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- banner-1 -->
      <banner-1 />

      <!-- Heading Row-->
      <div class="mt-5">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <img
                class="img-fluid rounded"
                style="height: 200px"
                src="@/assets/cooking3.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div class="col-md-3">
              <img
                class="img-fluid rounded"
                style="height: 200px; width: 100%"
                src="@/assets/cooking5.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div class="col-md-3">
              <img
                class="img-fluid rounded"
                style="height: 200px"
                src="@/assets/cooking2.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div class="col-md-3">
              <img
                class="img-fluid rounded"
                style="height: 200px"
                src="@/assets/cooking4.jpg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row gx-4 gx-lg-5 align-items-center my-5">
            <!-- <div class="col-lg-6">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="@/assets/cooking3.jpg"
              style=""
            />
          </div> -->
            <div class="col-md-12 text-center">
              <div class="mb-5">
                <h1 class="text-black"><b>이제, 요리만 하세요!</b></h1>
              </div>
              <p class="text-black" style="font-weight: 550; line-height: 2em">
                못난이 농산물이라고 품질까지 못 난 것은 아닙니다.<br />
                맛있고 신선한 식재료는 저희가 안정적으로 공급해드리겠습니다.
                🚚<br />
                사장님들은 이제 식재료 고민은
                <span style="color: #fa656d">NO!</span>, 요리만 하세요!
              </p>
              <router-link
                class="btn btn-primary my-3"
                style="border-width: 2px"
                to="/product"
                ><b>리얼 후기 구경하기</b> 🎈</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner1 from '../components/HomeLayout/banner-1.vue';

export default {
  components: { Banner1 },
  data() {
    return {
      productList: [],
    };
  },
  mounted() {
    this.$axios.get(`${this.$domain}/product`).then((res) => {
      this.productList = res.data;
      console.log(this.productList);
    });
  },
  methods: {
    getImgUrl(product) {
      let pic = product.t_product_images[0].path.split("/")[2];
      return require("../assets/" + pic);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.product__img {
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
}
.card {
  /* padding: 1px; */
  transition: 0.4s;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}
.card:hover {
  transform: translate3d(7px, 7px, 0);
}
.text-black {
  color: rgb(61, 60, 60);
}
.hot_tag {
  border-bottom-left-radius: 10px;
  background-color: #f38085;
}
.harvest_tag {
  background-color: #4fbacf;
  border-radius: 20px;
  padding: 2px 10px;
  color: white;
}
.featured {
  border: 4px solid #f38085;
  /* color: #4cc099 */
}
.btn_cart {
  cursor: pointer;
}
</style>