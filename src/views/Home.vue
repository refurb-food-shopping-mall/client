<template>
  <div id="home">
    <!-- 이곳을 자유롭게 만들어주세요. -->
    <p>홈페이지</p>
    <p>test</p>
    <p>test</p>

    <p v-for="i in 30" :key="i">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
      quibusdam, asperiores reprehenderit cum quam accusamus dolores magnam iste
      pariatur molestias tempora! Maiores necessitatibus nostrum dolor ducimus
      fuga eos atque asperiores.
    </p>
    <!-- 홈페이지 입니다. -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#home {
  border: 2px dashed green;
}
</style>