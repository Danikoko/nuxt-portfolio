<template>
    <section id="cv_education">
        <div class="section_title">
            <h3>Education</h3>
        </div>
        <div class="fn_cs_boxed_list">
            <ul>
                <Education
                v-for="(edu, index) in education" 
                :key="index+1"
                :education="edu" />
            </ul>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
export default defineComponent({
    name: 'EducationSection',
    props: {
        education: Array as PropType<Education[]>
    },
    setup(props) {
        const { education } = toRefs(props);

        return {
            education
        }
    },
})
</script>
