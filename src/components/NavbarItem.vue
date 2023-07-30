<template>
    <li class="flex-start nav-level1">
        <div class="flex-start nav-level1-item" :class="{hasSub: hasSub}" @click="showSub = !showSub">
            <div class="flex-start nav-item">
                <component :is="icon" />
                <strong>{{ title }}</strong>
            </div>
            <span class="arrow-down">
                <IconArrowDown />
            </span>
        </div>
        <slot :showSub="showSub" />
    </li>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import IconArrowDown from '@/components/icons/IconArrowDown.vue';

    defineProps<{
    title: string,
    icon: ObjectConstructor,
    hasSub: boolean
    }>()
    const showSub = ref(false);
</script>

<style scoped>
    strong {
        font-weight: 600;
    }

    .nav-level1 {
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
    }

    .nav-level1-item {
        width: 240px;
        padding: 1rem 1.5rem;
        justify-content: space-between;
    }

    .hasSub:hover {
        background-color: #D8DDEB;
    }

    .nav-item {
        gap: .75rem;
    }

    .nav-item svg {
        flex: none;
        width: 1.5rem;
    }

    .arrow-down {
        flex: none;
    }
</style>
