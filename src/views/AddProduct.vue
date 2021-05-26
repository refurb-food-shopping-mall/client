<template>
  <div class="row d-flex justify-content-center my-5" id="add_product">
    <div class="col-md-12">
      <div class="card py-5 px-5">
        <div class="row">
          <h4 class="card-title">상품 등록하기</h4>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="card-body">
              <div class="form-group">
                <label for="exampleSelect1" class="form-label mt-4"
                  >카테고리:</label
                >
                <select class="form-select" id="exampleSelect1">
                  <option>감자</option>
                  <option>양파</option>
                  <option>채소</option>
                  <option>야채</option>
                  <option>마늘</option>
                </select>
              </div>

              <div class="form-group">
                <label for="exampleSelect1" class="form-label mt-4"
                  >판매자:</label
                >
                <select class="form-select" id="exampleSelect1">
                  <option>관리자</option>
                  <option>판매자1</option>
                  <option>판매자1</option>
                </select>
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1" class="form-label mt-3"
                  >가격:</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="💰 가격을 입력해주세요"
                />
              </div>

              <div class="form-group">
                <label for="exampleSelect1" class="form-label mt-4"
                  >🚚 수량:</label
                >
                <select class="form-select" id="exampleSelect1">
                  <option>1 박스</option>
                  <option>5 박스</option>
                  <option>1 톤</option>
                  <option>5 톤</option>
                  <option>10 톤</option>
                </select>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card-body">
              <label for="exampleInputPassword1" class="form-label mt-3"
                >📷상품 이미지 등록</label
              >
              <div class="d-flex">
                <div class="choosefile-button mx-1"></div>
                <div class="choosefile-button mx-1"></div>
                <div class="choosefile-button mx-1"></div>
              </div>

              <div class="form-group">
                <label for="exampleTextarea" class="form-label mt-4"
                  >상품 상세설명</label
                >
                <textarea
                  style="height: 180px"
                  class="form-control"
                  id="exampleTextarea"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-md-12">
            <div class="card-body d-flex justify-content-end">
              <button type="button" class="btn btn-primary">
                상품 등록하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#add_product {
  /* border: 2px dashed green; */
}
.choosefile-button {
  border: 2px dashed #ccc;
  width: 110px;
  height: 110px;
  cursor: pointer;
  line-height: 130px;
  text-align: center;
}
.choosefile-button i {
  color: #dddddd !important;
  font-size: 3rem;
}
</style>