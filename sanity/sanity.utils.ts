import imageUrlBuilder from '@sanity/image-url';
import client from "@/sanity/sanity.client";

export const imageBuilder = imageUrlBuilder(client);

export const imageUrl = (source: any, width = 600) => {
    return imageBuilder.image(source).width(width).url();
};

export const imageUrlFit = (source: any, width: number, height: number) => {
    return imageBuilder.image(source).width(width).height(height).crop('top').fit('crop').url();
};

export const imageMax = (source: any) => {
    return imageBuilder.image(source).fit('max').url();
};
