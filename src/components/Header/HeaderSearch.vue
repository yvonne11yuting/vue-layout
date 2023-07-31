<template>
    <div class="header-search">
        <div class="form-content">
            <input type="text" v-model="search" placeholder="Search here..."/>
            <span class="search">
                <IconSearch />
            </span>
        </div>
        <div class="form-content">
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

    .form-content .search {
        padding-top: .25rem;
        border-left: 1px solid #000;
        cursor: pointer;
    }

    .form-content span {
        padding: 0 .75rem 0 .5rem;
    }

    input, select {
        padding: .75rem 1rem;
        color: var(--text-tertiary);
    }

    select {
        appearance:none;
    }

    .form-content .arrow {
        padding-bottom: 1px;
        cursor: pointer;
    }

    @media (max-width: 1200px) {
        .header-search {
            visibility: hidden;
        }
    }
</style>
