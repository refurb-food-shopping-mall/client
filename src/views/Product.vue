<template>
  <div id="product">
    <!-- 이곳을 자유롭게 만들어주세요. -->

    <div class="container my-5">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <div class="row d-flex justify-content-around">
        <div class="col-md-5 d-flex justify-content-center">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
            style="width: 90%"
          >
            <!-- carousel-inner-images -->
            <div class="carousel-inner">
              <div
                v-for="(product_img, idx) in product.product_images"
                :key="'product_img' + idx"
              >
                <div
                  class="carousel-item"
                  :class="{ active: idx == currentImgIdx }"
                >
                  <img
                    :src="getImgUrl(product_img)"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <!-- carousel-control-button -->
            <button
              @click="getPrevImage"
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              @click="getNextImage"
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
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

        <div class="col-md-5 d-flex flex-column justify-content-center my-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title" style="text-align: center">
                {{ product.product_name }}
              </h5>
              <h6
                class="card-subtitle mb-2 text-muted"
                style="text-align: right"
              >
                {{ product.product_price.toLocaleString("ko-KR") }}원
              </h6>
              <p class="card-text" style="text-align: right">
                배송비 {{ product.delivery_price.toLocaleString("ko-KR") }}원
              </p>
              <div class="form-group">
                <label
                  for="exampleSelect1"
                  class="form-label d-flex justify-content-end mt-4"
                  >수량 선택</label
                >
                <select
                  v-model.number="quantity"
                  class="form-select"
                  id="exampleSelect1"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <p class="card-text" style="text-align: right">
                배송 예정일 : 1일
              </p>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <button
              @click="addProductToCart({ productIdx, quantity })"
              type="button"
              class="btn btn-primary mt-3"
            >
              장바구니 담기
            </button>
            <router-link to="/payment" class="px-1">
              <button type="button" class="btn btn-danger mt-3">
                구매하기
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <nav
      class="navbar navbar-light bg-light px-2 d-flex justify-content-around"
    >
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" href="#img_detail">제품 상세 정보</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#review">리뷰</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#qna">Q&A</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#ship_detail">유의 사항</a>
        </li>
      </ul>
    </nav>

    <div class="img-container m-5" id="img_detail">
      <div class="col my-3"><h3>제품 상세 정보</h3></div>
      <img src= @/assets/p_detail.jpg class="img-fluid" alt="..." />
    </div>

    <div class="container my-5" id="review">
      <div class="col d-flex justify-content-center my-3"><h3>리뷰</h3></div>
      <div class="col d-flex justify-content-end my-1">
        <button type="button" class="btn btn-secondary me-3">
          리뷰 올리기
        </button>
        <button type="button" class="btn btn-secondary">리뷰 더보기</button>
      </div>
      <div class="border-top border-2 border-primary mb-3"></div>
      <div class="container" v-if="!reviews">아직 리뷰가 없습니다.</div>
      <div
        class="container"
        v-for="(review, index) in reviews"
        :key="'review' + index"
      >
        <div class="row d-flex justify-content-start">
          <div class="col-4 col-md-2 me-1">
            <span v-for="(n, i) in review.star_grade" :key="i">★</span>
            <span v-for="(k, j) in 5 - review.star_grade" :key="j">☆</span>
          </div>
          <div class="col-3 col-md-2 me-1" v-if="reviews">
            {{ review.user.user_name }}
          </div>
          <div class="col-3 col-md-2 me-1">
            {{ review.created_date.slice(0, 10) }}
          </div>
        </div>
        <div class="row d-flex justify-content-start">
          <div class="col-12 col-md-9 mt-3 me-2" v-if="reviews">
            {{ review.review_description }}
          </div>
          <img
            v-if="review"
            :src="getImgUrl(review.t_review_images[0])"
            class="img-fluid col-12 col-md-2"
            alt="..."
          />
        </div>
        <div class="border-top border-primary my-3" v-if="index == 0"></div>
      </div>

      <div class="border-top border-2 border-primary my-3"></div>
    </div>

    <div class="container my-5" id="qna">
      <div class="col d-flex justify-content-center my-3"><h3>Q&A</h3></div>

      <div class="col d-flex justify-content-end">
        <button type="button" class="btn btn-outline-primary me-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          질문 하기
        </button>
        <!-- 질문하기 Modal -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">질문 올리기</h5>
                <button @click='resetmodal()' type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">제목</label>
                    <input v-model="QnaTitle" type="text" class="form-control" id="recipient-name">
                  </div>
                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">내용</label>
                    <textarea v-model="QnaDescription" class="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button @click='resetmodal()' type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                <button @click='postQna()' type="button" class="btn btn-primary" data-bs-dismiss="modal">질문 등록</button>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-outline-primary">
          내 질문 보기
        </button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">제목</th>
            <th scope="col">답변 상태</th>
            <th scope="col">작성자</th>
            <th scope="col">작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(qna, index) in qnas" :key="'qna' + index">
            <th>
              <a href="#">{{ qna.q_title }}</a>
            </th>
            <td scope="row" v-if="qna.answer_status == 1">처리 중</td>
            <td scope="row" v-else>답변 완료</td>
            <td>{{ qna.user.user_name }}</td>
            <td>{{ qna.q_created.slice(0, 10) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="img-container" id="ship_detail">
      <div class="col my-3"><h3>유의 사항</h3></div>

      <img src= @/assets/p_FAQ.jpg class="img-fluid" alt="..." />
    </div>

    <!-- 제품상세 페이지 입니다. -->
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      product: {
        product_name: "",
        product_price: 0,
        delivery_price: 0,
        product_images: []
      },
      reviews: [],
      qnas: [],
      productIdx: this.$route.params.id,
      quantity: 1,
      currentImgIdx: 0,
      QnaTitle: "",
      QnaDescription: "",
    };
  },
  mounted() {
    this.product_info();
    // console.log(this.product.product_images[0]);
    this.loadReview();
    this.loadQna();
  },
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    product_info() {
      this.$axios
        .get(`${this.$domain}/product/${this.$route.params.id}`)
        .then(res => {
          this.product.product_name = res.data.product_info.product_name;
          this.product.product_price = res.data.product_info.product_price;
          this.product.delivery_price = res.data.product_info.delivery_price;
          this.product.product_images = res.data.product_info.t_product_images;
          console.log(this.$route.params.id);
        });
    },
    getImgUrl(product_image) {
      let pic = product_image.path.split("/")[2];
      return require("../assets/" + pic);
    },
    loadReview() {
      this.$axios
        .get(`${this.$domain}/review/${this.$route.params.id}`)
        .then(res => {
          this.reviews = res.data.review;
          console.log(this.reviews);
        });
    },
    loadQna() {
      this.$axios
        .get(`${this.$domain}/qna/${this.$route.params.id}`)
        .then(res => {
          this.qnas = res.data.qna;

        });
    },
    getNextImage() {
      if (this.product.product_images.length === this.currentImgIdx + 1) {
        this.currentImgIdx = 0;
      } else {
        this.currentImgIdx += 1;
      }
    },
    getPrevImage() {
      if (this.currentImgIdx === 0) {
        this.currentImgIdx = this.product.product_images.length - 1;
      } else {
        this.currentImgIdx -= 1;
      }
    },
    async postQna() {
      if(this.QnaTitle == "" || this.QnaDescription ==""){
        alert('제목과 내용을 입력해주세요');
        return
      }
      await this.$axios
        .post(`${this.$domain}/qna/save`, {
          q_title : this.QnaTitle,
          q_description : this.QnaDescription,
          product_id : this.$route.params.id
        })
        .then((res) => {
          this.QnaId = res.data.qna_id
        })
        .catch((err) => {
          console.log(err);
        })
      this.QnaTitle = ""
      this.QnaDescription = ""
      alert('질문이 등록되었습니다.')
    },
    resetmodal() {
      this.QnaTitle = ""
      this.QnaDescription = ""
    }
  }
};
</script>


<style scoped>
.img-container {
  text-align: center;
}
</style>