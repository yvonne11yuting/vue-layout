<template>
    <ul>
        <li v-for="item in items" :key="item.id" class="flex-start nav-level1">
            <div class="flex-start nav-level1-item" @click="showLevel2 = !showLevel2">
                <div class="flex-start nav-item">
                    <component :is="item.icon" />
                    <strong>{{ item.title }}</strong>
                </div>
                <span class="arrow-down">
                    <IconArrowDown />
                </span>
            </div>
            <ul v-if="item.sub && showLevel2">
                <navbar-sub-item v-for="level2 in item.sub"
                    :key="level2.id"
                    :title="level2.title"
                    :hasSub="!!level2.sub"
                    @toggle="showLevel3 = !showLevel3"
                >
                    <template v-for="level3 in level2.sub">
                        <navbar-sub-item v-if="level2.sub && showLevel3"
                            :key="level3.id"
                            :title="level3.title"
                        />
                    </template>
                </navbar-sub-item>
            </ul>
        </li>
    </ul>
</template>

<script setup lang="ts">
    import { ref, shallowRef } from 'vue';
    import { v4 as uuidv4 } from 'uuid';
    import IconHome from '@/components/icons/IconHome.vue';
    import IconCart from '@/components/icons/IconCart.vue';
    import IconEarth from '@/components/icons/IconEarth.vue';
    import IconTruck from '@/components/icons/IconTruck.vue';
    import IconCalculator from '@/components/icons/IconCalculator.vue';
    import IconUsers from '@/components/icons/IconUsers.vue';
    import IconArrowDown from '@/components/icons/IconArrowDown.vue';
    import NavbarSubItem from './NavbarSubItem.vue'

    const showLevel2 = ref(false);
    const showLevel3 = ref(false);

    const items = shallowRef([{
        id: uuidv4(),
        title: 'Home General',
        icon: IconHome
    }, {
        id: uuidv4(),
        title: 'Marketing & Sales',
        icon: IconCart,
        sub: [{
            id: uuidv4(),
            title: 'Option_1'
        }, {
            id: uuidv4(),
            title: 'Option_2',
            sub: [{
                id: uuidv4(),
                title: 'Suboption_1'
            }, {
                id: uuidv4(),
                title: 'Suboption_2'
            }, {
                id: uuidv4(),
                title: 'Suboption_3'
            }]
        }, {
            id: uuidv4(),
            title: 'Option_3'
        }]
    }, {
        id: uuidv4(),
        title: 'Customer Service & Operation',
        icon: IconEarth
    }, {
        id: uuidv4(),
        title: 'Carrier Management',
        icon: IconTruck
    }, {
        id: uuidv4(),
        title: 'Finance & Accounting',
        icon: IconCalculator
    }, {
        id: uuidv4(),
        title: 'HR Development & Organization Setup',
        icon: IconUsers
    }])
</script>

<style scoped>
    ul {
        list-style: none;
    }

    strong {
        font-weight: 600;
    }

    .nav-level1 {
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem 1.5rem;
        cursor: pointer;
    }

    .nav-level1-item {
        width: 100%;
        justify-content: space-between;
    }

    .nav-item {
        gap: .75rem;
        max-width: 260px;
    }

    .nav-item svg {
        flex: none;
        width: 1.5rem;
    }

    .arrow-down {
        flex: none;
    }
</style>
