<template>
  <main>
    <div id="div1">
      <div>
        <img
          height="200"
          id="profile"
          src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
        />
        <div style="text-align:center">name 님</div>
      </div>
      <div style="margin-left:40px ">
        <div style="font-size:25px;"><strong>주문 상세정보</strong></div>
        <div id="rows101301" style="border-top:2px solid mediumaquamarine;">
          <div id="cols112111" style="margin-top:10px">
            <div>주문번호</div>
            <div></div>
            <div>상품정보</div>
            <div>상품금액(수량)</div>
            <div>배송비</div>
            <div>진행상태</div>
          </div>
          <div id="line" style="border-top:1px solid gray;"></div>
          <div id="cols112111" style="margin-top:50px; margin-bottom:50px;">
            <div>2055312105023823</div>
            <div>
              <img
                height="50"
                width="50"
                src="https://image.flaticon.com/icons/png/128/2921/2921855.png"
                style="margin: auto;"
              />
            </div>
            <div>무안 양파 5kg/10kg/15kg</div>
            <div>5,000원(X kg)</div>
            <div>2,500원</div>
            <div>배송중</div>
          </div>
          <div id="line" style="border-top:1px solid gray;"></div>
        </div>
        <!-- 주문/결제 금액 정보 -->
        <!-- 주문/결제 금액 정보 -->
        <!-- 주문/결제 금액 정보 -->
        <!-- 주문/결제 금액 정보 -->
        <br />
        <br />
        <br />
        <br />
        <div style="font-size:25px;"><strong>주문/결제 금액 정보</strong></div>
        <div id="rows101301" style="border-top:2px solid mediumaquamarine;">
          <div id="cols112111" style="margin-top:10px">
            <div>주문번호</div>
            <div></div>
            <div>상품정보</div>
            <div>상품금액(수량)</div>
            <div>배송비</div>
            <div>진행상태</div>
          </div>
          <div id="line" style="border-top:1px solid gray;"></div>
          <div id="cols112111" style="margin-top:50px; margin-bottom:50px;">
            <div>2055312105023823</div>
            <div>
              <img
                height="50"
                width="50"
                src="https://image.flaticon.com/icons/png/128/2921/2921855.png"
                style="margin: auto;"
              />
            </div>
            <div>무안 양파 5kg/10kg/15kg</div>
            <div>5,000원(X kg)</div>
            <div>2,500원</div>
            <div>배송중</div>
          </div>
          <div id="line" style="border-top:1px solid gray;"></div>
        </div>
        <!-- 배송지 정보 -->
        <!-- 배송지 정보 -->
        <!-- 배송지 정보 -->
        <!-- 배송지 정보 -->
        <br />
        <br />
        <br />
        <br />
        <div style="font-size:25px;"><strong>배송지 정보</strong></div>
        <div id="rows101301" style="border-top:2px solid mediumaquamarine;">
          <div id="cols112111" style="margin-top:10px">
            <div>주문번호</div>
            <div></div>
            <div>상품정보</div>
            <div>상품금액(수량)</div>
            <div>배송비</div>
            <div>진행상태</div>
          </div>
          <div id="line" style="border-top:1px solid gray;"></div>
          <div id="cols112111" style="margin-top:50px; margin-bottom:50px;">
            <div>2055312105023823</div>
            <div>
              <img
                height="50"
                width="50"
                src="https://image.flaticon.com/icons/png/128/2921/2921855.png"
                style="margin: auto;"
              />
            </div>
            <div>무안 양파 5kg/10kg/15kg</div>
            <div>5,000원(X kg)</div>
            <div>2,500원</div>
            <div>배송중</div>
          </div>
          <div id="line" style="border-top:1px solid gray;"></div>
        </div>
      </div>
    </div>

    <!-- <table class="table table-hover">
      <thead>
        <tr class="table-primary">
          <th scope="col">Primary</th>
          <th scope="col">Column content</th>
          <th scope="col">Column content</th>
          <th scope="col">Column content</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table> -->
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
#div1 {
  /* height: 200px; */
  /* margin: 20px; */
  display: grid;
  grid-template-columns: 0.8fr 3.2fr;
}
#div1 img {
  display: block;
  margin: auto;
}
#rows101301 {
  display: grid;
  grid-template-rows: 1fr 0.1fr 3fr 0.1fr;
}
#cols112111 {
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr 1fr 1fr 1fr;
  text-align: center;
}
#ctest {
  border-color: mediumaquamarine;
  border-color: palevioletred;
}
</style>
