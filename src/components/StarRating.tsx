import React from 'react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
}

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${filled ? 'fill-[var(--color-blue-500)] stroke-[var(--color-blue-500)]' : 'fill-transparent stroke-[var(--color-blue-500)]'}`}
    role="presentation"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  className = '',
}) => {
  return (
    <div
      className={`flex gap-1 ${className}`}
      role="img"
      aria-label={`Rating: ${rating} out of ${maxRating} stars`}
    >
      {[...Array(maxRating)].map((_, index) => (
        <StarIcon key={index} filled={index < rating} />
      ))}
    </div>
  );
};
