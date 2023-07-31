<template>
    <div class="list-header flex-center">
        <h3>My Collection</h3>
        <Pagination :total="480" :current="1" :each="10" />
    </div>
    <div v-for="item in data" :key="item.id" class="card" @click="$emit('unCollect', item.id)">
        <div class="collect"><IconCollect /></div>
        <div class="title">{{ item.title }}{{ item.id.slice(0,3) }}</div>
        <div class="news"><span v-if="item.isNews">News</span></div>
        <div class="toolbar flex-start">
            <div class="flex-center">
                <IconThumb />
                {{ item.likes }} Likes
            </div>
            <div class="flex-center">
                <IconComment />
                {{ item.comments }} Comments
            </div>
            <div class="flex-center">
                <IconShare />
                {{ item.shares }} Shares
            </div>
        </div>
        <div class="date">{{ new Date(item.date).toDateString().slice(4) }}</div>
    </div>
</template>

<script setup lang="ts">
    import IconCollect from '@/components/icons/IconCollect.vue';
    import IconThumb from '@/components/icons/IconThumb.vue';
    import IconComment from '@/components/icons/IconComment.vue';
    import IconShare from '@/components/icons/IconShare.vue';
    import Pagination from './Pagination.vue';
    interface ListData {
        id: string;
        title: string;
        likes: number;
        comments: number;
        shares: number;
        date: number;
        isNews: boolean;
    }

    defineProps<{
        data: ListData[],
    }>()

    defineEmits(['unCollect'])
</script>

<style scoped>
    .list-header {
        justify-content: space-between;
        margin: .5rem 0;
    }

    h3 {
        margin: 0;
        font-weight: 600;
    }

    .card {
        display: grid;
        grid-template-columns: 30px 1fr 100px;
        grid-template-areas:
            "collect title news"
            "collect toolbar date";
        row-gap: 1rem;
        padding: 1rem;
        background-color: #fff;
        border: 1px solid #D5D5DA;
    }

    .collect {
        grid-area: collect;
        cursor: pointer;
    }

    .title {
        grid-area: title;
        cursor: pointer;
    }
    .toolbar {
        grid-area: toolbar;
        gap: 1rem;
        color: var(--text-tertiary);
        font-size: .75rem;
    }

    .toolbar > div {
        gap: .25rem;
        cursor: pointer;
    }

    .date {
        grid-area: date;
        color: var(--text-tertiary);
        font-size: .75rem;
        text-align: right;
    }
    .news {
        grid-area: news;
        text-align: right;
        font-size: .75rem;
        color: var(--text-title);
    }

    .news span {
        background-color: #EDEDED;
        padding: .25rem .5rem;
        border-radius: 38px;
    }
</style>