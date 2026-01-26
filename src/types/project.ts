interface ProjectIcon {
    name: string;
    icon: JSX.Element; 
}

export interface Project{
    title: string,
    text: string,
    textEn: string,
    image: string,
    status: string,
    statusEn: string,
    icons: ProjectIcon[],
    github: string,
    video?: string,
    page?: string,
} 