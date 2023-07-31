<template>
    <li>
        <div :class="{ hasSub: hasSub && isShowSub }" class="sub-item" @click="handleShowSub">
            {{ title }}
            <IconArrowDown v-if="hasSub" />
        </div>
        <slot :showSub="showSub" />
    </li>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IconArrowDown from '@/components/icons/IconArrowDown.vue';

const props = defineProps<{
  title: string,
  hasSub?: boolean,
  isShowSub?: boolean
}>()
const showSub = ref(false);

const handleShowSub = () => {
    if (props.hasSub) {
        showSub.value = !showSub.value;
    }
}

</script>

<style scoped>
    li {
        padding: .75rem 2.25rem;
    }

    .hasSub {
        margin-bottom: .75rem;
    }

    .sub-item svg {
        padding-left: .5rem;
    }
</style>