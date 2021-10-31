<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02Watch
    </div>
    <div class="card-body">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">UserId</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="userId" />
        </div>
      </div>
      <hr />
      <form>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="product.name" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Company</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="product.company" />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Price</label>
          <div class="col-sm-10">
            <input
              type="number"
              :class="`form-control ${bgcolor}`"
              v-model.number="product.price"
            />
          </div>
        </div>
      </form>
      <hr />
      <button @click="handleButton" class="btn btn-info btn-sm">product 객체 변경</button>
    </div>
  </div>
</template>

<script>
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "Exam02Watch",
  // 추가하고 싶은 컴포넌트를 등록 얘는 있어도 되고 없어도 됌
  components: {},
  // 컴포넌트에서 이용하는 데이터 정의
  data() {
    return {
      userId: "user1",
      product: {
        name: "정장",
        company: "한섬",
        price: 100000,
      },
    };
  },
  // 컴포넌트 메서드 정의
  methods: {
    handleButton() {
      // 이렇게 쓰면 위에 객체가 바뀌는거임
      this.product = {
        name: "정장2",
        company: "한섬2",
        price: 200000,
      };
    },
  },
  watch: {
    //새로운 데이터, 그전의 데이터임
    userId(newValue, oldValue) {
      // userId은 데이터 이름임 위에!
      console.log("newValue: ", newValue);
      console.log("oldValue: ", oldValue);
      console.log("this.userId: ", this.userId);
    },
    //새로운 데이터, 그전의 데이터임
    // 속성으로 만든거다.
    // 프로덕트 객체(62라인)를 참조를 해서 newValue,oldValue 둘다 똑같은 값이 나오는거임
    product: {
      deep: true,
      handler(newValue, oldValue) {
        console.log("newValue: ", newValue);
        console.log("oldValue: ", oldValue);
      },
    },
    "product.name"(newValue, oldValue) {
      console.log("newValue: ", newValue);
      console.log("oldValue: ", oldValue);
      console.log("this.product.name: ", this.product.name);
    },
    "product.price"(newValue, oldValue) {
      if (newValue < 0) {
        this.bgcolor = "bg-danger";
      } else {
        this.bgcolor = "";
      }
    },
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
