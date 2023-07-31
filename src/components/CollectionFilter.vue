<template>
    <div class="flex-end container">
        <div class="flex-start form-group">
            <label for='category'>Category</label>
            <div class="form-content">
                <select v-model="category" name="category" id="category">
                    <option value="hr">HR Announcement</option>
                </select>
                <span class="arrow">
                    <IconArrowDown />
                </span>
            </div>
        </div>
        <div class="flex-start form-group">
            <label for='subtitle'>Subtitle</label>
            <div class="form-content">
                <input type="text" v-model="search" />
            </div>
        </div>
        <button>Search</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const category = ref('hr');
const search = ref('');

</script>

<style scoped>
    .container {
        padding: 1rem;
        background: #fff;
        gap: 1rem;
    }

    .form-group {
        flex-direction: column;
        gap: .5rem;
    }

    .form-content, button {
        border: 1px solid #F2F2F7;
    }

    label {
        color: var(--text-tertiary);
    }

    input, select, button {
        padding: .75rem 1rem;
        font-size: 1rem;
    }

    .arrow {
        padding: 0 .25rem;
    }

    button {
        background-color: var(--main-background);
        border-radius: 6px;
    }
</style>