<script setup>

import Button from "@cp/common/Button.vue";
const props = defineProps(['data']);
console.log(props.data)

const countPlus = () => {
  props.data.count++
};
const countMinus = () => {
  if (countValue.value == 0) return;
  countValue.value--;
};
</script>

<template>
  <div class="box__attributes--counter">
    <Button title="+" @click="data.count +=1" />
    <label v-if="data.count" >{{data.count}}</label>
    <Button title="-" @click="data.count -= 1" />
  </div>
</template>

<style scoped>

</style>