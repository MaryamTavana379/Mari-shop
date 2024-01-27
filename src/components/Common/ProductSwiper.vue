<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import Like from "@cp/Common/Like.vue";
const props = defineProps(['data']);
const  breakpoints={
'320': {
      slidesPerView: 1.25,
      spaceBetween: 20,
},
'480': {
      slidesPerView: 2,
}
}
</script>

<template>
  <swiper
      :slides-per-view="2"
      :space-between="20"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :breakpoints="breakpoints"
  >
    <swiper-slide v-for="item in data">
      <router-link to="/product">
        <div class="swiper__slide--item">
          <div class="swiper__slide--item-img">
            <img :src="_image(item.img)" />
            <like />
          </div>
          <div class="swiper__slide--item-meta">
            <h3>{{item.title}}</h3>
            <h2>{{item.price}} تومان </h2>
          </div>
        </div>

      </router-link>
    </swiper-slide>
  </swiper>
</template>
