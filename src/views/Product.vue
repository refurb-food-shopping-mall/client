<template>
  <div id="product">
    <!-- 이곳을 자유롭게 만들어주세요. -->

    <div class="container my-5 ">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <div class='row d-flex justify-content-around'>
        <div class='col-md-5 d-flex justify-content-center'>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" style='width:90%'>
            <div class="carousel-indicators" >
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://contents.sixshop.com/uploadedFiles/48764/product/image_1620794006376.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://contents.sixshop.com/uploadedFiles/48764/product/image_1620794006376.jpg" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://contents.sixshop.com/uploadedFiles/48764/product/image_1620794006376.jpg" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class='col-md-5 d-flex flex-column justify-content-center my-2'>
          <div class="card" >
            <div class="card-body">
              <h5 class="card-title" style='text-align: center;'>상품명</h5>
              <h6 class="card-subtitle mb-2 text-muted" style='text-align: right;'>상품 가격</h6>
              <p class="card-text" style='text-align: right;'>배송비</p>
              <div class="form-group">
                <label for="exampleSelect1" class="form-label d-flex justify-content-end mt-4">수량 선택</label>
                <select class="form-select" id="exampleSelect1">
                  <option>1kg</option>
                  <option>2kg</option>
                  <option>3kg</option>
                  <option>4kg</option>
                  <option>5kg</option>
                </select>
              </div>
              <p class='card-text' style='text-align: right;'>배송 예정일</p>
            </div>
          </div>
          <div class='d-flex justify-content-between align-items-center'>
          <div class = 'col-6 d-grid p-1'>
            <button type="button" class="btn btn-primary mt-3">장바구니</button>
          </div>
          <div class = 'col-6 d-grid p-1'>
            <button type="button" class="btn btn-danger mt-3">구매하기</button>
          </div>
          </div>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-light bg-light px-2 d-flex justify-content-around">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" href="#img_detail">제품 상세 정보</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#review">리뷰</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#qna">Q&A</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#ship_detail">배송 및 교환 환불</a>
        </li>
      </ul>
    </nav>


    <div class='img-container m-5' id='img_detail'>
    <div class='col my-3'><h3>제품 상세 정보</h3></div>
      <img src="https://t1.daumcdn.net/cfile/tistory/223C843B52C8423631" class="img-fluid" alt="...">
    </div>

    <div class = 'container my-5' id='review'>
      <div class='col d-flex justify-content-center my-3'><h3>리뷰</h3></div>
      <div class='col d-flex justify-content-end my-1'>
        <button type="button" class="btn btn-secondary me-3">리뷰 올리기</button>
        <button type="button" class="btn btn-secondary">리뷰 더보기</button>
      </div>
      <div class='border-top border-2 border-primary mb-3'></div>
      <div class= 'container'>
        <div class='row d-flex justify-content-start'>
          <div class='col-4 col-md-2 me-1'> ★★★★★</div>
          <div class='col-3 col-md-2 me-1'> 작성자 </div>
          <div class='col-3 col-md-2 me-1'> 20XX.XX.XX </div>
        </div>
        <div class = 'row d-flex justify-content-start'>
          <div class='col-12 col-md-9 mt-3 me-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae omnis sit soluta a, nesciunt nemo illo. Consectetur, quae officiis iste quo illum nam odio optio illo, tenetur eos, rem maiores!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt enim asperiores assumenda ut repellendus cupiditate voluptate sit facere consequuntur itaque non, veritatis reprehenderit, reiciendis fugit nesciunt illum similique maxime?
          </div>
          <img src="data:image/jpeg;base64,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" 
          class="img-fluid col-12 col-md-2" alt="...">
        </div>
      </div>
      <div class='border-top border-primary my-3'></div>
      <div class= 'container'>
        <div class='row d-flex justify-content-start'>
          <div class='col-4 col-md-2 me-1'> ★★★★★</div>
          <div class='col-3 col-md-2 me-1'> 작성자 </div>
          <div class='col-3 col-md-2 me-1'> 20XX.XX.XX </div>
        </div>
        <div class = 'row d-flex justify-content-start'>
          <div class='col-12 col-md-9 mt-3 me-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae omnis sit soluta a, nesciunt nemo illo. Consectetur, quae officiis iste quo illum nam odio optio illo, tenetur eos, rem maiores!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt enim asperiores assumenda ut repellendus cupiditate voluptate sit facere consequuntur itaque non, veritatis reprehenderit, reiciendis fugit nesciunt illum similique maxime?
          </div>
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhISEhIWFRUVERUXEhUQFRIVFhUXFRUWFxUVFRYYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICYvLS0rLS0tLS0tLSstLTUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMABBwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgUBAwQGBwj/xAA8EAACAQIDBQUGBAQGAwAAAAAAAQIDEQQSIQUxQVFxBmGBkbETIjJCocEUUtHwYnKC4RUjkrLC8Qczov/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAApEQACAgEEAgEDBAMAAAAAAAAAAQIDEQQSITETQVEUInEFMjNhgZGx/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFSrGKvJpLm2kctbalGO+ovDX0KynGPbLKLfSO0Eac00mndNXTJFioAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5X/wAh1cmHpS5YmCf9UZx9WjzuzcY507t782/dxX2PTdu8N7WjThv/AM+Mmu6MZ/8AJxKTBYTLG1uOnhw9Txdem7ePg9fRY8XPyep7K4hzw8VL4oOUX4O6+jRcHnuzk1CU4O6UrOPK6vdenkehPT00t1SyefqI7bGAAbmAAAAAAAAAAAAAAAAAAAAAAAAAAAABi5CVaK3yS6tIZBsBo/F0/wA8f9UTbConuafRpkbkS00SBi5kkgAw2cGL2nGOkdX9P7kSkkuS0YuTwjulJLV6HNUx0Vu19Cnq4ty3sxGqc0tQvR0x0z7Z11lneaXh3dCEaEeRpWKSNf4owdsezZVS6O9JLcZ9tbi/NlfGuJ1SfNjoeD5LOOLkuPmbqeP5ryKH8SSjii0dSHpT01Oopap3JnmqWL10dmWuC2kpPLLSXDkzohdGRy2aeUeSwABsYAAAAAAAAAAAAAAjUmkrtpLmwCRi5XVNqxkpKm7vcpfLfmcdOm7e9Nyeuru97MZXxTwuS6g/ZbVMZFaK8nyivvu+ppliZvclHrq/0MUmrEmictkcI550r/FJvq9PLcYVCPJfQ3OJhx7yjiid7NTprl9DXLDRfBeSNzkZTTK7IsKcl7NChJfDOS8W15SujdHH1I/FFSX8PuvyenoYehGTK4cemW357WSt2ptmTdnFwjyfHqyr/Fl3iaSkmmee2hs1w96G7iv0OO6yfZ6WldT46OlYlknXKv8AEbkT9qcTvPR8KLKNS5mEtCGHjfyOqjTX1NYJs55NIh3E47uhslHU2KOhqomTkctWmc0pO2m9byzUSvxNJqXUiaxyjSuWeGcVbFOOvmZlj725mjHU7LwKmFfhyOZ2yizujTGayfQez221U/y5v318L/Mv1L8+OrGuElJOzTumj6fsDaixNGM18S0mlwkvs956+j1PkW19nia/R+J749MswAdx5oAAAAAAAABGpOyb5K/kefxTnValO6j+RburfFlrXln04L6miMXY57sy4XReDwclLDq2n1Oh0rbjYokmjKNaSJcmRpokmRcQzWKwUZsTBhBPWxcgjOJpt5nRJmqSMpIBVOZGZGohGQznhkkXE1VKZ0kJIylE0jLDPJbbwOR547uK+5XU6up7HH0VKDuuB8/m8s2uUmeJra/HNSXTPotBb5YYfaPXYOqrllTtq/3uPO4DE3sXEcT9UdVFicTC+t7jqqWXmbMxxSq3TJU617GvkRg63g6L7zVi924xK+j6mnGYjRImUlt5LQi8rBwbTjoeZr6SuekxFXNFrjYoNpRta3M8+/nlHr6XhYZWzn3nouwW1fZ4hU5P3avuP+b5H56f1Hl6mkn1M4aq4yUlo000+9WZbTWOM1Itq6VOtxfs+8g0YKv7SnCa+eEZeaTN59Onk+LaxwAASAAAAceLq3eRf1P7HTVnZNnCvq95Sb9Eoley0IvQxPejM9xnkBGcxrTJNXI/ANhCSCmSepbKZBCDMyRhIlIegYZBkiLKSBrq8DXc2z3GtozJRIxIIxImRJqa0fQ+d7ZWWvPw/T7H0WW59D5ttud8RPqeX+ofsR7X6V+5/g6sHWtboWdPF3t4r7lHhnuOqFTVdfseTXa4to9edabLv8VoToVtF09Csz6E8NU0/f74myveTB1LBZzxFl4o0VqlzTVqbzDkaO3giNeDRXnYp9pVXa3fcsq7KvGrXyOd2ZeDuqijhqxu/AzCGpOqveXQ3Uqbb8TopXIufB9W7IVM2DoPlFr/AEya+xclF2LjbCwX8U/9zL0+oqf2L8Hxd/8AJL8sAA0MgAADkxsvhXNt+X/ZqiSxj99fy+rf6EEzCT5LehJbiNybIWKsgjbkRUmiUtAVBlSNkJGmxhxLJtEHTIg3oaYtowq37ZDs+ScG1MimYv5GSGyCMt3iQJN6MwVJRGmZZOnHeRkJdD2cOOrZITk9EkfMMTVzVJvmz2XavHpRyJ97+yPB4SpmbfNs8fWyzwfRfp1eyvL9lvhF6nRJa+K9TRg0dco+h5ajzk9JyOmCuiWHi9epuw8Fa7J02rnRGj5MXPtEakbkYr0N9U1QJnDBCfBz1KZW4qlqXLRodO7MlDk3hZgp/ZXkjuw9DVElQ95nbhKf76nfpoGWos4Pc9mKeXDw/qf/ANMtTn2fSyU4R5RXnxOg+kgsRSPkrHmTYABYoAAAV+OVpxfOLXk1b1ZrudW0I+7f8rv4cfpc5Vqc81hl/RK5FsipWJMpkgxn5mEuRhu5Foq2QbDFyOYxm7huBsTIzgmRuiLXJhyz/ZBh3jv3GfbLnf7mqddx+JaFbtOM7Z6L1WtuZzWWOKzH/RpXHc8FpGorrk1b9DogjyOztpN3UtFf3k9HB+PC/qeowVTcm78muJGm1Cmy9tLh2dDjoyu2hjFCMny+r4FpN2PD9r8dlgo8Xd266L7m2olgtpqt80jyW3Mc5uWt7vzbOPZi1sclWrml3L6viduGVmjxr3ng+kh8F7h1qdRx0XodkdTDBbJ1Up+6jEPiEI6ElvNXF5WSmTbIyiE2bEWcckZNdjFjcyOUhV4J3mr2ehZ7FweapCPfd9Fqc1OFz1XZ7CZYub46R6cWejo6syRw6y/bBlyAD2jwQAAAAADEkU8HllKm96+Hvjwf28C5K3bWDlOKnT/9kNY/xLjHxM7I5WUXg10yMoGtuxzbO2lGpG/FfEuKZ2tXOfh9CUXF4ZqbTFg4EbMryVMtsZzDbMroRkByiQcVzNngY05INIg1On337mcdbCtax06biwzIy5xMpxjJdl4tpnl8dTvKEpRtJOzlvjKL3r+zLvD1MqTW7lz6d5OrGD4lZtOs4pZbNLek0rJ8fA4/422ehB+RKJeVKya39D5t23q523FXySUbrll4+PqXVLbMb8XlbTb0V1ZpXfB5l9Cv2vgbwrq2+lCpFppq8G8666rzRac3PDOvT6dVN5/weLoQsyxpR0scdM76EuBx2Lk74ndhZljhGVMXbXzO6hPiZR7LyWUWUZGc2pyVKmqISr2ub5MsHep3fQ2RkVlCvpfnr4GyOJ8vUZI2lipGyCOSjVv+pZ7Ow8qsssFfm+C72b117nwY2S2LLOvZWCdSajwWsnyR7CEEkktyVkc+AwcaUcq8XzZ1Ht0VeOODwr7vJLPoAA2MAAAAAAAYbMs1TYB5ftPsecW8ThviWtSC+bnJLnzRU7N7Xwfu1VlfPge2qVbHiu1PZmNZupRahU3tP4Zv/i+//s5ras/dE66rItbbD0OH2hCavGSa7jd7ZHxypiK2Gnlmp05d97Po9zXQtMH2urK15KX839jldkl2bPSRlzFn0/2q5D2vceDj2xnb4Y+DJLtdVeiUfX7EeZFfoZ/0e7zmmviYx1lJLrZHh63aCo/jrZe6G8qsXtXNotebk/sVld8I0hoM9s9pju0lKG55ulylrdppS3JxXNJX+rfoeUliFzv0LLZWFqVXanC/NvcusnoZYnNnWqKaln/p04ntDNNOW5clv8zXgZzqZqkpWhJ7nmu13XfG/la56fZ+w4w96o88uC+VeHHxKfals+WUsrzLNJtqSzN5ekUlw+m8i3TutJv2Wp1EJtqKIwrQgpJpVJybcYR1dllto9y3Xb4+J2uvm9kppRzSlFKHwyTpyTi73vfNfT8iKipjYYZtUYLKneUo3ed2d3OTd56c3yRLZWMVevTqSc2oK8IPdmd3Kcn0ypdXz1ok/RpJ55Z5rG4apRdqkHHXR/K+j3GcPiUz1eOryd7R0d9HrpyZ5nGbOu7qnZ/w3j9FodFmmT6MK9U/aOyjUvuV+h20KUlqlpxv9igpvEU37vDg0a8dtyvBX9m28ybaWZK38KX1Of6Vl3qz1EkrJOWt7pLe7b9CUoprdK3F5XwPL4Xb1SS96EsyVotqUFq1dSWW1rN66ltT23KUZWp62bUbTvezSTbVuW7lwLfTsq9QWFelfuXfoV1KEpzsrvpfX9TZhKVaprOKW60Urpac7Hotm4WS3Rt0RpHSZ7IescVwdexthylb2jyx5K2Z/oe1wNCFOKjCKS9e9spMDSki6w9z0aaoVr7UeXfdOx/cztiyRrgbDoOYAAAAAAAAAEZRJAA48RhcxS43Z1VfCz0xhoholSwfONq4arKLjUpKceUlfy5HhdqbEabdOM4dz95eF9fqffJ0U+By1tmQlvivIylVk3hftPzy6daO+LfmZ/FVF8skfeKvZ6k/kRxVeydF/KjJ6c3WsPiXt5vgzow9GUnq7LzPrVXsZS4I5pdi48Cv0+PRf6vPs8nsnZlFWck5P+Ld5I9hhKyikkkkuRrh2WlHczfHZc48DWK2+jCc1P2dEK1yv29smOIpuy99L3Xz7n+9DqVKS3o3U5kySksMrFuD3RPDx7H4qpK1Sayq1rvW3JWues2R2cp0FaO9pJvn3ltTZ1UoGcNPCLyaWaqyawyteyovgY/waPIvI0iapG+1HPvZQ/4JD8pCXZ+m/lXkejVMkqY2Ib2eaXZ6n+ReRthsKC+VHoVTJKmNpG9lLS2RFcDrp4FLgWKpmVAnaRvOaFBI6IQJqJJItgq2EjIBJAAAAAAAAAAAAAAAAAABiwsZABHKYykwAa3Aw6aNpiwBzyw6fA1vAx5HZYWIwTk41go8jZGgkdFhYYGTUqZnKbLCxJBDKZykrGQCFjNiQAMWFjIAAAAAAAAAAAAAP//Z" 
          class="img-fluid col-12 col-md-2" alt="...">
        </div>
      </div>
      <div class='border-top border-2 border-primary my-3'></div>
    </div>
    
    <div class = 'container my-5' id = 'qna'>
      <div class='col d-flex justify-content-center my-3'><h3>Q&A</h3></div>

      <div class = 'col d-flex justify-content-end'>
        <button type="button" class="btn btn-outline-primary me-3">질문 하기</button>
        <button type="button" class="btn btn-outline-primary">내 질문 보기</button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">답변상태</th>
            <th scope="col">제목</th>
            <th scope="col">작성자</th>
            <th scope="col">작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">처리 중</th>
            <td>질문 3</td>
            <td>작성자 3</td>
            <td>2021.05.01</td>
          </tr>
          <tr>
            <th scope="row">답변 완료</th>
            <td>질문 2</td>
            <td>작성자 2</td>
            <td>2021.04.01</td>
          </tr>
          <tr>
            <th scope="row">답변 완료</th>
            <td >질문 1</td>
            <td>작성자 1</td>
            <td>2021.03.01</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class='img-container' id='ship_detail'>
    <div class='col my-3'><h3>배송 및 교환 환불</h3></div>

    <img src = 'https://cdn.imweb.me/upload/S2019071811778938fffe1/8d4829e064a29.jpg'
    class = 'img-fluid' alt='...'>
    </div>


    

    <!-- 제품상세 페이지 입니다. -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#product {

}
.img-container {
  text-align: center;
}


</style>