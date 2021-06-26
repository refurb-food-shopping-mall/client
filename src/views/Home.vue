<template>
  <div id="home">
    <!-- Page Content-->
    <div class="container px-4 px-lg-5">
      <!-- Carousel -->
      <div class="row gx-4 gx-lg-5 align-items-center my-5">
        <div class="col-lg-5">
          <div class="mb-5">
            <h1 class="font-weight-light">Food Refurb</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a
            nostrum doloremque minima corrupti atque soluta, est impedit,
            aliquid sequi reprehenderit architecto asperiores quae officia
            cupiditate dolorum molestias unde vero quibusdam suscipit corporis?
            Eligendi quae sed nemo accusamus repellendus quod fuga, sit maiores
            deleniti quidem quibusdam, neque adipisci vero doloribus veniam in
            dolore facilis laborum, dolor atque laudantium doloremque! Repellat
            delectus asperiores soluta voluptates consequuntur id quo a natus
            qui.
          </p>
        </div>
        <div class="col-lg-7">
          <div
            id="carouselExampleControlsNoTouching"
            class="carousel slide"
            data-bs-touch="false"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="@/assets/main_supermarket.jpg"
                  class="d-block w-100"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                <img
                  src="@/assets/main_organic.jpg"
                  class="d-block w-100"
                  alt=""
                />
              </div>
              <div class="carousel-item">
                <img
                  src="@/assets/main_organic.jpg"
                  class="d-block w-100"
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
      <!-- Heading Row-->
      <div class="row gx-4 gx-lg-5 align-items-center my-5">
        <div class="col-lg-6">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="@/assets/main_organic.jpg"
            style="height: 350px"
          />
        </div>
        <div class="col-lg-6">
          <div class="mb-5">
            <h1 class="font-weight-light">Organic</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a
            nostrum doloremque minima corrupti atque soluta, est impedit,
            aliquid sequi reprehenderit architecto asperiores quae officia
            cupiditate dolorum molestias unde vero quibusdam suscipit corporis?
            Eligendi quae sed nemo accusamus repellendus quod fuga, sit maiores
            deleniti quidem quibusdam, neque adipisci vero doloribus veniam in
            dolore facilis laborum, dolor atque laudantium doloremque! Repellat
            delectus asperiores soluta voluptates consequuntur id quo a natus
            qui.
          </p>
          <router-link class="btn btn-primary" to="/product"
            >구경하기 🎈</router-link
          >
        </div>
      </div>
      <!-- Call to Action-->
      <div class="card text-white bg-secondary my-5 py-4 text-center">
        <div class="card-body">
          <p class="text-white m-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            facilis obcaecati quae, doloribus voluptate tempore.
          </p>
        </div>
      </div>
      <!-- Content Row-->
      <div class="row gx-4 gx-lg-5">
        <!-- 카드 1 -->
        <div
          v-for="(product, idx) in productList"
          :key="idx"
          class="col-md-4 mb-5"
        >
          <div class="card h-100">
            <img :src="getImgUrl(product)" class="img-fluid" />
            <div class="card-body">
              <div class="my-3">
                <h5 class="card-title" style="text-align: center">
                  {{ product.product_name }}
                </h5>
              </div>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                adipisci
              </p>
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
                <b>{{ product.product_price }}원</b>
              </div>
              <router-link
                :to="`/product/${product.id}`"
                class="btn btn-primary btn-sm"
                >사러 가기</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
</style>