import { Link } from "react-router-dom";
import { Building2, Sparkles } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-muted via-background to-muted pattern-tree">
      {/* Header with Logo */}
      <header className="py-6 px-4">
        <div className="max-w-5xl mx-auto flex justify-center">
          <img 
            src={logoHorizontal} 
            alt="الرمز العقارية" 
            className="h-20 md:h-24 object-contain drop-shadow-lg"
          />
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          {/* Welcome Text */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              مرحبا بك 👋
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gradient-primary mb-6">
              في الرمز العقارية
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              نوفر لك خيارات عقارية متعددة تلائم احتياجاتك وتطلعاتك
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <Link 
              to="/about"
              className="group bg-card border-2 border-primary/20 hover:border-primary rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <Building2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-xl font-semibold text-foreground">حاب تعرف من حنّا</span>
              </div>
              <p className="text-sm text-muted-foreground">
                اكتشف قصتنا ومشاريعنا وإنجازاتنا
              </p>
            </Link>

            <Link 
              to="/start"
              className="btn-hero group flex items-center justify-center gap-3 text-xl pulse-glow"
            >
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>خلني أبدأ على طول</span>
            </Link>
          </div>

          {/* Tagline */}
          <div className="mt-12 text-sm text-muted-foreground">
            <p>حيث تنمو الحياة 🌴</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>© ٢٠٢٥ الرمز العقارية - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
};

export default Landing;