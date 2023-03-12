<template>
    <li class="grid-item" :class="projectType">
        <div class="inner">
            <div class="entry">
                <a class="zoom" :href="project?.link" target="_blank">
                    <img :src="trueImage" alt="" />
                    <div class="main" :data-bg-img="trueImage" :style="`background-image: url('${trueImage}')`"></div>
                    <div class="mobile_title">
                        <h3>{{ project?.name }}</h3>
                        <span>{{ project?.description }}</span>
                    </div>
                </a>
            </div>
        </div>
    </li>
</template>

<script lang="ts">
import { 
    defineComponent
} from 'vue';
import type { PropType } from 'vue';
export default defineComponent({
    name: 'Project',
    props: {
        project: Object as PropType<Project>,
        darkTheme: Boolean as PropType<boolean>,
        convertToSnakeCase: Function
    },
    setup(props) {
        const { 
            project,
            darkTheme
        } = toRefs(props);

        // Importing passed prop functions is like so below
        const { 
            convertToSnakeCase 
        }: any = props;

        const projectType = computed(() => {
            const types: string[]|any = project.value?.type;
            types.forEach((type: any, index: number) => {
                types[index] = type.replace(' ', '_');
            });
            const projectTypeString = types.join(' ');
            const value = convertToSnakeCase(projectTypeString);
            return value;
        });

        const trueImage = computed(() => darkTheme.value ? project.value?.darkThemeImage : project.value?.image);

        return {
            project,
            projectType,
            trueImage
        }
    },
})
</script>
