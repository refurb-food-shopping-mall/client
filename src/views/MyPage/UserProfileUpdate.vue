<template>
  <!-- <div class="row d-flex justify-content-center align-content-center m-3"> -->
  <div class="col-md-10">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">회원정보수정</h4>

        <hr />

        <div class="form-group">
          <label for="exampleInputEmail1" class="form-label mt-2"
            >아이디:</label
          >
          <input
            class="form-control"
            id="disabledInput"
            type="text"
            placeholder="foodrefurb@gmail.com"
            disabled=""
          />
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1" class="form-label mt-3"
            >새로운 비밀번호:</label
          >
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="🚨 새로운 비밀번호를 입력해주세요"
          />
        </div>

        <div class="form-group mb-4">
          <label for="exampleInputPassword1" class="form-label mt-3"
            >비밀번호 재입력:</label
          >
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="🚨 비밀번호를 다시 한번 입력해주세요"
          />
        </div>

        <div class="form-group">
          <label class="col-form-label mt-3" for="inputDefault">이름:</label>
          <input
            type="text"
            class="form-control"
            placeholder="이름을 입력해주세요 :)"
            id="inputDefault"
          />
        </div>

        <div class="form-group">
          <label class="col-form-label mt-3" for="inputDefault">연락처:</label>
          <input
            type="text"
            class="form-control"
            placeholder="🎈 연락처를 입력해주세요 "
            id="inputDefault"
          />
        </div>

        <div class="form-group">
          <label class="col-form-label mt-3" for="inputDefault">주소:</label>
          <input
            type="text"
            class="form-control"
            placeholder="🚗 주소를 입력해주세요"
            id="inputDefault"
          />
        </div>

        <hr />
        <button type="submit" class="btn btn-primary mt-3">수정하기</button>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {};
</script>

<style scoped>
#profile-update {
  border: 2px dashed green;
}
</style>