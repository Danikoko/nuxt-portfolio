<template>
    <li class="grid-item" :class="projectType">
        <div class="inner">
            <div class="entry">
                <a class="zoom" :href="project?.link" target="_blank">
                    <img :src="project?.image" alt="" />
                    <div class="main" :data-bg-img="project?.image"></div>
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
    defineComponent,
    inject
} from 'vue';
import type { PropType } from 'vue';
export default defineComponent({
    name: 'Project',
    props: {
        project: Object as PropType<Project>,
        convertToSnakeCase: Function
    },
    setup(props) {
        const { 
            project
        } = toRefs(props);

        // Importing passed prop functions is like so below
        const { convertToSnakeCase }: any = props;

        const projectType = computed(() => {
            const types: string[]|any = project.value?.type;
            types.forEach((type: any, index: number) => {
                types[index] = type.replace(' ', '_');
            });
            const projectTypeString = types.join(' ');
            const value = convertToSnakeCase(projectTypeString);
            return value;
        });

        return {
            project,
            projectType
        }
    },
})
</script>
