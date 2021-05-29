<template>
  <div class="container-fluid" style="max-width: 700px">
    <div class="row border-bottom border-5">
      <div class="fw-bolder fs-4 text-dark pb-4">신선한 못난이</div>
    </div>
    <div class="row">
      <div class="fw-bold fs-5 text-dark pt-4 pb-4">주문 상품</div>
    </div>
    <div class="row pb-4">
      <div class="col-3 col-md-2">
        <a class="align-self-center" style="cursor: pointer"
          ><img
            src="https://contents.sixshop.com/uploadedFiles/48764/product/image_1620794006376.jpg"
            class="img-fluid"
        /></a>
      </div>
      <div class="col-9 col-md-10">
        <div class="text-dark pb-3">국산 햇양파 10kg</div>
        <div>
          <span class="text-dark">1개</span>
          <span class="text-dark"> / </span>
          <span class="text-dark">21,900원</span>
        </div>
      </div>
    </div>
    <div class="row pb-4">
      <div class="col-3 col-md-2">
        <a class="align-self-center" style="cursor: pointer"
          ><img
            src="https://contents.sixshop.com/uploadedFiles/48764/product/image_1616298830323.jpg"
            class="img-fluid"
        /></a>
      </div>
      <div class="col-9 col-md-10">
        <div class="text-dark pb-3">참외 2.5kg</div>
        <div>
          <span class="text-dark">2개</span>
          <span class="text-dark"> / </span>
          <span class="text-dark">20,000원</span>
        </div>
      </div>
    </div>
    <div class="row border-top pb-4 pt-4">
      <span class="col-6 text-dark align-self-center fw-bolder">상품 합계</span>
      <span class="col-6 text-end fs-5 fw-bolder text-primary align-self-center"
        >41,900원</span
      >
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
    <div class="row pb-3">
      <label class="form-check-label col-4 col-md-3">
        <input
          type="radio"
          class="form-check-input"
          name="optionsRadios"
          id="optionsRadios1"
          value="option1"
          checked=""
        />
        기본배송지
      </label>
      <label class="form-check-label col-4 col-md-3">
        <input
          type="radio"
          class="form-check-input"
          name="optionsRadios"
          id="optionsRadios1"
          value="option1"
          checked=""
        />
        신규배송지
      </label>
      <div class="col-4 col-md-6">
        <button type="button" class="btn btn-outline-primary btn-sm">
          배송지 목록
        </button>
      </div>
    </div>
    <div class="form-group pb-1">
      <label for="exampleInputEmail1" class="form-label mt-1 text-dark"
        >이름</label
      >
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
    <label for="exampleInputEmail1" class="form-label mt-3 text-dark"
      >연락처</label
    >
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="-없이 숫자만 입력해주세요."
    />
    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4 text-dark"
        >배송지명</label
      >
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
    <label for="exampleInputEmail1" class="form-label mt-4 pb-1 text-dark"
      >우편번호</label
    >
    <div class="row form-group">
      <div class="col-9 col-md-10">
        <input type="text" class="form-control" id="inputDefault" />
      </div>
      <div class="col-3 col-md-2 d-flex justify-content-end">
        <button type="button" class="btn btn-outline-primary">검색하기</button>
      </div>
    </div>
    <div class="row">
      <div class="form-group">
        <label class="col-form-label mt-3 text-dark" for="inputDefault"
          >주소</label
        >
        <div class="pb-2">
          <input type="text" class="form-control" id="inputDefault" />
        </div>
        <div>
          <input type="text" class="form-control" id="inputDefault" />
        </div>
      </div>
    </div>
    <div class="row pt-3 pb-2" style="padding-left: 12px">
      <div class="form-check col-6 col-md-4">
        <input class="form-check-input" type="checkbox" id="flexCheckDefault" />
        <label class="form-check-label" for="flexCheckDefault">
          기본 배송지로 설정하기
        </label>
      </div>
      <div class="form-check col-6 col-md-8">
        <input class="form-check-input" type="checkbox" id="flexCheckDefault" />
        <label class="form-check-label" for="flexCheckDefault">
          배송지목록에 추가하기
        </label>
      </div>
    </div>
    <div class="row pb-4 pt-2">
      <div class="form-group">
        <label class="col-form-label text-dark pb-2" for="inputDefault"
          >배송 시 요청 사항</label
        >
        <input type="text" class="form-control" id="inputDefault" />
      </div>
    </div>
    <div class="row border-top border-5">
      <div class="text-dark fw-bold fs-5 pt-4">결제 정보</div>
    </div>
    <label for="exampleInputEmail1" class="form-label mt-4 text-dark pb-1"
      >적립금 (보유 적립금 0원)</label
    >
    <div class="row form-group border-bottom border-2 pb-4">
      <div class="col-9 col-md-10">
        <input type="text" class="form-control" id="inputDefault" />
      </div>
      <div class="col-3 col-md-2 d-flex justify-content-end">
        <button type="button" class="btn btn-outline-primary">전액사용</button>
      </div>
    </div>
    <div>
      <div class="row pt-3">
        <div class="col-6 text-dark">상품 합계</div>
        <div class="col-6 text-dark text-end fw-bolder">41,900원</div>
      </div>
      <div class="row pt-3">
        <div class="col-6 text-dark">배송비</div>
        <div class="col-6 text-dark text-end fw-bolder">7,500원</div>
      </div>
      <div class="row pt-3 pb-3 border-bottom border-2">
        <div class="col-6 text-dark">총 할인 금액</div>
        <div class="col-6 text-dark text-end fw-bolder">0원</div>
      </div>
      <div class="row pt-3 pb-3">
        <div class="col-6 text-dark fw-bolder align-self-center">결제 금액</div>
        <div class="col-6 text-primary text-end fs-5 fw-bolder">49,400원</div>
      </div>
    </div>
    <div class="row border-top border-5">
      <div class="text-dark fw-bold fs-5 pt-3 pb-4">결제 수단</div>
    </div>
    <div class="row">
      <label class="form-check-label col-6 pb-2">
        <input
          type="radio"
          class="form-check-input"
          name="optionsRadios"
          id="optionsRadios1"
          value="option1"
          checked=""
        />
        카카오페이
      </label>
      <label class="form-check-label col-6">
        <input
          type="radio"
          class="form-check-input"
          name="optionsRadios"
          id="optionsRadios1"
          value="option1"
          checked=""
        />
        가상 계좌
      </label>
      <label class="form-check-label col-6 pb-3">
        <input
          type="radio"
          class="form-check-input"
          name="optionsRadios"
          id="optionsRadios1"
          value="option1"
          checked=""
        />
        신용 / 체크카드
      </label>
      <label class="form-check-label col-6">
        <input
          type="radio"
          class="form-check-input"
          name="optionsRadios"
          id="optionsRadios1"
          value="option1"
          checked=""
        />
        계좌 이체
      </label>
    </div>
    <router-link to="/paymentdetail">
      <div class="row pt-3">
        <button type="button" class="btn btn-primary btn-lg pb-3 pt-3">
          49,400원 결제하기
        </button>
      </div>
    </router-link>
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