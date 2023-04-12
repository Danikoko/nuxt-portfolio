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
            roles: [
                'Front-End Dev.',
                'Back-End Dev.',
                'Mobile App Dev.',
            ],
            biography: 'I\'m a Software Developer with over 7 years of experience. I\'m from Abuja, Nigeria. I develop and create softwares and solutions for amazing people around the world. I like work with new people. New people are new experiences.',
            dob: new Date('1998-12-22'),
            languages: [
                'English',
                'Hausa',
                'Edo'
            ],
            nationality: 'Nigerian',
            education: [
                {
                    course: 'Computer Science',
                    degree: 'BSc',
                    from: 2015,
                    to: 2019,
                    school: 'University of Benin',
                    description: 'This program provided me with a comprehensive understanding of the principles and practices of computing. The curriculum included courses in programming languages, algorithms, data structures, computer architecture, software engineering, databases, operating systems, computer networks, and artificial intelligence.'
                }
            ],
            experiences: [
                {
                    company: 'Bariansystems Limited',
                    description: 'I\'m responsible for creating visually appealing, responsive, and user-friendly interfaces that enhance the user experience. This involves using HTML, CSS, JavaScript, Vue.js, Nuxt.js to build web pages and components that interact with users, as well as collaborating with other members of the development team to ensure applications are both functional and visually consistent.',
                    from: 2020,
                    to: 'Today',
                    role: 'Front-End Developer'
                },
                {
                    company: 'WBL Nigeria Limited',
                    description: 'My tasks include designing and developing both the front-end web applications, server-side logic, and also mobile applications using technologies such as JavaScript, Nuxt.js, React.js, React Native, Ionic, Laravel, etc.',
                    from: 2021,
                    to: 'Today',
                    role: 'Software Developer'
                },
                {
                    company: 'IjeApp',
                    description: 'I was given the responsibility for integrating the front-end and back-end components to ensure seamless functionality and user experience. Tools used include Vue.js, Nuxt.js, and Laravel.',
                    from: 2020,
                    to: 2023,
                    role: 'Full Stack Developer'
                },
                {
                    company: 'Bariansystems Limited',
                    description: 'As a web developer intern, my primary role was to assist the development team in building and maintaining websites and web applications. I learnt the following technologies during this time: Advanced Javascript, Laravel, Wordpress, Joomla.',
                    from: 2018,
                    to: 2018,
                    role: 'Intern'
                }
            ],
            skillSet: [
                {
                    skill: 'HTML5 & CSS3',
                    strength: 95
                },
                {
                    skill: 'JavaScript',
                    strength: 90
                },
                {
                    skill: 'Vue.js & Nuxt.js',
                    strength: 95
                },
                {
                    skill: 'React.js & Next.js',
                    strength: 95
                },
                {
                    skill: 'PHP & Laravel',
                    strength: 90
                }
            ],
            projectsDone: [
                {
                    image: '/img/portfolio/nuxt-portfolio.jpg',
                    darkThemeImage: '/img/portfolio/nuxt-portfolio-dark.jpg',
                    link: 'javascript:void(0);',
                    name: 'My Portfolio Site',
                    description: 'This is the site you\'re currently viewing.',
                    type: [
                        'Nuxt.js',
                        'Laravel'
                    ]
                },
                {
                    image: '/img/portfolio/eventdors.jpg',
                    darkThemeImage: '/img/portfolio/eventdors.jpg',
                    link: 'https://eventdors.com/',
                    name: 'Eventdors',
                    description: 'A online application that eases the processes of event planning and vendor bookings.',
                    type: [
                        'Nuxt.js'
                    ]
                },
                {
                    image: '/img/portfolio/kylianerp.jpg',
                    darkThemeImage: '/img/portfolio/kylianerp.jpg',
                    link: 'https://kylianerp.com/',
                    name: 'KylianERP',
                    description: 'A HR solution for managing organizational processes.',
                    type: [
                        'Vue.js',
                        'Laravel'
                    ]
                },
                {
                    image: '/img/portfolio/kylianerp-jobs.jpg',
                    darkThemeImage: '/img/portfolio/kylianerp-jobs.jpg',
                    link: 'https://jobs.kylianerp.com/',
                    name: 'KylianERP Jobs',
                    description: 'A job board system for staff vacancies, applications, and onboarding.',
                    type: [
                        'Nuxt.js',
                        'Laravel'
                    ]
                },
                {
                    image: '/img/portfolio/chops.jpg',
                    darkThemeImage: '/img/portfolio/chops.jpg',
                    link: 'https://chops.ng/',
                    name: 'Chops',
                    description: 'A online application that caters for food ordering and delivery.',
                    type: [
                        'Nuxt.js',
                        'Vue.js',
                        'Laravel'
                    ]
                },
                {
                    image: '/img/portfolio/leedder.jpg',
                    darkThemeImage: '/img/portfolio/leedder.jpg',
                    link: 'https://play.google.com/store/apps/details?id=com.wbl_nigeria.leedder&hl=en&gl=US',
                    name: 'Leedder',
                    description: 'A social media application for music listening and sharing. Available on Google Playstore & Apple Appstore.',
                    type: [
                        'React Native',
                        'Laravel'
                    ]
                },
                {
                    image: '/img/portfolio/truelandlord.jpg',
                    darkThemeImage: '/img/portfolio/truelandlord.jpg',
                    link: 'https://truelandlord.com/',
                    name: 'Truelandlord',
                    description: 'A real estate web solution for simplifying the process of managing and renting properties.',
                    type: [
                        'Nuxt.js'
                    ]
                },
                {
                    image: '/img/portfolio/hands-of-comfort.jpg',
                    darkThemeImage: '/img/portfolio/hands-of-comfort.jpg',
                    link: 'https://handsofcomfort.ng/',
                    name: 'Hands of Comfort Foundation',
                    description: 'A web portal for a Non-Governmental Organization.',
                    type: [
                        'Laravel'
                    ]
                },
                {
                    image: '/img/portfolio/leaders-insurance.jpg',
                    darkThemeImage: '/img/portfolio/leaders-insurance.jpg',
                    link: 'https://leadersbrokers.com/',
                    name: 'Leaders Insurance Brokers Limited',
                    description: 'A web portal for a professional insurance brokerage company.',
                    type: [
                        'Laravel'
                    ]
                },
            ],
            articles: [
                {
                    title: 'Vue.js Tutorial - Basic Inventory - Basics of Vue 3, Axios & Pinia',
                    dateAdded: new Date('Apr 9, 2023'),
                    image: '/img/blog/2.jpg',
                    link: 'https://danikoko.hashnode.dev/vuejs-tutorial-basic-inventory'
                },
                {
                    title: 'Benefits of the Vue.js Composition API',
                    dateAdded: new Date('Mar 11, 2023'),
                    image: '/img/blog/1.jpg',
                    link: 'https://danikoko.hashnode.dev/benefits-of-the-vuejs-composition-api'
                }
            ]
        } as Profile,
        API_URL: 'https://danikoko.com/api' /* http://127.0.0.1:8000/api */ as string
    }),
    actions: {
        changeTheme() {
            this.darkTheme = !this.darkTheme;
        }
    }
});

export default useMainStore;

