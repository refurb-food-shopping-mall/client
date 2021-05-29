<template>
  <div
    class="row d-flex justify-content-center align-content-center"
    style="height: 700px"
  >
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">로그인</h4>

          <hr />

          <div class="form-group">
            <label for="exampleInputEmail1" class="form-label mt-4"
              >아이디 입력:</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <!-- <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            > -->
          </div>

          <div class="form-group mb-4">
            <label for="exampleInputPassword1" class="form-label mt-4"
              >비밀번호 입력:</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button type="submit" class="btn btn-primary">로그인</button>

          <hr />

          <div class="d-flex justify-content-between">
            <router-link to="/signup"
              ><button type="submit" class="btn btn-primary">회원가입</button>
            </router-link>
            <router-link to="/">아이디 | 비밀번호 찾기</router-link>
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
#login {
  border: 2px dashed green;
}
</style>