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
    { id: "5000-10000", label: "5,000 - 10,000 ريال" },
    { id: "10000-15000", label: "10,000 - 15,000 ريال" },
    { id: "15000-20000", label: "15,000 - 20,000 ريال" },
    { id: "20000+", label: "أكثر من 20,000 ريال" },
  ];

  const installmentRanges = [
    { id: "none", label: "ما عندي التزامات 🎉" },
    { id: "1000-3000", label: "1,000 - 3,000 ريال" },
    { id: "3000-5000", label: "3,000 - 5,000 ريال" },
    { id: "5000+", label: "أكثر من 5,000 ريال" },
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
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">الخطوة {step} من 5</span>
            </div>
            <div className="w-5" />
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-muted/50 rounded-full h-1.5 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary via-primary to-accent transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8 md:py-12">
        {/* Step 1: Purpose */}
        {step === 1 && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                وش ناوي عليه؟
              </h2>
              <p className="text-muted-foreground">اختر الخيار اللي يناسبك</p>
            </div>

            <div className="space-y-3">
              {purposes.map((purpose) => (
                <button
                  key={purpose.id}
                  onClick={() => handlePurposeSelect(purpose.id)}
                  className="w-full bg-card hover:bg-muted/50 border-2 border-border hover:border-primary rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] active:scale-98 text-right group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <purpose.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-lg font-semibold text-foreground">{purpose.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Salary */}
        {step === 2 && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                كم راتبك الشهري؟
              </h2>
              <p className="text-muted-foreground">اختر الفئة المناسبة</p>
            </div>

            <div className="space-y-3">
              {salaryRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => handleSalarySelect(range.id)}
                  className="w-full bg-card hover:bg-muted/50 border-2 border-border hover:border-primary rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] active:scale-98 group"
                >
                  <div className="text-center">
                    <span className="text-xl font-semibold text-foreground font-latin">{range.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Installments */}
        {step === 3 && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                عندك التزامات شهرية؟
              </h2>
              <p className="text-muted-foreground">حدد الأقساط الشهرية</p>
            </div>

            <div className="space-y-3">
              {installmentRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => handleInstallmentsSelect(range.id)}
                  className="w-full bg-card hover:bg-muted/50 border-2 border-border hover:border-primary rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] active:scale-98 group"
                >
                  <div className="text-center">
                    <span className="text-xl font-semibold text-foreground font-latin">{range.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Property Type */}
        {step === 4 && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                وش نوع العقار؟
              </h2>
              <p className="text-muted-foreground">اختر النوع المناسب لك</p>
            </div>

            <div className="space-y-3">
              {propertyTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handlePropertyTypeSelect(type.id)}
                  className="w-full bg-card hover:bg-muted/50 border-2 border-border hover:border-primary rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] active:scale-98 text-right group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xl font-semibold text-foreground">{type.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Job Type */}
        {step === 5 && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                آخر سؤال.. وش طبيعة شغلك؟
              </h2>
              <p className="text-muted-foreground">وبكذا نكون خلصنا 🎉</p>
            </div>

            <div className="space-y-3">
              {jobTypes.map((job) => (
                <button
                  key={job.id}
                  onClick={() => handleJobTypeSelect(job.id)}
                  className="w-full bg-card hover:bg-muted/50 border-2 border-border hover:border-primary rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] active:scale-98 text-right group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <job.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xl font-semibold text-foreground">{job.label}</span>
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