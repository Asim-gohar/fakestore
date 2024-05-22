import Image from "next/image";

// Define the type for the props parameter
type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

const contentfulLoader = ({ src, width, quality = 75 }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality}`;
};

const imageLoader = (props: ImageLoaderProps) => {
  return <Image loader={contentfulLoader} {...props} alt=""/>;
};

export default imageLoader;
