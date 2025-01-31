import { SpeakerRow } from './SpeakersRow';
import { cn } from '../lib/utils';

interface Speaker {
  name: string;
  image: string;
  topics: string[];
  languages: string[];
  rating: number;
  socialLinks: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    instagram?: string;
    tiktok?: string;
    spotify?: string;
    discord?: string;
    github?: string;
  };
}

interface SpeakersTableProps {
  speakers: Speaker[];
  className?: string;
}

export function SpeakersTable({ speakers, className }: SpeakersTableProps) {
  if (!speakers?.length) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center p-8',
          'bg-[var(--color-background-0)]',
          'border border-[var(--color-background-100)]',
          'rounded-lg',
          className
        )}
      >
        <p className="text-[var(--color-text-600)]">No speakers found</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'bg-[var(--color-background-0)]',
        'border border-[var(--color-background-100)]',
        'rounded-lg',
        'overflow-hidden',
        className
      )}
      role="table"
      aria-label="Speakers list"
    >
      {/* Table Header */}
      <div
        className="flex items-center px-6 py-3 border-b border-[var(--color-background-100)]"
        role="row"
      >
        <div className="flex-1 min-w-[200px]" role="columnheader">
          {/* Empty space for avatar and name */}
        </div>
        <div className="flex gap-8 flex-1 max-w-[400px]" role="columnheader">
          <span className="text-sm font-medium text-[var(--color-text-600)]">Topics</span>
          <span className="text-sm font-medium text-[var(--color-text-600)]">Languages</span>
        </div>
        <div className="flex-1" role="columnheader">
          {/* Empty space for social links and actions */}
        </div>
      </div>

      {/* Table Body */}
      <div role="rowgroup">
        {speakers.map((speaker, index) => (
          <SpeakerRow key={index} {...speaker} />
        ))}
      </div>
    </div>
  );
}
