import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, MapPin, Home, Calendar, CheckCircle, Play, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import project1 from "@/assets/project-1.webp";
import project2 from "@/assets/project-2.webp";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.webp";

type Unit = {
  id: string;
  name: string;
  type: string;
  units: number;
  area: string;
  price: string;
  location: string;
  features: string[];
  available: number;
  status: string;
  deliveryDate: string;
  image?: string;
};

const Units = () => {
  const location = useLocation();
  const formData = location.state;
  
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({
    name: "",
    phone: "",
  });

  // Mock units data (في المستقبل سيتم جلبها من قاعدة البيانات)
  const units: Unit[] = [
    {
      id: "1",
      name: "سديم شقق 1",
      type: "شقق",
      units: 120,
      area: "130 - 143 م²",
      price: "842,745 - 1,042,654 ر.س",
      location: "شمال الرياض - حي الربوة",
      features: [
        "نادي رياضي للرجال والنساء",
        "حضانة أطفال",
        "حدائق داخلية",
        "نظام تحكم ذكي",
        "كاميرات مراقبة",
      ],
      available: 18,
      status: "متاح",
      deliveryDate: "يونيو 2026",
      image: project4,
    },
    {
      id: "2",
      name: "أدوار جديل الرمال",
      type: "أدوار",
      units: 438,
      area: "114 م²",
      price: "935,000 ر.س",
      location: "شمال الرياض - جديل الرمال",
      features: [
        "تكييف مركزي ومكنسة مركزية",
        "تصاميم متنوعة وغرف واسعة",
        "مساحات مفتوحة",
        "عدادات منفصلة",
        "وحدات ذكية",
      ],
      available: 438,
      status: "إطلاق قريب",
      deliveryDate: "قريباً",
      image: project1,
    },
  ];

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!leadData.name || !leadData.phone) {
      toast.error("الرجاء إدخال جميع البيانات");
      return;
    }

    // في المستقبل، سيتم حفظ البيانات في قاعدة البيانات
    console.log("Lead submitted:", {
      ...leadData,
      unit: selectedUnit?.name,
      formData,
    });

    toast.success("تم ✅", {
      description: "مستشارك بيتواصل معك خلال دقائق",
    });

    setShowLeadForm(false);
    setLeadData({ name: "", phone: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/start" className="text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold text-foreground">الوحدات المتاحة</h1>
          <div className="w-6" />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Info Banner */}
        <div className="card-brand bg-gradient-to-r from-primary/10 to-accent/10 mb-8">
          <p className="text-center text-foreground">
            وجدنا لك <span className="font-bold text-primary">{units.filter(u => u.available > 0).length}</span> خيار يناسب ميزانيتك ✨
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {units.map((unit, index) => (
            <div 
              key={unit.id} 
              className="card-brand hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Unit Image */}
              <div className="w-full h-48 rounded-xl mb-4 overflow-hidden">
                <img 
                  src={unit.image} 
                  alt={unit.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Unit Info */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h2 className="text-2xl font-bold text-foreground">{unit.name}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    unit.status === "متاح" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {unit.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{unit.location}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 py-3 border-y border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">المساحة</p>
                    <p className="font-semibold text-foreground">{unit.area}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">السعر</p>
                    <p className="font-semibold text-primary">{unit.price}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">المميزات:</p>
                  <ul className="space-y-1">
                    {unit.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {unit.available > 0 && (
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      متاح الآن
                    </span>
                  )}
                  <span className="px-3 py-1 bg-accent/10 text-accent-foreground text-xs font-medium rounded-full">
                    يلائم راتبك
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    <Play className="w-4 h-4 ml-2" />
                    شاهد الفيديو
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    <FileText className="w-4 h-4 ml-2" />
                    البروشور
                  </Button>
                </div>

                <Button
                  onClick={() => {
                    setSelectedUnit(unit);
                    setShowLeadForm(true);
                  }}
                  className="w-full btn-hero"
                  disabled={unit.available === 0}
                >
                  {unit.available > 0 ? "أبغى أتواصل" : "غير متاح حالياً"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Lead Capture Dialog */}
      <Dialog open={showLeadForm} onOpenChange={setShowLeadForm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">سجل بياناتك</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleLeadSubmit} className="space-y-4 pt-4">
            <div>
              <Label htmlFor="name">الاسم</Label>
              <Input
                id="name"
                value={leadData.name}
                onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                placeholder="أدخل اسمك الكامل"
                className="mt-2"
                dir="rtl"
              />
            </div>
            <div>
              <Label htmlFor="phone">رقم الجوال</Label>
              <Input
                id="phone"
                type="tel"
                value={leadData.phone}
                onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                placeholder="05xxxxxxxx"
                className="mt-2"
                dir="ltr"
              />
            </div>
            <div className="bg-muted/50 p-3 rounded-lg text-sm text-muted-foreground">
              <p>📞 الوحدة المختارة: <span className="font-semibold text-foreground">{selectedUnit?.name}</span></p>
            </div>
            <Button type="submit" className="w-full btn-hero">
              إرسال
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Units;