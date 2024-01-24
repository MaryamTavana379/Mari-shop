<script setup>

import Button from "@cp/common/Button.vue";
import {ref} from "vue"
let number = ref(1)
const countPlus = () => {
  number.value +=1;
};
const countMinus = () => {
  if (number.value == 0) return;
  number.value-=1;
};
</script>

<template>
  <div class="box__attributes--counter">
    <button  @click="countPlus">+</button>

    <label >{{number}}</label>
    <button  @click="countMinus" >-</button>
  </div>
</template>
