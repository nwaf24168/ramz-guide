import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, TrendingUp, Sparkles, Briefcase, Shield, Award, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FormData = {
  purpose: string;
  salary: string;
  installments: string;
  jobType: string;
};

const QuickStart = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    purpose: "",
    salary: "",
    installments: "",
    jobType: "",
  });

  const purposes = [
    { id: "home", label: "أدور بيت أستقر فيه 🏡", icon: Home },
    { id: "investment", label: "أبغى شي أستثمر فيه 💰", icon: TrendingUp },
    { id: "upgrade", label: "ودي أرقى لشي أفضل ✨", icon: Sparkles },
  ];

  const jobTypes = [
    { id: "government", label: "حكومي", icon: Briefcase },
    { id: "private", label: "خاص", icon: Briefcase },
    { id: "military", label: "عسكري", icon: Shield },
    { id: "retired", label: "متقاعد", icon: Award },
  ];

  const handlePurposeSelect = (purposeId: string) => {
    setFormData({ ...formData, purpose: purposeId });
    setTimeout(() => setStep(2), 300);
  };

  const handleJobTypeSelect = (jobTypeId: string) => {
    setFormData({ ...formData, jobType: jobTypeId });
    setTimeout(() => {
      // Navigate to units page with form data as state
      navigate("/units", { state: formData });
    }, 300);
  };

  const handleSalaryNext = () => {
    if (formData.salary) setStep(3);
  };

  const handleInstallmentsNext = () => {
    if (formData.installments) setStep(4);
  };

  const progress = (step / 4) * 100;

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

      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        {/* Intro */}
        {step === 1 && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                خلنا نساعدك تلقى العقار اللي يناسبك
              </h2>
              <p className="text-muted-foreground">بخطوات بسيطة 🙌</p>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-semibold text-foreground mb-4">وش ناوي عليه؟</p>
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
            <div className="text-center mb-8">
              <User className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                كم تقريباً راتبك الشهري؟
              </h2>
              <p className="text-muted-foreground">عشان نقدر نحدد الخيار المناسب لك</p>
            </div>

            <div className="card-brand max-w-md mx-auto">
              <Input
                type="number"
                placeholder="مثال: ١٢٠٠٠"
                value={formData.salary}
                onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                className="text-center text-2xl h-16 mb-4"
                dir="rtl"
              />
              <p className="text-sm text-muted-foreground text-center mb-6">ريال سعودي</p>
              <Button
                onClick={handleSalaryNext}
                disabled={!formData.salary}
                className="w-full bg-gradient-to-r from-primary to-accent text-white h-14 text-lg font-semibold hover:opacity-90"
              >
                التالي
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Installments */}
        {step === 3 && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                وعليك أقساط شهرية كم تقريباً؟
              </h2>
              <p className="text-muted-foreground">إذا ما عندك أقساط، اكتب صفر</p>
            </div>

            <div className="card-brand max-w-md mx-auto">
              <Input
                type="number"
                placeholder="مثال: ٣٠٠٠"
                value={formData.installments}
                onChange={(e) => setFormData({ ...formData, installments: e.target.value })}
                className="text-center text-2xl h-16 mb-4"
                dir="rtl"
              />
              <p className="text-sm text-muted-foreground text-center mb-6">ريال سعودي</p>
              <Button
                onClick={handleInstallmentsNext}
                disabled={!formData.installments}
                className="w-full bg-gradient-to-r from-primary to-accent text-white h-14 text-lg font-semibold hover:opacity-90"
              >
                التالي
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Job Type */}
        {step === 4 && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                وش طبيعة شغلك؟
              </h2>
              <p className="text-muted-foreground">آخر خطوة وخلصنا! 🎯</p>
            </div>

            <div className="space-y-4 max-w-md mx-auto">
              {jobTypes.map((job) => (
                <button
                  key={job.id}
                  onClick={() => handleJobTypeSelect(job.id)}
                  className="w-full card-brand hover:scale-[1.02] active:scale-95 transition-all group"
                >
                  <div className="flex items-center justify-center gap-4">
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