<script setup>
import Button from "@cp/common/Button.vue";
import {ref} from "vue"
const props = defineProps(['price'])
let number = ref(1);
let initialValue= ref(props.price)
let x =ref([]);
let y= ref()
const countPlus = () => {
  number.value +=1;
  x.value.push(props.price) ;
  x.value.reduce((item1 , item2)=>{
   y.value = parseInt(item1) + parseInt(item2) ;
  })

};

const countMinus = () => {
  if (number.value == 0) return;
  number.value-=1;
};
</script>

<template>

  {{x}}
  {{y}}
  <div class="box__attributes--counter">
    <button  @click="countPlus">+</button>

    <label >{{number}}</label>
    <button  @click="countMinus" >-</button>
  </div>
</template>
