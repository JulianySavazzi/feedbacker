<script setup>
const {data} = await useApiFetch('api/testing')
</script>
<template>
<h1>
... {{data.value}}
</h1>
</template>