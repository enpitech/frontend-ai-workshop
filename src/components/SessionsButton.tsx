import { cn } from '../lib/utils';
import { Button } from './ui/button';
import type React from 'react';

interface SessionsButtonProps
  extends Omit<React.ComponentProps<typeof Button>, 'children' | 'variant'> {
  className?: string;
  isPending?: boolean;
}

export function SessionsButton({ isPending = false, className, ...props }: SessionsButtonProps) {
  return (
    <Button
      variant="outline"
      isLoading={isPending}
      className={cn('gap-2 text-sm font-medium', className)}
      aria-label="View sessions"
      {...props}
    >
      <span>Sessions</span>
      <YoutubeIcon />
    </Button>
  );
}

function YoutubeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'transition-colors duration-200',
        'fill-[var(--color-error-500)]',
        'group-hover:fill-[var(--color-blue-600)]'
      )}
    >
      <path d="M15.665 4.127C15.481 3.418 14.967 2.904 14.258 2.72C13.006 2.4 7.99995 2.4 7.99995 2.4C7.99995 2.4 2.99395 2.4 1.74195 2.72C1.03295 2.904 0.518955 3.418 0.334955 4.127C0.0149546 5.379 0.0149546 8 0.0149546 8C0.0149546 8 0.0149546 10.621 0.334955 11.873C0.518955 12.582 1.03295 13.096 1.74195 13.28C2.99395 13.6 7.99995 13.6 7.99995 13.6C7.99995 13.6 13.006 13.6 14.258 13.28C14.967 13.096 15.481 12.582 15.665 11.873C15.985 10.621 15.985 8 15.985 8C15.985 8 15.985 5.379 15.665 4.127ZM6.39995 10.4V5.6L10.532 8L6.39995 10.4Z" />
    </svg>
  );
}
