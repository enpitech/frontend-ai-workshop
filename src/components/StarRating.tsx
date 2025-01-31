import { Star } from 'lucide-react';
import { cn } from '../lib/utils';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
}

export function StarRating({ rating, maxRating = 5, className }: StarRatingProps) {
  return (
    <div
      className={cn('flex gap-1', className)}
      role="img"
      aria-label={`Rating: ${rating} out of ${maxRating} stars`}
    >
      {[...Array(maxRating)].map((_, index) => {
        const isFilled = index < rating;
        return (
          <Star
            key={index}
            className={cn(
              'h-6 w-6', // 24x24px
              'transition-colors',
              isFilled
                ? 'fill-[var(--color-blue-500)] stroke-[var(--color-blue-500)]'
                : 'fill-transparent stroke-[var(--color-blue-500)]'
            )}
          />
        );
      })}
    </div>
  );
}
