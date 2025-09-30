import { useState } from "react";
import { Phone, MessageCircle, User, DollarSign, Briefcase, Home, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Lead = {
  id: string;
  name: string;
  phone: string;
  salary: string;
  installments: string;
  jobType: string;
  unit: string;
  status: "new" | "contacted" | "appointment" | "reserved" | "closed";
  createdAt: string;
};

const Dashboard = () => {
  // Mock leads data (في المستقبل سيتم جلبها من قاعدة البيانات)
  const [leads] = useState<Lead[]>([
    {
      id: "1",
      name: "محمد العتيبي",
      phone: "0501234567",
      salary: "15000",
      installments: "2000",
      jobType: "حكومي",
      unit: "سديم شقق 1",
      status: "new",
      createdAt: "2025-09-30 14:30",
    },
    {
      id: "2",
      name: "خالد السالم",
      phone: "0557654321",
      salary: "18000",
      installments: "3500",
      jobType: "خاص",
      unit: "أدوار جديل الرمال",
      status: "contacted",
      createdAt: "2025-09-30 12:15",
    },
  ]);

  const [filterStatus, setFilterStatus] = useState<string>("all");

  const statusColors = {
    new: "bg-blue-100 text-blue-700 border-blue-200",
    contacted: "bg-yellow-100 text-yellow-700 border-yellow-200",
    appointment: "bg-purple-100 text-purple-700 border-purple-200",
    reserved: "bg-orange-100 text-orange-700 border-orange-200",
    closed: "bg-green-100 text-green-700 border-green-200",
  };

  const statusLabels = {
    new: "جديد",
    contacted: "تم التواصل",
    appointment: "موعد",
    reserved: "حجز",
    closed: "مُقفَل",
  };

  const filteredLeads = filterStatus === "all" 
    ? leads 
    : leads.filter(lead => lead.status === filterStatus);

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === "new").length,
    contacted: leads.filter(l => l.status === "contacted").length,
    closed: leads.filter(l => l.status === "closed").length,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gradient-primary">لوحة المبيعات</h1>
          <p className="text-muted-foreground mt-1">إدارة العملاء والمتابعات</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي العملاء</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">{stats.total}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">جديد</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600">{stats.new}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">تم التواصل</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-600">{stats.contacted}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">مُقفَل</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-600">{stats.closed}</p>
            </CardContent>
          </Card>
        </div>

        {/* Filter */}
        <div className="mb-6">
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-full md:w-64">
              <SelectValue placeholder="تصفية حسب الحالة" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">جميع العملاء</SelectItem>
              <SelectItem value="new">جديد</SelectItem>
              <SelectItem value="contacted">تم التواصل</SelectItem>
              <SelectItem value="appointment">موعد</SelectItem>
              <SelectItem value="reserved">حجز</SelectItem>
              <SelectItem value="closed">مُقفَل</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Leads List */}
        <div className="space-y-4">
          {filteredLeads.map((lead) => (
            <Card key={lead.id} className="hover:shadow-soft transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Lead Info */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground">{lead.name}</h3>
                          <p className="text-sm text-muted-foreground">{lead.phone}</p>
                        </div>
                      </div>
                      <Badge className={statusColors[lead.status]}>
                        {statusLabels[lead.status]}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSign className="w-4 h-4" />
                        <span>راتب: {lead.salary} ر.س</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSign className="w-4 h-4" />
                        <span>أقساط: {lead.installments} ر.س</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        <span>{lead.jobType}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Home className="w-4 h-4" />
                        <span>{lead.unit}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{lead.createdAt}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex md:flex-col gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 md:flex-none"
                      onClick={() => window.open(`tel:${lead.phone}`)}
                    >
                      <Phone className="w-4 h-4 ml-2" />
                      اتصال
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 md:flex-none"
                      onClick={() => window.open(`https://wa.me/${lead.phone.replace('0', '966')}`)}
                    >
                      <MessageCircle className="w-4 h-4 ml-2" />
                      واتساب
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredLeads.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">لا توجد عملاء في هذه الفئة</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;