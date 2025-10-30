<template>
  <div class="flex gap-2">
    <div>
      <a-avatar :size="30" shape="circle" class="bg-green-800">A</a-avatar>
    </div>
    <div class="space-y-2">
      <p class="text-black font-bold text-sm">ChatGPT ChatBot</p>
      <p class="bg-gray-100 px-4 py-3 text-gray-900 rounded-2xl max-w-max">
        <template v-if="!isLoading">{{ content }}</template>
        <template v-else>
          <icon-loading class="text-base" />
        </template>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  content?: string;
  isLoading?: boolean;
}>();

const isLoading = props.isLoading ?? false;
const content = props.content ?? "";
</script>
