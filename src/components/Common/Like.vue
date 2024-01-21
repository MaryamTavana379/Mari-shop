<script setup>
import {ref} from "vue";

let liked = ref(false);
const showLike = ()=>{
  liked.value = !liked.value
}
</script>

<template>
  <div class="likes" @click="showLike" >
    <img  v-if="liked" src="../../assets/media/icon/home/like.svg"/>
    <img v-else src="../../assets/media/icon/home/unLike.svg"/>
  </div>

</template>

<style scoped>
.likes{
  width: 40px;
  height: 40px;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}

</style>