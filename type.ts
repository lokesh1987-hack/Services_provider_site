type NavbarHeading = [string, string];

type LinkData = {
    id: number;
    name: string;
    path: string;
};

type FooterType = {
    id: number;
    title: string;
    data: LinkData[];
};

type ImageUrl = {
    id: number,
    image_url: string,
}

interface BlogType extends ImageUrl {
    description: string,
    redirect_url: string
}

interface TeamDataType extends ImageUrl {
    name: string,
    instagram_profile: string,
    twitter_profile: string,
}

type ValueDataType = {
    id: number,
    title: string,
    des: string,
    redirect_url: string,
    redirect_urlname: string,
}

type ServicesCardType = {
    id: number,
    title: string,
    desc: string,
    redirect_url: string,
    button_title: string,
}

interface WorkDataType extends ImageUrl {
    project_name: string,
    project_url: string,
    category_name: string,
    category_url: string,
}