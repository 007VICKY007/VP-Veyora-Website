"use client";

import React, { useState } from "react";
import { GlassCard } from "../shared/GlassCard";
import { 
  Factory, 
  Heart, 
  GraduationCap, 
  DollarSign, 
  ShoppingBag, 
  Truck, 
  Building2, 
  Hotel, 
  Landmark, 
  Zap, 
  Briefcase,
  ChevronRight
} from "lucide-react";

interface IndustryItem {
  name: string;
  desc: string;
  icon: any;
  capabilities: string[];
}

export const Industries = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const industries: IndustryItem[] = [
    {
      name: "Logistics & Supply Chain",
      desc: "Streamline international import/export freight routing, customs validation, and fleet tracking systems.",
      icon: Truck,
      capabilities: ["Import & Export Manifest Trackers", "Route & Fuel Optimization Solutions", "Fleet Maintenance Alert Pipelines", "Multi-Carrier API integrations"]
    },
    {
      name: "Manufacturing",
      desc: "Connect factory floor machinery logs, optimize raw material procurement, and track warehouse configurations.",
      icon: Factory,
      capabilities: ["IoT Machinery Status Analytics", "Automated Inventory Thresholds", "Warehouse Bin Configurations", "Raw Material Purchase Pipelines"]
    },
    {
      name: "Healthcare",
      desc: "Secure patient record flows, HIPAA-compliant databases, and virtual clinic scheduling dashboards.",
      icon: Heart,
      capabilities: ["Patient Intake Form Workflows", "Doctor Scheduling Calendars", "Medical Stock Inventory Trackers", "Secure HIPAA Cloud Storage Integrations"]
    },
    {
      name: "Finance",
      desc: "Implement predictive expense tracking, ledger sync pipelines, and audit compliance checking tools.",
      icon: DollarSign,
      capabilities: ["Expense Request Approvals", "Multi-Bank Reconciliation Sync", "Compliance Audit Verification", "Automated Billing & Invoices"]
    },
    {
      name: "Retail & E-commerce",
      desc: "Deploy custom digital storefronts, shopping cart sync pipelines, and real-time inventory valuations.",
      icon: ShoppingBag,
      capabilities: ["Stock Outward/Inward Integration", "Secure Stripe Payment Gateways", "Customer Coupon & Discount Log", "Abandoned Cart Notification Bots"]
    },
    {
      name: "Education",
      desc: "Host virtual learning systems, automated grading sheets, and student database management modules.",
      icon: GraduationCap,
      capabilities: ["Course Syllabus Ingestion", "Virtual Classroom Booking", "Student Performance BI Dashboards", "Recruitment & Placement Trackers"]
    },
    {
      name: "Real Estate",
      desc: "Organize property listing portals, lease agreement logs, and customer site visit schedules.",
      icon: Building2,
      capabilities: ["Property Listing CRM Modules", "Lease Renewal Alerts", "Site Visit Appointment Calendars", "Agent Task Assignment Boards"]
    },
    {
      name: "Hospitality",
      desc: "Optimize guest bookings, kitchen inventory stock alerts, and staff attendance logs.",
      icon: Hotel,
      capabilities: ["Room Booking API Bridges", "Kitchen Supply Valuations", "Guest Incident Ticket Systems", "Staff Shifts Scheduling Panels"]
    },
    {
      name: "Government",
      desc: "Provide secure digital portals, document filing storage, and audit logs with high access controls.",
      icon: Landmark,
      capabilities: ["SSO Directory Authentication", "Secure Document Filing Archives", "Granular Staff Access Control Lists", "Incident Ticketing Helpdesk"]
    },
    {
      name: "Startups",
      desc: "Speed up time-to-market with rapid MVP blueprints, database planning, and scalable code structures.",
      icon: Zap,
      capabilities: ["MVP Scoping Blueprints", "Firebase/PostgreSQL Fast Setups", "API Gateways Documentation", "SaaS Stripe Integration Setups"]
    },
    {
      name: "SMEs",
      desc: "Consolidate business tools, customer databases, billing lists, and team task sheets inside a single app.",
      icon: Briefcase,
      capabilities: ["Unified Business Management Hubs", "Billing & Billing Reminders", "Staff Attendance Records", "Customer Data Storage Modules"]
    }
  ];

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto border-t border-slate-200 bg-gradient-to-b from-white via-blue-50/5 to-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Copywriting & Navigation */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-blue-100 bg-blue-50/40 px-4 py-1.5 text-xs font-semibold text-[#00529b]">
            <span>Enterprise Vertical Markets</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Industry-Specific Enterprise Solutions
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            We build software tailored to the exact requirements of your business vertical. Explore our capabilities across core industries to see how we help organizations streamline operations, automate workflows, and accelerate growth.
          </p>
          
          {/* Industry Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-4">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <button
                  key={ind.name}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center space-x-2.5 p-3 rounded-xl border text-left text-xs font-semibold transition-all duration-200 ${
                    activeTab === idx
                      ? "bg-blue-50/70 border-blue-300 text-[#00529b] shadow-sm"
                      : "bg-white border-slate-200/60 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${activeTab === idx ? "text-[#00529b]" : "text-slate-400"}`} />
                  <span className="truncate">{ind.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Active Industry Spotlight Card */}
        <div className="lg:col-span-7">
          <GlassCard className="border-slate-200/60 shadow-xl p-8 sm:p-10 rounded-3xl relative overflow-hidden min-h-[400px] flex flex-col justify-between hover:border-[#00529b]/25 transition-all duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
            
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center space-x-4">
                <div className="p-3.5 rounded-2xl bg-blue-500/10 text-[#00529b]">
                  {React.createElement(industries[activeTab].icon, { className: "h-6 w-6" })}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Industry Segment</span>
                  <h3 className="text-2xl font-bold text-slate-900">{industries[activeTab].name}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {industries[activeTab].desc}
              </p>

              {/* Key Capabilities */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Custom Deliverables</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {industries[activeTab].capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <ChevronRight className="h-3.5 w-3.5 text-[#00529b] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4 mt-6">
              <span className="text-[10px] text-slate-400 font-mono">End-to-End Solutions • VP Enterpriceses</span>
              <a 
                href="/contact"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#00529b] hover:underline"
              >
                <span>Request Industry Blueprints</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </GlassCard>
        </div>

      </div>
    </section>
  );
};
