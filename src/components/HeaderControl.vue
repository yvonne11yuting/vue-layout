<template>
    <div class="header-control flex-center">
        <IconSetting />
        <IconNotify />
        <div class="flex-center">
            <img alt="avatar" class="avatar" src="../assets/avatar.png" width="50" height="50" />
            <IconArrowDown />
        </div>
    </div>
</template>

<script setup lang="ts">
import IconSetting from '@/components/icons/IconSetting.vue';
import IconNotify from '@/components/icons/IconNotify.vue';
import IconArrowDown from '@/components/icons/IconArrowDown.vue';
</script>

<style scoped>
    .header-control {
        gap: 2.5rem;
    }

    .avatar {
        border-radius: 100%;
        margin-right: .25rem;
    }
</style>