<script setup>
import Types from '../../.vitepress/theme/components/Types.vue'
import { useData } from 'vitepress'
const { page } = useData()
import questions from '../../.vitepress/theme/data.json'
</script>

# Typescript Challenges (TS 类型体操)

::: tip 提示
TS 类型体操官网 [点击这里](https://github.com/type-challenges/type-challenges)，感谢作者[Anthony Fu](https://github.com/antfu)。
:::

<Types />
<!-- 测试 -->
<!-- <div v-for="item in questions" class="flex items-center mb-10px">
  <div>

```js
import { useData } from 'vitepress'
```
  </div>
 
</div> -->
