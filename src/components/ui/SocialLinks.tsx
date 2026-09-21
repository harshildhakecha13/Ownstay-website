export interface SocialLinkItem {
  name: string;
  href: string;
  label: string;
  brandColor: string;
  hoverClass: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    label: 'Follow Ownstay on LinkedIn',
    href: 'https://www.linkedin.com/company/ownstayai/',
    brandColor: '#0A66C2',
    hoverClass:
      'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-md hover:shadow-blue-500/20',
    icon: ({ className = 'w-4 h-4' }: { className?: string }) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    label: 'Connect with Ownstay on Facebook',
    href: 'https://www.facebook.com/share/1F5eXvR9Yv/',
    brandColor: '#1877F2',
    hoverClass:
      'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-md hover:shadow-blue-600/20',
    icon: ({ className = 'w-4 h-4' }: { className?: string }) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    label: 'Follow @ownstay.ai on Instagram',
    href: 'https://www.instagram.com/ownstay.ai?stkn=MTBoMTA5enhkNWJyNg==',
    brandColor: '#E1306C',
    hoverClass:
      'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent hover:shadow-md hover:shadow-pink-500/20',
    icon: ({ className = 'w-4 h-4' }: { className?: string }) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  itemClassName?: string;
  showLabels?: boolean;
  variant?: 'buttons' | 'pills' | 'custom';
}

export default function SocialLinks({
  className = 'flex items-center gap-2.5',
  iconClassName = 'w-4 h-4',
  itemClassName,
  showLabels = false,
  variant = 'buttons',
}: SocialLinksProps) {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map((item) => {
        const IconComponent = item.icon;

        if (variant === 'pills') {
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 text-slate-700 font-semibold text-xs transition-all duration-200 shadow-xs hover:-translate-y-0.5 ${item.hoverClass}`}
              title={item.name}
            >
              <IconComponent className={iconClassName} />
              <span>{item.name}</span>
            </a>
          );
        }

        const buttonClass =
          itemClassName ||
          `w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 flex items-center justify-center transition-all duration-200 shadow-xs hover:-translate-y-0.5 ${item.hoverClass}`;

        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={buttonClass}
            title={item.name}
          >
            <IconComponent className={iconClassName} />
            {showLabels && <span className="text-xs font-semibold">{item.name}</span>}
          </a>
        );
      })}
    </div>
  );
}
