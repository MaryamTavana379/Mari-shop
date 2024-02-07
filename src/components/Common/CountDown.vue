<script setup>
import Button from "@cp/common/Button.vue";
import {onMounted, ref} from 'vue';
const emits = defineEmits(['onChanged']);
const props = defineProps(['count']);
let quantity = ref(0);

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
