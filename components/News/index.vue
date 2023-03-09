<template>
    <li :class="typeof key === 'number' && key > 3 ? 'be_animated' : ''">
        <div class="item" data-index="1">
            <div class="item_left">
                <p>{{ dateAdded }}</p>
                <h5><a href="#">{{ article?.title }}</a></h5>
                <a :href="article?.link" target="_blank" class="read_more">Read Article</a>
                <!-- <div class="fn__hidden">
                    <p class="fn__cat">November 18, 2021</p>
                    <h3 class="fn__title">Emotional Slider Animation in After Effects</h3>
                    <div class="/img_holder">
                        <img src="/img/thumb/square.jpg" alt="">
                        <div class="abs_img" data-bg-img="/img/blog/1.jpg"></div>
                    </div>
                    <p class="fn__desc">Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu mollis vel, commodo eget orci.</p>
                    <p class="fn__desc">Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus viverra.</p>
                    <p class="fn__desc">Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus.</p>
                </div> -->
            </div>
            <div class="item_right">
                <div class="abs_img" :data-bg-img="article?.image"></div>
            </div>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'News',
    props: {
        article: Object as PropType<Article>,
        key: Number
    },
    setup(props) {
        const { 
            article,
            key
        } = toRefs(props);

        const dateAdded = computed(() => {
            const dateString: any = article.value?.dateAdded.toDateString();
            const splitDateString: string[] = dateString?.split(' ');
            const value = `${splitDateString[1]} ${splitDateString[2]}, ${splitDateString[3]}`
            return value;
        });

        return {
            article,
            key,
            dateAdded
        }
    },
})
</script>
