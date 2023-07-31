import { v4 as uuidv4 } from 'uuid';
import IconHome from '@/components/icons/IconHome.vue';
import IconCart from '@/components/icons/IconCart.vue';
import IconEarth from '@/components/icons/IconEarth.vue';
import IconTruck from '@/components/icons/IconTruck.vue';
import IconCalculator from '@/components/icons/IconCalculator.vue';
import IconUsers from '@/components/icons/IconUsers.vue';

interface SubInfo {
    id: string;
    title: string;
    sub?: SubInfo[]
}

interface NavItemsData {
    id: string;
    title: string;
    icon: ObjectConstructor
    sub?: SubInfo[]
}

export const NAV_ITEMS_DATA: NavItemsData[] = [{
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
}];

export const BreadcrumbData = [{
    title: 'Home',
    path: '/'
}, {
    title: 'My Collection'
}];
