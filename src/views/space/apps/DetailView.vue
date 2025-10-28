
<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()

</script>

<template>
  <div class="w-screen h-screen flex flex-col">
    <main class="w-full flex-1 flex">
     {{ route.params.id }}
    </main>
  </div>
</template>

<style scoped></style>