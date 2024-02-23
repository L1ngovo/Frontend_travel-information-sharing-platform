<template>
    <div>
        {{ num }}rehg
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const router = useRoute()
const num = router.query.num

</script>

<style>

</style>