<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import questions from '../data.json'
import { padNumber } from '../utils'

const colorMap = {
  easy: '7aad0c',
  medium: 'd9901a',
  hard: 'de3d37',
  extreme: 'b11b8d'
}
const sortQuestions = ['Category', 'ID']
const sortIndex = ref(0)
</script>

<template>
  <section class="text-12px">
    <!-- <div class="flex items-center gap-8px mb-16px font-medium">
      排序: 
      <div v-for="(item, index) in sortQuestions">
        <button :class="`q-button ${sortIndex === index && 'active'}`" >{{ item }}</button>
      </div>
    </div> -->
    <div v-for="item in questions" class="flex items-center mb-10px">
      <span>{{ item.number }}. </span>
      <h3 class="text-14px mt-0 flex-none">
        <a :href="`../typeChallenges/${padNumber(item.number)}-${item.type}-${item.alias}.ts`" target="_blank" class="q-a">
          {{ item.name }}
        </a>
      </h3>
      <div class="mx-8px opacity-50">-</div>
      <div>{{ item.describe }}</div>
      <a href="" target="_blank" class="mx-8px">
        <img :src="`https://img.shields.io/badge/-${item.type}-${colorMap[item.type]}`" :alt="item.name" />
      </a>
    </div>
  </section>
</template>

<style scoped>
.opacity-50 {
  opacity: 0.5;
}

.gap-8px{
  gap: 8px;
}

.mt-0 {
  margin-top: 0;
}

.mb-10px {
  margin-bottom: 10px;
}
.mb-16px {
  margin-bottom: 16px;
}

.mx-8px {
  margin-left: 8px;
  margin-right: 8px;
}

.font-medium {
  font-weight: 500;
}

.q-a {
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration-style: dotted;
  transition: color 0.25s;
  padding: 2px 6px;
  background-color: rgba(156, 163, 175, 0.05);
  border-radius: 4px;
}

.q-button {
  border-radius: 4px;
  background-color: #9ca3af0d;
  padding: 2px 8px;
}

.q-button.active {
  background-color: #3eaf7c0d;
  color: #B56AF0;
  font-weight: 500;
}
</style>
