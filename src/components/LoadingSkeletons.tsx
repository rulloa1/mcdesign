/**
 * Loading skeleton components for async data fetching states
 * Use these when loading data from APIs or performing async operations
 */

export const ProjectCardSkeleton = () => (
  <div className="animate-pulse">
    <div className="bg-gray-300 h-64 rounded-lg mb-4" />
    <div className="bg-gray-300 h-4 rounded w-3/4 mb-2" />
    <div className="bg-gray-300 h-4 rounded w-1/2" />
  </div>
);

export const ProjectGridSkeleton = ({ count = 6 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array(count).fill(0).map((_, i) => (
      <ProjectCardSkeleton key={i} />
    ))}
  </div>
);

export const DesignAlbumSkeleton = () => (
  <div className="animate-pulse h-96 bg-gray-300 rounded-lg" />
);

export const DesignGridSkeleton = ({ count = 4 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {Array(count).fill(0).map((_, i) => (
      <DesignAlbumSkeleton key={i} />
    ))}
  </div>
);

export const TextSkeleton = ({ lines = 3 }: { lines?: number }) => (
  <div className="space-y-2 animate-pulse">
    {Array(lines).fill(0).map((_, i) => (
      <div
        key={i}
        className={`bg-gray-300 h-4 rounded ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
      />
    ))}
  </div>
);

/**
 * Example usage in a component with data fetching:
 *
 * const YourComponent = () => {
 *   const { data, isLoading, error } = useQuery({
 *     queryKey: ['projects'],
 *     queryFn: fetchProjects,
 *   });
 *
 *   if (isLoading) return <ProjectGridSkeleton />;
 *   if (error) return <div>Error loading projects</div>;
 *
 *   return (
 *     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 *       {data.map(project => (
 *         <ProjectCard key={project.id} project={project} />
 *       ))}
 *     </div>
 *   );
 * };
 */
