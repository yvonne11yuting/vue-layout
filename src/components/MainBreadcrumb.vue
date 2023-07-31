<template>
    <span v-for="({title, path}, index) in data" :key="title" class="breadcrumb">
        <a v-if="path" :href="path">{{ title }}</a>
        <span v-else class="last-item">{{ title }}</span>
        <span v-if="data[index+1]" class="arrow">></span>
    </span>
</template>

<script setup lang="ts">
    interface BreadcrumbData {
        title: string;
        path: string;
    }
    defineProps<{
        data: BreadcrumbData[]
    }>()
</script>

<style scoped>
    a {
        color: inherit;
        text-decoration: none;
    }
    .breadcrumb {
        color: #737791;
    }

    .last-item {
        color: #121212;
    }

    .arrow {
        padding: 0 .5rem;
    }
</style>