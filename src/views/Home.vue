<template>
  <div id="home">
    <!-- 이곳을 자유롭게 만들어주세요. -->
    <div class='container'>
      <div class='row'>
      <div class='col-md-3'>
      </div>
      <div class='col-md-3'>
        <img src="https://contents.sixshop.com/uploadedFiles/48764/product/image_1620794006376.jpg" 
          class="img-thumbnail" alt="...">
        <div class = 'item item1' >제품명
        </div>
      </div>
      <div class='col-md-3'>
        <img src="https://mblogthumb-phinf.pstatic.net/MjAxNzAzMTlfMjA2/MDAxNDg5OTA1NjU5MTI3.XgpVLwuZ0mztn8ygvf9xkFiFsS-ekKscARLKQ5cAoPgg.8N6q4J-hD-Fv48uRlw8e7ZSrzpq9Mv3miryo8VWX2CEg.JPEG.wun12342005/%EB%A7%88%EB%8A%98%EC%9D%80_%EC%98%A8%EA%B0%96_%EB%82%98%EC%81%9C_%EA%B8%B0%EC%9A%B4%EC%9C%BC%EB%A1%9C%EB%B6%80%ED%84%B0_%EB%AA%B8%EC%9D%84_%EB%B3%B4%ED%98%B8%ED%95%9C%EB%8B%A4..jpg?type=w2" 
          class="img-thumbnail" alt="...">
        <div class = 'item item1'>제품명
        </div>
      </div>
      
      <div class='col-md-3'>
      </div>

      </div>
    </div>
      


    <!-- 홈페이지 입니다. -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#home {
  border: 2px dashed green;
}
.container{
  display: grid;
  background: beige;
  height: 100vh;
}
.img-thumbnail{
  height:20vh;  
  width: 20vh;
}
.item1{
  border:solid;
  height : 35px;
  width : 100px;
  
}

</style>