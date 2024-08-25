interface ProjectIcon {
    name: string;
    icon: JSX.Element; 
}

export interface Project{
    title: string,
    text: string,
    image: string,
    icons: ProjectIcon[],
    github: string,
    video?: string,
    page?: string,
} 