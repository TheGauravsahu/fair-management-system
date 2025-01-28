import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 min-h-screen flex items-center justify-center p-4">
      <div className="fixed -z-10 bottom-auto left-1/2 right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>

      <div className="text-center space-y-6 z-50">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-3xl font-semibold">Page Not Found</h2>
        <p className="text-foreground/30 text-lg max-w-md mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="inline-block hover:underline text-primary">
          Return to Home
        </Link>
      </div>
    </main>
  );
}
