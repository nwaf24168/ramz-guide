import { Link } from "react-router-dom";
import { Award, Building, Users, TrendingUp, ArrowLeft } from "lucide-react";
import project1 from "@/assets/project-1.webp";
import project2 from "@/assets/project-2.webp";
import project3 from "@/assets/project-3.png";
import project5 from "@/assets/project-5.jpg";

const About = () => {
  const achievements = [
    { number: "+40", label: "مشروع ناجح", icon: Building },
    { number: "+8000", label: "وحدة سكنية مطورة", icon: TrendingUp },
    { number: "+100,000", label: "م² مساحة مكتبية", icon: Building },
    { number: "11", label: "جائزة عالمية 2025", icon: Award },
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
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-6 text-center">
              الرمز.. راحة تغنيك
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
              <p>
                تأسست شركة الرمز للعقارات في عام 2016م بقيادة تحمل خبرة موروثة في مجال العقارات والمقاولات، وبكوادر بشرية طموحة وشابة تتبنى أهدافاً وتطلعات متجددة.
              </p>
              <p>
                نظرتها إلى الأمام ووقودها شغفها في ترسيخ مفهومٌ جديد للبيئة المعمارية والمجتمعات السكنية في المملكة العربية السعودية.
              </p>
              <p>
                نؤمن في الرمز بأن أمان الإنسان وسعادته في مسكنه، تنطلق من شعور داخلي بالراحة والطمأنينة عند رؤيته للخيارات السكنية ومدى توافقها مع رغباته وتطلعاته.
              </p>
              <p className="font-semibold text-primary">
                ولذلك نحرص في مجتمعاتنا السكنية على مفهوم "رحابة الإعمار"، وهي تعني الفسحة كمنطلق للبناء، والحيوية كأساس للحياة، والاستقرار والسكينة كركيزة للعيش والاستمتاع.
              </p>
            </div>
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

        {/* Awards Section */}
        <section className="mb-12">
          <div className="card-brand bg-gradient-to-br from-amber-500/10 via-primary/10 to-amber-600/10 border-2 border-amber-500/20">
            <div className="text-center mb-6">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mb-4">
                <Award className="w-12 h-12 text-white mx-auto" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-3">
                إنجاز استثنائي
              </h2>
              <p className="text-xl text-foreground/90 leading-relaxed">
                حققت شركة الرمز للعقارات إنجازًا استثنائيًا بحصولها على <span className="font-bold text-amber-600">11 جائزة</span> خلال حفل <span className="font-semibold">Arabian Property Awards 2025</span> التابع لـ <span className="font-semibold">International Property Awards</span>
              </p>
            </div>
            <div className="bg-card/50 rounded-xl p-6 border border-border">
              <p className="text-lg text-foreground/80 text-center">
                لتصبح من أكثر الشركات العقارية السعودية حصولًا على جوائز عالمية، ويؤكد هذا الإنجاز المكانة الرائدة للرمز كأحد أبرز مطوري المشاريع السكنية والتجارية في المملكة.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-12">
          <div className="card-brand bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              خدماتنا ومجتمعاتنا
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              نضع في الرمز نصب أعيننا تكوين مجتمعٍ حضري متكامل؛ فكافة مشاريعنا "الشقق السكنية، التاون هاوس، الفلل السكنية، والأدوار السكنية" نقدم فيها خيارات متنوِّعة تتناسب مع مختلف أنماط الحياة لعملائنا.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-5 border border-border hover:border-primary transition-all hover-lift">
                <h3 className="font-semibold text-lg text-foreground mb-2">🏘️ مشاريع سكنية متكاملة</h3>
                <p className="text-muted-foreground text-sm">شقق، فلل، تاون هاوس، وأدوار سكنية في مواقع مميزة</p>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border hover:border-primary transition-all hover-lift">
                <h3 className="font-semibold text-lg text-foreground mb-2">🏗️ تطوير عقاري احترافي</h3>
                <p className="text-muted-foreground text-sm">تصاميم عصرية وجودة عالية في التنفيذ</p>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border hover:border-primary transition-all hover-lift">
                <h3 className="font-semibold text-lg text-foreground mb-2">🏢 مجمعات تجارية ومكتبية</h3>
                <p className="text-muted-foreground text-sm">تدمج العملية بالرفاهية لقيادة أعمالكم بإمكانيات وفيرة</p>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border hover:border-primary transition-all hover-lift">
                <h3 className="font-semibold text-lg text-foreground mb-2">💡 استشارات عقارية</h3>
                <p className="text-muted-foreground text-sm">إرشاد ومساعدة في اختيار الوحدة المثالية</p>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border hover:border-primary transition-all hover-lift">
                <h3 className="font-semibold text-lg text-foreground mb-2">📋 تسهيلات تمويلية</h3>
                <p className="text-muted-foreground text-sm">نساعدك في إجراءات التمويل والحجز</p>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border hover:border-primary transition-all hover-lift">
                <h3 className="font-semibold text-lg text-foreground mb-2">⚙️ إدارة المشاريع</h3>
                <p className="text-muted-foreground text-sm">إدارة احترافية لضمان نجاح كل مشروع</p>
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
            <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              نسعى لنكون الخيار الأول في قطاع العقارات بالمملكة، من خلال تقديم مشاريع عقارية مبتكرة تجمع بين الجودة والراحة والتصميم العصري، مع التركيز على بناء مجتمعات حضرية متكاملة تعزز جودة حياة ساكنيها.
            </p>
          </div>
        </section>

        {/* Presence Section */}
        <section className="mb-12">
          <div className="card-brand bg-gradient-to-br from-primary/10 to-secondary/10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
              حضورنا في المملكة
            </h2>
            <p className="text-lg text-foreground/90 text-center mb-6">
              من عاصمة المملكة الرياض انطلقنا في عام 2016م؛ لنخلق حكايات من النجاحات ومسيرة من الإنجازات
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['الرياض', 'جدة', 'الدمام', 'الخبر', 'بريدة'].map((city) => (
                <span key={city} className="px-6 py-2 bg-primary/20 text-primary font-semibold rounded-full border border-primary/30">
                  {city}
                </span>
              ))}
            </div>
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