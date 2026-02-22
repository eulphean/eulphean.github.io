import Image from "next/image";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  heroImage: string;
}

export default function ProjectHero({
  title,
  subtitle,
  heroImage,
}: ProjectHeroProps) {
  return (
    <div className="relative w-full h-[70vh] mt-16">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      {/* Title Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
        <div className="max-w-4xl">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              {title}
            </h1>
            <div className="sm:hidden text-lg text-gray-300">BUILD</div>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mt-4">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
