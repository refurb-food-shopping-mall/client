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
      <div
        id="rows131"
        style="border-top:1px solid mediumaquamarine; border-bottom:1px solid mediumaquamarine; margin-left:40px"
      >
        <div id="cols111" style="text-align: center;">
          <div style="margin-top:20px"><strong>배송중</strong></div>
          <div style="margin-top:20px"><strong>배송완료</strong></div>
          <div style="margin-top:20px"><strong>교환/반품</strong></div>
        </div>
        <div id="cols111">
          <div id="cols21">
            <img
              height="100"
              width="100"
              style="display: block; margin: auto; margin-left:60px;"
              src="https://image.flaticon.com/icons/png/128/664/664468.png"
            />
            <p
              class="text-secondary"
              style="font-size:50px; margin:auto; margin-right:70px"
            >
              2
            </p>
          </div>
          <div id="cols21">
            <img
              height="90"
              width="90"
              style="display: block; margin: auto; margin-left:60px;"
              src="https://image.flaticon.com/icons/png/128/869/869129.png"
            />
            <p
              class="text-secondary"
              style="font-size:50px; margin:auto; margin-right:70px"
            >
              1
            </p>
          </div>
          <div id="cols21">
            <img
              height="90"
              width="90"
              style="display: block; margin: auto; margin-left:60px;"
              src="https://image.flaticon.com/icons/png/128/1585/1585147.png"
            />
            <p
              class="text-secondary"
              style="font-size:50px; margin:auto; margin-right:70px"
            >
              0
            </p>
          </div>
        </div>
        <div>
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~날짜 선택
          칸~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        </div>
      </div>
    </div>

    <br />
    <hr id="line" style="background-color:mediumaquamarine" />

    <div id="div2">
      <div
        id="menu"
        style="height:500px; border:0px solid mediumaquamarine; margin-top:20px;"
      >
        menu(border 수정하기)
        <div
          class="list-group"
          style="width:200px; border:2px solid mediumaquamarine;"
        >
          <a href="#" class="list-group-item list-group-item-action"
            >회원정보 수정</a
          >
          <a href="#" class="list-group-item list-group-item-action"
            >배송지 관리</a
          >
          <a href="#" class="list-group-item list-group-item-action"
            >카드/계좌 관리</a
          >
        </div>
      </div>
      <div id="product box" style="margin-left:20px;">
        <div id="product">
          <div>
            <img
              src="https://media.istockphoto.com/photos/golden-onions-on-rustic-wooden-background-picture-id480134211?k=6&m=480134211&s=612x612&w=0&h=FlEwOJ9bc_h6o4DKJssyE4Yhw10cUpYlWlkPR_y90pw="
            />
          </div>
          <div
            style="height:200px; border: 0px solid mediumaquamarine; margin:20px;"
          >
            <div style="font-size:25px">무안 양파 5kg/10kg/15kg</div>
            <div>2021.05.05</div>
            <div>5,000원</div>
            <div>배송중</div>
          </div>
          <div style="margin-top:60px;">
            <button type="button" class="btn btn-primary">
              배송조회
            </button>
            <br /><br /><br />
            <button type="button" class="btn btn-primary">
              결제상세
            </button>
          </div>
        </div>
        <hr id="line" style="background-color:mediumaquamarine" />
        <div id="product">
          <div>
            <img
              src="https://media.istockphoto.com/photos/golden-onions-on-rustic-wooden-background-picture-id480134211?k=6&m=480134211&s=612x612&w=0&h=FlEwOJ9bc_h6o4DKJssyE4Yhw10cUpYlWlkPR_y90pw="
            />
          </div>
          <div
            style="height:200px; border: 0px solid mediumaquamarine; margin:20px;"
          >
            <div style="font-size:25px">무안 양파 5kg/10kg/15kg</div>
            <div>2021.05.05</div>
            <div>5,000원</div>
            <div>배송중</div>
          </div>
          <div style="margin-top:60px;">
            <button type="button" class="btn btn-primary">배송조회</button>
            <br /><br /><br />
            <button type="button" class="btn btn-primary">
              결제상세
            </button>
          </div>
        </div>
        <hr id="line" style="background-color:mediumaquamarine" />
        <div id="product">
          <div>
            <img
              src="https://media.istockphoto.com/photos/golden-onions-on-rustic-wooden-background-picture-id480134211?k=6&m=480134211&s=612x612&w=0&h=FlEwOJ9bc_h6o4DKJssyE4Yhw10cUpYlWlkPR_y90pw="
            />
          </div>
          <div
            style="height:200px; border: 0px solid mediumaquamarine; margin:20px;"
          >
            <div style="font-size:25px">무안 양파 5kg/10kg/15kg</div>
            <div>2021.05.05</div>
            <div>5,000원</div>
            <div>배송중</div>
          </div>
          <div style="margin-top:60px;">
            <button type="button" class="btn btn-primary">배송조회</button>
            <br /><br /><br />
            <button type="button" class="btn btn-primary">
              결제상세
            </button>
          </div>
        </div>
      </div>
    </div>
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
#rows131 {
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
}
#cols111 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
#cols21 {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
#div2 {
  /* margin: 20px; */
  display: grid;
  grid-template-columns: 0.8fr 3.2fr;
}
#product {
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
}
#product img {
  width: 200px;
  height: 200px;
  display: block;
  margin-left: 20px;
  margin-top: 20px;
}
#ctest {
  background-color: mediumaquamarine;
}
</style>
