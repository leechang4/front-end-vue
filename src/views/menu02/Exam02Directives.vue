<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02Directives
    </div>
    <div class="card-body">
      <!-- 데이터 바인딩 -->
      <div>
        <img class="mr-2" :src="require(`@/assets/photos/photo1.jpg`)" height="160" width="300px" />
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="160" width="300px" />
      </div>
      <hr />
      <!--  요소 숨김 여부 -->
      <!-- false가 되면 돔에 부착을 안함 존재 자체가 없어진다. -->
      <span v-if="sale" class="mr-2">
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="160" width="300px"/>
      </span>
      <!-- false가 되도 돔에 부착을 함 눈 에만 안보이게한다.-->
      <span v-show="sale">
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="160" width="300px"/>
      </span>
      <hr />
      <!-- HTML 태그 처리 -->
      <p>정보: {{ info }}</p>
      <p>정보: <span v-html="info"></span></p>
      <hr />
      <button class="btn btn-info btn-sm" @click="changeData">변경</button>
    </div>
  </div>
</template>

<script>
export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam01Directives",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    
  },
  //컴포넌트 데이터 정의
  data: function(){
    return {
      photoFileName: "photo2.jpg",
      sale:true,
      info: `<div style="background-color: #eeeeee">스타일 적용 확인!</div>`
    };
  },
  //컴포넌트 메서드터 정의
  methods:{
    changeData(){
     if(this.photoFileName === "photo2.jpg"){
       this.photoFileName = "photo3.jpg";
     }else{
       this.photoFileName = "photo2.jpg";
     }
     this.sale = !this.sale;
    }
  }
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>
</style>
