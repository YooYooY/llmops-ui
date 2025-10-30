<template>
  <human-message v-if="role === 'human'" :content="content" />
  <ai-message v-else :content="content" />
</template>


<script setup lang="ts">
import HumanMessage from './HumanMessage.vue'
import AiMessage from './AiMessage.vue'

defineProps<{
  role: 'human' | 'ai'
  content?: string
}>()
</script>