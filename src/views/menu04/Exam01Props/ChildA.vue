<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      ChildA
    </div>
    <div class="card-body">
      <p>prop1:{{ prop1 }}</p>
      <p>prop2:{{ prop2 }}</p>
      <p>productNo:{{ productNo }}</p>
      <p>productKind:{{ productKind }}</p>
      <p>productPrice:{{ productPrice }}</p>
      <!-- 
        양뱡향 바인딩은 안된다. 자식쪽에서 바뀐다고 해서 부모쪽에서 바뀌지 않는다.
        부모가 값을 전달한다. 그러면 자식에서 ui를 보여줄때 쓴다.
        부모쪽에서 값이 바뀌면 다시 rendering 된다.
      -->
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "ChildA",
  //추가하고 싶은 컴포넌트를 등록
  components: {},
  //컴포넌트에서 사용하는 데이터를 정의
  data() {
    return {};
  },
  //컴포넌트에서 사용하는 메서드
  methods: {},
  props: ["prop1", "prop2", "productNo", "productKind", "productPrice"],
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
