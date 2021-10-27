<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02Directives
    </div>
    <div class="card-body">
      <div>
        <img src="@/assets/photos/photo1.jpg" width="300" />
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" width="300" />
      </div>
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
    },
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
