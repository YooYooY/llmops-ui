<script setup lang="ts">
import { post } from "@/utils/request";

const getDebug = async () => {
  const result = await post("/apps/3013fb0c-0992-4ede-8a51-d38787bfaade/debug", {
    body: {
      query: "Hello, who are you",
    },
  });
  
  console.log("result=>", result)
};

// getDebug()
</script>

<template>home</template>

<style scoped></style>
