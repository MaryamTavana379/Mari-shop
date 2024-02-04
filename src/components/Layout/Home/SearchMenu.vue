<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
function searchFunc (query=""){
router.push({
  path:"/search",
  name: "search",
  params: { query: query.target.value },
});
}

</script>

<template>
<div class="searchMenu" @click="$emit('onClose' , ' inActive')">
  <div class="searchMenu__container">
    <div class="searchMenu__container--row">
      <div class="searchMenu__container--row-item">
        <input type="search" placeholder="جستجو"  @keyup.enter="searchFunc">
        <div class="search__container--input-icon">
          <img src="@media/icon/home/search.svg" alt="search"/>
        </div>
      </div>
      <div class="searchMenu__container--row-item"></div>
      <div class="searchMenu__container--row-item"></div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>