<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      ChildB
    </div>
    <div class="card-body">
      <p>product.no: {{ product.no }}</p>
      <p>product.kind: {{ product.kind }}</p>
      <p>product.no: {{ no }}</p>
      <p>product.kind: {{ kind }}</p>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "ChildB",
  //추가하고 싶은 컴포넌트를 등록
  components: {},
  //컴포넌트에서 사용하는 데이터를 정의
  data() {
    return {};
  },
  //컴포넌트에서 사용하는 메서드
  methods: {},
  props: ["product", "no", "kind"],
  //현재 이것만 가지고 객체인지 값인지 모른다.
  //나중에 명시하는 방법이 나온다. 일단 객체라고 생각하고 실습한다.
  //no와 kind는 index.vue 23라인에서 보내준 것이다.
  //위의 10라인 11라인에서 사용하고있다.
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
