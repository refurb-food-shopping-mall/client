<template>
  <main>
    <div class="container">
      <div class="row pt-5 pb-5">
          <div class="col-md-6 col-xs-6">
            <span class="fs-3 fw-bold text-dark">장바구니 </span>
            <span class="fs-3 fw-bold text-dark">(3)</span>
          </div>
          <div class="col-md-6 col-xs-6 text-end align-self-center">
            <span class="fw-bold text-dark">장바구니</span>
            <span> > 주문/결제 > 완료</span>
          </div>
      </div>
      <div class="row pt-5 pb-3 border-bottom border-2">
          <div class="form-check col-md-1 align-self-center">
            <input class="form-check-input mx-auto" type="checkbox" id="flexCheckDefault">
          </div>
          <span class="col-md-5 fs-5 text-dark">상품 정보</span>
          <span class="col-md-2 fs-5 text-center text-darkr">수량</span>
          <span class="col-md-2 fs-5 text-center text-dark">가격</span>
          <span class="col-md-2 fs-5 text-center text-dark">배송비</span>
      </div>
      <div class="row border-bottom border-2" style="height:190px;">
          <div class="form-check col-md-1 align-self-center">
              <input class="form-check-input mx-auto" type="checkbox" id="flexCheckDefault">
          </div>
          <a class="col-md-2 align-self-center" style="cursor:pointer;"><img src="https://contents.sixshop.com/uploadedFiles/48764/product/image_1620794006376.jpg" class="img-fluid"></a>
          <span class="col-md-3 align-self-center" style="text-align: left;">국산 햇양파 10kg</span>
          <span class="col-md-2 align-self-center">
            <div class="input-group justify-content-center">           
                <span class="input-group-text" style="cursor:pointer;">-</span>          
                <input type="text" v-model="total" style="width:30px;text-align:center;outline:2px solid #e2e2e2;">           
                <span class="input-group-text" style="cursor:pointer;">+</span>          
            </div>
          </span>
          <span class="col-md-2 align-self-center text-center text-dark fs-5">21,900원</span>
          <span class="col-md-2 align-self-center text-center text-dark fs-5">2,500원</span>
      </div>
      <div class="row pb-3 pt-3">
        <div class="form-check col-md-1 pt-3">
            <input class="form-check-input mx-auto" type="checkbox" id="flexCheckDefault">
        </div>
        <span class="col-md-5">
          <button type="button" class="btn btn-outline-primary mt-2">선택상품 삭제</button>
        </span>
        <span class="col-md-6 border-bottom">
          <div class="row">
            <div class="col-6 text-end text-dark mt-2">
              <ul class="mb-4 fs-5">상품합계</ul>
              <ul class="mb-4 fs-5">배송비</ul>
            </div>
            <div class="col-6 text-end text-dark mt-2">
              <ul class="mb-4 fs-5">41,900원</ul>
              <ul class="mb-4 fs-5">7,500원</ul>
            </div>
          </div>
        </span>       
      </div> 
      <div class="row pb-5">
        <span class="col-md-9 text-end text-dark fs-5 fw-bolder">합계</span>
        <span class="col-md-3 text-end text-dark fs-5 fw-bolder">49,400원</span>   
      </div>  
      <div class="row pb-5">
        <span class="col-md-6">
          <button type="button" class="btn btn-outline-primary fs-5 fw-bolder" style="width:170px;height:60px; float: right;">쇼핑 계속하기</button>
        </span>
        <span class="col-md-6">
          <button type="button" class="btn btn-primary fs-5 fw-bolder" style="width:170px;height:60px;">주문하기</button>
        </span>
      </div>    
    </div>
  </main>
</template>

<script>
export default {
  data(){
    return {
      total:1
    }
  }
};
</script>

<style scoped>
#cart {
  border: 2px dashed green;
}
</style>