<template>
  <div id="productlist">
    <!-- Page Content-->
    <div class="container px-4 px-lg-5">      
      <!-- Content Row-->
      <div class="row gx-4 gx-lg-5">
        <!-- 카드 1 -->
        <div
          v-for="(product, idx) in productList"
          :key="idx"
          class="col-md-4 mb-5"
        >
          <div class="card h-100">
            <router-link :to="`/product/${product.id}`">
            <img :src="getImgUrl(product)" class="img-fluid" />
            </router-link>
            <div class="card-body">
              <div class="my-3">
                <router-link :to="`/product/${product.id}`" class="card-title">
                <h5 style="text-align: center">
                  {{ product.product_name }}
                </h5>
                </router-link>
              </div>
              <p class="card-text" style="text-align: center">
                {{product.harvested_date}} 수확 상품
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
                <b>{{ product.product_price.toLocaleString("ko-KR") }}원</b>
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