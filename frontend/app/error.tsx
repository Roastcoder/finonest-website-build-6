'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">500</h1>
        <p className="text-xl text-gray-600 mt-4">Something went wrong</p>
        <button 
          onClick={reset}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Try again
        </button>
      </div>
    </div>
  )
