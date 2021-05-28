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
                <img src="https://contents.sixshop.com/uploadedFiles/48764/product/image_1620794006376.jpg" class="img-fluid">
            </div>
            <div class="col-9">
                <div class="text-dark">국산 햇양파 10kg</div>
                <div class="row pt-3">
                    <div class="col-2 text-dark">수량</div>
                    <div class="col-10 text-dark">2개</div>
                </div>
            </div>
        </div>
        <div class="text-dark fs-5 pt-3 pb-2 border-top border-3">
            상품 평점
        </div>
        <div class="row">
            <div class="col-12">
                <star-rating v-model="rating"></star-rating>              
            </div>          
        </div>
        <div class="text-dark fs-5 border-top border-3 pt-3">
            상품 리뷰
        </div>
        <div class="form-group pt-3">
            <textarea class="form-control" id="exampleTextarea" rows="5"></textarea>
        </div>
        <div class="row d-flex justify-content-center pt-3">
            <button type="button" class="btn btn-outline-primary pb-3 pt-3" style="max-width: 97%;">사진 첨부하기</button>

            <div class="row mb-2 mt-3 pb-2 pt-2 border-top border-bottom border-2">
                <div class="col-6 col-md-4">
                    <div class="row">
                        <div class="col-12 d-flex justify-content-end">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX///8AAACmpqajo6OhoaHz8/PR0dH29va7u7tfX1+tra1VVVV5eXlSUlJNTU0ZGRlra2vRe4gkAAADN0lEQVR4nO2di3qqMBCEida70r7/057PLydtA0QU2dt0/heYHTMrKCHbdYQQQgghhBBCCCGEEEIIIYQQQgghhBDyZ9lfb/3pfDBSP5xP/e26F1TYXVLmKCjS5vhf/bKTUth9psJWSuMB22/1TymLl/TDRkijzeaX+kVGYp9+o72Km0pdphevlUb6EBFp8VGLX0VEbrWI6ipuBto3EZU+mVkcGky9iMxpKKNmcWQwnUR0ziMdpV7cjoXPIkKHsZDKRWO8gikJ3VUdJ6TkgzplUOyeakpM2uJERCU19S2qK2oLGqRGNzRTBsW/vzVFlXuwoBcciy82VWEzg1rhMelBTXGjHizIB8gwohnpT9g0oholGEc0Ixkj84hKl+HEoFyUHPSgbCkuerAgESc3EZUqx5nB9SPlqAcflbTcorsVXLsolwbXDKrDiGbWKszVZaJmnXA5jWhmjeJcG1wjYG57sPBugY57sPBeyJxHNPNOkSEMvhPUIAaXFxrG4NJSAxlc9o3o/jJR83q5AS4TNa9GLlREM6+VHNDga7EL1oOF58sO14OFZ6MXMqKZ50oPbPC5oIaNaGZ+fUKv4J05A+ENzoUw6GWi5pGJ4D1YaAcRIKKZlhEYg60wQvRgYcrMF84K3pmyCGVwOqgwEc3Mr2LoFbwzZzG8wTmLAAYf92LwHiy0VxFiBe+0LMIYbFkEMth1U3cyX9ZFrQn8GsL3Ifx3Kfz1EP6eBv6+FP63BfzvQ/jf+PD/08D/1wb/fyn8f97wzy3gnz3BPz+EfwYM/xx/+V6MIL0Iv58Gfk8U/L42+L2J8PtL4fcIw+/zht+rD/++xfJCg1iEf+8J/t01+PcP4d8hhX8PGP5dbvj38eHPVIA/FwP+bBP482ngzxiCPycK/qwv+PPa4M/cgz83UTZKDnoR/vxS+RgZB1XjEzYNKvxZ0FoBMguqnrCRRc3wmPQi/GwE7eCoB1W/M5QVLVpftS3gZwXhz3vCn9mFP3cNf3becP6h5qDOoUUZh/gzLOs5pNqjVutVFJoJ7GeWrMyQzr8wDxh/pnPnYS53LzqXmxBCCCGEEEIIIYQQQgghhBBCCCGEEEKc8w/YYxuI7Ao44QAAAABJRU5ErkJggg=="
                                class="img-fluid"
                                style="cursor: pointer; max-width: 17px; max-height: 17px;"
                            >
                        </div>
                        <div class="col-11">
                            <img src="https://img9.yna.co.kr/photo/cms/2018/06/11/05/C0A8CA3C00000163EDEFD06C0007252F_P2.jpeg" class="img-fluid">
                        </div>                      
                    </div>                 
                </div>
                <div class="col-6 col-md-4">
                    <div class="row">
                        <div class="col-12 d-flex justify-content-end">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX///8AAACmpqajo6OhoaHz8/PR0dH29va7u7tfX1+tra1VVVV5eXlSUlJNTU0ZGRlra2vRe4gkAAADN0lEQVR4nO2di3qqMBCEida70r7/057PLydtA0QU2dt0/heYHTMrKCHbdYQQQgghhBBCCCGEEEIIIYQQQgghhBDyZ9lfb/3pfDBSP5xP/e26F1TYXVLmKCjS5vhf/bKTUth9psJWSuMB22/1TymLl/TDRkijzeaX+kVGYp9+o72Km0pdphevlUb6EBFp8VGLX0VEbrWI6ipuBto3EZU+mVkcGky9iMxpKKNmcWQwnUR0ziMdpV7cjoXPIkKHsZDKRWO8gikJ3VUdJ6TkgzplUOyeakpM2uJERCU19S2qK2oLGqRGNzRTBsW/vzVFlXuwoBcciy82VWEzg1rhMelBTXGjHizIB8gwohnpT9g0oholGEc0Ixkj84hKl+HEoFyUHPSgbCkuerAgESc3EZUqx5nB9SPlqAcflbTcorsVXLsolwbXDKrDiGbWKszVZaJmnXA5jWhmjeJcG1wjYG57sPBugY57sPBeyJxHNPNOkSEMvhPUIAaXFxrG4NJSAxlc9o3o/jJR83q5AS4TNa9GLlREM6+VHNDga7EL1oOF58sO14OFZ6MXMqKZ50oPbPC5oIaNaGZ+fUKv4J05A+ENzoUw6GWi5pGJ4D1YaAcRIKKZlhEYg60wQvRgYcrMF84K3pmyCGVwOqgwEc3Mr2LoFbwzZzG8wTmLAAYf92LwHiy0VxFiBe+0LMIYbFkEMth1U3cyX9ZFrQn8GsL3Ifx3Kfz1EP6eBv6+FP63BfzvQ/jf+PD/08D/1wb/fyn8f97wzy3gnz3BPz+EfwYM/xx/+V6MIL0Iv58Gfk8U/L42+L2J8PtL4fcIw+/zht+rD/++xfJCg1iEf+8J/t01+PcP4d8hhX8PGP5dbvj38eHPVIA/FwP+bBP482ngzxiCPycK/qwv+PPa4M/cgz83UTZKDnoR/vxS+RgZB1XjEzYNKvxZ0FoBMguqnrCRRc3wmPQi/GwE7eCoB1W/M5QVLVpftS3gZwXhz3vCn9mFP3cNf3becP6h5qDOoUUZh/gzLOs5pNqjVutVFJoJ7GeWrMyQzr8wDxh/pnPnYS53LzqXmxBCCCGEEEIIIYQQQgghhBBCCCGEEEKc8w/YYxuI7Ao44QAAAABJRU5ErkJggg=="
                                class="img-fluid"
                                style="cursor: pointer; max-width: 17px; max-height: 17px;"
                            >
                        </div>
                        <div class="col-11">
                            <img src="https://img9.yna.co.kr/photo/cms/2018/06/11/05/C0A8CA3C00000163EDEFD06C0007252F_P2.jpeg" class="img-fluid">
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
                <button type="button" class="col-6 btn btn-outline-primary btn-lg ml-5" style="max-width: 50%;">등록</button>
            </div>
        </div>            
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#cancel {
  border: 2px dashed green;
}
</style>