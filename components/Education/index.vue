<template>
    <li>
        <div class="item">
            <div class="item_top">
                <h5>{{ education?.school }}</h5>
                <span 
                v-if="
                    typeof education?.from === 'number' 
                    && 
                    typeof education?.to === 'number'
                    &&
                    education?.from === education?.to
                ">( {{ `${education?.from}` }} )</span>
                <span v-else>( {{ `${education?.from} - ${education?.to}` }} )</span>
            </div>
            <h3>{{ `${education?.course} (${education?.degree})` }}</h3>
            <p>{{ education?.description }}</p>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
export default defineComponent({
    name: 'Education',
    props: {
        education: Object as PropType<Education>
    },
    setup(props) {
        const { education } = toRefs(props);

        return {
            education
        }
    },
})
</script>
