import { Link } from "react-router-dom";
import { Award, Building, Users, TrendingUp, ArrowLeft } from "lucide-react";
import project1 from "@/assets/project-1.webp";
import project2 from "@/assets/project-2.webp";
import project3 from "@/assets/project-3.png";
import project5 from "@/assets/project-5.jpg";

const About = () => {
  const achievements = [
    { number: "٩٠+", label: "وحدة سكنية مباعة", icon: Building },
    { number: "٥٠٠+", label: "عميل راضي", icon: Users },
    { number: "٣", label: "مشاريع ناجحة", icon: TrendingUp },
    { number: "٨+", label: "سنوات من الخبرة", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold text-foreground">من نحن</h1>
          <div className="w-6" />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* Company Story */}
        <section className="mb-12 animate-fade-in">
          <div className="card-brand">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
              الرمز العقارية
            </h2>
            <p className="text-lg leading-relaxed text-foreground/90 mb-4">
              شركة الرمز عقارية عصرية تأسست عام ٢٠١٦ بقيادة عريقة وخبرة متراكمة في قطاعي العقارات والمقاوالت.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              نتميز بتقديم خيارات متعددة تلبي احتياجات عملائنا المتنوعة، وتعتمد الرمز على مفهوم الراحة المرنة الذي يشكل أساس رؤيتنا في كل تفاصيل مشاريعها، مما يتيح لكل فرد تجربة الراحة على طريقته.
            </p>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            إنجازاتنا
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((item, index) => (
              <div 
                key={index}
                className="card-brand text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-gradient-primary mb-1">
                  {item.number}
                </p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-12">
          <div className="card-brand bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              أدواتنا وخدماتنا
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-4 border border-border">
                <h3 className="font-semibold text-lg text-foreground mb-2">🏘️ بيع على الخارطة</h3>
                <p className="text-muted-foreground text-sm">وحدات سكنية مميزة بأسعار تنافسية</p>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <h3 className="font-semibold text-lg text-foreground mb-2">🏗️ تطوير عقاري</h3>
                <p className="text-muted-foreground text-sm">مشاريع عقارية متكاملة ذات جودة عالية</p>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <h3 className="font-semibold text-lg text-foreground mb-2">💡 استشارات عقارية</h3>
                <p className="text-muted-foreground text-sm">إرشاد ومساعدة في اختيار الوحدة المثالية</p>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <h3 className="font-semibold text-lg text-foreground mb-2">📋 تسهيلات تمويلية</h3>
                <p className="text-muted-foreground text-sm">نساعدك في إجراءات التمويل والحجز</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            مشاريعنا
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-brand overflow-hidden hover-lift">
              <img 
                src={project1} 
                alt="مشروع الرمز العقارية" 
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">وحدات سكنية متميزة</h3>
              <p className="text-muted-foreground">تصاميم عصرية بجودة عالية</p>
            </div>
            <div className="card-brand overflow-hidden hover-lift">
              <img 
                src={project2} 
                alt="مشروع الرمز العقارية" 
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">فلل راقية</h3>
              <p className="text-muted-foreground">رفاهية وخصوصية لا مثيل لها</p>
            </div>
            <div className="card-brand overflow-hidden hover-lift">
              <img 
                src={project3} 
                alt="مشروع الرمز العقارية" 
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">مجمعات سكنية</h3>
              <p className="text-muted-foreground">حياة متكاملة بكل وسائل الراحة</p>
            </div>
            <div className="card-brand overflow-hidden hover-lift">
              <img 
                src={project5} 
                alt="مشروع الرمز العقارية" 
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">مشاريع استثمارية</h3>
              <p className="text-muted-foreground">عوائد مجزية ومستقبل آمن</p>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="mb-12">
          <div className="card-brand text-center bg-gradient-to-br from-secondary/10 to-primary/5">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              رؤيتنا
            </h2>
            <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
              نسعى لنكون الخيار الأول في قطاع العقارات بالمملكة، من خلال تقديم مشاريع عقارية مبتكرة تجمع بين الجودة والراحة والتصميم العصري.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link to="/start" className="btn-hero inline-flex items-center gap-3 text-xl">
            <span>ابدأ تجربتك الآن</span>
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default About;