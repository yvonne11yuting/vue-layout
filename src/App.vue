<script setup>
import IconBars from '@/components/icons/IconBars.vue';
import HeaderSearch from '@/components/HeaderSearch.vue'
import HeaderAreaInfo from '@/components/HeaderAreaInfo.vue'
import HeaderControl from '@/components/HeaderControl.vue'
</script>

<template>
  <header>
        <div class="header-sub flex-center">
            <IconBars />
            <img alt="APPX logo" class="logo" src="./assets/logo.png" width="164" height="35" />
            <HeaderSearch />
        </div>
        <div class="header-sub flex-center">
            <HeaderAreaInfo />
            <HeaderControl />
        </div>
  </header>

  <main>
    <nav class="navbar">nav</nav>
    <div class="breadcrumb">breadcrumb</div>
    <div class="collection-filter">collection-filter</div>
    <div class="collection-list">collection-list</div>
  </main>
</template>

<style scoped>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 1.5rem;
    }

    .header-sub {
        gap: 32px
    }

    main {
        display: grid;
        grid-template-columns: minmax(100px, max-content) 1fr;
        grid-template-rows: 60px 124px minmax(100px, auto);
        grid-template-areas:
            "nav breadcrumb"
            "nav collection-filter"
            "nav collection-list";
    }

    .navbar {
        grid-area: nav;
    }

    .breadcrumb {
        grid-area: breadcrumb;
    }

    .collection-filter {
        grid-area: collection-filter;
    }

    .collection-list {
        grid-area: collection-list;
    }
</style>