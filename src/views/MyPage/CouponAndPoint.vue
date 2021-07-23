<template>
  <div id="delete__account" class="col-md-10">
    <!-- user coupon detail -->
    <div class="card mb-2 p-5">
      <div class="row">
        <div class="col-md-2">
          <div class="d-flex align-items-center">
            <div>
              <font-awesome-icon icon="tags" size="3x" color="#64b5f6" />
            </div>
          </div>
        </div>
        <div class="col">
          <div>
            <h5 class="m-0">보유 쿠폰: 0</h5>
          </div>
          <div class="mt-3">현재 보유중인 쿠폰이 없습니다 😪</div>
        </div>
      </div>
    </div>
    <!-- user point money detail -->
    <div class="card mb-2 p-5">
      <div class="row d-flex align-items-center">
        <div class="col-md-2">
          <div class="">
            <div>
              <font-awesome-icon icon="won-sign" size="3x" color="#81c784" />
            </div>
          </div>
        </div>
        <div class="col">
          <div>
            <h5 class="m-0">
              적립금:
              {{
                Number($store.state.user.userPointMoney).toLocaleString(
                  "ko-KR"
                )
              }}원
            </h5>
          </div>
          <div v-if="$store.state.user.userPointMoney == 0" class="mt-3">
            적립금이 없습니다 😪
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>