<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam04Ref
    </div>
    <div class="card-body">
      <p>data:{{ data }}</p>
      <hr />
      <button class="btn btn-info btn-sm mr-2" @click="handleChildData">자식 데이터 읽기</button>
      <button class="btn btn-info btn-sm mr-2" @click="handleChildMethod">자식 메소드 호출</button>
      <hr />
      <child ref="childRef" />
      <hr />
      <div class="d-flex align-items-center">
        <input type="text" ref="inputRef" class="mr-2" />
        <button class="btn btn-info btn-sm mr-2" @click="handlInputFocus">요소 포커스 주기</button>
        <button class="btn btn-info btn-sm mr-2" @click="handleInputValue">요소의 값 변경</button>
      </div>
    </div>
  </div>
</template>

<script>
import Child from "../Exam04Ref/Child.vue";

export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "Exam04Ref",
  // 추가하고 싶은 컴포넌트를 등록 얘는 있어도 되고 없어도 됌
  components: {
    Child,
  },
  // 컴포넌트에서 이용하는 데이터 정의
  data() {
    return {
      data: "parent-data",
    };
  },
  // 컴포넌트 메서드 정의
  methods: {
    parentmdthod() {
      console.log("parentMethod() 실행");
    },
    handleChildData() {
      console.log(this.$refs.childRef.data);
    },
    handleChildMethod() {
      this.$refs.childRef.childMethod();
    },
    handlInputFocus() {
      this.$refs.inputRef.focus();
    },
    handleInputValue() {
      this.$refs.inputRef.value += "a";
    },
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
