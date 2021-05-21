<template>
  <div class="container" style="padding-right:400px; padding-left:400px;">
    <div class="row border-bottom border-5">
      <div class="fw-bolder fs-4 text-dark pb-4">신선한 못난이</div>
    </div>
    <div class="row">
      <div class="fw-bold fs-5 text-dark pt-4 pb-4">주문 상품</div>      
    </div>
    <div class="row pb-4">
        <div class="col-md-3">
          <a class="align-self-center" style="cursor:pointer;"><img src="https://contents.sixshop.com/uploadedFiles/48764/product/image_1620794006376.jpg" style="width: 90px; height: 90px;"></a>
        </div>
        <div class="col-md-9">
          <div class="text-dark pb-3">국산 햇양파 10kg</div>
          <div>
            <span class="text-dark">1개</span>
            <span class="text-dark"> / </span>
            <span class="text-dark">21,900원</span>        
          </div>
        </div>
    </div>
    <div class="row pb-4">
        <div class="col-md-3">
          <a class="align-self-center" style="cursor:pointer;"><img src="https://contents.sixshop.com/uploadedFiles/48764/product/image_1620794006376.jpg" style="width: 90px; height: 90px;"></a>
        </div>
        <div class="col-md-9">
          <div class="text-dark pb-3">국산 햇양파 10kg</div>
          <div>
            <span class="text-dark">1개</span>
            <span class="text-dark"> / </span>
            <span class="text-dark">21,900원</span>        
          </div>
        </div>
    </div>
    <div class="row border-top pb-4 pt-4">
        <span class="col-md-6 text-dark align-self-center fw-bolder">상품 합계</span>
        <span class="col-md-6 text-end fs-5 fw-bolder text-primary align-self-center">48,400원</span>  
    </div>
    <div class="row border-top border-5">
        <div class="text-dark fw-bold fs-5 pt-4 pb-4">주문자</div>
        <div class="text-dark pb-1">최동호</div>
        <div class="text-dark pb-1">010-1234-5678</div>
        <div class="text-dark pb-1">zaqxsw9705@naver.com</div>     
    </div>
    <div class="row pt-4 pb-4">
        <button type="button" class="btn btn-outline-primary">수정하기</button>
    </div>
    <div class="row border-top border-5">
        <div class="text-dark fw-bold fs-5 pt-4 pb-5">배송지</div>
    </div>
    <div class="row" style="padding-right:10px; padding-left:10px;">
        <div class="form-check col-md-3">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
            기본배송지
          </label>
        </div>
        <div class="form-check col-md-3">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
            신규배송지
          </label>
        </div>
        <div class="col-md-6 align-self-center pb-3">
          <button type="button" class="btn btn-outline-primary btn-sm">배송지 목록</button>
        </div>
    </div>     
    <div class="form-group pb-1">
        <label for="exampleInputEmail1" class="form-label mt-4 text-dark">이름</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>        
    <label for="exampleInputEmail1" class="form-label mt-4 text-dark">연락처</label>
    <div class="row" style="padding-right: 10px; padding-left: 10px;">
        <input type="email" class="form-control" style="width: 30%;" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div class="align-self-center" style="width:5%;">-</div>
        <input type="email" class="form-control" style="width: 30%;" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div class="align-self-center" style="width:5%;">-</div>
        <input type="email" class="form-control" style="width: 30%;" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>        
    <div class="form-group">
        <label for="exampleInputEmail1" class="form-label mt-4 text-dark">배송지명</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <label for="exampleInputEmail1" class="form-label mt-4 text-dark">우편번호</label>
    <div class="row form-group">
      <div class="col-md-9">
        <input type="text" class="form-control" id="inputDefault">      
      </div>   
      <div class="col-md-3 d-flex justify-content-end">
        <button type="button" class="btn btn-outline-primary">검색하기</button>
      </div>
    </div>
    <div class="row">
        <div class="form-group">
          <label class="col-form-label mt-3 text-dark" for="inputDefault">주소</label>
          <div class="pb-2">
              <input type="text" class="form-control" id="inputDefault"> 
          </div>
          <div>
              <input type="text" class="form-control" id="inputDefault">
          </div>
        </div>
    </div>
    <div class="row pt-3 pb-3 border-bottom" style="padding-left:12px;">
        <div class="form-check col-md-6">
          <input class="form-check-input" type="checkbox" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            기본 배송지로 설정하기
          </label>
        </div>
        <div class="form-check col-md-6">
          <input class="form-check-input" type="checkbox" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            배송지목록에 추가하기
          </label>
        </div>      
    </div>
    <div class="row pb-5 pt-2">
      <div class="form-group">       
        <label class="col-form-label text-dark" for="inputDefault">배송 시 요청 사항</label>       
        <input type="text" class="form-control" id="inputDefault">
      </div>
    </div>       
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#payment {
  border: 2px dashed green;
}
</style>