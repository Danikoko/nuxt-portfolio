<template>
    <section id="cv_biography">
        <div class="section_title">
            <h3>Biography</h3>
        </div>
        <p>{{ profile?.biography }}</p>
        <div class="fn_cs_info_items">
            <ul>
                <Biography 
                v-for="(data, index) in bioInfo"
                :key="index+1"
                :bioItem="data.item" 
                :bioValue="data.value" />
            </ul>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue'
export default defineComponent({
    name: 'BiographySection',
    props: {
        profile: Object as PropType<Profile>
    },
    setup(props) {
        const { profile } = toRefs(props);

        const languagesSpoken = computed(() => {
            const value = profile.value?.languages.join(', ');
            return value;
        });

        const birthday = computed(() => {
            const dateString: any = profile.value?.dob.toDateString();
            const splitDateString: string[] = dateString?.split(' ');
            const value = `${splitDateString[1]} ${splitDateString[2]}, ${splitDateString[3]}`
            return value;
        });

        const age = computed(() => {
            const currentDateObject: any = new Date();
            const ageDateObject: any = profile.value?.dob;
            const ageInMilliseconds: number = (currentDateObject - ageDateObject);
            const ageInYears: number = (ageInMilliseconds/1000/60/60/24/365);
            const value: number = Math.floor(ageInYears);
            return value;
        });

        const bioInfo = computed(() => [
            {
                item: 'Name',
                value: `${profile.value?.firstName} ${profile.value?.lastName}`
            },
            {
                item: 'Birthday',
                value: `${birthday.value.split(',')[0]}`
            },
            {
                item: 'Languages',
                value: `${languagesSpoken.value}`
            },
            // {
            //     item: 'Age',
            //     value: `${age.value}`
            // },
            {
                item: 'Nationality',
                value: `${profile.value?.nationality}`
            },
            {
                item: 'Address',
                value: `${profile.value?.address}`
            },
            {
                item: 'Phone',
                value: `${profile.value?.phoneNumber}`
            },
            {
                item: 'Email',
                value: `${profile.value?.email}`
            }
        ]);

        return {
            bioInfo,
            languagesSpoken,
            birthday,
            age
        }
    }
});
</script>
