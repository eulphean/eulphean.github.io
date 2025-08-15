'use client'

import Link from 'next/link';
import { useGSAPTextAnimation } from '../hooks/useGSAPAnimation';

type AnimatedNavLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export default function AnimatedNavLink({ 
  href, 
  children, 
  external = false, 
  className = '' 
}: AnimatedNavLinkProps) {
  const { elementRef, playAnimation, reverseAnimation } = useGSAPTextAnimation();

  const baseClassName = `cursor-pointer ${className}`;

  if (external) {
    return (
      <a
        ref={elementRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={playAnimation}
        onMouseLeave={reverseAnimation}
        onClick={reverseAnimation}
        className={baseClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      ref={elementRef as React.RefObject<HTMLAnchorElement>}
      href={href}
      onMouseEnter={playAnimation}
      onMouseLeave={reverseAnimation}
      onClick={reverseAnimation}
      className={baseClassName}
    >
      {children}
    </Link>
  );
}