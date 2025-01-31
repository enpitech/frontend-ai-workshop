import { Avatar } from './Avatar';
import { StarRating } from './StarRating';
import { SessionsButton } from './SessionsButton';
import { Facebook, Twitter, Linkedin, Instagram, TwitterIcon as TikTok } from 'lucide-react';
import { cn } from '../lib/utils';

interface SpeakerSocialLinks {
  twitter?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  tiktok?: string;
}

interface SpeakerRowProps {
  name: string;
  image: string;
  topics: string[];
  languages: string[];
  rating: number;
  socialLinks: SpeakerSocialLinks;
  className?: string;
}

export function SpeakerRow({
  name,
  image,
  topics,
  languages,
  rating,
  socialLinks,
  className,
}: SpeakerRowProps) {
  const SocialIcon = ({
    href,
    icon: Icon,
    label,
  }: {
    href?: string;
    icon: typeof Twitter;
    label: string;
  }) => {
    if (!href) return null;

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'text-[var(--color-text-400)]',
          'hover:text-[var(--color-text-900)]',
          'transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-2',
          'focus-visible:ring-[var(--color-blue-500)]',
          'rounded-sm'
        )}
        aria-label={`${name}'s ${label} profile`}
      >
        <Icon className="w-5 h-5" />
      </a>
    );
  };

  return (
    <div
      className={cn(
        'flex items-center justify-between py-4 px-6',
        'bg-[var(--color-background-0)]',
        'border-b border-[var(--color-background-100)]',
        'hover:bg-[var(--color-background-50)]',
        'transition-colors duration-200',
        className
      )}
    >
      {/* Speaker Info */}
      <div className="flex items-center gap-4 flex-1 min-w-[200px]">
        <Avatar src={image} alt={name} size="md" fallback={name} />
        <span className="font-medium text-[var(--color-text-900)]">{name}</span>
      </div>

      {/* Topics and Languages */}
      <div className="flex gap-8 flex-1 max-w-[400px]">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-[var(--color-mint-500)]">{topics.join(', ')}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-[var(--color-text-400)]">{languages.join(', ')}</span>
        </div>
      </div>

      {/* Social Links and Actions */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <SocialIcon href={socialLinks.twitter} icon={Twitter} label="Twitter" />
          <SocialIcon href={socialLinks.tiktok} icon={TikTok} label="TikTok" />
          <SocialIcon href={socialLinks.facebook} icon={Facebook} label="Facebook" />
          <SocialIcon href={socialLinks.linkedin} icon={Linkedin} label="LinkedIn" />
          <SocialIcon href={socialLinks.instagram} icon={Instagram} label="Instagram" />
        </div>

        <SessionsButton />

        <StarRating rating={rating} readonly size="sm" />
      </div>
    </div>
  );
}
