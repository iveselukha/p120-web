import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-24 px-4 bg-white dark:bg-black">
      <div className="w-full max-w-sm bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl shadow p-8 flex flex-col gap-6">
        <h1 className="text-2xl font-bold mb-2 text-left">Sign in to Project120</h1>
        <form className="flex flex-col gap-4">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium">Email</span>
            <input type="email" required className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-base font-mono focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white" placeholder="you@email.com" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium">Password</span>
            <input type="password" required className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-base font-mono focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white" placeholder="••••••••" />
          </label>
          <button type="submit" className="mt-2 px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-base border border-black dark:border-white hover:bg-gray-900 dark:hover:bg-gray-200 transition">Sign in</button>
        </form>
        <div className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
          Don&apos;t have an account? <Link href="/signup" className="underline hover:text-black dark:hover:text-white">Sign up</Link>
        </div>
      </div>
    </main>
  );
} 