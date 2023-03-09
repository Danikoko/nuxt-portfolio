<template>
    <div class="deebo_fn_main">
        
        <ThemeSwitcher />        
        
        <!-- Overlay -->
        <div class="right_bar_overlay"></div>
        <!--/ Overlay -->
    
        <!-- MODALBOX -->
        <div class="deebo_fn_modalbox">
            <a class="extra_closer" href="#"></a>
            <div class="box_inner">
                <a class="closer" href="#"><span></span></a>
                <div class="modal_content">
    
                    <div class="modal_in">
                        <!-- Content comes from JS -->
                    </div>
    
                    <div class="fn__nav" data-from="" data-index="">
                        <a href="#" class="prev">
                            <span class="text">Prev</span>
                            <span class="arrow_wrapper"><span class="arrow"></span></span>
                        </a>
                        <a href="#" class="next">
                            <span class="text">Next</span>
                            <span class="arrow_wrapper"><span class="arrow"></span></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- /MODALBOX --> 
    
        <!-- Overlay -->
        <div class="right_bar_overlay"></div>
        <!--/ Overlay -->
    
        <!-- MODALBOX -->
        <div class="deebo_fn_modalbox">
            <a class="extra_closer" href="#"></a>
            <div class="box_inner">
                <a class="closer" href="#"><span></span></a>
                <div class="modal_content">
    
                    <div class="modal_in">
                        <!-- Content comes from JS -->
                    </div>
    
                    <div class="fn__nav" data-from="" data-index="">
                        <a href="#" class="prev">
                            <span class="text">Prev</span>
                            <span class="arrow_wrapper"><span class="arrow"></span></span>
                        </a>
                        <a href="#" class="next">
                            <span class="text">Next</span>
                            <span class="arrow_wrapper"><span class="arrow"></span></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- /MODALBOX --> 
    
        <!-- Modal CV Card -->
        <div class="deebo_fn_cv">
    
            <!-- CV Inner -->
            <div class="deebo_fn__cv">
    
                <!-- CV Background -->
                <div class="cv__bg"></div>
                <div class="cv__bg2"></div>
                <!-- /CV Background -->
    
                <!-- CV Left Side -->
                <Header :profile="profile" />
                <!-- /CV Left Side -->
    
                <!-- /CV Content Side -->
                <div class="cv__content">
                    
                    <HeroHeader :roles="profile.roles" />
    
                    <!-- CV: Biography Section -->
                    <BiographySection :profile="profile" />
                    <!-- /CV: Biography Section -->
    
                    <!-- CV: Education Section -->
                    <EducationSection :education="profile.education" />
                    <!-- /CV: Education Section -->
    
                    <!-- CV: Experience Section -->
                    <ExperienceSection :experiences="profile.experiences" />
                    <!-- /CV: Experience Section -->
    
                    <!-- CV: Skills Section -->
                    <SkillSection :skillSet="profile.skillSet" />
                    <!-- /CV: Skills Section -->
    
                    <!-- CV: Services Section -->
                    <!-- <ServicesSection /> -->
                    <!-- /CV: Services Section -->
                    
                    <!-- CV: Portfolio Section-->
                    <ProjectSection :projectsDone="profile.projectsDone" />
                    <!-- /CV: Portfolio Section-->
    
                    <!-- CV: Testimonials -->
                    <!-- <TestimonialSection /> -->
                    <!-- /CV: Testimonials -->
                    
                    <!-- CV: Clients Section -->
                    <!-- <ClientSection /> -->
                    <!-- /CV: Clients Section -->
                    
                    <!-- CV: News Section -->
                    <NewsSection :articles="profile.articles" />
                    <!-- CV: News Section -->
                    
                    <Contact />
    
    
                </div>
                <!-- /CV Content Side -->
    
            </div>
            <!-- CV Inner -->
        </div>
        <!-- /Modal CV Card -->
    
        
    
    </div>
</template>

<script lang="ts">
import useMainStore from '~~/store';
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const header = ref({
            htmlAttrs: {
                lang: 'en'
            },
            bodyAttrs: {
                class: 'light'
            },
            meta: [
                {
                    httpEquiv: 'Content-Type',
                    content: 'text/html; charset=utf-8'
                },
                {
                    name: 'description',
                    content: 'Daniel Enamudu\'s Portfolio'
                },
                {
                    name: 'author',
                    content: 'Daniel Enamudu'
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, maximum-scale=1'
                }
            ],
            title: 'Daniel Enamudu\'s Portfolio',
            link: [
                /* Google Fonts */
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
                },
                /* Google Fonts */

                /* Styles */
                {
                    type: 'text/css',
                    rel: 'stylesheet',
                    href: 'css/base.css?ver=4'
                },
                {
                    type: 'text/css',
                    rel: 'stylesheet',
                    href: 'css/magnific.css?ver=4'
                },
                {
                    type: 'text/css',
                    rel: 'stylesheet',
                    href: 'css/animated-headlines.css?ver=4'
                },
                {
                    type: 'text/css',
                    rel: 'stylesheet',
                    href: 'css/style.css?ver=4'
                },
                /* Styles */

                /* Font Awesome */
                {
                    type: 'text/css',
                    rel: 'stylesheet',
                    href: 'https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css'
                }
                /* Font Awesome */
            ],
            script: [
                {
                    type: 'text/javascript',
                    src: 'js/jquery.js?ver=4'
                },
                {
                    type: 'text/javascript',
                    src: 'js/isotope.js'
                },
                {
                    type: 'text/javascript',
                    src: 'js/magnific.js'
                },
                {
                    type: 'text/javascript',
                    src: 'js/animated-headlines.js?ver=4'
                },
                {
                    type: 'text/javascript',
                    src: 'js/waypoints.js?ver=4'
                },
                {
                    type: 'text/javascript',
                    src: 'js/init.js?ver=4'
                }
            ]
        });
        useHead(header);
        
        const mainStore = useMainStore();
        const { 
            profile,
            changeTheme
        } = mainStore;
        const darkTheme = computed(() => mainStore.darkTheme);

        const dateObject: Date = new Date();

        watch(darkTheme, (newValue: boolean) => {
            if (newValue === true) {
                header.value.bodyAttrs.class = '';
            } else {
                header.value.bodyAttrs.class = 'light';
            }
        });
        
        onMounted(() => {
            const currentHour = parseInt(dateObject.toLocaleTimeString().split(':')[0]);
            setTimeout(() => {
                if (!(currentHour >= 6 && currentHour <= 18)) {
                    // If it is night time
                    changeTheme();
                }
            }, 100);
        });

        return {
            profile
        }
    },
})
</script>
