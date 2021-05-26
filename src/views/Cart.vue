<template>
  <main>
    <div class="container">
      <div class="row pt-5 pb-4">
          <div class="col-5 col-md-6 col-xs-6">
            <span class="fs-4 fw-bold text-dark">장바구니 </span>
            <span class="fs-4 fw-bold text-dark">(3)</span>
          </div>
          <div class="col-7 col-md-6 col-xs-6 text-end align-self-center">
            <span class="fw-bold text-dark">장바구니</span>
            <span> > 주문/결제 > 완료</span>
          </div>
      </div>
      <div class="row pt-5 pb-3 border-bottom border-2">
          <span class="col-md-6 text-dark	d-none d-md-block">상품 정보</span>
          <span class="col-md-2 text-center text-dark d-none d-md-block">수량</span>
          <span class="col-md-2 text-center text-dark d-none d-md-block">가격</span>
          <span class="col-md-2 text-center text-dark d-none d-md-block">배송비</span>
      </div>
      <div class="row border-bottom border-2 pt-3 pb-3">
          <div class="col-2 col-md-1">
            <a class="align-self-center" style="cursor:pointer;"><img src="https://contents.sixshop.com/uploadedFiles/48764/product/image_1620794006376.jpg" class="img-fluid"></a>
          </div>
          <div class="col-10 col-md-5 align-self-center">
            <div class="align-self-center pb-3 text-dark" style="text-align: left;">국산 햇양파 10kg</div>
            <div class="" style="cursor:pointer;">삭제하기</div>
          </div>      
          <div class="col-md-2 align-self-center">
            <div class="input-group rowd-flex justify-content-center">
              <span class="input-group-text col-md-2 text-center" style="cursor:pointer;" @click="calculatePrice(-1);">-</span>
              <input type="text" class="form-control col-md-4 text-center" style="max-width:40px;" v-model="total">
              <span class="input-group-text col-md-2 text-center" style="cursor:pointer;" @click="calculatePrice(1);">+</span>
            </div>
          </div>        
          <span class="col-md-2 align-self-center text-center text-dark">21,900원</span>
          <span class="col-md-2 align-self-center text-center text-dark">2,500원</span>
      </div>
      <div class="row pb-3 pt-3 d-flex justify-content-end">      
        <div class="row col-md-6 border-bottom border-2">
          <div class="col-md-6 text-end text-dark mt-2">
            <ul class="mb-4">상품합계</ul>
            <ul class="mb-4">배송비</ul>
          </div>
          <div class="col-md-6 text-end text-dark mt-2">
            <ul class="mb-4">41,900원</ul>
            <ul class="mb-4">7,500원</ul>
          </div>    
        </div>                
      </div>
      <div class="row pb-5">
        <span class="col-9 col-md-9 text-end text-dark fw-bolder">합계</span>
        <span class="c0l-3 col-md-3 text-end text-dark fw-bolder">49,400원</span>   
      </div>  
      <div class="row pb-5">
        <span class="col-md-6 d-flex flex-row-reverse">
          <button type="button" class="btn btn-outline-primary fw-bolder p-3">쇼핑 계속하기</button>
        </span>
        <span class="col-md-6">
          <button type="button"  class="btn btn-primary fw-bolder p-3">주문하기</button>
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