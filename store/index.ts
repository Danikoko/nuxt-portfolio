import { defineStore } from 'pinia';

const useMainStore = defineStore('main', {
    state: () => ({
        darkTheme: false as boolean,
        profile: {
            firstName: 'Daniel',
            lastName: 'Enamudu',
            description: 'As a software developer, I\'m hyped and passionate about creating innovative and efficient solutions that help businesses and individuals achieve their goals.',
            address: 'Abuja, Nigeria',
            phoneNumber: '+2348147233865',
            email: 'oshionefa@gmail.com',
            socialMedia: {
                facebook: '',
                github: 'https://github.com/Danikoko',
                instagram: 'https://instagram.com/iam_danikoko',
                linkedIn: 'https://linkedin.com/in/daniel-enamudu',
                telegram: '',
                twitter: 'https://twitter.com/iam_danikoko',
                youtube: '',
                whatsapp: 'https://wa.me/+234814723865'
            },
            biography: '',
            dob: new Date('1998-12-22'),
            languages: [
                'English',
                'Hausa',
                'Edo'
            ],
            nationality: 'Nigerian',
        } as Profile
    }),
    actions: {
        changeTheme() {
            this.darkTheme = !this.darkTheme;
        }
    }
});

export default useMainStore;

