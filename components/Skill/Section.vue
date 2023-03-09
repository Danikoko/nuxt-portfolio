<template>
    <section id="cv_skills">
        <div class="section_title">
            <h3>Professionality</h3>
        </div>
        <div class="fn_cs_progress_bar">
            <Skill 
            v-for="(skill, index) in skillSet"
            :key="index+1"
            :skill="skill" />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue';
export default defineComponent({
    name: 'SkillSection',
    props: {
        skillSet: Object as PropType<Skill[]>
    },
    setup(props) {
        const { skillSet } = toRefs(props);

        return {
            skillSet
        }
    },
})
</script>
