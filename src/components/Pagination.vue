<template>
    <div class="flex-center">
        <span>Total {{ total }}</span>
        <span class="dividing-line" />
        <div class="flex-center setting">
            <button @click="setPage(page - 1)">
                <IconArrowLeft />
            </button>
            <div class="form-content">
                <select v-model="page" name="condition" id="condition">
                    <option v-for="option in pageAry" :key="option" :value="option">{{ option }}</option>
                </select>
                <span class="arrow">
                    <IconArrowDown />
                </span>
            </div>
            <button @click="setPage(page + 1)">
                <IconArrowRight />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import IconArrowLeft from '@/components/icons/IconArrowLeft.vue';
    import IconArrowRight from '@/components/icons/IconArrowRight.vue';
    const props = defineProps<{
        total: number,
        current: number,
        each: number
    }>()

    const page = ref(props.current);
    const pageAry = [...Array(props.each)].map((_, index) => index + 1);

    const setPage = (targetPage: number) => {
        if (targetPage < 1 || targetPage > props.each) {
            return;
        }
        page.value = targetPage;
    }
</script>

<style scoped>
    span {
        color: var(--text-tertiary);
        font-weight: 600;
        padding: .25rem;
    }

    .dividing-line {
        height: .5rem;
        border-left: 2px solid var(--text-tertiary);
        margin-right: .5rem;
    }

    .setting {
        gap: .75rem;
    }

    .form-content {
        border: none;
    }

    select {
        padding: .5rem .25rem;
    }
</style>