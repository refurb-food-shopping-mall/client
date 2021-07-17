<template>
  <div class="dashboard col-md-11">
    <div class="card mb-3">
      <div class="row">
        <!-- 유저 프로필 사진 영역 -->
        <div class="col-md-4 p-5">
          <img
            draggable="false"
            src="@/assets/default-user-image.png"
            class="img-fluid rounded-start"
          />
        </div>
        <!-- 기본 정보 -->
        <div class="col-md-8 p-5">
          <div class="card-body">
            <h5 class="card-title mt-4">{{ $store.state.user.userName }} 님</h5>
            <h5 class="card-title">{{ $store.state.user.userEmail }}</h5>

            <p class="card-text">
              <!-- This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer. -->
            </p>
            <p class="card-text">
              <!-- <small class="text-muted">Last updated 3 mins ago</small> -->
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="row p-3">
        <!-- 주문·배송 영역 -->
        <div class="col d-flex flex-column align-items-center border-right">
          <div class="d-flex align-items-center">
            <div>
              <font-awesome-icon icon="truck" size="3x" color="#ba68c8" />
            </div>
            <div class="mx-3">
              <h5 class="m-0">주문·배송</h5>
            </div>
          </div>

          <div class="pt-4"><h2>10</h2></div>
        </div>
        <!-- 보유 쿠폰 영역 -->
        <div class="col d-flex flex-column align-items-center border-right">
          <div class="d-flex align-items-center">
            <div>
              <font-awesome-icon icon="tags" size="3x" color="#64b5f6" />
            </div>
            <div class="mx-3">
              <h5 class="m-0">보유 쿠폰</h5>
            </div>
          </div>

          <div class="pt-4"><h2>2</h2></div>
        </div>
        <!-- 적립 포인트 영역 -->
        <div class="col d-flex flex-column align-items-center">
          <div class="d-flex align-items-center">
            <div>
              <font-awesome-icon icon="won-sign" size="3x" color="#81c784" />
            </div>
            <div class="mx-3">
              <h5 class="m-0">적립 포인트</h5>
            </div>
          </div>

          <div class="pt-4">
            <h2>{{ Number(4200).toLocaleString("ko-KR") }}</h2>
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
      userName: ''
    }
  },
  mounted() {
    
  },
}
</script>

<style scoped>
.dashboard {
  user-select: none;
}
.btn-circle {
  border-radius: 50%;
}
.border-right {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.b-t {
  border: 2px dashed green;
}
.profile__image {
  /* border-radius: 50%; */
}
</style>