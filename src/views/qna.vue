<template>
    <div class="container" style="max-width: 700px;">
        <div class="row">
            <div>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active fs-5">리뷰 보기</li>
                </ol> 
            </div>          
        </div>
        <div class="card border-primary mb-3" style="max-width: 50rem;">
            <div class="card-header"><strong>{{q_title}}</strong></div>
            <div class="card-body">
                <p class="card-text">{{q_description}}</p>
            </div>
        </div>
        <div class="card border-secondary mb-3" style="max-width: 50rem;">
        <!-- <div class="card-header">Header</div> -->
        <div class="card-body">
            <h6 class="card-title" v-if="answer_status ==1">답변 준비 중</h6>
            <h4 class="card-title" v-else>답변 내용</h4>

            <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
        </div>
        </div>
    
    </div>
</template>

<script>
export default {
  data() {
    return {
        q_title : "",
        q_description: "",
        answer_status: 0,
    };
  },
  mounted() {
      this.loadQna();
  },
  methods: {
    loadQna() {
        this.$axios
          .get(`${this.$domain}/readqna/${this.$route.params.id}`)
          .then(res => {
              this.q_title = res.data.qna.q_title;
              this.q_description = res.data.qna.q_description;
              this.answer_status = res.data.qna.answer_status;
            //   console.log(this.q_title);
            //   console.log(res.data)
          })
    }      
   
}
}
</script>


<style scoped>
.img-container {
  text-align: center;
}
</style>