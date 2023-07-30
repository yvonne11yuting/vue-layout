<template>
    <li>
        <div :class="{ hasSub: hasSub }" @click="handleToggle">
            {{ title }}
            <IconArrowDown v-if="hasSub" />
        </div>
        <slot />
    </li>
</template>

<script setup lang="ts">
import IconArrowDown from '@/components/icons/IconArrowDown.vue';
defineProps<{
  title: string,
  hasSub?: boolean,
}>()

const emit = defineEmits<{
  (e: 'toggle'): void
}>()

function handleToggle () {
    emit('toggle');
}

</script>

<style scoped>
    li {
        padding: .75rem 2.25rem;
    }

    .hasSub {
        margin-bottom: .75rem;
    }

    .hasSub svg {
        padding-left: .5rem;
    }
</style>