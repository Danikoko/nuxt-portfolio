<template>
    <section id="cv_portfolio">
        <div class="section_title">
            <h3>Projects</h3>
        </div>
        
        <!-- Portfolio Shortcode -->
        <div class="fn_cs_portfolio">
        
            <!-- Portfolio Filter -->
            <div class="portfolio_filter">
                <ul>
                    <li><a href="#" class="current" data-filter="*">All</a></li>
                    <li
                    v-for="(projectType, index) in projectTypes"
                    :key="index+1">
                        <a href="#" :data-filter="`.${projectType.replace(' ', '_').replace('.', '_')}`">{{ projectType.replace('_', ' ') }}</a>
                    </li>
                </ul>
            </div>
            <!-- /Portfolio Filter -->
            
            
            <!-- Portfolio List -->
            <div class="portfolio_list">
                <ul class="gallery_zoom grid">
                    <Project 
                    v-for="(project, index) in projectsDone"
                    :key="index+1"
                    :project="project"
                    :convertToSnakeCase="convertToSnakeCase" />
                </ul>
            </div>
            <!-- /Portfolio List -->
            
        </div>
        <!-- /Portfolio Shortcode -->
        
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
export default defineComponent({
    name: 'ProjectSection',
    props: {
        projectsDone: Object as PropType<Project[]>
    },
    setup(props) {
        const { projectsDone } = toRefs(props);

        const convertToSnakeCase: any = (stringToConvert: string) => stringToConvert.replace('.', '_');

        const projectTypes = computed(() => {
            let arrayOfProjectTypes: string[] = [];
            projectsDone.value?.forEach((project: Project) => {
                project.type.forEach((toolType: string) => {
                    if (arrayOfProjectTypes.indexOf(toolType) === -1) {
                        arrayOfProjectTypes.splice(arrayOfProjectTypes.length, 0, toolType);
                    }
                });
            });
            return arrayOfProjectTypes;
        });

        return {
            projectsDone,
            projectTypes,
            convertToSnakeCase
        }
    },
})
</script>
