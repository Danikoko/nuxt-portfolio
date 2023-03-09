<template>
    <div class="cv__header">
        <div class="in">
            <div class="avatar">
                <img src="/img/header/1.jpg" alt="">
            </div>
            <h3><span>{{ profile?.firstName }}</span> {{ profile?.lastName }}</h3>
            <p class="quote">{{ profile?.description }} <a href="#contact" class="anchor">Contact me</a></p>
            <ul class="contact_info">
                <li>
                    <span class="icon"><i class="fa-duotone fa-location-dot fn__svg text-center"></i></span>
                    <p>{{ profile?.address }}</p>
                </li>
                <li>
                    <span class="icon"><i class="fa-duotone fa-phone fn__svg text-center"></i></span>
                    <p>{{ profile?.phoneNumber }}</p>
                </li>
                <li>
                    <span class="icon"><i class="fa-duotone fa-envelope fn__svg text-center"></i></span>
                    <p>{{ profile?.email }}</p>
                </li>
            </ul>
            <ul class="social">
                <li>
                    <a :href="profile?.socialMedia.linkedIn" title="LinkedIn profile">
                        <i class="fa-brands fa-linkedin fn__svg text-center"></i>
                    </a>
                </li>
                <li>
                    <a :href="profile?.socialMedia.github" target="_blank" title="Github account">
                        <i class="fa-brands fa-github fn__svg text-center"></i>
                    </a>
                </li>
                <li>
                    <a :href="profile?.socialMedia.twitter" target="_blank" title="Twitter handle">
                        <i class="fa-brands fa-twitter fn__svg text-center"></i>
                    </a>
                </li>
                <li>
                    <a :href="profile?.socialMedia.whatsapp" target="_blank" title="Chat on Whatsapp">
                        <i class="fa-brands fa-whatsapp fn__svg text-center"></i>
                    </a>
                </li>
                <li>
                    <a :href="profile?.socialMedia.instagram" target="_blank" title="Instagram handle">
                        <i class="fa-brands fa-instagram fn__svg text-center"></i>
                    </a>
                </li>
                <!-- <li>
                    <a href="#" target="_blank" title="youtube.com">
                        <i class="fa-brands fa-youtube fn__svg text-center"></i>
                    </a>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue'
export default defineComponent({
    props: {
        profile: Object as PropType<Profile>
    },
    setup(props) {
        const { profile } = toRefs(props);
        
        return {
            profile
        }
    }
});
</script>

<style lang="css" scoped>
.text-center {
    text-align: center;
}
</style>
