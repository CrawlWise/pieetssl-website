export type bannerType = {
    img: string;
    alt?: string;
    title: string;
}

export type aboutContentType = {
    img: string;
    alt: string;
    title: string;
    content: string[];
}

export type aboutType = {
    contents: aboutContentType;
}

export type aboutOurValuesType = {
    title: string;
    description: string;
    values: {
        _id: string;
        title: string;
        description: string;
        img: string;
    }[];
}

export type aboutTeamMemberType = {
    _id: string,
    name: string,
    role: string,
    bio: string,
    linkedin: string,
    facebook: string,
    x: string,
    img: string,
    alt: string
}