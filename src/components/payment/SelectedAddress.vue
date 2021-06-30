<template>
    <div>
        <div class="form-group pb-1">
            <label for="receiver" class="form-label mt-1 text-dark"
            >수령인</label
            >
            <input
            :value="address.receiver"
            type="text"
            class="form-control text-dark"
            id="receiver"
            aria-describedby="emailHelp"
            readonly
            />
        </div>
        <label for="userphonenumber" class="form-label mt-3 text-dark"
            >연락처</label
        >
        <input
            :value="address.phonenumber"
            type="text"
            class="form-control text-dark"
            id="userphonenumber"
            aria-describedby="emailHelp"
            placeholder="-없이 숫자만 입력해주세요."
            readonly
        />
        <div class="form-group">
            <label for="addressname" class="form-label mt-4 text-dark"
            >배송지명</label
            >
            <input
            :value="address.address_name"
            type="text"
            class="form-control text-dark"
            id="addressname"
            aria-describedby="emailHelp"
            readonly
            />
        </div>
        <label for="postcode" class="form-label mt-4 pb-1 text-dark"
            >우편번호</label
        >
        <div class="row form-group">
            <div class="col-12">
                <input type="text" class="form-control text-dark" id="postcode" :value="address.post_code" readonly/>
            </div>   
        </div>
        <div class="row">
            <div class="form-group">
            <label class="col-form-label mt-3 text-dark" for="address"
                >주소</label
            >
            <div class="pb-2">
                <input type="text" class="form-control text-dark" id="address" :value="address.city + address.road_name" readonly/>
            </div>
            <div>
                <input type="text" class="form-control text-dark" id="detailaddress" :value="address.detailed_address" readonly/>
            </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props: [
        'address'
    ],
}
</script>