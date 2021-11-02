<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam01Props
    </div>
    <div class="card-body">
      <child-a
        :prop1="data1"
        :prop2="data2"
        :productNo="pno"
        v-bind:product-kind="pkind"
        :product-price="pprice"
      />
      <!-- 
                 속성을 작성할때 위처럼 kebab case 사용이 가능하다.
                 그런데 자식쪽에서 받을때는 무조건 Camel로 받아야한다.
               -->
      <hr />
      <child-b :product="product" />
      <child-b :product="product" v-bind="product" />

      <!-- 
        아래 방법도 가능하지만 헷갈리니까 쓰지는 말자.
        만약 아래처럼 보내면 childB에서 어떻게 받아야할까?
      <child-b v-bind="product"/>
       -->
      <!-- 아래처럼 쓸수도 있다.
        <child-b v-bind:no="product.no" v-bind:kind="product.kind"/>
      -->
      <hr />
      <child-c
        propD="string-data"
        :propA="3"
        :propB="5"
        :propC="7"
        :propE="9"
        :propF="{ message: 'hello, vue' }"
        :propG="['red', 'green', 'blue']"
        :propI="5"
      />
      <!-- <child-c :propD="'string-data'"/>-->
    </div>
  </div>
</template>

<script>
import ChildA from "./ChildA.vue";
import ChildB from "./ChildB.vue";
import ChildC from "./ChildC.vue";
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "Exam01Props",
  //추가하고 싶은 컴포넌트를 등록
  components: {
    ChildA,
    ChildB,
    ChildC,
  },
  //컴포넌트에서 사용하는 데이터를 정의
  data() {
    return {
      data1: "value1",
      data2: "value2",
      pno: "1",
      pkind: "bag",
      pprice: 1000,
      product: {
        no: 2,
        kind: "정장",
      },
    };
  },
  //컴포넌트에서 사용하는 메서드
  methods: {},
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
