<template>
  <main>
    <div class="container">
      <div class="row pt-5 pb-4">
        <div class="col-6">
          <span class="fs-4 fw-bold text-dark">장바구니 </span>
          <span class="fs-4 fw-bold text-dark">(3)</span>
        </div>
        <!-- <div class="col-7 col-md-6 col-xs-6 text-end align-self-center">
            <span class="fw-bold text-dark">장바구니</span>
            <span> > 주문/결제 > 완료</span>
          </div> -->
      </div>
      <div class="row pt-5 pb-3 border-bottom border-2">
        <span class="col-md-6 text-dark d-none d-md-block">상품 정보</span>
        <span class="col-md-2 text-center text-dark d-none d-md-block"
          >수량</span
        >
        <span class="col-md-2 text-center text-dark d-none d-md-block"
          >가격</span
        >
        <span class="col-md-2 text-center text-dark d-none d-md-block"
          >배송비</span
        >
      </div>

      <div class="row border-bottom border-2 pt-3 pb-3">
        <div class="col-2 col-md-2 col-lg-2 col-xl-1">
          <a class="align-self-center" style="cursor: pointer">
            <img
              src="https://contents.sixshop.com/uploadedFiles/48764/product/image_1620794006376.jpg"
              class="img-fluid"
            />
          </a>
        </div>

        <div
          class="col-md-4 col-lg-4 col-xl-5 align-self-center d-none d-md-block"
        >
          <div
            class="align-self-center pb-3 text-dark"
            style="text-align: left"
          >
            국산 햇양파 10kg
          </div>
          <div style="cursor: pointer">삭제하기</div>
        </div>
        <div class="col-md-2 align-self-center d-none d-md-block">
          <div class="input-group d-flex justify-content-center">
            <span
              class="input-group-text text-center align-self-center"
              style="cursor: pointer; max-width: 30px"
              >-</span
            >
            <input
              type="text"
              class="form-control text-center align-self-center"
              style="max-width: 35px"
              v-model="total"
            />
            <span
              class="input-group-text text-center"
              style="cursor: pointer; max-width: 30px"
              >+</span
            >
          </div>
        </div>
        <span
          class="col-md-2 align-self-center text-center text-dark d-none d-md-block"
          >21,900원</span
        >
        <span
          class="col-md-2 align-self-center text-center text-dark d-none d-md-block"
          >2,500원</span
        >

        <div class="col-8 align-self-center d-md-none">
          <!-- 모바일 화면에서의 ui -->
          <div
            class="align-self-center pb-1 text-dark"
            style="text-align: left"
          >
            국산 햇양파 10kg
          </div>
          <div class="d-md-none">
            <div class="input-group">
              <span
                class="input-group-text text-center"
                style="cursor: pointer; max-height: 30px"
                >-</span
              >
              <input
                type="text"
                class="form-control text-center"
                style="max-width: 35px; max-height: 30px"
                v-model="total"
              />
              <span
                class="input-group-text text-center"
                style="cursor: pointer; max-height: 30px"
                >+</span
              >
            </div>
          </div>
          <div class="row pt-1">
            <div class="col-6 text-dark">가격</div>
            <div class="col-6 text-dark text-center">21,900원</div>
            <div class="col-6 text-dark">배송비</div>
            <div class="col-6 text-dark text-center">2,500원</div>
          </div>
        </div>
        <div class="col-2 d-md-none">
          <div class="d-flex justify-content-end">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX///8AAACmpqajo6OhoaHz8/PR0dH29va7u7tfX1+tra1VVVV5eXlSUlJNTU0ZGRlra2vRe4gkAAADN0lEQVR4nO2di3qqMBCEida70r7/057PLydtA0QU2dt0/heYHTMrKCHbdYQQQgghhBBCCCGEEEIIIYQQQgghhBDyZ9lfb/3pfDBSP5xP/e26F1TYXVLmKCjS5vhf/bKTUth9psJWSuMB22/1TymLl/TDRkijzeaX+kVGYp9+o72Km0pdphevlUb6EBFp8VGLX0VEbrWI6ipuBto3EZU+mVkcGky9iMxpKKNmcWQwnUR0ziMdpV7cjoXPIkKHsZDKRWO8gikJ3VUdJ6TkgzplUOyeakpM2uJERCU19S2qK2oLGqRGNzRTBsW/vzVFlXuwoBcciy82VWEzg1rhMelBTXGjHizIB8gwohnpT9g0oholGEc0Ixkj84hKl+HEoFyUHPSgbCkuerAgESc3EZUqx5nB9SPlqAcflbTcorsVXLsolwbXDKrDiGbWKszVZaJmnXA5jWhmjeJcG1wjYG57sPBugY57sPBeyJxHNPNOkSEMvhPUIAaXFxrG4NJSAxlc9o3o/jJR83q5AS4TNa9GLlREM6+VHNDga7EL1oOF58sO14OFZ6MXMqKZ50oPbPC5oIaNaGZ+fUKv4J05A+ENzoUw6GWi5pGJ4D1YaAcRIKKZlhEYg60wQvRgYcrMF84K3pmyCGVwOqgwEc3Mr2LoFbwzZzG8wTmLAAYf92LwHiy0VxFiBe+0LMIYbFkEMth1U3cyX9ZFrQn8GsL3Ifx3Kfz1EP6eBv6+FP63BfzvQ/jf+PD/08D/1wb/fyn8f97wzy3gnz3BPz+EfwYM/xx/+V6MIL0Iv58Gfk8U/L42+L2J8PtL4fcIw+/zht+rD/++xfJCg1iEf+8J/t01+PcP4d8hhX8PGP5dbvj38eHPVIA/FwP+bBP482ngzxiCPycK/qwv+PPa4M/cgz83UTZKDnoR/vxS+RgZB1XjEzYNKvxZ0FoBMguqnrCRRc3wmPQi/GwE7eCoB1W/M5QVLVpftS3gZwXhz3vCn9mFP3cNf3becP6h5qDOoUUZh/gzLOs5pNqjVutVFJoJ7GeWrMyQzr8wDxh/pnPnYS53LzqXmxBCCCGEEEIIIYQQQgghhBBCCCGEEEKc8w/YYxuI7Ao44QAAAABJRU5ErkJggg=="
              class="img-fluid"
              style="max-width: 19px; max-height: 19px; cursor: pointer"
            />
          </div>
        </div>
        <!-- 모바일 화면에서의 ui -->
      </div>

      <div class="row border-bottom border-2 pt-3 pb-3">
        <div class="col-2 col-md-2 col-lg-2 col-xl-1">
          <a class="align-self-center" style="cursor: pointer">
            <img
              src="https://contents.sixshop.com/uploadedFiles/48764/product/image_1620794006376.jpg"
              class="img-fluid"
            />
          </a>
        </div>

        <div
          class="col-md-4 col-lg-4 col-xl-5 align-self-center d-none d-md-block"
        >
          <div
            class="align-self-center pb-3 text-dark"
            style="text-align: left"
          >
            국산 햇양파 10kg
          </div>
          <div style="cursor: pointer">삭제하기</div>
        </div>
        <div class="col-md-2 align-self-center d-none d-md-block">
          <div class="input-group d-flex justify-content-center">
            <span
              class="input-group-text text-center align-self-center"
              style="cursor: pointer; max-width: 30px"
              >-</span
            >
            <input
              type="text"
              class="form-control text-center align-self-center"
              style="max-width: 35px"
              v-model="total"
            />
            <span
              class="input-group-text text-center"
              style="cursor: pointer; max-width: 30px"
              >+</span
            >
          </div>
        </div>
        <span
          class="col-md-2 align-self-center text-center text-dark d-none d-md-block"
          >21,900원</span
        >
        <span
          class="col-md-2 align-self-center text-center text-dark d-none d-md-block"
          >2,500원</span
        >

        <div class="col-8 align-self-center d-md-none">
          <!-- 모바일 화면에서의 ui -->
          <div
            class="align-self-center pb-1 text-dark"
            style="text-align: left"
          >
            국산 햇양파 10kg
          </div>
          <div class="d-md-none">
            <div class="input-group">
              <span
                class="input-group-text text-center"
                style="cursor: pointer; max-height: 30px"
                >-</span
              >
              <input
                type="text"
                class="form-control text-center"
                style="max-width: 35px; max-height: 30px"
                v-model="total"
              />
              <span
                class="input-group-text text-center"
                style="cursor: pointer; max-height: 30px"
                >+</span
              >
            </div>
          </div>
          <div class="row pt-1">
            <div class="col-6 text-dark">가격</div>
            <div class="col-6 text-dark text-center">21,900원</div>
            <div class="col-6 text-dark">배송비</div>
            <div class="col-6 text-dark text-center">2,500원</div>
          </div>
        </div>
        <div class="col-2 d-md-none">
          <div class="d-flex justify-content-end">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX///8AAACmpqajo6OhoaHz8/PR0dH29va7u7tfX1+tra1VVVV5eXlSUlJNTU0ZGRlra2vRe4gkAAADN0lEQVR4nO2di3qqMBCEida70r7/057PLydtA0QU2dt0/heYHTMrKCHbdYQQQgghhBBCCCGEEEIIIYQQQgghhBDyZ9lfb/3pfDBSP5xP/e26F1TYXVLmKCjS5vhf/bKTUth9psJWSuMB22/1TymLl/TDRkijzeaX+kVGYp9+o72Km0pdphevlUb6EBFp8VGLX0VEbrWI6ipuBto3EZU+mVkcGky9iMxpKKNmcWQwnUR0ziMdpV7cjoXPIkKHsZDKRWO8gikJ3VUdJ6TkgzplUOyeakpM2uJERCU19S2qK2oLGqRGNzRTBsW/vzVFlXuwoBcciy82VWEzg1rhMelBTXGjHizIB8gwohnpT9g0oholGEc0Ixkj84hKl+HEoFyUHPSgbCkuerAgESc3EZUqx5nB9SPlqAcflbTcorsVXLsolwbXDKrDiGbWKszVZaJmnXA5jWhmjeJcG1wjYG57sPBugY57sPBeyJxHNPNOkSEMvhPUIAaXFxrG4NJSAxlc9o3o/jJR83q5AS4TNa9GLlREM6+VHNDga7EL1oOF58sO14OFZ6MXMqKZ50oPbPC5oIaNaGZ+fUKv4J05A+ENzoUw6GWi5pGJ4D1YaAcRIKKZlhEYg60wQvRgYcrMF84K3pmyCGVwOqgwEc3Mr2LoFbwzZzG8wTmLAAYf92LwHiy0VxFiBe+0LMIYbFkEMth1U3cyX9ZFrQn8GsL3Ifx3Kfz1EP6eBv6+FP63BfzvQ/jf+PD/08D/1wb/fyn8f97wzy3gnz3BPz+EfwYM/xx/+V6MIL0Iv58Gfk8U/L42+L2J8PtL4fcIw+/zht+rD/++xfJCg1iEf+8J/t01+PcP4d8hhX8PGP5dbvj38eHPVIA/FwP+bBP482ngzxiCPycK/qwv+PPa4M/cgz83UTZKDnoR/vxS+RgZB1XjEzYNKvxZ0FoBMguqnrCRRc3wmPQi/GwE7eCoB1W/M5QVLVpftS3gZwXhz3vCn9mFP3cNf3becP6h5qDOoUUZh/gzLOs5pNqjVutVFJoJ7GeWrMyQzr8wDxh/pnPnYS53LzqXmxBCCCGEEEIIIYQQQgghhBBCCCGEEEKc8w/YYxuI7Ao44QAAAABJRU5ErkJggg=="
              class="img-fluid"
              style="max-width: 19px; max-height: 19px; cursor: pointer"
            />
          </div>
        </div>
        <!-- 모바일 화면에서의 ui -->
      </div>

      <div class="row border-bottom border-2 pt-3 pb-3">
        <div class="col-2 col-md-2 col-lg-2 col-xl-1">
          <a class="align-self-center" style="cursor: pointer">
            <img
              src="https://contents.sixshop.com/uploadedFiles/48764/product/image_1620794006376.jpg"
              class="img-fluid"
            />
          </a>
        </div>

        <div
          class="col-md-4 col-lg-4 col-xl-5 align-self-center d-none d-md-block"
        >
          <div
            class="align-self-center pb-3 text-dark"
            style="text-align: left"
          >
            국산 햇양파 10kg
          </div>
          <div style="cursor: pointer">삭제하기</div>
        </div>
        <div class="col-md-2 align-self-center d-none d-md-block">
          <div class="input-group d-flex justify-content-center">
            <span
              class="input-group-text text-center align-self-center"
              style="cursor: pointer; max-width: 30px"
              >-</span
            >
            <input
              type="text"
              class="form-control text-center align-self-center"
              style="max-width: 35px"
              v-model="total"
            />
            <span
              class="input-group-text text-center"
              style="cursor: pointer; max-width: 30px"
              >+</span
            >
          </div>
        </div>
        <span
          class="col-md-2 align-self-center text-center text-dark d-none d-md-block"
          >21,900원</span
        >
        <span
          class="col-md-2 align-self-center text-center text-dark d-none d-md-block"
          >2,500원</span
        >

        <div class="col-8 align-self-center d-md-none">
          <!-- 모바일 화면에서의 ui -->
          <div
            class="align-self-center pb-1 text-dark"
            style="text-align: left"
          >
            국산 햇양파 10kg
          </div>
          <div class="d-md-none">
            <div class="input-group">
              <span
                class="input-group-text text-center"
                style="cursor: pointer; max-height: 30px"
                >-</span
              >
              <input
                type="text"
                class="form-control text-center"
                style="max-width: 35px; max-height: 30px"
                v-model="total"
              />
              <span
                class="input-group-text text-center"
                style="cursor: pointer; max-height: 30px"
                >+</span
              >
            </div>
          </div>
          <div class="row pt-1">
            <div class="col-6 text-dark">가격</div>
            <div class="col-6 text-dark text-center">21,900원</div>
            <div class="col-6 text-dark">배송비</div>
            <div class="col-6 text-dark text-center">2,500원</div>
          </div>
        </div>
        <div class="col-2 d-md-none">
          <div class="d-flex justify-content-end">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX///8AAACmpqajo6OhoaHz8/PR0dH29va7u7tfX1+tra1VVVV5eXlSUlJNTU0ZGRlra2vRe4gkAAADN0lEQVR4nO2di3qqMBCEida70r7/057PLydtA0QU2dt0/heYHTMrKCHbdYQQQgghhBBCCCGEEEIIIYQQQgghhBDyZ9lfb/3pfDBSP5xP/e26F1TYXVLmKCjS5vhf/bKTUth9psJWSuMB22/1TymLl/TDRkijzeaX+kVGYp9+o72Km0pdphevlUb6EBFp8VGLX0VEbrWI6ipuBto3EZU+mVkcGky9iMxpKKNmcWQwnUR0ziMdpV7cjoXPIkKHsZDKRWO8gikJ3VUdJ6TkgzplUOyeakpM2uJERCU19S2qK2oLGqRGNzRTBsW/vzVFlXuwoBcciy82VWEzg1rhMelBTXGjHizIB8gwohnpT9g0oholGEc0Ixkj84hKl+HEoFyUHPSgbCkuerAgESc3EZUqx5nB9SPlqAcflbTcorsVXLsolwbXDKrDiGbWKszVZaJmnXA5jWhmjeJcG1wjYG57sPBugY57sPBeyJxHNPNOkSEMvhPUIAaXFxrG4NJSAxlc9o3o/jJR83q5AS4TNa9GLlREM6+VHNDga7EL1oOF58sO14OFZ6MXMqKZ50oPbPC5oIaNaGZ+fUKv4J05A+ENzoUw6GWi5pGJ4D1YaAcRIKKZlhEYg60wQvRgYcrMF84K3pmyCGVwOqgwEc3Mr2LoFbwzZzG8wTmLAAYf92LwHiy0VxFiBe+0LMIYbFkEMth1U3cyX9ZFrQn8GsL3Ifx3Kfz1EP6eBv6+FP63BfzvQ/jf+PD/08D/1wb/fyn8f97wzy3gnz3BPz+EfwYM/xx/+V6MIL0Iv58Gfk8U/L42+L2J8PtL4fcIw+/zht+rD/++xfJCg1iEf+8J/t01+PcP4d8hhX8PGP5dbvj38eHPVIA/FwP+bBP482ngzxiCPycK/qwv+PPa4M/cgz83UTZKDnoR/vxS+RgZB1XjEzYNKvxZ0FoBMguqnrCRRc3wmPQi/GwE7eCoB1W/M5QVLVpftS3gZwXhz3vCn9mFP3cNf3becP6h5qDOoUUZh/gzLOs5pNqjVutVFJoJ7GeWrMyQzr8wDxh/pnPnYS53LzqXmxBCCCGEEEIIIYQQQgghhBBCCCGEEEKc8w/YYxuI7Ao44QAAAABJRU5ErkJggg=="
              class="img-fluid"
              style="max-width: 19px; max-height: 19px; cursor: pointer"
            />
          </div>
        </div>
        <!-- 모바일 화면에서의 ui -->
      </div>

      <div class="row pt-4">
        <div class="mb-4 col-md-9 text-end d-none d-md-block text-dark">
          상품합계
        </div>
        <div class="col-md-3 text-end d-none d-md-block text-dark">
          41,900원
        </div>
        <div class="mb-1 col-md-9 text-end d-none d-md-block text-dark">
          배송비
        </div>
        <div class="col-md-3 text-end d-none d-md-block text-dark">7,500원</div>
        <div class="d-flex justify-content-end">
          <hr class="d-none d-md-block" style="width: 50%; height: 2px" />
        </div>
        <div class="mb-4 col-6 d-md-none text-dark">상품합계</div>
        <div class="col-6 text-end d-md-none text-dark">41,900원</div>
        <div class="mb-1 col-6 d-md-none text-dark">배송비</div>
        <div class="col-6 text-end d-md-none text-dark">7,500원</div>
        <hr class="d-md-none mt-4" style="height: 2px" />
      </div>
      <div class="row pb-5">
        <span class="col-md-9 text-end text-dark fw-bolder d-none d-md-block"
          >합계</span
        >
        <span class="col-md-3 text-end text-dark fw-bolder d-none d-md-block"
          >49,400원</span
        >
        <span class="col-6 text-dark fw-bolder d-md-none">합계</span>
        <span class="col-6 text-end text-dark fw-bolder d-md-none"
          >49,400원</span
        >
      </div>
      <div class="row pb-5">
        <span class="col-6 col-md-6 d-flex flex-row-reverse">
          <router-link to="/">
            <button type="button" class="btn btn-outline-primary fw-bolder p-3">
              쇼핑 계속하기
            </button>
          </router-link>
        </span>
        <span class="col-6 col-md-6">
          <router-link to="/payment">
            <button type="button" class="btn btn-primary fw-bolder p-3">
              주문하기
            </button>
          </router-link>
        </span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      total: 1,
    };
  },
};
</script>

<style scoped>
#cart {
  border: 2px dashed green;
}
</style>