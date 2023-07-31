<template>
  <header>
        <div class="header-sub flex-center">
            <button @click="extendNavbar">
                <IconBars />
            </button>
            <img alt="APPX logo" class="logo" src="./assets/logo.png" width="164" height="35" />
            <HeaderSearch />
        </div>
        <div class="header-sub flex-center">
            <HeaderAreaInfo />
            <HeaderControl />
        </div>
  </header>

  <main>
    <nav class="navbar">
        <NavbarList :open="navbarFlag"/>
    </nav>
    <div class="breadcrumb">
        <MainBreadcrumb :data="BreadcrumbData"/>
    </div>
    <div class="collection-filter">
        <CollectionFilter />
    </div>
    <div class="collection-list">
        <CollectionList :data="CollectionListData"/>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import IconBars from '@/components/icons/IconBars.vue';
import HeaderSearch from '@/components/HeaderSearch.vue';
import HeaderAreaInfo from '@/components/HeaderAreaInfo.vue';
import HeaderControl from '@/components/HeaderControl.vue';
import NavbarList from '@/components/NavbarList.vue';
import MainBreadcrumb from '@/components/MainBreadcrumb.vue';
import CollectionFilter from '@/components/CollectionFilter.vue';
import CollectionList from '@/components/CollectionList.vue';
import { BreadcrumbData, CollectionListData } from './constants.ts';
const navbarFlag = ref(false);

const extendNavbar = () => {
    navbarFlag.value = !navbarFlag.value
}
console.log(navbarFlag.value);
</script>

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
        grid-template-columns: auto 1fr;
        grid-template-rows: 60px 124px minmax(100px, auto);
        grid-template-areas:
            "nav breadcrumb"
            "nav collection-filter"
            "nav collection-list";
        column-gap: 1rem;
        padding-right: 1rem;
    }

    .navbar {
        grid-area: nav;
    }

    .breadcrumb {
        grid-area: breadcrumb;
        padding: 1rem 0;
    }

    .collection-filter {
        grid-area: collection-filter;
    }

    .collection-list {
        grid-area: collection-list;
    }
</style>
