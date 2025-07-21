import { BeakerIcon, ArrowRightIcon, CurrencyDollarIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function BloodTestsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center py-16 px-4 bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="w-full max-w-4xl text-left mb-16">
        <h1 className="text-4xl font-bold mb-4">Blood Test Panels</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl">
          Choose from four comprehensive blood test panels, each designed to give you actionable insights into your health and longevity.
        </p>
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
    </main>
  );
} 