"use client";
import React from "react";
import { HeartIcon, Cog6ToothIcon, ChartBarIcon, SparklesIcon, ArrowTrendingUpIcon, TrophyIcon } from "@heroicons/react/24/outline";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen flex flex-col items-center py-16 px-4 bg-white dark:bg-black">
      <section className="w-full max-w-3xl mb-12">
        <h1 className="text-4xl font-bold mb-4">How It Works</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          <span className="font-semibold">Project120 is an intelligent health engine.</span><br />
          It turns your raw health data into tailored, science-based actions — helping you stay on track, prevent issues early, and improve key biomarkers over time.
        </p>
        <p className="text-base text-gray-700 dark:text-gray-300 mb-8">
          <span className="italic">We’re not a dashboard. We’re a behavior change system.</span>
        </p>
      </section>

      {/* Step 1 */}
      <section className="w-full max-w-3xl flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-8 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-lg">1</span>
          <span className="text-xl font-semibold flex items-center gap-2">Define Your Goal <HeartIcon className="w-5 h-5 inline" /></span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-2">Choose what matters to you:</p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-6 mb-2">
          <li>Sleep better</li>
          <li>Lose weight or build muscle</li>
          <li>Improve mood or reduce stress</li>
          <li>Boost energy</li>
          <li>Increase endurance</li>
          <li>Optimise long-term health</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">
          Your goal shapes every insight you receive — so the platform stays focused on what you care about.
        </p>
      </section>

      {/* Step 2 */}
      <section className="w-full max-w-3xl flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-8 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-lg">2</span>
          <span className="text-xl font-semibold flex items-center gap-2">Gather Your Data <Cog6ToothIcon className="w-5 h-5 inline" /></span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-2">We combine multiple data types to build your health profile:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 dark:border-gray-800 rounded mb-2">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-900">
                <th className="py-2 px-4 text-left font-semibold">Data Type</th>
                <th className="py-2 px-4 text-left font-semibold">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4">Biomarkers</td>
                <td className="py-2 px-4">Blood test results (e.g. LDL, HbA1c, CRP, vitamin D, omega-3 index)</td>
              </tr>
              <tr className="border-t border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4">Wearables</td>
                <td className="py-2 px-4">Sleep, heart rate, HRV, step count, activity, Garmin sync</td>
              </tr>
              <tr className="border-t border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4">Nutrition</td>
                <td className="py-2 px-4">Meal photos, protein/macronutrient balance, meal timing</td>
              </tr>
              <tr className="border-t border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4">Environment</td>
                <td className="py-2 px-4">Air pollution, screen time, app usage patterns</td>
              </tr>
              <tr className="border-t border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4">Subjective input</td>
                <td className="py-2 px-4">Self-reported goals, mood, energy levels</td>
              </tr>
              <tr className="border-t border-gray-100 dark:border-gray-800">
                <td className="py-2 px-4">AI-detected traits</td>
                <td className="py-2 px-4">Gender/age estimation via selfie (optional)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          You can start simple — with just your wearable and a few meal photos. We’ll build your baseline from there.
        </p>
      </section>

      {/* Step 3 */}
      <section className="w-full max-w-3xl flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-8 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-lg">3</span>
          <span className="text-xl font-semibold flex items-center gap-2">Get Your Health Score <ChartBarIcon className="w-5 h-5 inline" /></span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          We generate a personalized score (0–100) that reflects how your current data stacks up against your goal. It updates as your data changes — and shows you where to focus.
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-6 mb-2">
          <li><span className="font-semibold">Goal-specific</span> — what’s good for muscle gain may not be good for cardiovascular risk</li>
          <li><span className="font-semibold">Multi-modal</span> — combines biomarker, wearable, nutrition, and environmental data</li>
          <li><span className="font-semibold">Dynamic</span> — changes as your habits, lifestyle, and physiology shift</li>
        </ul>
      </section>

      {/* Step 4 */}
      <section className="w-full max-w-3xl flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-8 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-lg">4</span>
          <span className="text-xl font-semibold flex items-center gap-2">Take Smart, Personalized Action <SparklesIcon className="w-5 h-5 inline" /></span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-2">We use a science-backed rule engine to generate timely, contextual recommendations. For example:</p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-6 mb-2">
          <li>“Your sleep is averaging 6h10m. Combined with a 25% HRV drop, you're under-recovering. Try winding down by 10pm and reduce evening workouts.”</li>
          <li>“Your HbA1c is creeping above 5.5%, and your meals are clustered late at night. Let’s shift 50% of intake earlier in the day.”</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">
          Each insight is designed to:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-6 mb-2">
          <li>Be specific to your data</li>
          <li>Offer a clear action you can take now</li>
          <li>Link short-term behavior to long-term outcomes</li>
        </ul>
      </section>

      {/* Step 5 */}
      <section className="w-full max-w-3xl flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-8 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-lg">5</span>
          <span className="text-xl font-semibold flex items-center gap-2">Drive Behavior Change with Feedback Loops <ArrowTrendingUpIcon className="w-5 h-5 inline" /></span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-2">You don’t change what you can’t see. That’s why we make feedback immediate, clear, and goal-aligned:</p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-6 mb-2">
          <li>“Your omega-3 intake has improved — HDL is up 8%”</li>
          <li>“Your daily 15-min walks are linked to better glucose control”</li>
          <li>“You skipped logging meals — let’s try voice notes instead”</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">
          We support habit formation using proven methods: goal setting, self-monitoring, gamified streaks, and adaptive difficulty.
        </p>
      </section>

      {/* Step 6 */}
      <section className="w-full max-w-3xl flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-8 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-lg">6</span>
          <span className="text-xl font-semibold flex items-center gap-2">Track Progress Visually <TrophyIcon className="w-5 h-5 inline" /></span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-2">We show you trends that matter:</p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-6 mb-2">
          <li>Weekly health summaries</li>
          <li>Progress vs. your personal baseline</li>
          <li>Trendlines for key metrics (sleep, stress, inflammation, etc.)</li>
          <li>Achievement markers and milestone recognition</li>
        </ul>
      </section>

      {/* Why It Works Section */}
      <section className="w-full max-w-3xl mt-20">
        <h2 className="text-2xl font-bold mb-4">Why It Works</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-6 mb-2">
          <li><span className="font-semibold">Data without action is noise</span><br />We don’t just show numbers — we translate them into change.</li>
          <li><span className="font-semibold">Personalization isn’t a filter — it’s the system</span><br />Everything adapts to your baseline, your goals, and your life.</li>
          <li><span className="font-semibold">Context &gt; content</span><br />We deliver the right insight at the right time, not just health advice in a feed.</li>
          <li><span className="font-semibold">Behavior change is the product</span><br />The platform is designed to create habit shifts — not just awareness.</li>
        </ul>
      </section>
    </main>
  );
} 