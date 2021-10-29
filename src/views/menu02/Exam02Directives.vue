<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02Directives
    </div>
    <div class="card-body">
      <!-- 데이터 바인딩 -->
      <div>
        <img src="@/assets/photos/photo1.jpg" height="100" />
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="100" />
      </div>
      <hr />
      <!--  요소 숨김 여부 -->
      <!-- false가 되면 돔에 부착을 안함 존재 자체가 없어진다. -->
      <span v-if="slae" class="mr-2">
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="100" />
      </span>
      <!-- false가 되도 돔에 부착을 함 눈 에만 안보이게한다.-->
      <span v-show="slae">
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="100" />
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
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "Exam02Directives",
  // 추가하고 싶은 컴포넌트를 등록 얘는 있어도 되고 없어도 됌
  components: {},
  // 컴포넌트에서 이용하는 데이터 정의
  data: function() {
    return {
      photoFileName: "photo2.jpg",
      sale: true,
      info: `<div style="background-color: #eeeee">스타일 적용 확인</div>`,
    };
  },
  // 컴포넌트 메서드 정의
  methods: {
    changeData() {
      if (this.photoFileName === "photo2.jpg") {
        this.photoFileName = "photo3.jpg";
      } else {
        this.photoFileName = "photo2.jpg";
      }
      this.sale = !this.sale;
    },
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
