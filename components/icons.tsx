import React from 'react';

export const EMOJI_MAP: Record<string, { src: string; alt: string }> = {
  '💛': { src: '/emojis/yellow-heart.svg', alt: '💛' },
  '🎂': { src: '/emojis/birthday-cake.svg', alt: '🎂' },
  '✨': { src: '/emojis/sparkles.svg', alt: '✨' },
  '🌷': { src: '/emojis/tulip.svg', alt: '🌷' },
  '🎉': { src: '/emojis/party-popper.svg', alt: '🎉' },
  '🥂': { src: '/emojis/clinking-glasses.svg', alt: '🥂' },
  '💌': { src: '/emojis/love-letter.svg', alt: '💌' },
};

export function Emoji({
  symbol,
  className = '',
  size = 24,
}: {
  symbol: string;
  className?: string;
  size?: number;
}) {
  const item = EMOJI_MAP[symbol];
  if (!item) return <span className={className}>{symbol}</span>;
  return (
    <img
      src={item.src}
      alt={item.alt}
      width={size}
      height={size}
      className={`inline-emoji ${className}`}
      loading="lazy"
      draggable={false}
      style={{
        display: 'inline-block',
        verticalAlign: '-0.2em',
        width: `${size}px`,
        height: `${size}px`,
        objectFit: 'contain',
      }}
    />
  );
}

export function Asterisk({
  className = '',
  size = 20,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: '-0.1em' }}
    >
      <path d="M12 2a1 1 0 0 1 1 1v6.586l4.657-4.657a1 1 0 1 1 1.414 1.414L14.414 11H21a1 1 0 1 1 0 2h-6.586l4.657 4.657a1 1 0 0 1-1.414 1.414L13 14.414V21a1 1 0 1 1-2 0v-6.586l-4.657 4.657a1 1 0 0 1-1.414-1.414L9.586 13H3a1 1 0 1 1 0-2h6.586L4.929 6.343a1 1 0 0 1 1.414-1.414L11 9.586V3a1 1 0 0 1 1-1z" />
    </svg>
  );
}

export function DiamondStar({
  className = '',
  size = 80,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2 C12 7, 7 12, 2 12 C7 12, 12 17, 12 22 C12 17, 17 12, 22 12 C17 12, 12 7, 12 2 Z" />
    </svg>
  );
}

export function FourPointStar({
  className = '',
  size = 12,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: '-0.1em' }}
    >
      <path d="M12 2 C12 7.5, 7.5 12, 2 12 C7.5 12, 12 16.5, 12 22 C12 16.5, 16.5 12, 22 12 C16.5 12, 12 7.5, 12 2 Z" />
    </svg>
  );
}

export function HeartOutline({
  className = '',
  size = 22,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: '-0.15em' }}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function ArrowUpRight({
  className = '',
  size = 13,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: '-0.05em' }}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function ArrowDown({
  className = '',
  size = 12,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: '-0.05em' }}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

export function ArrowDownLeft({
  className = '',
  size = 32,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="17" y1="7" x2="7" y2="17" />
      <polyline points="17 17 7 17 7 7" />
    </svg>
  );
}

export function CheckIcon({
  className = '',
  size = 12,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: '-0.1em' }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
