<template>
    <div class="flex-center">
        <IconWeather />
        <span>09:54 am</span>
        <select v-model="location" name="condition" id="condition">
            <option value="Antananarivo" default>Antananarivo</option>
            <option value="Hongkong">Hongkong</option>
            <option value="Taipei">Taipei</option>
            <option value="Tokyo">Tokyo</option>
        </select>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import IconWeather from '@/components/icons/IconWeather.vue';
    const location = ref('Antananarivo');
</script>

<style scoped>
    .flex-center {
        margin-left: 32px;
        gap: 12px;
    }

    span {
        white-space: nowrap;
    }

    .flex-center select {
        color: var(--text-tertiary);
    }
</style>