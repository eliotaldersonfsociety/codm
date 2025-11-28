import { lazy, Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

const LoginContent = lazy(() => import("./login-content"))

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background">
        {/* Header skeleton */}
        <div className="h-16 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>

        {/* Main content skeleton */}
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 pt-16">
          <div className="w-full max-w-md space-y-8">
            {/* Logo skeleton */}
            <div className="flex justify-center">
              <Skeleton className="h-16 w-16 rounded-xl" />
            </div>

            {/* Title and description skeleton */}
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <Skeleton className="h-8 w-3/4 mx-auto" />
                <Skeleton className="h-4 w-1/2 mx-auto" />
              </div>

              {/* Form skeleton */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-10 w-full" />
                </div>

                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full" />
                </div>

                <div className="flex justify-end">
                  <Skeleton className="h-4 w-32" />
                </div>

                <Skeleton className="h-10 w-full" />

                <div className="text-center">
                  <Skeleton className="h-4 w-48 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer skeleton */}
        <div className="h-16 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
      </div>
    }>
      <LoginContent />
    </Suspense>
  )
}
