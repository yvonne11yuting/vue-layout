<template>
    <li class="flex-start nav-level1">
        <div class="flex-start nav-level1-item" @click="showSub = !showSub">
            <component :is="icon" />
                <strong v-if="open">{{ title }}</strong>
                <span  v-if="open" class="arrow-down">
                    <IconArrowDown />
                </span>
        </div>
        <slot :showSub="showSub" />
    </li>
</template>

<script setup lang="ts">
    import { ref, type Component } from 'vue';
    import IconArrowDown from '@/components/icons/IconArrowDown.vue';

    defineProps<{
        title: string,
        icon: Component,
        open: boolean
    }>()

    const showSub = ref(false);
</script>

<style scoped>
    strong {
        flex: 1;
        font-weight: 600;
    }

    .nav-level1 {
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
    }

    .nav-level1-item {
        justify-content: space-between;
        width: 100%;
    }

    .nav-level1-item:hover {
        background-color: #D8DDEB;
    }

    .nav-item {
        gap: .75rem;
    }

    .nav-level1-item > svg {
        flex: none;
        width: 1.5rem;
        padding: 1rem .75rem 1rem 1.5rem;
    }

    .nav-level1-item.hideNav span {
        padding: 0
    }

    .nav-level1-item strong {
        padding: 1rem 0;
    }

    .nav-level1-item .arrow-down {
        padding: 1rem 1.5rem 1rem 0;
    }
</style>
