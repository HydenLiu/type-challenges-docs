<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import questions from '../data.json'
</script>

<template>
  <section class="text-12px">
    <div v-for="item in questions" class="flex items-center mb-10px">
      <h3 class="text-14px mt-0">
        <a href="" target="_blank" class="q-a">
          {{ item.name }}
        </a>
      </h3>
      <div class="mx-8px">-</div>
      <div>{{ item.describe }}</div>
      <a href="" target="_blank">{{ item.alias }}</a>
    </div>
  </section>
</template>

<style scoped>
.mt-0{
  margin-top: 0;
}
.mb-10px{
  margin-bottom: 10px;
}
.mx-8px{
  margin-left: 8px;
  margin-right: 8px;
}
.q-a{
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration-style: dotted;
  transition: color 0.25s;
  padding: 2px 6px;
  background-color: rgba(156,163,175,0.05);
  border-radius: 4px;
}
</style>
