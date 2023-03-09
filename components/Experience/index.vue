<template>
    <li>
        <div class="item">
            <div class="item_top">
                <h5>{{ experience?.company }}</h5>
                <span 
                v-if="
                    typeof experience?.from === 'number' 
                    && 
                    typeof experience?.to === 'number'
                    &&
                    experience?.from === experience?.to
                ">( {{ `${experience?.from}` }} )</span>
                <span v-else>( {{ `${experience?.from} - ${experience?.to}` }} )</span>
            </div>
            <h3>{{ experience?.role }}</h3>
            <p>{{  experience?.description}}</p>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
export default defineComponent({
    name: 'Experience',
    props: {
        experience: Object as PropType<Experience>
    },
    setup(props) {
        const { experience } = toRefs(props);

        return {
            experience
        }
    },
})
</script>
