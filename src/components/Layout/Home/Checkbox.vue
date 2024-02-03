<script setup>
const props = defineProps(['data']);
</script>

<template>
  <div class="items" v-for="item in data" @click="$emit('onClicked', item)">
    <div class="items-card" >
      <input type="checkbox" :id="item.name" />
      <label :for="item.name"> {{item.txt}}</label>
    </div>
  </div>

</template>

