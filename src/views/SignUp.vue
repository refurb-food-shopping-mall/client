<template>
  <div class="row d-flex justify-content-center align-content-center">
    <div class="col-md-5">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">회원가입</h4>

          <hr />

          <div class="form-group">
            <label for="exampleInputEmail1" class="form-label mt-2"
              >아이디 입력:</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="✔ 이메일 주소를 입력해주세요"
            />
            <!-- <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            > -->
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label mt-3"
              >비밀번호 입력:</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="🚨 비밀번호를 입력해주세요"
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
            <label class="col-form-label mt-3" for="inputDefault"
              >연락처:</label
            >
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

          <button type="submit" class="btn btn-primary mt-3">가입하기</button>

          <hr />

          <div class="d-flex justify-content-end">
            <div class="mx-3 pt-1">계정이 있으신가요?</div>
            <button type="submit" class="btn btn-primary">로그인하기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#signup {
  border: 2px dashed green;
}
</style>