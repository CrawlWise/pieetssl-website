interface bannerType {
    img: string,
    alt: string,
    title: string,
}

interface contentType {
    img: string,
    altText: string,
    title: string,
    content: string[],
}

interface bannerTypeOnline {
    title: string,
    url: string,
    description: string,
}

interface videoType {
    id: number
    title: string,
    url: string,
    thumbnail?: string,
    description: string,
}

export interface contentTypeOnline {
    title: string,
    content: string[],
    videos: {
        [key: string]: videoType // this approach used the index signature
    }
}


export interface virtualVisitInterface {
    banner: bannerType,
    content: contentType,
}


export interface virtualVisitOnlineType {
    banner: bannerTypeOnline,
    content: contentTypeOnline
}