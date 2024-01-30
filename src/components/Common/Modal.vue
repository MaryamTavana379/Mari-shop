<script setup>
import IconButton from "@cp/Common/IconButton.vue";
import slider from "vue3-slider"
</script>

<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__container--head">
        <strong class="modal__container--head-save">ثبت</strong>
        <h2 class="modal__container--head-filter">فیلتر</h2>
        <IconButton img="icon/home/close.svg" @click="$emit('onClose')"/>
      </div>
      <section class="modal__container--body">
        <div class="modal__container--body-row">
          <div class="row__title">
            <span> براساس قیمت </span>
            <hr/>
          </div>
          <slider v-model="myNumber" step="2" />
        </div>
        <div class="modal__container--body-row"></div>
        <div class="modal__container--body-row"></div>

      </section>



    </div>
  </div>

</template>

