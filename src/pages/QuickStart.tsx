import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, TrendingUp, Sparkles, Briefcase, Shield, Award, Building2, Building, HomeIcon, Warehouse } from "lucide-react";

type FormData = {
  purpose: string;
  salary: string;
  installments: string;
  propertyType: string;
  jobType: string;
};

const QuickStart = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    purpose: "",
    salary: "",
    installments: "",
    propertyType: "",
    jobType: "",
  });

  const purposes = [
    { id: "home", label: "أدور بيت أستقر فيه 🏡", icon: Home },
    { id: "investment", label: "أبغى شي أستثمر فيه 💰", icon: TrendingUp },
    { id: "upgrade", label: "ودي أرقى لشي أفضل ✨", icon: Sparkles },
  ];

  const salaryRanges = [
    { id: "5000-10000", label: "٥,٠٠٠ - ١٠,٠٠٠ ريال" },
    { id: "10000-15000", label: "١٠,٠٠٠ - ١٥,٠٠٠ ريال" },
    { id: "15000-20000", label: "١٥,٠٠٠ - ٢٠,٠٠٠ ريال" },
    { id: "20000+", label: "أكثر من ٢٠,٠٠٠ ريال" },
  ];

  const installmentRanges = [
    { id: "none", label: "ما عندي التزامات 🎉" },
    { id: "1000-3000", label: "١,٠٠٠ - ٣,٠٠٠ ريال" },
    { id: "3000-5000", label: "٣,٠٠٠ - ٥,٠٠٠ ريال" },
    { id: "5000+", label: "أكثر من ٥,٠٠٠ ريال" },
  ];

  const propertyTypes = [
    { id: "villa", label: "فيلا", icon: Home },
    { id: "apartment", label: "شقة", icon: Building2 },
    { id: "townhouse", label: "تاون هاوس", icon: HomeIcon },
    { id: "floors", label: "أدوار", icon: Warehouse },
  ];

  const jobTypes = [
    { id: "government", label: "حكومي", icon: Briefcase },
    { id: "private", label: "خاص", icon: Building },
    { id: "military", label: "عسكري", icon: Shield },
    { id: "retired", label: "متقاعد", icon: Award },
  ];

  const handlePurposeSelect = (purposeId: string) => {
    setFormData({ ...formData, purpose: purposeId });
    setTimeout(() => setStep(2), 200);
  };

  const handleSalarySelect = (salaryId: string) => {
    setFormData({ ...formData, salary: salaryId });
    setTimeout(() => setStep(3), 200);
  };

  const handleInstallmentsSelect = (installmentsId: string) => {
    setFormData({ ...formData, installments: installmentsId });
    setTimeout(() => setStep(4), 200);
  };

  const handlePropertyTypeSelect = (propertyTypeId: string) => {
    setFormData({ ...formData, propertyType: propertyTypeId });
    setTimeout(() => setStep(5), 200);
  };

  const handleJobTypeSelect = (jobTypeId: string) => {
    const finalData = { ...formData, jobType: jobTypeId };
    setTimeout(() => {
      navigate("/units", { state: finalData });
    }, 200);
  };

  const progress = (step / 5) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <Link to="/" className="text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-lg font-bold text-foreground">رحلتك السريعة</h1>
            <div className="w-6" />
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 md:py-8">
        {/* Step 1: Purpose */}
        {step === 1 && (
          <div className="animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                وش ناوي عليه؟
              </h2>
            </div>

            <div className="space-y-3 max-w-md mx-auto">
              {purposes.map((purpose) => (
                <button
                  key={purpose.id}
                  onClick={() => handlePurposeSelect(purpose.id)}
                  className="w-full card-brand hover:scale-[1.02] active:scale-95 transition-all text-right group"
                >
                  <div className="flex items-center gap-4">
                    <purpose.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-medium text-foreground">{purpose.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Salary */}
        {step === 2 && (
          <div className="animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                كم راتبك الشهري؟
              </h2>
            </div>

            <div className="space-y-3 max-w-md mx-auto">
              {salaryRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => handleSalarySelect(range.id)}
                  className="w-full card-brand hover:scale-[1.02] active:scale-95 transition-all group"
                >
                  <div className="text-center">
                    <span className="text-xl font-medium text-foreground">{range.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Installments */}
        {step === 3 && (
          <div className="animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                عندك التزامات شهرية؟
              </h2>
            </div>

            <div className="space-y-3 max-w-md mx-auto">
              {installmentRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => handleInstallmentsSelect(range.id)}
                  className="w-full card-brand hover:scale-[1.02] active:scale-95 transition-all group"
                >
                  <div className="text-center">
                    <span className="text-xl font-medium text-foreground">{range.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Property Type */}
        {step === 4 && (
          <div className="animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                وش نوع العقار؟
              </h2>
            </div>

            <div className="space-y-3 max-w-md mx-auto">
              {propertyTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handlePropertyTypeSelect(type.id)}
                  className="w-full card-brand hover:scale-[1.02] active:scale-95 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <type.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xl font-medium text-foreground">{type.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Job Type */}
        {step === 5 && (
          <div className="animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                آخر سؤال.. وش طبيعة شغلك؟
              </h2>
            </div>

            <div className="space-y-3 max-w-md mx-auto">
              {jobTypes.map((job) => (
                <button
                  key={job.id}
                  onClick={() => handleJobTypeSelect(job.id)}
                  className="w-full card-brand hover:scale-[1.02] active:scale-95 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <job.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xl font-medium text-foreground">{job.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default QuickStart;