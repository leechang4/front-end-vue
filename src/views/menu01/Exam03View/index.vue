<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam03View
    </div>
    <div class="card-body">
      <div>
        <h6>선언적 방식 화면 이동</h6>
        <router-link to="/menu01/exam03view/subacomponent" class="btn btn-info btn-sm mr-2">SubAComponent</router-link>
        <router-link to="/menu01/exam03view/subbcomponent" class="btn btn-info btn-sm">SubBComponent</router-link>
        
        <h6 class="mt-2">프로그램 방식 화면 이동</h6>
        <button @click="goUrl('a')" class="btn btn-info btn-sm mr-2">SubAComponent</button>
        <button @click="goUrl('b')" class="btn btn-info btn-sm mr-2">SubBComponent</button>
      </div>

      <div class="mt-2">
        <!-- URL이 뭐가되었건 내용이 아래에 들어가도록 하겠다. -->
        <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "Exam03View",
  //추가하고 싶은 컴포넌트를 등록
  components: {},
  //컴포넌트에서 사용하는 데이터를 정의
  data: function() {
    return {};
  },
  //컴포넌트에서 사용하는 메서드
  methods: {
    goUrl(kind){
      this.$router.push(`/menu01/exam03view/sub${kind}component`)
      .catch(()=>{});
    }
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>