type serviceBannerType = {
    img: string;
    alt: string;
    title: string;
}

type serviceListType = {
    id: number;
    img: string;
    alt: string;
    title: string;
    content: string;
    fullContent?: string[];
    slug?: string;
}

type serviceTitleType = {
    title: string, 
    description: string
}
export type ServiceType = {
    banner: serviceBannerType;
    serviceTitle: serviceTitleType
    services: serviceListType[];
}