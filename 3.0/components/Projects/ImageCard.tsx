import Image from 'next/image';
import Link from 'next/link';

interface ImageCardProps {
  src: string;
  title: string;
  subtitle?: string;
  href?: string;
}

export default function ImageCard({ src, title, subtitle, href }: ImageCardProps) {
  const content = (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 mb-3">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-500 transition-colors">
            {title}
          </h4>
          {subtitle && (
            <p className="text-xs text-gray-400 tracking-wide mt-1">{subtitle}</p>
          )}
        </div>
        {href && (
          <svg
            className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
