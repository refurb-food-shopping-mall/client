<template>
    <div class="container" style="max-width: 700px;">
        <div class="row">
            <div>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active fs-5">리뷰 쓰기</li>
                </ol> 
            </div>          
        </div>
        <div class="row text-primary pb-4">
            <div>
                텍스트리뷰 100원 적립 / 포토리뷰 200원 적립
            </div>           
        </div>
        <div class="row pb-4">
            <div class="col-3 d-flex justify-content-center">
                <img src="@/assets/onion2.jpg" class="img-fluid">
            </div>
            <div class="col-9">
                <div class="text-dark">{{ProductName}}</div>
                <div class="row pt-3">
                    <div class="col-2 text-dark">수량</div>
                    <div class="col-10 text-dark">{{ProductId.product_amount}}개</div>
                </div>
            </div>
        </div>
        <div class="text-dark fs-5 pt-3 pb-2 border-top border-3">
            상품 평점
        </div>
        <div class="row">
            <div class="mb-4">
                <star-rating v-model="StarGrade" />
            </div>
        </div>
        <div class="form-group">
            <label for="addressname" class="form-label mt-4 text-dark fs-5"
            >리뷰 제목</label
            >
            <input
            v-model="ReviewTitle"
            type="text"
            class="form-control"
            id="addressname"
            aria-describedby="emailHelp"
            autocomplete="off"
            />
        </div>
        <div class="text-dark fs-5 pt-3">
            리뷰 내용
        </div>
        <div class="form-group pt-3">
            <textarea class="form-control" id="exampleTextarea" rows="5" v-model="ReviewDescription"></textarea>
        </div>
        <div class="row d-flex justify-content-center pt-3">
            <input 
                class="form-control"
                style="display: none" 
                @change="OnImageSelected" 
                type="file" id="formFile"
                accept="image/*"
                ref="fileInput"
            >            
            <button 
                type="button" 
                @click="$refs.fileInput.click()"
                class="btn btn-outline-primary pb-3 pt-3" 
                style="max-width: 97%;"
            >
            사진 첨부하기
            </button>
            <div class="row mb-2 mt-3 pb-2 pt-2 border-top border-bottom border-2">
                <div class="col-6 col-md-4" :key="i" v-for="(preview, i) in SelectedFile">
                    <div class="row">
                        <div class="col-12 d-flex justify-content-end">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX///8AAACmpqajo6OhoaHz8/PR0dH29va7u7tfX1+tra1VVVV5eXlSUlJNTU0ZGRlra2vRe4gkAAADN0lEQVR4nO2di3qqMBCEida70r7/057PLydtA0QU2dt0/heYHTMrKCHbdYQQQgghhBBCCCGEEEIIIYQQQgghhBDyZ9lfb/3pfDBSP5xP/e26F1TYXVLmKCjS5vhf/bKTUth9psJWSuMB22/1TymLl/TDRkijzeaX+kVGYp9+o72Km0pdphevlUb6EBFp8VGLX0VEbrWI6ipuBto3EZU+mVkcGky9iMxpKKNmcWQwnUR0ziMdpV7cjoXPIkKHsZDKRWO8gikJ3VUdJ6TkgzplUOyeakpM2uJERCU19S2qK2oLGqRGNzRTBsW/vzVFlXuwoBcciy82VWEzg1rhMelBTXGjHizIB8gwohnpT9g0oholGEc0Ixkj84hKl+HEoFyUHPSgbCkuerAgESc3EZUqx5nB9SPlqAcflbTcorsVXLsolwbXDKrDiGbWKszVZaJmnXA5jWhmjeJcG1wjYG57sPBugY57sPBeyJxHNPNOkSEMvhPUIAaXFxrG4NJSAxlc9o3o/jJR83q5AS4TNa9GLlREM6+VHNDga7EL1oOF58sO14OFZ6MXMqKZ50oPbPC5oIaNaGZ+fUKv4J05A+ENzoUw6GWi5pGJ4D1YaAcRIKKZlhEYg60wQvRgYcrMF84K3pmyCGVwOqgwEc3Mr2LoFbwzZzG8wTmLAAYf92LwHiy0VxFiBe+0LMIYbFkEMth1U3cyX9ZFrQn8GsL3Ifx3Kfz1EP6eBv6+FP63BfzvQ/jf+PD/08D/1wb/fyn8f97wzy3gnz3BPz+EfwYM/xx/+V6MIL0Iv58Gfk8U/L42+L2J8PtL4fcIw+/zht+rD/++xfJCg1iEf+8J/t01+PcP4d8hhX8PGP5dbvj38eHPVIA/FwP+bBP482ngzxiCPycK/qwv+PPa4M/cgz83UTZKDnoR/vxS+RgZB1XjEzYNKvxZ0FoBMguqnrCRRc3wmPQi/GwE7eCoB1W/M5QVLVpftS3gZwXhz3vCn9mFP3cNf3becP6h5qDOoUUZh/gzLOs5pNqjVutVFJoJ7GeWrMyQzr8wDxh/pnPnYS53LzqXmxBCCCGEEEIIIYQQQgghhBBCCCGEEEKc8w/YYxuI7Ao44QAAAABJRU5ErkJggg=="
                                class="img-fluid"
                                style="cursor: pointer; max-width: 17px; max-height: 17px;"
                                @click="DeleteSelectedFile(i)"
                            >
                        </div>
                        <div class="col-11">
                            <img class="img-fluid" :src="preview.preview">
                        </div>                      
                    </div>                 
                </div>
            </div>  

            <div class="text-danger" style="font-size: small;">
                * 상품과 무관한 사진을 첨부한 리뷰는 통보없이 삭제 및 적립 혜택이 회수됩니다.<br>
                * 이미지는 최대 3개까지 등록 가능합니다.
            </div> 
        </div>    
        <div class="row mt-5">
            <div class="col-6 d-flex justify-content-end">              
                <button type="button" class="col-6 btn btn-primary btn-lg" style="max-width: 50%;">취소</button>
            </div>
            <div class="col-6">
                <button type="button" @click="SaveReview" class="col-6 btn btn-outline-primary btn-lg ml-5" style="max-width: 50%;">등록</button>
            </div>
        </div>     
        <!-- <div>
            <img :src="this.imageurl">
        </div>        -->
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
    components: {
        StarRating
    },
    data(){
        return {
            user : {},
            ProductId : {},
            ProductName : null,
            ThumbnailImage : null,
            ReviewDescription : "",
            ReviewTitle : "",
            StarGrade : 0,
            SelectedFile : [],
            ReviewId : 0,
            reviewpath : "",
            image : "",
            // imageurl : ""
        }
    },
    created(){
        // this.getimagetest();
        this.GetProductDetail()
    },
    methods : {
        //유저정보를 가져오는 함수
        async GetUserProfile(){
            await this.$axios({
                url: `${this.$domain}/auth/user`,
                method: 'get',         
                headers: {'authorization': `Bearer ${this.$store.state.auth.token}`},
            })
            .then((res) => {
                this.user = res.data.user;
                // console.log(this.user);
            })
            .catch((err) => {
                console.log(err);
            }) 
        },

        //주문된 상품의 id, 수량을 가져오는 함수
        async GetProductId(){
            await this.$axios({
                url: `${this.$domain}/order/productid`,
                method: 'post',
                data: {orderid : 1} //orderid
            })
            .then((res) => {
                //console.log(res.data);
                this.ProductId = res.data.product_id;
            })
            .catch((err) => {
                console.log(err);
            })
        },
        // 주문된 상품의 이름을 가져오는 함수
        async GetProductName(){
            await this.$axios
                .post(`${this.$domain}/product/productname`, { product_id : this.ProductId.product_id })
                .then((res) => {
                    this.ProductName = res.data.product_name
                    // console.log(this.ProductName);
                })
        },
        // 주문된 상품의 썸네일을 가져오는 함수
        async GetProductThumnail(){
            await this.$axios
                .post(`${this.$domain}/productimage/thumbnail`, { product_id : this.ProductId.product_id })
                .then((res) => {
                    this.ThumbnailImage = res.data.thumbnail
                    //console.log(this.thumbnailimage);
                })
        },
        // 동기적처리를 위한 함수
        async GetProductDetail(){
            this.GetUserProfile();
            await this.GetProductId();
            this.GetProductName();
            this.GetProductThumnail();

        },    
        //사진 첨부를 했을 때 실행할 함수      
        OnImageSelected(event){
            if(this.SelectedFile.length > 2){
                alert('리뷰이미지는 최대 3개까지 업로드 가능합니다.')
                return
            }
            else{
                const file = event.target.files[0]
                // console.log(file);
                this.image = URL.createObjectURL(file)
                console.log(this.image)
                this.SelectedFile.push({
                file : event.target.files[0],
                preview : this.image
                });
                // console.log(this.SelectedFile[0].file);
            }
            // console.log(this.SelectedFile);
            //    console.log(this.SelectedFile)
        }, 
        //첨부된 이미지의 미리보기에서 x버튼을 클릭했을 때 실행할 함수
        DeleteSelectedFile(i){
            this.SelectedFile.splice(i, 1)
        },
        //리뷰 등록 버튼을 클릭했을 때 실행할 함수
        ReviewPoint(point){
            this.$axios
                .post(`${this.$domain}/user/reviewpoint`, {
                    user_id : this.user.id,
                    point : point 
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        //리뷰 저장 
        async SaveReview(){
            if(this.ReviewTitle == "" || this.StarGrade == 0 || this.ReviewDescription == ""){
                alert('사진업로드를 제외한 리뷰관련부분을 작성해주세요');
                return
            }
            await this.$axios
                .post(`${this.$domain}/review/save`, {
                    product_id : this.ProductId.product_id,
                    user_id : this.user.id,
                    review_title : this.ReviewTitle,
                    review_description : this.ReviewDescription,
                    star_grade : this.StarGrade
                })
                .then((res) => {
                    this.ReviewId = res.data.review_id
                    // console.log(this.ReviewId)
                })
                .catch((err) => {
                    console.log(err);
                })
            if(this.SelectedFile.length == 0){
                await this.ReviewPoint(100);
                alert('리뷰작성이 완료 되었습니다.')
                this.$router.push("/shipping");
            }  
            else{
                try {
                    this.ReviewPoint(200);          
                    for(let i = 0 ; i < this.SelectedFile.length ; i++){
                        const formData = new FormData();
                        formData.append('image', this.SelectedFile[i].file);
                        formData.append('product_id', this.ProductId.product_id);
                        formData.append('review_id', this.ReviewId);
                        console.log(formData.has('image'))
                        this.$axios
                            .post(`${this.$domain}/reviewimage/save`, formData, {
                                    headers: {
                                        'Content-Type': 'multipart/form-data'
                                }
                            })    
                    }       
                    alert('리뷰 작성이 완료 되었습니다.');  
                    this.$router.push("/shipping"); 
                } catch (err) {
                    console.log(err);
                }
                
            } 
        }

        // getimagetest(){
        //     this.$axios
        //     .post(`${this.$domain}/review/image`, {review_id : 121})
        //     .then(res => {
        //         console.log(res.data)
        //         this.imageurl = res.data.result
        //     })
        // }
    }
};
</script>

<style scoped>
#cancel {
  border: 2px dashed green;
}
</style>