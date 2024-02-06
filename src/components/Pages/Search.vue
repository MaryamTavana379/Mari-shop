<script setup>
import {useRoute} from "vue-router";
import {computed, inject, onMounted, ref} from "vue";
import Card from "@cp/Common/Card.vue";
import IconButton from "@cp/Common/IconButton.vue";
import Header from "@cp/Common/Header.vue";
const props = defineProps(['query'])
const axios = inject('axios');
const data = ref([]);


onMounted(()=>{
  axios.get(`http://localhost:3000/products`).then((res) => {
    data.value = res.data;
  });
})
const filteredList = computed(()=>{
return data.value.filter((item)=>{
  return item.title.includes(props.query)
  })
})

</script>
<template>
  <div class="container">
    <div class="searchPage" >
      <Header>
        <div class="header__productDetails">
          <h2> فیلتر شده </h2>
          <IconButton img="icon/productDetails/arrow-left.svg" @click="$emit('onClose')"/>
        </div>
      </Header>

      <section class="searchPage__container">
        <div class="searchPage__container--item" v-for="item in filteredList">
          <Card :data="item"/>
        </div>
      </section>

    </div>

  </div>
</template>

