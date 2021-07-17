<template>
    <main>
        <div class="container" style="max-width: 1000px">

            <div class="row text-dark fs-4 pb-2">
                <div>
                    배송지 목록
                </div>        
            </div>
            <div class="row mt-5 pb-3">
                <div class="col-8">
                    배송지를 최대 15개까지 관리 할 수 있습니다.<br>
                    자주 쓰는 배송지를 관리하세요.
                </div>
                <div class="col-4 d-flex justify-content-end">
                    <button type="button" class="btn btn-outline-success ">배송지등록</button>
                </div>
            </div>


            <div class="d-none d-lg-block">
                <div class="row mt-4 pt-3 pb-3 border-top border-bottom border-2">
                    <div class="col-2 text-dark">
                        배송지
                    </div>
                    <div class="col-6 text-dark">
                        주소
                    </div>
                    <div class="col-2 text-center text-dark">
                        연락처
                    </div>
                    <div class="col-2 text-center text-dark">
                        수정 / 삭제
                    </div>
                </div>
            </div>
            <div class="d-none d-lg-block " :key="i" v-for="(address, i) in UserAddressList">
                <div class="row mt-2 pt-3 pb-3 border-bottom border-2 align-self-center">
                    <div class="col-2 text-dark align-self-center">
                        {{address.address_name}}
                    </div>
                    <div class="col-6 text-dark">
                        {{address.post_code}}<br>
                        {{address.address}}<br>
                        {{address.detailed_address}}
                    </div>
                    <div class="col-2 text-center text-dark align-self-center">
                        {{address.phonenumber}}
                    </div>
                    <div class="col-2 text-center align-self-center">  
                        <button type="button" style="margin-right:2px" class="btn btn-outline-primary">수정</button>
                        <button type="button" class="btn btn-outline-primary">삭제</button>                           
                    </div>
                </div>
            </div>

            <!-- 모바일 ui -->
            <div class="row mt-4 pt-3 pb-3 border-top border-bottom border-2 d-lg-none">
                <div class="col-3 text-dark">
                    배송지명
                </div>
                <div class="col-5 text-dark">
                    주소
                </div>
                <div class="col-4 text-center text-dark" >
                    수정 / 삭제
                </div>
            </div>
            <div class="d-lg-none align-self-center">
                <div class="row mt-2 pt-3 pb-3 border-bottom border-2" :key="i" v-for="(m_address, i) in UserAddressList">
                    <div class="col-3 text-dark align-self-center">
                        {{m_address.address_name}}
                    </div>
                    <div class="col-5 text-dark">
                        {{m_address.post_code}}<br>
                        {{m_address.address}}<br>
                        {{m_address.detailed_address}}
                    </div>
                    <div class="col-4 text-center text-dark align-self-center">  
                        <button type="button" style="margin-right:2px" class="btn btn-outline-primary">수정</button>
                        <button type="button" class="btn btn-outline-primary">삭제</button>                           
                    </div>
                </div>
            </div>
            <!-- 모바일 ui -->
        </div>
    </main>    
</template>

<script>

export default {
    data(){
        return  {
            User : {},
            UserAddressList : {}
        }
    },
    created(){
        this.GetUserAddressInfo()
        
    },
    methods : {
        //유저정보를 가져오는 함수
        async GetUserProfile(){
            await this.$axios({
                url: `${this.$domain}/userinfo`,
                method: 'get',         
                headers: {'authorization': `Bearer ${this.$store.state.auth.token}`},
            })
            .then((res) => {
            this.User = res.data.user;
            console.log(this.User);
            
            })
            .catch((err) => {
            console.log(err);
            }) 
        },
        // 유저 배송지 목록
        async GetUserAddressList(){
            this.modalview=true;
            await this.$axios
            .post(`${this.$domain}/address/list`,{
                user_id : this.User.id
            })
            .then((res) => {
            // console.log(res.data);
                this.UserAddressList = res.data.useraddresslist;
                console.log(this.UserAddressList);
            })
            .catch((err) => {
                console.log(err);
            })
        },
        // 유저 정보와 유저의 배송지를 가져오는 함수를 동기적으로 처리
        async GetUserAddressInfo(){
            await this.GetUserProfile()
            await this.GetUserAddressList()
        }
    }
    

    
}
</script>
