<template>
  <div id="cancel" class="pt-5">
    <div class="row md-p-5">
      <div class="col-md-3 d-flex justify-content-center">
        <div class="list-group col-9 text-center d-none d-lg-block">
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
          <a href="#" class="list-group-item list-group-item-action"
            >교환/환불</a
          >
        </div>
      </div>

      <div class="col-12 col-lg-9">
        <div class="card p-4">
          <h3>주문 취소요청</h3>

          <div class="row pt-5 pb-3 border-bottom border-2">
            <span class="col-6 text-dark">상품 정보</span>
            <span class="col-2 text-center text-dark">수량</span>
            <span class="col-2 text-center text-dark">가격</span>
            <span class="col-2 text-center text-dark">배송비</span>
          </div>

          <div class="row border-bottom border-2 pt-3 pb-3">
            <div class="col-2 col-md-2 col-lg-2 col-xl-1 p-0">
              <a class="align-self-center" style="cursor: pointer"
                ><img
                  src="@/assets/onion2.jpg"
                  class="img-fluid"
              /></a>
            </div>

            <div class="col-4 col-lg-4 col-xl-5 align-self-center">
              <div
                class="align-self-center pb-3 text-dark"
                style="text-align: left"
              >
                국산 햇양파 10kg
              </div>
              <div style="cursor: pointer">삭제하기</div>
            </div>
            <div class="col-2 d-flex justify-content-center align-items-center">
              <span>3</span>
            </div>
            <span class="col-2 align-self-center text-center text-dark"
              >21,900원</span
            >
            <span class="col-2 align-self-center text-center text-dark"
              >2,500원</span
            >
          </div>

          <div class="row border-bottom border-2 pt-3 pb-3">
            <div class="col-md-2">취소사유</div>
            <div class="col">
              <div class="form-group">
                <select class="form-select" id="exampleSelect1">
                  <option>상품정보 상이</option>
                  <option>서비스 불만족</option>
                  <option>구매의사 취소</option>
                  <option>색상 및 사이즈 변경</option>
                  <option>다른 상품 주문</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row border-bottom border-2 pt-3 pb-3">
            <div class="col-md-2">사유입력</div>
            <div class="col">
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleTextarea"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-primary m-2">이전 페이지</button>
          <button type="button" class="btn btn-secondary my-2">
            취소요청하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>