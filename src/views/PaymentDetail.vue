<template>
  <div class="container">
    <div class="row">
      <div id="leftside" class="col-12 col-md-3 text-center">
        <img
          width="200"
          class="img-fluid"
          id="profile"
          src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
        />
        <div style="text-align:center">name <span>님</span></div>
      </div>

      <div id="rightside" class="col-12 col-md-9 ">
        <!-- 주문 상세정보 s -->
        <br id="m" class="d-lg-none" />
        <div class="row fs-4"><strong>주문 상세정보</strong></div>
        <!-- pc start -->
        <div id="line" class="row d-none d-lg-block">
          <div
            class="col-12 mt-2 mb-2"
            style="border-bottom:2px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row text-center ">
          <div class="col-2 d-none d-lg-block">주문번호</div>
          <div class="col-4 d-none d-lg-block">상품정보</div>
          <div class="col-2 d-none d-lg-block">상품금액(수량)</div>
          <div class="col-2 d-none d-lg-block">배송비</div>
          <div class="col-2 d-none d-lg-block">진행상태</div>
        </div>
        <div id="line" class="row d-none d-lg-block">
          <div
            class="col-lg-12 mt-2 mb-5"
            style="border-bottom:1px solid rgb(214, 214, 214);"
          ></div>
        </div>
        <div class="row ">
          <div class="col-2 d-none d-lg-block text-center">20553121050</div>
          <div class="col-4">
            <div class="row">
              <div class="col-3 text-center">
                <img
                  class="rounded d-none d-lg-block"
                  width="65"
                  height="65"
                  src="@/assets/onion2.jpg"
                />
              </div>
              <div class="col-9 d-none d-lg-block text-center">
                무안 양파 5kg/10kg/15kg
              </div>
            </div>
          </div>
          <div class="col-2 d-none d-lg-block text-center">5,000원(X kg)</div>
          <div class="col-2 d-none d-lg-block text-center">2,500원</div>
          <div class="col-2 d-none d-lg-block text-secondary text-center">
            배송중
          </div>
        </div>
        <div id="line" class="row d-none d-lg-block">
          <div
            class="col-12 mt-4 mb-3"
            style="border-bottom:1px solid rgb(214, 214, 214);"
          ></div>
        </div>
        <!-- pc end -->
        <!-- mobile start -->
        <div id="line" class="row d-lg-none">
          <div
            class="col-12 mt-2 mb-3"
            style="border-bottom:2px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row text-center">
          <div class="col-4 d-lg-none">주문번호</div>
          <div class="col-8 d-lg-none">상품정보</div>
        </div>
        <div id="line" class="row d-lg-none">
          <div
            class="col-12 mt-2 mb-3"
            style="border-bottom:1px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row text-center">
          <div class="col-4 d-lg-none">20553121050</div>
          <div class="col-8">
            <div class="row">
              <div class="col-3 d-lg-none">
                <img
                  width="65"
                  height="65"
                  class="rounded"
                  src="@/assets/onion2.jpg"
                />
              </div>
              <div class="col-9 d-lg-none">무안 양파 5kg/10kg/15kg</div>
            </div>
          </div>
        </div>
        <br id="m" class="d-lg-none" />
        <div id="line" class="row d-lg-none">
          <div
            class="col-12 mt-2 mb-3"
            style="border-bottom:1px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row text-center">
          <div class="col-4 d-lg-none">상품금액(수량)</div>
          <div class="col-4 d-lg-none">배송비</div>
          <div class="col-4 d-lg-none">진행상태</div>
        </div>
        <div id="line" class="row d-lg-none">
          <div
            class="col-12 mt-2 mb-3"
            style="border-bottom:1px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row text-center">
          <div class="col-4 d-lg-none">5,000원(X kg)</div>
          <div class="col-4 d-lg-none">2,500원</div>
          <div class="col-4 d-lg-none text-secondary">배송중</div>
        </div>
        <!-- mobile end -->
        <!-- 주문 상세정보 e -->
        <br id="m" class="d-lg-none" />
        <br id="m" class="d-lg-none" />
        <br id="m" class="d-lg-none" />
        <br id="p" class="d-none d-lg-block" />
        <br id="p" class="d-none d-lg-block" />
        <br id="p" class="d-none d-lg-block" />
        <!-- 주문/결제 금액 정보 s -->
        <div class="row fs-4"><strong>주문/결제 금액 정보</strong></div>
        <!-- pc start -->
        <div id="line" class="row d-none d-lg-block">
          <div
            class="col-12 mt-2 mb-2"
            style="border-bottom:2px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row text-center">
          <div class="col-4 d-none d-lg-block">주문금액</div>
          <div class="col-4 d-none d-lg-block">결제상세</div>
          <div class="col-4 d-none d-lg-block">총 주문금액</div>
        </div>
        <div id="line" class="row d-none d-lg-block">
          <div
            class="col-12 mt-2 mb-4"
            style="border-bottom:1px solid rgb(214, 214, 214);"
          ></div>
        </div>
        <div class="row text-center">
          <div class="col-4">
            <div class=" d-flex justify-content-between">
              <div class="d-none d-lg-block">상품금액</div>
              <div class="d-none d-lg-block">5,000원</div>
            </div>
            <div class=" d-flex justify-content-between">
              <div class="d-none d-lg-block">배송비</div>
              <div class="d-none d-lg-block">2,500원</div>
            </div>
          </div>
          <div class="col-4">
            <div class=" d-flex justify-content-between">
              <div class="d-none d-lg-block">카드 간편결제</div>
              <div class="d-none d-lg-block">7,500원</div>
            </div>
          </div>
          <div class="col-4 d-none d-lg-block text-secondary">7,500원</div>
        </div>
        <div id="line" class="row d-none d-lg-block">
          <div
            class="col-12 mt-4 mb-2"
            style="border-bottom:1px solid rgb(214,214,214);"
          ></div>
        </div>
        <!-- pc end -->
        <!-- mobile start -->
        <div id="line" class="row d-lg-none">
          <div
            class="col-12 mt-2 mb-3"
            style="border-bottom:2px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row text-center">
          <div class="col-6 d-lg-none">주문금액</div>
          <div class="col-6 d-lg-none">결제상세</div>
        </div>
        <div id="line" class="row d-lg-none">
          <div
            class="col-12 mt-2 mb-3"
            style="border-bottom:1px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class=" d-flex justify-content-between">
              <div class="d-lg-none">상품금액</div>
              <div class="d-lg-none">5,000원</div>
            </div>
            <div class=" d-flex justify-content-between">
              <div class="d-lg-none">배송비</div>
              <div class="d-lg-none">2,500원</div>
            </div>
          </div>
          <div class="col-6">
            <div class=" d-flex justify-content-between">
              <div class="d-lg-none">카드 간편결제</div>
              <div class="d-lg-none">7,500원</div>
            </div>
            <div class=" d-flex justify-content-between">
              <div class="text-secondary d-lg-none">총 주문금액</div>
              <div class="text-secondary d-lg-none">7,500원</div>
            </div>
          </div>
        </div>
        <!-- mobile end -->
        <!-- 주문/결제 금액 정보 e -->
        <br id="m" class="d-lg-none" />
        <br id="m" class="d-lg-none" />
        <br id="m" class="d-lg-none" />
        <br id="p" class="d-none d-lg-block" />
        <br id="p" class="d-none d-lg-block" />
        <br id="p" class="d-none d-lg-block" />
        <!-- 배송지 정보 s -->
        <div class="row fs-4"><strong>배송지 정보</strong></div>
        <!-- pc start -->
        <div id="line" class="row d-none d-lg-block">
          <div
            class="col-12 mt-2 mb-3"
            style="border-bottom:2px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row">
          <div class="col-2 text-center d-none d-lg-block">수령인</div>
          <div class="col-10 d-none d-lg-block">홍길동</div>
        </div>
        <div class="row ">
          <div class="col-2 text-center d-none d-lg-block">연락처</div>
          <div class="col-10 d-none d-lg-block">010-1234-5678</div>
        </div>
        <div class="row ">
          <div class="col-2 text-center d-none d-lg-block">배송지</div>
          <div class="col-10 d-none d-lg-block">
            서울특별시 강남구 언주로30길 56
          </div>
        </div>
        <div class="row ">
          <div class="col-2 text-center d-none d-lg-block">배송메모</div>
          <div class="col-10 d-none d-lg-block">X</div>
        </div>
        <div id="line" class="row d-none d-lg-block">
          <div
            class="col-12 mt-4 mb-2"
            style="border-bottom:1px solid rgb(214,214,214);"
          ></div>
        </div>
        <!-- pc end -->
        <!-- mobile start -->
        <div id="line" class="row d-lg-none">
          <div
            class="col-12 mt-2 mb-3"
            style="border-bottom:2px solid mediumaquamarine;"
          ></div>
        </div>
        <div class="row">
          <div class="col-3 text-center d-lg-none ">수령인</div>
          <div class="col-9 d-lg-none">홍길동</div>
        </div>
        <div class="row ">
          <div class="col-3 text-center  d-lg-none">연락처</div>
          <div class="col-9 d-lg-none">010-1234-5678</div>
        </div>
        <div class="row ">
          <div class="col-3 text-center  d-lg-none">배송지</div>
          <div class="col-9 d-lg-none">
            서울특별시 강남구 언주로30길 56
          </div>
        </div>
        <div class="row">
          <div class="col-3 text-center  d-lg-none">배송메모</div>
          <div class="col-9 d-lg-none">X</div>
        </div>
        <!-- mobile end -->
        <!-- 배송지 정보 e -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#shortcut {
  background-color: mediumaquamarine;
  border-color: palevioletmediumaquamarine;
  background-color: rgb(214, 214, 214);
  text-align: center;
  /* border border-primary */
}
</style>
