"use client";

import React, { useState } from "react";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/outline";
import {
  BeakerIcon,
  FireIcon,
  CakeIcon,
  MoonIcon,
  HeartIcon,
  DevicePhoneMobileIcon,
  BellIcon,
  ChartBarIcon,
  SparklesIcon,
  UserCircleIcon,
  UserGroupIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-mono flex flex-col items-center px-0">
      {/* Hero Section - Two Column Layout */}
      <section className="w-full max-w-5xl py-20 flex flex-col md:flex-row items-start gap-12 px-4 relative">
        {/* Left: Text (extreme left alignment) */}
        <div className="flex-[2_2_0%] flex flex-col items-start text-left justify-center gap-8 w-full max-w-none ml-0 md:ml-[-160px]">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight mb-2 leading-tight w-full max-w-none">Take Control of Your Healthspan and Lifespan</h1>
          <p className="text-base sm:text-lg leading-loose w-full max-w-none text-gray-700 dark:text-gray-300" style={{letterSpacing: '0.01em'}}>
            Project120 is your holistic wellness ecosystem. We help you build sustainable longevity habits by integrating lab testing, continuous health monitoring, and AI-powered insights into a single, actionable platform. Start your journey to a longer, healthier life—one habit at a time.
          </p>
          <a href="#book-test" className="inline-block px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-base shadow hover:scale-105 transition-transform border border-black dark:border-white mt-2">Book your test</a>
        </div>
        {/* Right: Graphic Placeholder (bottom right, absolute in section) */}
        <div className="flex-1 w-full"></div>
        <span className="hidden md:block absolute bottom-0 right-0 mb-52 -mr-40 text-gray-400 text-2xl font-semibold select-none tracking-widest px-4">graphic placeholder</span>
        <span className="block md:hidden text-gray-400 text-2xl font-semibold select-none tracking-widest px-4 mt-8">graphic placeholder</span>
      </section>

      {/* Platform Overview Section */}
      <section className="w-full flex flex-col items-center py-16 px-4 bg-gray-50 dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-semibold mb-6">Your Health, Visualized</h2>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Health Score */}
          <div className="bg-white dark:bg-black rounded-xl shadow p-8 flex flex-col items-center border border-gray-100 dark:border-gray-800">
            <div className="relative flex items-center justify-center mb-2">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="44" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  stroke="#111"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={276.46}
                  strokeDashoffset={276.46 - (0.82 * 276.46)}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 0.6s' }}
                />
              </svg>
              <span className="absolute text-3xl font-bold">82</span>
            </div>
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-2">Health Score</span>
            <span className="text-sm text-gray-500">Excellent</span>
          </div>
          {/* Blood Biomarkers */}
          <div className="bg-white dark:bg-black rounded-xl shadow p-6 flex flex-col gap-3 border border-gray-100 dark:border-gray-800 relative">
            <span className="absolute top-4 right-4 bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">6.2/10</span>
            <div className="flex items-center gap-2 mb-1"><BeakerIcon className="w-5 h-5 text-black dark:text-white" /><span className="text-xs uppercase tracking-widest text-gray-500">Blood Biomarkers</span></div>
            <div className="flex flex-row gap-6 items-center">
              {/* LDL */}
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">LDL</span>
                <span className="text-lg font-bold text-red-600 dark:text-red-400 flex items-center gap-1">3.8
                  <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
                  <span className="text-xs text-red-500">▲</span>
                </span>
                <span className="text-xs text-gray-400">mmol/L</span>
              </div>
              {/* HbA1c */}
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">HbA1c</span>
                <span className="text-lg font-bold text-yellow-600 dark:text-yellow-400 flex items-center gap-1">6.1
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-400"></span>
                  <span className="text-xs text-yellow-500">■</span>
                </span>
                <span className="text-xs text-gray-400">%</span>
              </div>
              {/* CRP */}
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">CRP</span>
                <span className="text-lg font-bold text-green-600 dark:text-green-400 flex items-center gap-1">0.7
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-xs text-green-500">▼</span>
                </span>
                <span className="text-xs text-gray-400">mg/L</span>
              </div>
            </div>
            <span className="text-xs text-red-600 dark:text-red-400 mt-1">LDL is above optimal range. Consider dietary changes.</span>
            <span className="text-xs text-gray-700 dark:text-gray-300 mt-2">Your inflammation is low, but cholesterol and glucose need attention. Great job on CRP!</span>
          </div>
          {/* Physical Exercise */}
          <div className="bg-white dark:bg-black rounded-xl shadow p-6 flex flex-col gap-2 border border-gray-100 dark:border-gray-800 relative">
            <span className="absolute top-4 right-4 bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">8.1/10</span>
            <div className="flex items-center gap-2 mb-1"><FireIcon className="w-5 h-5 text-black dark:text-white" /><span className="text-xs uppercase tracking-widest text-gray-500">Physical Exercise</span></div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">Zone 1-3</span>
                <span className="text-lg font-bold">4h</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">Zone 4-5</span>
                <span className="text-lg font-bold">1h</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">Strength</span>
                <span className="text-lg font-bold">2x</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">Steps</span>
                <span className="text-lg font-bold">68k</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">VO2max</span>
                <span className="text-lg font-bold">44</span>
              </div>
            </div>
          </div>
          {/* Reminders */}
          <div className="bg-white dark:bg-black rounded-xl shadow p-6 flex flex-col gap-2 border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2 mb-1"><BellIcon className="w-5 h-5 text-black dark:text-white" /><span className="text-xs uppercase tracking-widest text-gray-500">Reminders</span></div>
            <span className="text-sm text-gray-700 dark:text-gray-300">You have 2 goals with pending actions: <br/>- 30 min Zone 2 cardio<br/>- Log your meals today</span>
          </div>
          {/* AI Insights */}
          <div className="bg-white dark:bg-black rounded-xl shadow p-6 flex flex-col gap-2 border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2 mb-1"><SparklesIcon className="w-5 h-5 text-black dark:text-white" /><span className="text-xs uppercase tracking-widest text-gray-500">AI Insight</span></div>
            <span className="text-sm text-gray-700 dark:text-gray-300">Try building a habit of eating your last meal at least 2 hours before bed, and add a 10-minute walk after dinner. Small, consistent changes like these can improve your sleep and metabolic health over time.</span>
          </div>
          {/* Diet */}
          <div className="bg-white dark:bg-black rounded-xl shadow p-6 flex flex-col gap-2 border border-gray-100 dark:border-gray-800 relative">
            <span className="absolute top-4 right-4 bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">7.8/10</span>
            <div className="flex items-center gap-2 mb-1"><CakeIcon className="w-5 h-5 text-black dark:text-white" /><span className="text-xs uppercase tracking-widest text-gray-500">Diet</span></div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">Carbs</span>
                <span className="text-lg font-bold">210g</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">Protein</span>
                <span className="text-lg font-bold">110g</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">Fat</span>
                <span className="text-lg font-bold">65g</span>
              </div>
            </div>
            <span className="text-xs text-gray-400">Goal: Muscle gain (aligned)</span>
          </div>
          {/* Sleep */}
          <div className="bg-white dark:bg-black rounded-xl shadow p-6 flex flex-col gap-2 border border-gray-100 dark:border-gray-800 relative">
            <span className="absolute top-4 right-4 bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">8.2/10</span>
            <div className="flex items-center gap-2 mb-1"><MoonIcon className="w-5 h-5 text-black dark:text-white" /><span className="text-xs uppercase tracking-widest text-gray-500">Sleep</span></div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">Hours</span>
                <span className="text-lg font-bold">7.2</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">Quality</span>
                <span className="text-lg font-bold">82%</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">Consistency</span>
                <span className="text-lg font-bold">6.5h</span>
              </div>
            </div>
          </div>
          {/* Lifestyle */}
          <div className="bg-white dark:bg-black rounded-xl shadow p-6 flex flex-col gap-2 border border-gray-100 dark:border-gray-800 relative">
            <span className="absolute top-4 right-4 bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">7.5/10</span>
            <div className="flex items-center gap-2 mb-1"><ChartBarIcon className="w-5 h-5 text-black dark:text-white" /><span className="text-xs uppercase tracking-widest text-gray-500">Lifestyle</span></div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">RHR</span>
                <span className="text-lg font-bold">54</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">HRV</span>
                <span className="text-lg font-bold">68</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">Happiness</span>
                <span className="text-lg font-bold">7.2</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">Stress</span>
                <span className="text-lg font-bold">3.1</span>
              </div>
            </div>
            <span className="text-xs text-gray-400">Avg. pollution exposure: Moderate</span>
          </div>
          {/* Screen Time */}
          <div className="bg-white dark:bg-black rounded-xl shadow p-6 flex flex-col gap-2 border border-gray-100 dark:border-gray-800 relative">
            <span className="absolute top-4 right-4 bg-gray-100 dark:bg-gray-800 text-black dark:text-white text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">6.8/10</span>
            <div className="flex items-center gap-2 mb-1"><DevicePhoneMobileIcon className="w-5 h-5 text-black dark:text-white" /><span className="text-xs uppercase tracking-widest text-gray-500">Screen Time</span></div>
            <span className="text-2xl font-bold">32h</span>
            <span className="text-xs text-gray-500">Most used: Instagram, WhatsApp, Safari</span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full flex flex-col items-center py-16 px-4 bg-white dark:bg-black relative">
        <h2 className="text-2xl font-semibold mb-12">What Our Members Say</h2>
        {(() => {
          const testimonials = [
            {
              icon: <UserIcon className="w-8 h-8 text-black dark:text-white" />, name: "Alex, 34",
              text: "I discovered hidden health risks and improved my energy in just 3 months! The dashboard makes it so easy to track my progress.",
            },
            {
              icon: <UserCircleIcon className="w-8 h-8 text-black dark:text-white" />, name: "Priya, 41",
              text: "The personalized dashboard keeps me motivated and on track every day. I love the habit-building recommendations!",
            },
            {
              icon: <UserGroupIcon className="w-8 h-8 text-black dark:text-white" />, name: "Sam, 52",
              text: "Project120 helped me build habits for longevity, not just quick fixes. The insights are actionable and easy to follow.",
            },
            {
              icon: <IdentificationIcon className="w-8 h-8 text-black dark:text-white" />, name: "Maria, 29",
              text: "Seeing my blood results and lifestyle data in one place made it easy to take control of my health. Highly recommend!",
            },
            {
              icon: <UserIcon className="w-8 h-8 text-black dark:text-white" />, name: "Ben, 47",
              text: "The AI recommendations are spot on. I’ve made real, lasting changes to my sleep and nutrition.",
            },
            {
              icon: <UserCircleIcon className="w-8 h-8 text-black dark:text-white" />, name: "Elena, 38",
              text: "I love how easy it is to track my progress and set new goals. The platform is intuitive and motivating.",
            },
            {
              icon: <UserGroupIcon className="w-8 h-8 text-black dark:text-white" />, name: "James, 56",
              text: "My doctor was impressed with the detailed reports. Project120 makes health optimization simple.",
            },
            {
              icon: <IdentificationIcon className="w-8 h-8 text-black dark:text-white" />, name: "Sophie, 31",
              text: "The community and support are fantastic. I feel empowered to take charge of my health journey.",
            },
          ];
          const [active, setActive] = useState(0);
          const visible = 4;
          const maxActive = testimonials.length - visible;
          const getVisible = () => {
            if (testimonials.length <= visible) return testimonials;
            return testimonials.slice(active, active + visible);
          };
          const canGoLeft = testimonials.length > visible;
          const canGoRight = testimonials.length > visible;
          const handleLeft = () => {
            if (active === 0) {
              setActive(maxActive);
            } else {
              setActive(active - 1);
            }
          };
          const handleRight = () => {
            if (active === maxActive) {
              setActive(0);
            } else {
              setActive(active + 1);
            }
          };
          return (
            <div className="w-full flex items-center relative">
              <button
                className="hidden md:flex w-14 h-14 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition absolute left-0 top-1/2 -translate-y-1/2 z-20"
                onClick={handleLeft}
                aria-label="Previous testimonial"
                disabled={!canGoLeft}
                style={{ left: 0 }}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <div className="flex-1 flex flex-col md:flex-row justify-between items-stretch gap-16 md:gap-16 mx-24 h-[260px]">
                {getVisible().map((t, i) => (
                  <div key={t.name} className="flex-1 flex flex-col justify-between px-8 md:px-12 relative min-w-[260px] max-w-[340px] h-[260px]">
                    <span className="text-5xl text-gray-200 dark:text-gray-800 absolute -top-8 left-0 select-none">“</span>
                    <span className="text-gray-700 dark:text-gray-300 text-base leading-relaxed block mb-8 mt-8">{t.text}</span>
                    <div className="flex items-center gap-2 mt-2">
                      {t.icon}
                      <span className="font-semibold text-base">{t.name}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="hidden md:flex w-14 h-14 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition absolute right-0 top-1/2 -translate-y-1/2 z-20"
                onClick={handleRight}
                aria-label="Next testimonial"
                disabled={!canGoRight}
                style={{ right: 0 }}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          );
        })()}
      </section>

      {/* Health Journey Timeline Section */}
      <section className="w-full flex flex-col items-center py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-semibold mb-12">Your Health Journey Timeline</h2>
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
          {/* Step 1 */}
          <div className="flex flex-col items-center flex-1 min-w-[180px]">
            <div className="w-14 h-14 rounded-full bg-white dark:bg-black border-4 border-black dark:border-white flex items-center justify-center text-2xl font-bold mb-4">1</div>
            <span className="font-semibold mb-2">Order & Test</span>
            <span className="text-sm text-gray-600 dark:text-gray-300 text-center">Choose your panel and visit a nearby pharmacy for sample collection.</span>
          </div>
          {/* Timeline connector */}
          <div className="hidden md:block h-1 w-8 bg-gray-300 dark:bg-gray-700 mx-2"></div>
          {/* Step 2 */}
          <div className="flex flex-col items-center flex-1 min-w-[180px]">
            <div className="w-14 h-14 rounded-full bg-white dark:bg-black border-4 border-black dark:border-white flex items-center justify-center text-2xl font-bold mb-4">2</div>
            <span className="font-semibold mb-2">Connect your data</span>
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
            <span className="font-semibold mb-2">Take action</span>
            <span className="text-sm text-gray-600 dark:text-gray-300 text-center">Receive personalized recommendations and start building healthy habits.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
