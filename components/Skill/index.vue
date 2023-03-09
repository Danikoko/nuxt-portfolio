<template>
    <div class="progress_item" :data-value="skill?.strength">
        <div class="item_in">
            <h3 class="progress_title">{{ skill?.skill }}</h3>
            <span class="progress_percent"></span>
            <div class="progress_bg"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue';
export default defineComponent({
    name: 'Skill',
    props: {
        skill: Object as PropType<Skill>
    },
    setup(props) {
        const { skill } = toRefs(props);

        return {
            skill
        }
    },
})
</script>
