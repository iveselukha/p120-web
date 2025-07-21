import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen flex flex-col items-center py-16 px-4 bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="w-full max-w-4xl text-left mb-16">
        <h1 className="text-4xl font-bold mb-4">How Project120 Works</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl">
          Take control of your health journey in four simple steps. Our platform makes advanced lab testing, continuous monitoring, and AI-powered insights accessible and actionable for everyone.
        </p>
      </section>
      {/* Step-by-step Timeline */}
      <section className="w-full max-w-4xl mb-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
          {/* Step 1 */}
          <div className="flex flex-col items-center flex-1 min-w-[180px]">
            <div className="w-14 h-14 rounded-full bg-white dark:bg-black border-4 border-black dark:border-white flex items-center justify-center text-2xl font-bold mb-4">1</div>
            <span className="font-semibold mb-2">Order & Test</span>
            <span className="text-sm text-gray-600 dark:text-gray-300 text-center">Choose your panel and visit a partner pharmacy or order an at-home kit for sample collection.</span>
          </div>
          <div className="hidden md:block h-1 w-8 bg-gray-300 dark:bg-gray-700 mx-2"></div>
          {/* Step 2 */}
          <div className="flex flex-col items-center flex-1 min-w-[180px]">
            <div className="w-14 h-14 rounded-full bg-white dark:bg-black border-4 border-black dark:border-white flex items-center justify-center text-2xl font-bold mb-4">2</div>
            <span className="font-semibold mb-2">Connect Your Data</span>
            <span className="text-sm text-gray-600 dark:text-gray-300 text-center">Sync your wearable devices and lifestyle apps for a complete health profile.</span>
          </div>
          <div className="hidden md:block h-1 w-8 bg-gray-300 dark:bg-gray-700 mx-2"></div>
          {/* Step 3 */}
          <div className="flex flex-col items-center flex-1 min-w-[180px]">
            <div className="w-14 h-14 rounded-full bg-white dark:bg-black border-4 border-black dark:border-white flex items-center justify-center text-2xl font-bold mb-4">3</div>
            <span className="font-semibold mb-2">AI Analysis</span>
            <span className="text-sm text-gray-600 dark:text-gray-300 text-center">Our AI reviews your results and lifestyle data to generate actionable insights.</span>
          </div>
          <div className="hidden md:block h-1 w-8 bg-gray-300 dark:bg-gray-700 mx-2"></div>
          {/* Step 4 */}
          <div className="flex flex-col items-center flex-1 min-w-[180px]">
            <div className="w-14 h-14 rounded-full bg-white dark:bg-black border-4 border-black dark:border-white flex items-center justify-center text-2xl font-bold mb-4">4</div>
            <span className="font-semibold mb-2">Take Action</span>
            <span className="text-sm text-gray-600 dark:text-gray-300 text-center">Receive personalized recommendations and start building healthy habits.</span>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="w-full max-w-2xl flex flex-col items-center mb-8">
        <Link href="/blood-tests" className="px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-lg border border-black dark:border-white hover:bg-gray-900 dark:hover:bg-gray-200 transition flex items-center gap-2">
          Explore blood test panels
        </Link>
      </section>
    </main>
  );
} 