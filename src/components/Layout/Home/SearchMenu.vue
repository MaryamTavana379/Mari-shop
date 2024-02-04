<script setup>

</script>

<template>
<div class="searchMenu" @click="$emit('onClose' , ' inActive')">
  <div class="searchMenu__container">
    <div class="searchMenu__container--row">
      <div class="searchMenu__container--row-item">
        <input type="search" placeholder="جستجو" >
      </div>
      <div class="searchMenu__container--row-item"></div>
      <div class="searchMenu__container--row-item"></div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>