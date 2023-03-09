<template>
    <li>
        <p>
            {{ bioItem }}: <span>{{ bioValue }}</span>
        </p>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Biography',
    props: {
        bioItem: String,
        bioValue: String,
    },
    setup(props) {
        const { 
            bioItem,
            bioValue
        } = toRefs(props);

        return {
            bioItem,
            bioValue
        }
    }
})
</script>
