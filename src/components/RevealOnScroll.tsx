import React, { useEffect, useRef, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  id?: string;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 320,
  threshold = 0.05,
  className = '',
  id
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check for user's reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      setAnimationDone(true);
      return;
    }

    // Immediate check if element is already in or near viewport (expanded margin)
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight + 300) {
      setIsVisible(true);
      const doneTimer = setTimeout(() => setAnimationDone(true), duration + delay + 50);
      return () => clearTimeout(doneTimer);
    }

    // Safety fallback: Ensure element is ALWAYS visible within 350ms even if observer fails or iframe restricts it
    const safetyTimer = setTimeout(() => {
      setIsVisible(true);
      setAnimationDone(true);
    }, 350);

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      setAnimationDone(true);
      return () => clearTimeout(safetyTimer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(safetyTimer);
          observer.unobserve(element);
          setTimeout(() => setAnimationDone(true), duration + delay + 50);
        }
      },
      {
        threshold: 0.01,
        rootMargin: '280px 0px 280px 0px'
      }
    );

    observer.observe(element);

    return () => {
      clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, [threshold, duration, delay]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up':
        return 'translate3d(0, 20px, 0)';
      case 'down':
        return 'translate3d(0, -20px, 0)';
      case 'left':
        return 'translate3d(20px, 0, 0)';
      case 'right':
        return 'translate3d(-20px, 0, 0)';
      case 'fade':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={elementRef}
      id={id}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: animationDone ? 'auto' : 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};
