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
        course: string,
        description: string
    }
    
    export interface Experience {
        from: number,
        to: number|'Today',
        company: string,
        role: string,
        description: string
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
        darkThemeImage: string,
        name: string,
        description: string,
        link: string,
        type: ('Vue.js'|'Nuxt.js'|'React.js'|'Next.js'|'React Native'|'Laravel')[]
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
        link: string
    }
    
    export interface Profile {
        firstName: string,
        lastName: string,
        description: string,
        address: string,
        phoneNumber: string,
        email: string,
        socialMedia: SocialMedia,
        roles: string[],
        biography: string,
        dob: Date,
        languages: string[],
        nationality: string,
        education: Education[],
        experiences: Experience[],
        tools: Tool[],
        skillSet: Skill[],
        projectsDone: Project[],
        reference: {
            summary: string,
            list: Reference[]
        },
        articles: Article[]
    }
}