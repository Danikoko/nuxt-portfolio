export {};

declare global {
    export interface SocialMedia {
        twitter: string,
        facebook: string,
        linkedIn: string,
        instagram: string,
        youtube: string,
        github: string,
        telegram: string,
        whatsapp: string
    }
    
    export interface Education {
        from: number,
        to: number|'Today',
        school: string,
        degree: 'O-Level'|'Diploma'|'BSc'|'MSc'|'PhD',
        course: string
    }
    
    export interface Experience {
        from: number,
        to: number|'Today',
        company: string,
        degree: 'O-Level'|'Diploma'|'BSc'|'MSc'|'PhD',
        course: string
    }
    
    export interface Tool {
        skill: string, 
        strength: number
    }
    
    export interface Skill {
        skill: string, 
        strength: number
    }
    
    export interface Project {
        image: string,
        name: string,
        link: string,
        type: 'Vue.js'|'Nuxt'|'React.js'|'Next.js'|'React Native'|'Laravel'[]
    }
    
    export interface Reference {
        message: string,
        image: string,
        name: string,
        rating: number
    }
    
    export interface Article {
        dateAdded: Date,
        title: string,
        image: string,
        htmlBody: string
    }
    
    export interface Profile {
        firstName: string,
        lastName: string,
        description: string,
        address: string,
        phoneNumber: string,
        email: string,
        socialMedia: SocialMedia,
        biography: string,
        dob: Date,
        languages: string[],
        nationality: string,
        education: Education[],
        experiences: Experience[],
        tools: Tool[],
        skillSet: {
            summary: string,
            list: Skill[]
        },
        projectsDone: Project[],
        reference: {
            summary: string,
            list: Reference[]
        },
        articles: Article[]
    }
}