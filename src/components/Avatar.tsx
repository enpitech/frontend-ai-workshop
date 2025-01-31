import { cn } from '../lib/utils';
import { useState } from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  fallback?: string;
  className?: string;
}

export function Avatar({ src, alt, size = 'md', fallback = 'User', className }: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  const getFallbackInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={cn(
        'relative rounded-full overflow-hidden ring-2 ring-[var(--color-background-0)] bg-[var(--color-background-100)]',
        sizeClasses[size],
        className
      )}
    >
      {!imageError ? (
        <img
          src={src || '/placeholder.svg'}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
          loading="lazy"
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center text-[var(--color-text-600)] bg-[var(--color-background-100)]"
          role="img"
          aria-label={alt}
        >
          {getFallbackInitials(fallback)}
        </div>
      )}
    </div>
  );
}
