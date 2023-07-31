<template>
    <div class="form-content">
        <input type="text" v-model="search" placeholder="Search here..."/>
        <span class="search">
            <IconSearch />
        </span>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import IconSearch from '@/components/icons/IconSearch.vue';

    const search = ref('');

</script>

<style scoped>
.form-content {
    border: none;
}

input {
    padding: 1rem;
    width: 100%;
}

.search {
    padding: 0 1rem;
}

</style>