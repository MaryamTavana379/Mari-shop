<script setup>
import Button from "@cp/common/Button.vue";
import {onMounted, ref} from 'vue';
import {useCartStore} from "@store/cart.js";
const emits = defineEmits(['onChanged']);
const props = defineProps(['count','itemId'])
console.log(props.itemId)
let quantity = ref(0);
const store = useCartStore();
onMounted(() => {
  quantity.value = props.count;
})

const plus = () => {
  quantity.value++;
  onChanged();
}
const minus = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }else {
   store.removeItem(props.itemId)
  }
  onChanged();
}

const onChanged = () => {
  emits('onChanged', quantity)
}

</script>

<template>

  <div class="box__attributes--counter">
    <button @click="plus">+</button>
    <label>{{ quantity }}</label>
    <button @click="minus">-</button>
  </div>
</template>
