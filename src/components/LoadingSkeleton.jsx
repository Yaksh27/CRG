// Loading skeleton component for better UX during API calls
const LoadingSkeleton = () => {
  return (
    <div className="space-y-4">
      {/* Skeleton for search and filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="h-10 bg-gray-200 rounded-lg animate-pulse flex-1"></div>
        <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-32"></div>
        <div className="h-10 bg-gray-200 rounded-lg animate-pulse w-32"></div>
      </div>

      {/* Skeleton for book cards/table */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg border p-4 animate-pulse">
            {/* Title skeleton */}
            <div className="h-6 bg-gray-200 rounded mb-3"></div>
            
            {/* Author skeleton */}
            <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
            
            {/* Genre and year skeleton */}
            <div className="flex gap-2 mb-3">
              <div className="h-4 bg-gray-200 rounded w-20"></div>
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </div>
            
            {/* Status badge skeleton */}
            <div className="h-6 bg-gray-200 rounded w-20 mb-3"></div>
            
            {/* Action buttons skeleton */}
            <div className="flex gap-2">
              <div className="h-8 bg-gray-200 rounded w-16"></div>
              <div className="h-8 bg-gray-200 rounded w-16"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination skeleton */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <div className="h-10 w-20 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-10 w-10 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-10 w-10 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-10 w-10 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-10 w-20 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;