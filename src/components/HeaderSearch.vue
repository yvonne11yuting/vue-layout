<template>
    <div class="header-search">
        <div class="search-wrapper">
            <input type="text" v-model="search" placeholder="Search here..."/>
            <span class="search">
                <IconSearch />
            </span>
        </div>
        <div class="search-wrapper">
            <select v-model="scope" name="condition" id="condition">
                <option value="all">By All</option>
                <option value="station">By Station</option>
                <option value="country">By Country</option>
            </select>
            <span class="arrow">
                <IconArrowDown />
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import IconSearch from '@/components/icons/IconSearch.vue';
    import IconArrowDown from '@/components/icons/IconArrowDown.vue';
    const search = ref('');
    const scope = ref('all');
</script>

<style scoped>
    .header-search {
        display: inline-flex;
        flex-direction: row;
        gap: 6px;
    }

    .search-wrapper {
        display: flex;
        align-items: center;
        background: #fff;
        border-radius: 6px;
        border: 1px solid var(--text-tertiary);
    }

    .search-wrapper .search {
        padding-top: 4px;
        border-left: 1px solid #000;
        cursor: pointer;
    }

    .search-wrapper span {
        padding: 0 12px 0 8px;
    }

    input, select {
        padding: 12px 16px;
        color: var(--text-tertiary);
    }

    select {
        appearance:none;
    }

    .search-wrapper .arrow {
        padding-bottom: 1px;
        cursor: pointer;
    }
</style>
