import { BeakerIcon, ArrowRightIcon, UserIcon, CurrencyDollarIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function TestSelectionPage() {
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

      {/* Panel Comparison */}
      <section className="w-full max-w-5xl mb-20">
        <h2 className="text-2xl font-semibold mb-6">Compare Our Blood Test Panels</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {/* Panel Cards */}
          {[
            { name: "Essential", price: "$99", features: ["Core biomarkers", "Entry-level insights"], highlight: false },
            { name: "Standard", price: "$179", features: ["+ Metabolic markers", "Lifestyle analysis"], highlight: false },
            { name: "Advanced", price: "$299", features: ["+ Hormones", "Inflammation, vitamins"], highlight: true },
            { name: "Elite", price: "$499", features: ["+ Genetics", "Comprehensive longevity"], highlight: false },
          ].map((panel) => (
            <div key={panel.name} className={`flex flex-col items-center border rounded-xl p-6 bg-white dark:bg-black shadow-sm ${panel.highlight ? 'border-black dark:border-white' : 'border-gray-200 dark:border-gray-800'}`}>
              <span className="text-lg font-bold mb-2">{panel.name}</span>
              <span className="text-2xl font-bold mb-4">{panel.price}</span>
              <ul className="mb-4 text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
                {panel.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              {panel.highlight && <span className="inline-block px-3 py-1 text-xs rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold mb-2">Most Popular</span>}
              <Link href="/dashboard" className="mt-auto px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-sm border border-black dark:border-white hover:bg-gray-900 dark:hover:bg-gray-200 transition flex items-center gap-2">Select <ArrowRightIcon className="w-4 h-4" /></Link>
            </div>
          ))}
        </div>
        {/* Biomarker Comparison Table */}
        <div className="overflow-x-auto border rounded-xl bg-white dark:bg-black border-gray-200 dark:border-gray-800 shadow-sm">
          <table className="min-w-full text-sm text-left font-mono">
            <thead className="sticky top-0 bg-gray-100 dark:bg-gray-900 z-10">
              <tr>
                <th className="py-3 px-4 font-bold border-b border-gray-200 dark:border-gray-800">Biomarker</th>
                <th className="py-3 px-4 font-bold border-b border-gray-200 dark:border-gray-800 text-center">Essential</th>
                <th className="py-3 px-4 font-bold border-b border-gray-200 dark:border-gray-800 text-center">Standard</th>
                <th className="py-3 px-4 font-bold border-b border-gray-200 dark:border-gray-800 text-center">Advanced</th>
                <th className="py-3 px-4 font-bold border-b border-gray-200 dark:border-gray-800 text-center">Elite</th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows generated below */}
              {[
                // List of all unique biomarkers, alphabetically for clarity
                "White Blood Cell Count (WBC)",
                "Red Blood Cell Count (RBC)",
                "Haemoglobin (HGB)",
                "Hematocrit (HCT)",
                "Mean Corpuscular Haemoglobin (MCH)",
                "Red Cell Distribution Width (RDW)",
                "Platelets (PLT)",
                "Lymphocytes (LYM)",
                "Monocytes (MON)",
                "Neutrophils (NEU)",
                "Eosinophils (EOS)",
                "Basophils",
                "LDL cholesterol",
                "HDL cholesterol",
                "Triglycerides",
                "Non-HDL cholesterol",
                "Total cholesterol",
                "Total cholesterol/HDL ratio",
                "Lp(a)",
                "ApoB",
                "HbA1c",
                "Fasting Insulin",
                "Fasting Glucose",
                "HOMA-IR",
                "CRP (hs-CRP)",
                "Active B12",
                "Folate serum",
                "Ferritin",
                "Iron",
                "Transferrin",
                "Vitamin D",
                "Omega-3 Index",
                "Zinc",
                "Copper",
                "TSH",
                "fT3",
                "fT4",
                "TPO Ab",
                "TG Ab",
                "Oestradiol",
                "Progesterone",
                "Luteinizing Hormone (LH)",
                "Follicle Stimulating Hormone (FSH)",
                "Sex Hormone Binding Globulin (SHBG)",
                "Testosterone",
                "Free Testosterone",
                "Prolactin",
                "Cortisol",
                "Free Androgen Index (FAI)",
                "DHEA Sulphate",
                "Uric Acid",
                "Urea",
                "Creatinine",
                "eGFR",
                "Globulin",
                "Albumin",
                "Total protein",
                "Bilirubin",
                "Alanine AminoTransferase (ALT)",
                "Gamma-GlutamylTransferase (GGT)",
                "Alkaline Phosphatase (ALP)",
                "Magnesium",
                "Potassium",
                "Corrected Calcium",
                "Sodium",
                "Chloride",
                "Creatine Kinase (CK)",
              ].map((biomarker) => {
                // Inclusion matrix for each tier
                const included = {
                  Essential: [
                    "White Blood Cell Count (WBC)", "Red Blood Cell Count (RBC)", "Haemoglobin (HGB)", "Hematocrit (HCT)", "Mean Corpuscular Haemoglobin (MCH)", "Red Cell Distribution Width (RDW)", "Platelets (PLT)", "Lymphocytes (LYM)", "Monocytes (MON)", "Neutrophils (NEU)", "Eosinophils (EOS)", "Basophils", "LDL cholesterol", "HDL cholesterol", "Triglycerides", "Non-HDL cholesterol", "Total cholesterol", "Total cholesterol/HDL ratio", "HbA1c", "CRP (hs-CRP)", "Ferritin", "Iron", "Vitamin D", "TSH", "fT3", "fT4", "Progesterone", "Sex Hormone Binding Globulin (SHBG)", "Uric Acid", "Creatinine", "eGFR", "Albumin", "Total protein", "Alanine AminoTransferase (ALT)", "Alkaline Phosphatase (ALP)"
                  ],
                  Standard: [
                    "White Blood Cell Count (WBC)", "Red Blood Cell Count (RBC)", "Haemoglobin (HGB)", "Hematocrit (HCT)", "Mean Corpuscular Haemoglobin (MCH)", "Red Cell Distribution Width (RDW)", "Platelets (PLT)", "Lymphocytes (LYM)", "Monocytes (MON)", "Neutrophils (NEU)", "Eosinophils (EOS)", "Basophils", "LDL cholesterol", "HDL cholesterol", "Triglycerides", "Non-HDL cholesterol", "Total cholesterol", "Total cholesterol/HDL ratio", "HbA1c", "CRP (hs-CRP)", "Folate serum", "Ferritin", "Iron", "Transferrin", "Vitamin D", "TSH", "fT3", "fT4", "Oestradiol", "Progesterone", "Luteinizing Hormone (LH)", "Follicle Stimulating Hormone (FSH)", "Sex Hormone Binding Globulin (SHBG)", "Testosterone", "Prolactin", "Cortisol", "Free Androgen Index (FAI)", "DHEA Sulphate", "Uric Acid", "Urea", "Creatinine", "eGFR", "Globulin", "Albumin", "Total protein", "Bilirubin", "Alanine AminoTransferase (ALT)", "Gamma-GlutamylTransferase (GGT)", "Alkaline Phosphatase (ALP)", "Magnesium"
                  ],
                  Advanced: [
                    "White Blood Cell Count (WBC)", "Red Blood Cell Count (RBC)", "Haemoglobin (HGB)", "Hematocrit (HCT)", "Mean Corpuscular Haemoglobin (MCH)", "Red Cell Distribution Width (RDW)", "Platelets (PLT)", "Lymphocytes (LYM)", "Monocytes (MON)", "Neutrophils (NEU)", "Eosinophils (EOS)", "Basophils", "LDL cholesterol", "HDL cholesterol", "Triglycerides", "Non-HDL cholesterol", "Total cholesterol", "Total cholesterol/HDL ratio", "Lp(a)", "ApoB", "HbA1c", "Fasting Insulin", "Fasting Glucose", "HOMA-IR", "CRP (hs-CRP)", "Folate serum", "Ferritin", "Iron", "Transferrin", "Vitamin D", "Zinc", "Copper", "TSH", "fT3", "fT4", "Oestradiol", "Progesterone", "Luteinizing Hormone (LH)", "Follicle Stimulating Hormone (FSH)", "Sex Hormone Binding Globulin (SHBG)", "Testosterone", "Free Testosterone", "Prolactin", "Cortisol", "Free Androgen Index (FAI)", "DHEA Sulphate", "Uric Acid", "Urea", "Creatinine", "eGFR", "Globulin", "Albumin", "Total protein", "Bilirubin", "Alanine AminoTransferase (ALT)", "Gamma-GlutamylTransferase (GGT)", "Alkaline Phosphatase (ALP)", "Magnesium"
                  ],
                  Elite: [
                    "White Blood Cell Count (WBC)", "Red Blood Cell Count (RBC)", "Haemoglobin (HGB)", "Hematocrit (HCT)", "Mean Corpuscular Haemoglobin (MCH)", "Red Cell Distribution Width (RDW)", "Platelets (PLT)", "Lymphocytes (LYM)", "Monocytes (MON)", "Neutrophils (NEU)", "Eosinophils (EOS)", "Basophils", "LDL cholesterol", "HDL cholesterol", "Triglycerides", "Non-HDL cholesterol", "Total cholesterol", "Total cholesterol/HDL ratio", "Lp(a)", "ApoB", "HbA1c", "Fasting Insulin", "Fasting Glucose", "HOMA-IR", "CRP (hs-CRP)", "Active B12", "Folate serum", "Ferritin", "Iron", "Transferrin", "Vitamin D", "Omega-3 Index", "Zinc", "Copper", "TSH", "fT3", "fT4", "TPO Ab", "TG Ab", "Oestradiol", "Progesterone", "Luteinizing Hormone (LH)", "Follicle Stimulating Hormone (FSH)", "Sex Hormone Binding Globulin (SHBG)", "Testosterone", "Free Testosterone", "Prolactin", "Cortisol", "Free Androgen Index (FAI)", "DHEA Sulphate", "Uric Acid", "Urea", "Creatinine", "eGFR", "Globulin", "Albumin", "Total protein", "Bilirubin", "Alanine AminoTransferase (ALT)", "Gamma-GlutamylTransferase (GGT)", "Alkaline Phosphatase (ALP)", "Magnesium", "Potassium", "Corrected Calcium", "Sodium", "Chloride", "Creatine Kinase (CK)"
                  ]
                };
                return (
                  <tr key={biomarker} className="border-b border-gray-100 dark:border-gray-900">
                    <td className="py-2 px-4 whitespace-nowrap font-medium text-gray-900 dark:text-gray-100">{biomarker}</td>
                    {(['Essential', 'Standard', 'Advanced', 'Elite'] as const).map((tier) => (
                      <td key={tier} className="py-2 px-4 text-center">
                        {included[tier].includes(biomarker) ? <span className="text-xl text-black dark:text-white">✓</span> : ""}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Biomarker Explorer Preview */}
      <section className="w-full max-w-4xl mb-20">
        <h2 className="text-2xl font-semibold mb-6">Sample Biomarkers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example Biomarkers */}
          {[
            { name: "LDL Cholesterol", status: "High", color: "text-red-600", desc: "Linked to heart health. Lower is generally better." },
            { name: "HbA1c", status: "Borderline", color: "text-yellow-600", desc: "Reflects average blood sugar. Aim for <5.7%." },
            { name: "CRP", status: "Optimal", color: "text-green-600", desc: "Marker of inflammation. Lower is better." },
          ].map(b => (
            <div key={b.name} className="border rounded-xl p-5 bg-white dark:bg-black shadow-sm border-gray-200 dark:border-gray-800 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <BeakerIcon className="w-5 h-5" />
                <span className="font-semibold">{b.name}</span>
                <span className={`ml-auto text-xs font-bold ${b.color}`}>{b.status}</span>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">{b.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Collection & Pricing */}
      <section className="w-full max-w-4xl mb-20 grid md:grid-cols-2 gap-12">
        {/* Sample Collection */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-2">Sample Collection</h2>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <CheckCircleIcon className="w-6 h-6 text-black dark:text-white" />
            <span>Visit a partner pharmacy or order an at-home kit.</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <CheckCircleIcon className="w-6 h-6 text-black dark:text-white" />
            <span>Fast, painless blood draw or finger-prick.</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <CheckCircleIcon className="w-6 h-6 text-black dark:text-white" />
            <span>CLIA-certified labs, physician oversight.</span>
          </div>
        </div>
        {/* Pricing Transparency */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-2">Pricing Transparency</h2>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <CurrencyDollarIcon className="w-6 h-6 text-black dark:text-white" />
            <span>Simple, upfront pricing. No hidden fees.</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <CurrencyDollarIcon className="w-6 h-6 text-black dark:text-white" />
            <span>See all costs before you book.</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-2xl flex flex-col items-center mb-8">
        <Link href="/test-selection" className="px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-lg border border-black dark:border-white hover:bg-gray-900 dark:hover:bg-gray-200 transition flex items-center gap-2">
          Book your test <ArrowRightIcon className="w-5 h-5" />
        </Link>
      </section>
    </main>
  );
}
