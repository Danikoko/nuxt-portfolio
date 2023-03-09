<template>
    <section id="tips" class="section_tips">
        <div class="section_title">
            <h3>Latest Articles</h3>
        </div>

        <div class="tips_content">
            <ul class="" data-from="blog" data-count="5">
                <News
                v-for="(article, index) in articles"
                :key="index+1"
                :article="article" />
            </ul>
        </div>
        <div v-if="typeof articles !== 'undefined' && articles?.length > 3" class="load_more">
            <a href="#" data-done="Done" data-no="No more articles found">
                <span class="text">Load More Articles</span>
                <span class="fn__pulse">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </a>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue';
export default defineComponent({
    name: 'NewsSection',
    props: {
        articles: Array as PropType<Article[]>
    },
    setup(props) {
        const { articles } = toRefs(props);

        return {
            articles
        }
    },
})
</script>
