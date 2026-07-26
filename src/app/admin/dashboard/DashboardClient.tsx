"use client";

import React from "react";
import { 
  BarChart as ReBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";
import { GlassCard } from "@/components/shared/GlassCard";
import { Inbox, CheckCircle2, RefreshCw, XCircle, TrendingUp } from "lucide-react";

interface LeadData {
  status: string;
  budget: string;
}

interface DashboardClientProps {
  leads: LeadData[];
}

export default function DashboardClient({ leads }: DashboardClientProps) {
  // 1. Calculate General KPI metrics
  const totalLeads = leads.length;
  const pendingLeads = leads.filter(l => l.status === "PENDING").length;
  const inProgressLeads = leads.filter(l => l.status === "IN_PROGRESS").length;
  const closedWon = leads.filter(l => l.status === "CLOSED_WON").length;
  const closedLost = leads.filter(l => l.status === "CLOSED_LOST").length;
  const conversionRate = totalLeads > 0 ? ((closedWon / totalLeads) * 100).toFixed(1) : "0.0";

  // 2. Prepare status breakdown chart data
  const statusData = [
    { name: "Pending", value: pendingLeads, color: "#6366f1" },
    { name: "In Progress", value: inProgressLeads, color: "#a855f7" },
    { name: "Won", value: closedWon, color: "#10b981" },
    { name: "Lost", value: closedLost, color: "#ef4444" }
  ].filter(d => d.value > 0);

  // 3. Prepare budget distribution chart data
  const budgetCount: Record<string, number> = {};
  leads.forEach(l => {
    const b = l.budget || "Unspecified";
    budgetCount[b] = (budgetCount[b] || 0) + 1;
  });

  const budgetData = Object.entries(budgetCount).map(([name, value]) => ({
    name: name.replace(/₹|\s/g, ""), // clean name for display
    Leads: value
  }));

  return (
    <div className="space-y-10">
      
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
        <p className="text-sm text-gray-500 mt-1">Lead acquisition and client acquisition analytics portal.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Total Leads */}
        <GlassCard interactive={false} className="border-gray-900 bg-gray-900/10 flex items-center space-x-4">
          <div className="p-3.5 rounded-xl bg-indigo-500/10 text-indigo-400">
            <Inbox className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase font-semibold">Total Leads</span>
            <h3 className="text-2xl font-bold text-white mt-0.5">{totalLeads}</h3>
          </div>
        </GlassCard>

        {/* Pending Inquiries */}
        <GlassCard interactive={false} className="border-gray-900 bg-gray-900/10 flex items-center space-x-4">
          <div className="p-3.5 rounded-xl bg-purple-500/10 text-purple-400">
            <RefreshCw className="h-6 w-6 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase font-semibold">Pending Review</span>
            <h3 className="text-2xl font-bold text-white mt-0.5">{pendingLeads}</h3>
          </div>
        </GlassCard>

        {/* Deals Won */}
        <GlassCard interactive={false} className="border-gray-900 bg-gray-900/10 flex items-center space-x-4">
          <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase font-semibold">Closed Won</span>
            <h3 className="text-2xl font-bold text-white mt-0.5">{closedWon}</h3>
          </div>
        </GlassCard>

        {/* Conversion Rate */}
        <GlassCard interactive={false} className="border-gray-900 bg-gray-900/10 flex items-center space-x-4">
          <div className="p-3.5 rounded-xl bg-amber-500/10 text-amber-400">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase font-semibold">Conversion Rate</span>
            <h3 className="text-2xl font-bold text-white mt-0.5">{conversionRate}%</h3>
          </div>
        </GlassCard>

      </div>

      {/* Charts section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Status Breakdown Pie */}
        <GlassCard interactive={false} className="border-gray-900 bg-gray-900/10 space-y-4">
          <h4 className="font-bold text-sm text-gray-400 uppercase tracking-wider">Lead Funnel Distribution</h4>
          <div className="h-80 w-full flex items-center justify-center">
            {statusData.length === 0 ? (
              <p className="text-sm text-gray-600">No data available.</p>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#0f172a", border: "1px solid rgba(255,255,255,0.08)", color: "#fff", borderRadius: "8px" }} 
                  />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </GlassCard>

        {/* Budgets Bar Chart */}
        <GlassCard interactive={false} className="border-gray-900 bg-gray-900/10 space-y-4">
          <h4 className="font-bold text-sm text-gray-400 uppercase tracking-wider">Budget Bracket Distribution</h4>
          <div className="h-80 w-full">
            {budgetData.length === 0 ? (
              <p className="text-sm text-gray-600 flex items-center justify-center h-full">No data available.</p>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <ReBarChart data={budgetData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <XAxis dataKey="name" stroke="#475569" fontSize={10} tickLine={false} />
                  <YAxis stroke="#475569" fontSize={10} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#0f172a", border: "1px solid rgba(255,255,255,0.08)", color: "#fff", borderRadius: "8px" }}
                  />
                  <Bar dataKey="Leads" fill="#6366f1" radius={[4, 4, 0, 0]}>
                    {budgetData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill="#6366f1" fillOpacity={0.8} />
                    ))}
                  </Bar>
                </ReBarChart>
              </ResponsiveContainer>
            )}
          </div>
        </GlassCard>

      </div>

    </div>
  );
}
