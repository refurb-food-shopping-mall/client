<template>
        <transition name="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-container" style="max-width: 350px;">
                <div class="modal-body">
                  <slot name="body">
                          <div class="form-group row pb-1">
                              <div class="col-12 text-dark text-start">
                                수령인
                              </div>
                              <div class="col-12">
                                <input
                                  v-model="address.receiver"
                                  type="text"
                                  class="form-control col-9"
                                  id="receiver"
                                  aria-describedby="emailHelp"
                                  autocomplete="off"
                                />
                              </div>                        
                          </div>

                          <div class="row mt-2">
                            <div class="col-12 text-dark text-start">
                              연락처
                            </div>
                            <div class="col-12">
                              <input
                                  v-model="address.phonenumber"
                                  type="text"
                                  class="form-control"
                                  id="userphonenumber"
                                  aria-describedby="emailHelp"
                                  placeholder="-없이 숫자만 입력해주세요."
                                  autocomplete="off"
                              />
                            </div>                          
                          </div>
                          
                          <div class="form-group row mt-2">
                              <div class="col-12 text-dark text-start">
                                배송지명
                              </div>
                              <div class="col-12">
                                <input
                                  v-model="address.address_name"
                                  type="text"
                                  class="form-control"
                                  id="addressname"
                                  aria-describedby="emailHelp"
                                  autocomplete="off"
                                />
                              </div>                           
                          </div>

                          <div class="row mt-2">
                            <div class="col-12 text-dark text-start">
                                우편번호
                            </div>
                            <div class="col-12">
                              <div class="row form-group">
                                <div class="col-7">
                                  <input type="text" class="form-control" id="postcode" autocomplete="off" v-model="address.post_code" />
                                </div>
                                <div class="col-5 d-flex justify-content-end">
                                  <button type="button" class="btn btn-outline-primary">검색</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          
                          <div class="row mt-2">
                              <div class="col-12 text-dark text-start">
                                주소
                              </div>
                              <div class="form-group">
                                <div class="pb-2">
                                    <input type="text" class="form-control" id="address" v-model="address.address" />
                                </div>
                                <div>
                                    <input type="text" class="form-control" id="detailaddress" v-model="address.detailed_address" />
                                </div>
                              </div>
                          </div>

                          <div class="row mt-2" style="padding-left: 12px">
                              <div class="form-check col-8 align-self-center">
                                  <input class="form-check-input" type="checkbox" id="flexCheckDefault1" v-model="address.default_address" />
                                  <div class="text-start">
                                    기본 배송지로 설정하기
                                  </div>
                              </div>
                              <div class="col-4">
                                <button type="button" class="btn btn-outline-primary" @click="UpdateAddress">수정</button>
                              </div>
                          </div>
                  </slot>
                </div>
              </div>
            </div>
          </div>
      </transition>
</template>

<script>


export default{
    props: [
        'address'
    ],
    data(){
        return {
            
        }
    },
    created(){
    },
    methods : {
        UpdateAddress(){
          if(this.address.receiver == "" || this.address.phonenumber == "" || this.address.address_name == "" || this.address.post_code == "" || this.address.address == "" || this.address.detail_adress == ""){
                alert('모든 항목을 입력해 주세요')
            }
            else{
                this.$emit('update', this.address)
            }
        }
    }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  
  margin: 0px auto;
  padding: 0px 5px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>