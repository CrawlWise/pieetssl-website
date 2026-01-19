export type contactBannertype = {
    img: string;
    alt: string;    
    title: string;
} 

export type contactContentType = {
    title: string;
    description: string;
}

type subInformationItemType = {
    icon: string;
    title: string;
    content: string;
}
export type subInformationType = {
    title: string;
    description: string;
    subInformation: subInformationItemType[];
}
