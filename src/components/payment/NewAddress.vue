<template>
    <div>
        <div class="form-group pb-1">
            <label for="receiver" class="form-label mt-1 text-dark"
            >수령인</label
            >
            <input
            v-model="savenewaddress.receiver"
            type="text"
            class="form-control"
            id="receiver"
            aria-describedby="emailHelp"
            />
        </div>
        <label for="userphonenumber" class="form-label mt-3 text-dark"
            >연락처</label
        >
        <input
            v-model="savenewaddress.phonenumber"
            type="text"
            class="form-control"
            id="userphonenumber"
            aria-describedby="emailHelp"
            placeholder="-없이 숫자만 입력해주세요."
        />
        <div class="form-group">
            <label for="addressname" class="form-label mt-4 text-dark"
            >배송지명</label
            >
            <input
            v-model="savenewaddress.address_name"
            type="text"
            class="form-control"
            id="addressname"
            aria-describedby="emailHelp"
            />
        </div>
        <label for="postcode" class="form-label mt-4 pb-1 text-dark"
            >우편번호</label
        >
        <div class="row form-group">
            <div class="col-9 col-md-10">
            <input type="text" class="form-control" id="postcode" v-model="savenewaddress.post_code" />
            </div>
            <div class="col-3 col-md-2 d-flex justify-content-end">
            <button type="button" class="btn btn-outline-primary">검색하기</button>
            </div>
        </div>
        <div class="row">
            <div class="form-group">
            <label class="col-form-label mt-3 text-dark" for="address"
                >주소</label
            >
            <div class="pb-2">
                <input type="text" class="form-control" id="address" v-model="savenewaddress.address" />
            </div>
            <div>
                <input type="text" class="form-control" id="detailaddress" v-model="savenewaddress.detail_adress" />
            </div>
            </div>
        </div>
        <div class="row pt-3 pb-2" style="padding-left: 12px">
            <div class="form-check col-6 col-md-4">
            <input class="form-check-input" type="checkbox" id="flexCheckDefault" @click="AddDefaultAddress()" />
            <label class="form-check-label" for="flexCheckDefault">
                기본 배송지로 설정하기
            </label>
            </div>
            <div class="form-check col-6 col-md-8">
            <input class="form-check-input" type="checkbox" id="flexCheckDefault" @click="AddAddressList()"/>
            <label class="form-check-label" for="flexCheckDefault">
                배송지목록에 추가하기
            </label>
            </div>
        </div>
    </div> 
</template>

<script>


export default{
    data(){
        return {
            savenewaddress : {
                user_id : 0,
                receiver : "",
                phonenumber : "",
                address_name : "",
                post_code : "",
                address : "",
                detail_adress : "",
                default_address : false,
                address_list : false,
                
            },
        }
    },
    methods : {
        AddAddressList(){           
            this.address_type = !this.address_type
        },
        AddDefaultAddress(){
            this.address_list = !this.address_list 
        }
    }
}
</script>