<template>
  <header>
        <div class="header-sub flex-center">
            <button @click="extendNavbar">
                <IconBars />
            </button>
            <img alt="APPX logo" class="logo" src="./assets/logo.png" width="164" height="35" />
            <HeaderSearch v-if="isDesktop"/>
        </div>
        <div class="header-sub flex-center">
            <HeaderAreaInfo v-if="isDesktop"/>
            <HeaderControl :isDesktop="isDesktop"/>
        </div>
  </header>

  <main>
    <nav class="navbar">
        <NavbarList :open="navbarFlag" :isDesktop="isDesktop"/>
    </nav>
    <div class="breadcrumb">
        <MainBreadcrumb :data="BreadcrumbData"/>
    </div>
    <div class="collection-filter">
        <CollectionFilter />
    </div>
    <div class="collection-list">
        <CollectionList :data="listData" @un-collect="unCollect" :isDesktop="isDesktop"/>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
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
const listData = ref(CollectionListData);
const isMobile = ref(false);
const isDesktop = computed(() => !isMobile.value);

const extendNavbar = () => {
    navbarFlag.value = !navbarFlag.value
}
const unCollect = (targetId) => {
    listData.value = listData.value.filter(({ id }) => id !== targetId)
}

const checkMobile = () => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     isMobile.value = true;
   }
}

onMounted(() => {
    checkMobile();
})
</script>

<style scoped>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 1.5rem;
    }

    .header-sub {
        gap: 2rem;
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

    @media (max-width: 1200px) {
        header {
            background-color: #fff;
            padding: 1rem;
        }

        header button {
            transform: scale(.75);
        }

        header img {
            width: 50%;
            height: auto;
        }

        main {
            position: relative;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            grid-template-areas:
                "breadcrumb"
                "collection-filter"
                "collection-list";
            row-gap: 1rem;
            padding: 1rem;
        }

        .navbar {
            position: absolute;
            background-color: #fff;
        }

        .collection-list {
            padding: 1rem;
            background: #fff;
        }
    }
</style>
