'use client'

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function useGSAPTextAnimation() {
  const elementRef = useRef<HTMLElement>(null);
  const animationRef = useRef<GSAPTween | null>(null);

  const { contextSafe } = useGSAP(() => {
    if (typeof window !== 'undefined' && elementRef.current) {
      animationRef.current = gsap.to(elementRef.current, {
        color: "red", 
        rotationZ: -5, 
        scale: 1.25, 
        duration: 0.5
      }).pause();
    }
  }, []);

  const playAnimation = contextSafe(() => animationRef.current?.play());
  const reverseAnimation = contextSafe(() => animationRef.current?.reverse());

  return {
    elementRef,
    playAnimation,
    reverseAnimation
  };
}

export function useGSAPIconAnimation() {
  const elementRef = useRef<HTMLElement>(null);
  const animationRef = useRef<GSAPTween | null>(null);

  const { contextSafe } = useGSAP(() => {
    if (typeof window !== 'undefined' && elementRef.current) {
      animationRef.current = gsap.to(elementRef.current, {
        backgroundColor: "red", 
        rotationZ: -5, 
        scale: 1.5, 
        duration: 0.5
      }).pause();
    }
  }, []);

  const playAnimation = contextSafe(() => animationRef.current?.play());
  const reverseAnimation = contextSafe(() => animationRef.current?.reverse());

  return {
    elementRef,
    playAnimation,
    reverseAnimation
  };
}