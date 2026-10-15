import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';
import client from "@/sanity/sanity.client";

export const imageBuilder = createImageUrlBuilder(client);

export const imageUrl = (source: SanityImageSource, width = 600) => {
    return imageBuilder.image(source).width(width).url();
};

export const imageUrlFit = (source: SanityImageSource, width: number, height: number) => {
    return imageBuilder.image(source).width(width).height(height).crop('top').fit('crop').url();
};

export const imageMax = (source: SanityImageSource) => {
    return imageBuilder.image(source).fit('max').url();
};
