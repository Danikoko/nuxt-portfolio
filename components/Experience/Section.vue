<template>
    <section id="cv_experience">
        <div class="section_title">
            <h3>Experience</h3>
        </div>
        <div class="fn_cs_boxed_list">
            <ul>
                <Experience 
                v-for="(experience, index) in experiences"
                :key="index+1"
                :experience="experience"
                />
            </ul>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue';
export default defineComponent({
    name: 'ExperienceSection',
    props: {
        experiences: Array as PropType<Experience[]>
    },
    setup(props) {
        const { experiences } = toRefs(props);

        return {
            experiences
        }
    },
})
</script>
