import { useState } from "react";
import { Home, Upload, BarChart3, Users, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("units");

  // Mock data
  const stats = {
    totalVisits: 1245,
    completedJourneys: 87,
    leads: 42,
    conversionRate: 3.4,
  };

  const handleUnitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم إضافة الوحدة بنجاح ✅");
  };

  const handleAboutUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم تحديث صفحة من نحن ✅");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gradient-primary">لوحة الأدمن</h1>
          <p className="text-muted-foreground mt-1">إدارة المحتوى والإحصائيات</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="units" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span className="hidden md:inline">الوحدات</span>
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden md:inline">من نحن</span>
            </TabsTrigger>
            <TabsTrigger value="stats" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden md:inline">الإحصائيات</span>
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden md:inline">الموظفين</span>
            </TabsTrigger>
          </TabsList>

          {/* Units Management */}
          <TabsContent value="units" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>إدارة الوحدات</CardTitle>
                <CardDescription>إضافة وتعديل وحدات المشاريع</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUnitSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="unitName">اسم المشروع</Label>
                      <Input id="unitName" placeholder="مثال: سديم شقق 2" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="unitType">نوع المشروع</Label>
                      <Input id="unitType" placeholder="فلل / شقق / أدوار" className="mt-2" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="unitCount">عدد الوحدات</Label>
                      <Input id="unitCount" type="number" placeholder="120" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="unitArea">المساحة</Label>
                      <Input id="unitArea" placeholder="130 - 143 م²" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="unitPrice">السعر</Label>
                      <Input id="unitPrice" placeholder="842,745 ر.س" className="mt-2" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="unitLocation">الموقع</Label>
                    <Input id="unitLocation" placeholder="شمال الرياض - حي الربوة" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="unitFeatures">المميزات (كل ميزة في سطر)</Label>
                    <Textarea 
                      id="unitFeatures" 
                      placeholder="نادي رياضي&#10;حدائق داخلية&#10;نظام ذكي" 
                      className="mt-2" 
                      rows={5}
                    />
                  </div>

                  <div>
                    <Label htmlFor="unitImages">الصور والفيديوهات</Label>
                    <div className="mt-2 border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground">اضغط لرفع الصور والفيديوهات</p>
                      <p className="text-xs text-muted-foreground mt-1">JPG, PNG, MP4 (حجم أقصى: 50MB)</p>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="unitBrochure">البروشور (PDF)</Label>
                    <div className="mt-2 border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">اضغط لرفع البروشور</p>
                    </div>
                  </div>

                  <Button type="submit" className="btn-hero">
                    إضافة المشروع
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* About Page Management */}
          <TabsContent value="about" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>تحديث صفحة "من نحن"</CardTitle>
                <CardDescription>تعديل المحتوى والإنجازات</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAboutUpdate} className="space-y-4">
                  <div>
                    <Label htmlFor="aboutStory">قصة الشركة</Label>
                    <Textarea 
                      id="aboutStory" 
                      defaultValue="شركة الرمز عقارية عصرية تأسست عام ٢٠١٦..."
                      className="mt-2" 
                      rows={6}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="unitsSold">عدد الوحدات المباعة</Label>
                      <Input id="unitsSold" type="number" defaultValue="90" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="clients">عدد العملاء</Label>
                      <Input id="clients" type="number" defaultValue="500" className="mt-2" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="awards">الجوائز والتكريمات</Label>
                    <Textarea 
                      id="awards" 
                      placeholder="أدخل الجوائز والتكريمات (كل جائزة في سطر)"
                      className="mt-2" 
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="btn-hero">
                    حفظ التغييرات
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Statistics */}
          <TabsContent value="stats" className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي الزوار</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{stats.totalVisits}</p>
                  <p className="text-xs text-muted-foreground mt-1">من واتساب</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">أكملوا الرحلة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-accent">{stats.completedJourneys}</p>
                  <p className="text-xs text-muted-foreground mt-1">وصلوا لصفحة الوحدات</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">العملاء الجادين</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-secondary">{stats.leads}</p>
                  <p className="text-xs text-muted-foreground mt-1">سجلوا بياناتهم</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">نسبة التحويل</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-green-600">{stats.conversionRate}%</p>
                  <p className="text-xs text-muted-foreground mt-1">من زوار لعملاء</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>أداء المشاريع</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p>الرسم البياني سيتم عرضه هنا</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Management */}
          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>إدارة الموظفين</CardTitle>
                <CardDescription>إضافة مناديب المبيعات ومتابعة أداءهم</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <Users className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p>قائمة الموظفين وإضافة موظفين جدد</p>
                  <Button className="mt-4 btn-hero">
                    إضافة موظف جديد
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;