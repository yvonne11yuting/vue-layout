<template>
    <ul v-show="isDesktop || !isDesktop && open">
        <NavbarItem v-for="item in NAV_ITEMS_DATA"
            :key="item.id"
            :title="item.title"
            :icon="item.icon"
            :open="open"
            @expand-navbar="expandNavbar"
        >
            <template v-slot="slotL2">
                <ul v-if="item.sub && slotL2.showSub && open" class="sub-list">
                    <NavbarSubItem v-for="level2 in item.sub"
                        :key="level2.id"
                        :title="level2.title"
                        :hasSub="!!level2.sub"
                    >
                        <template v-slot="slotL3">
                            <template v-for="level3 in level2.sub">
                                <NavbarSubItem v-if="level2.sub && slotL3.showSub"
                                    :key="level3.id"
                                    :title="level3.title"
                                />
                            </template>
                        </template>
                    </NavbarSubItem>
                </ul>
            </template>
        </NavbarItem>
    </ul>
</template>

<script setup lang="ts">
    import { NAV_ITEMS_DATA } from '@/constants';
    import NavbarItem from './NavbarItem.vue'
    import NavbarSubItem from './NavbarSubItem.vue'

    defineProps<{
        open: boolean,
        isDesktop: boolean
    }>()

    const emit = defineEmits(['expandNavbar'])

    const expandNavbar = () => {
        emit('expandNavbar')
    }
</script>

<style scoped>
    ul {
        list-style: none;
        max-width: 278px;
    }

    .sub-list {
        padding-left: 1.5rem;
    }
</style>
