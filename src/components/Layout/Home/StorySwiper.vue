<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import Button from "@cp/Common/Button.vue";
const props = defineProps(['storyContent','storyId']);

</script>

<template>
  <div class="swiper__container" @click.prevent="$emit('onClose', false)">
    <swiper
        :slides-per-view="1"
        :space-between="20"
        @swiper="onSwiper"
        :breakpoints="breakpoints"
        :initial-slide="storyId"
        class="swiper__container--story"
    >
      <swiper-slide v-for="content in storyContent">
        <div class="swiper__container--story-box" v-if="content.content">
          <div class="box__img">
            <img :src="_image(content.content) " />
          </div>
          <router-link to="/product">
            <Button txt="miow"/>
          </router-link>
        </div>
        <div class="swiper__container--story-close" @click.prevent="$emit('onClose', false)">
          <img src="@media/icon/home/close.svg" />
        </div>

      </swiper-slide>
    </swiper>

  </div>
</template>
