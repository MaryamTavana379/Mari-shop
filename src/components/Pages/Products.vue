<script setup>
import {inject, onMounted, ref} from "vue";
import ProductSwiper from "@cp/Common/ProductSwiper.vue";
import Card from "@cp/Common/Card.vue";
 const axios = inject('axios');
 const products = ref();
onMounted(() => {
  axios.get(`http://localhost:3000/products`).then((res) => {
    products.value = res.data
  });
})
console.log(products)
</script>

<template>
  <div class="container">
    <div class="products">
      <div class="products__list">
        <div class="products__list--item" v-for="item in products">
          <Card :data="item"/>
        </div>
      </div>

    </div>

  </div>
</template>
