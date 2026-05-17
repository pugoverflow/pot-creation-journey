import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-container flex min-h-[50vh] flex-col items-center justify-center gap-6 py-14 text-center">
      <h1 className="type-homepage-title">Page not found</h1>

      <p className="type-body-large max-w-md">
        The page you are looking for does not exist or may have been moved.
      </p>

      <Link
        href="/"
        className="inline-flex h-[46px] items-center justify-center rounded-[40px] bg-[var(--color-yellow-50)] px-10 py-2.5 type-button-cta transition-colors"
      >
        Back to homepage
      </Link>
    </main>
  );
}
