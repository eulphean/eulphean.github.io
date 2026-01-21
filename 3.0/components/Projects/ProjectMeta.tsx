interface ProjectMetaProps {
  client: string;
  role: string;
  date: string;
  duration: string;
  location: string;
}

export default function ProjectMeta({
  client,
  role,
  date,
  duration,
  location,
}: ProjectMetaProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 border-b border-gray-200">
      <div className="flex flex-wrap justify-between gap-8">
        <div>
          <span className="text-gray-400 text-xs tracking-widest block mb-2">
            CLIENT
          </span>
          <span className="text-gray-900 text-sm font-medium">{client}</span>
        </div>
        <div>
          <span className="text-gray-400 text-xs tracking-widest block mb-2">
            LOCATION
          </span>
          <span className="text-gray-900 text-sm font-medium">{location}</span>
        </div>
        <div>
          <span className="text-gray-400 text-xs tracking-widest block mb-2">
            TIMELINE
          </span>
          <span className="text-sm font-medium">
            <span className="text-gray-900">{date}</span>
            <span className="text-gray-400"> / {duration}</span>
          </span>
        </div>
        <div className="text-right">
          <span className="text-gray-400 text-xs tracking-widest block mb-2">
            ROLE
          </span>
          <span className="text-gray-900 text-sm font-medium">{role}</span>
        </div>
      </div>
    </div>
  );
}
