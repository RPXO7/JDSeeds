import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#1B5E20] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#1B5E20] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2E7D32] transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

