<script setup>
import IconButton from "@cp/Common/IconButton.vue";
import slider from "vue3-slider";
import Checkbox from "@cp/Layout/Home/Checkbox.vue";
import {computed, ref} from "vue";
const props = defineProps(['data']);
const dataFiltered = ref([]);

const dataChecked = ref();
const getStore = ()=>{
  dataFiltered.value.push(props.data.filter((item)=> item.filterType === dataChecked.value ));
}
const setDataChecked = (item)=>{
  dataChecked.value = item.name;
  getStore();
}


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
    bars:[
      {id:1, title: ' از', name:'min', number:100, max:500},
      {id:1, title: ' تا', name:'max', number: 500, max: 1000000}
    ]
  }
}


</script>

<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__container--head">
        <strong class="modal__container--head-save" @click="$emit('onClose', dataFiltered)">ثبت</strong>
        <h2 class="modal__container--head-filter">فیلتر</h2>
        <IconButton img="icon/home/close.svg" @click="$emit('onClose', dataFiltered)"/>
      </div>
      <section class="modal__container--body">
        <div class="modal__container--body-row" v-for="item in data" >
          <div class="row__title" :class="item.className">
            <span>  {{item.title}} </span>
            <hr/>
          </div>
          <section class="row__container">
            <Checkbox :data="item.items" @onClicked="setDataChecked" />
          </section>
          <div class="row__rangeBar">
            <div class="row__rangeBar--box" v-for="bar in item.bars">
              <label :for="bar.name" class="row__rangeBar--box-txt">{{bar.title}}</label>
              <slider v-model="bar.number" step="100" handleScale="3" :max="bar.max" :min="bar.number" tooltipText="%v"  tooltip="true" alwaysShowHandle="true" v-if="item.isVisible" />
              <span>{{bar.number}}</span>
              <strong class="row__rangeBar--box-txt">تومان</strong>
            </div>

          </div>
        </div>
      </section>
    </div>
  </div>

</template>

