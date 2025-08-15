'use client'

import Image from 'next/image';
import { useGSAPIconAnimation } from '../hooks/useGSAPAnimation';

type AnimatedSocialIconProps = {
  href: string;
  src: any;
  alt: string;
  size?: number;
}

export default function AnimatedSocialIcon({ 
  href, 
  src, 
  alt, 
  size = 24 
}: AnimatedSocialIconProps) {
  const { elementRef, playAnimation, reverseAnimation } = useGSAPIconAnimation();

  return (
    <a
      ref={elementRef as React.RefObject<HTMLAnchorElement>}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={playAnimation}
      onMouseLeave={reverseAnimation}
      onClick={reverseAnimation}
      className="cursor-pointer"
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
      />
    </a>
  );
}