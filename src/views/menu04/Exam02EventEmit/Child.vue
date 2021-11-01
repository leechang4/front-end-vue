<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Child
    </div>
    <div class="card-body">
      <h6>[자식 -> 부모]</h6>
      <button class="btn btn-info btn-sm mr-2" @click="handleBtn1">child-event-1 emit</button>
      <button class="btn btn-info btn-sm mr-2" @click="handleBtn2">child-event-2 emit</button>
      <hr />
      <h6>[부모 -> 자식 -> 부모 -> 자식 ]</h6>
      <p class="mb-2">부모로부터 받은 counter:{{ counter }}</p>
      <button class="btn btn-info btn-sm mr-2" @click="handleBtn3">
        counter 증가 요청(자식 -> 부모)
      </button>
      <button class="btn btn-info btn-sm mr-2" @click="handleBtn4">
        counter 감소 요청(자식 -> 부모)
      </button>
    </div>
  </div>
</template>

<script>
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "Child",
  // 추가하고 싶은 컴포넌트를 등록 얘는 있어도 되고 없어도 됌
  components: {},
  // 컴포넌트에서 이용하는 데이터 정의
  data() {
    return {
      data1: "child-value1",
      data2: 100,
    };
  },
  // 컴포넌트 메서드 정의
  methods: {
    handleBtn1() {
      //이벤트 발생
      this.$emit("child-event-1", this.data1);
    },
    handleBtn2() {
      //이벤트 발생
      this.$emit("child-event-2", this.data1, this.data2);
    },
    handleBtn3() {
      //이벤트 발생
      this.$emit("counter-increment", 10);
    },
    handleBtn4() {
      //이벤트 발생
      this.$emit("counter-decrement", 5);
    },
  },
  props: ["counter"],
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
