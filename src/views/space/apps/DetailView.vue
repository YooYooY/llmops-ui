<template>
  <div class="w-screen h-screen flex flex-col ">
    <header class="w-full h-[74px] shrink-0">header</header>
    <main class="w-full flex-1 flex">
      <div class="app-arrangement">
        <div class="app-arrange-header">application arrangement</div>
        <div class="w-full flex flex-1">
          <section class="w-1/2">personal and reply area</section>
          <section class="w-1/2">app ability</section>
        </div>
      </div>
      <div class="w-1/3 h-full">
        <view-and-debug />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import ViewAndDebug from '@/components/app/ViewAndDebug.vue'
</script>

<style scoped lang="postcss">

.app-arrangement {
  @apply w-2/3 h-full flex flex-col;
}

.app-arrange-header{
  @apply w-full h-16 border-b-[1px] border-gray-200 shrink-0;
}

</style>