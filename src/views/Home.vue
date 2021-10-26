<template>
  <div class="card">
    <div class="card-header">
      Home
    </div>
    <div class="card-body">
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <!--여기에 부착하려면 3-->
        <HelloWorld />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// HelloWorld(변수임 내 맘대로 지정) 컴포넌트를 쓸려고 임폴트 해주고 1
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  // 컴포넌트에서 설정해줌 2
  components: {
    HelloWorld,
  },
};
</script>
