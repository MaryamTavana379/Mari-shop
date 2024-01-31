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
            <span>  همه </span>
            <hr/>
          </div>
          <div class="row__container">
            <div class="row__container--items">
              <input type="checkbox" id="newest" />
              <label for="newest">جدیدترین ها</label>
            </div>
            <div class="row__container--items">
              <input type="checkbox" id="newest" />
              <label for="newest">جدیدترین ها</label>
            </div>
          </div>

        </div>
        <div class="modal__container--body-row"></div>
        <div class="modal__container--body-row">
          <slider v-model="myNumber" step="2" />
        </div>

      </section>



    </div>
  </div>

</template>

