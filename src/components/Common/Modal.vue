<script setup>
import IconButton from "@cp/Common/IconButton.vue";
import slider from "vue3-slider";
import Checkbox from "@cp/Layout/Home/Checkbox.vue";

const data = {
  all:{
    title:'همه',
    items:[
      {id:1, txt:'جدیدترین ها', name:'newest'},
      {id:2, txt:'پرفروش ترین ها', name:'bestSellers'},
      {id:3, txt:' گران ترین ها', name:'expensive'},
      {id:4, txt:'ارزان ترین ها', name:'cheap'},
      {id:5, txt:'بیشترین امتیاز', name:'score'},
    ]
  },
  season:{
    className:'season-row',
    title: 'بر اساس فصل',
    items:[
      {id:1, txt:' بهاری', name:'spring'},
      {id:2, txt:'  تابستانی', name:'summer'},
      {id:3, txt:'   پاییزی', name:'autumnal'},
      {id:4, txt:'  زمستانی', name:'Wintry'},
    ]
  },
  price:{
    isVisible:true,
    className:'season-row',
    title:'بر اساس قیمت',
  }

}

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
        <div class="modal__container--body-row" v-for="item in data" >
          <div class="row__title" :class="item.className">
            <span>  {{item.title}} </span>
            <hr/>
          </div>
          <section class="row__container">
            <Checkbox :data="item.items"/>
          </section>
          <slider v-model="myNumber" step="2" v-if="item.isVisible"/>
        </div>
      </section>
    </div>
  </div>

</template>

