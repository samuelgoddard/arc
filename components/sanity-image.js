import Image from 'next/image'
import sanity from '@/services/sanity'
import { useContext, useState } from 'react';
import { useNextSanityImage } from 'next-sanity-image';

export default function SanityImage({ image, className, alt, priority, widthOverride, quality, focalPoint, sizes, noBg }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  const myCustomImageBuilder = (imageUrlBuilder, options) => {
    return imageUrlBuilder
      .width((widthOverride ? widthOverride : options.width) || Math.min(( widthOverride ? widthOverride : options.originalImageDimensions.width), 800))
      .quality(quality ? quality : 75)
      .fit('clip')
  };

  // Generate actual URL
	const imageProps = useNextSanityImage(sanity.config, image.asset, { imageBuilder: myCustomImageBuilder });

  // Generate attributes for Img component
  const attributes = {};

  if (focalPoint?.x && focalPoint?.y) {
    const { x, y } = focalPoint;
    attributes.objectPosition = `${x * 100}% ${y * 100}%`;
  }

  if (image.alt) { attributes.alt = image.alt } else { attributes.alt = 'MISSING ALT TEXT' }
  if (priority) { attributes.priority = true } else { attributes.priority = false }

	return(
    <figure className={`image ${!noBg ? 'bg-black/20' : ''} ${className} cover-image absolute inset-0 w-full h-full object-cover object-center`}>

		  <Image
        src={imageProps.src}
        loader={imageProps.loader}
        className={`will-change-transform transition-all ease-custom duration-[660ms] object-cover object-center ${imageIsLoaded ? 'scale-1 opacity-100' : 'scale-[1.025] opacity-0'}`}
        {...(priority ? {
          priority: true} : {}
        )}
        sizes={sizes ? sizes : `(max-width: 1024px) 100vw,90vw`}
        fill
        quality={quality ? quality : 75}
        alt={alt ? alt : 'MISSING ALT TEXT'}

        onLoad={event => {
          const target = event.target;
          if (target.src.indexOf('data:image/gif;base64') < 0) {
            setImageIsLoaded(true)
          }
        }}
      />
    </figure>
  )
}