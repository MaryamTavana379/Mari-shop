<template>
  <Swiper
      :slides-per-view="4.5"
      :space-between="20"
  >
    <SwiperSlide v-for="item in data" @click="increment" :class="item.seen === 1   ? 'seen' : ''">
      <div class="story__item" @click="$emit('onOpen',item)" v-if="item.content">
        <div class="story__item--profile">
          <img class="story__item--profile-img" :src="_image(item.img)"/>
        </div>
        <div class="story__item--title">
          <h3>{{ item.title }}</h3>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>


</template>


<script setup>
import {ref} from "vue";
import {Swiper, SwiperSlide} from "swiper/vue";

const props = defineProps(['data'])
let clickNumber = ref(0)
const increment = () => {
  clickNumber.value = 1;
}
</script>