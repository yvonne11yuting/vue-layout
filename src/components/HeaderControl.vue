<template>
    <div class="header-control flex-center">
        <IconSearch v-if="!isDesktop"/>
        <IconSetting />
        <IconNotify v-if="isDesktop"/>
        <div class="flex-center">
            <img alt="avatar" class="avatar" src="../assets/avatar.png" width="50" height="50" />
            <IconArrowDown v-if="isDesktop"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue';
import IconSetting from '@/components/icons/IconSetting.vue';
import IconNotify from '@/components/icons/IconNotify.vue';
import IconArrowDown from '@/components/icons/IconArrowDown.vue';

defineProps<{
    isDesktop: boolean;
}>()
</script>

<style scoped>
    .header-control {
        gap: 2.5rem;
    }

    .avatar {
        border-radius: 100%;
        margin-right: .25rem;
    }

    @media (max-width: 1200px) {
        .header-control {
            gap: 1rem;
        }

        svg, .avatar {
            transform: scale(.75);
        }
    }
</style>