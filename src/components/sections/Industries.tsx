"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronRight,
  Layers
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
      desc: "Streamline international freight routing, automated customs validation, and real-time fleet telematics.",
      icon: Truck,
      capabilities: ["Manifest Tracking Systems", "Route & Fuel Optimization", "Automated Fleet Telematics", "Multi-Carrier API Bridges"]
    },
    {
      name: "Manufacturing",
      desc: "Connect factory floor IoT logs, automate inventory alerts, and optimize warehouse workflows.",
      icon: Factory,
      capabilities: ["IoT Machinery Analytics", "Threshold Inventory Alerts", "Warehouse Optimization", "Procurement Pipelines"]
    },
    {
      name: "Healthcare",
      desc: "Secure patient data flows, HIPAA-compliant databases, and virtual clinic scheduling systems.",
      icon: Heart,
      capabilities: ["Intake Form Automations", "Doctor Scheduling Portals", "Medical Stock Tracking", "HIPAA Cloud Compliance"]
    },
    {
      name: "Finance & Fintech",
      desc: "Predictive expense analytics, ledger sync pipelines, and continuous audit verification engines.",
      icon: DollarSign,
      capabilities: ["Approval Workflows", "Multi-Bank Sync Bridges", "Audit Compliance Loggers", "Automated Invoicing"]
    },
    {
      name: "Retail & E-commerce",
      desc: "High-speed headless digital storefronts, shopping cart sync pipelines, and real-time inventory valuations.",
      icon: ShoppingBag,
      capabilities: ["Real-Time Inventory Sync", "Secure Stripe Integrations", "Customer Retention Bots", "Conversion Analytics"]
    },
    {
      name: "Education & EdTech",
      desc: "Virtual learning management systems, automated grading sheets, and student data portals.",
      icon: GraduationCap,
      capabilities: ["Virtual Classrooms", "Course Ingestion Engines", "Performance Dashboards", "Placement Trackers"]
    },
    {
      name: "Real Estate",
      desc: "Property listing portals, automated lease renewal triggers, and visitor schedule workflows.",
      icon: Building2,
      capabilities: ["Property Listing Portals", "Lease Renewal Alerts", "Visit Scheduling Bots", "Agent Task Hubs"]
    },
    {
      name: "Hospitality",
      desc: "Centralized room booking pipelines, kitchen inventory tracking, and staff management portals.",
      icon: Hotel,
      capabilities: ["Direct Booking Engines", "Inventory Stock Alerts", "Staff Shift Schedulers", "Guest Service Pipelines"]
    },
    {
      name: "Government",
      desc: "Encrypted citizen portals, document record archives, and granular role-based access architectures.",
      icon: Landmark,
      capabilities: ["SSO Authentication", "Secure Document Archives", "Role-Based Access Lists", "Audit Incident Logs"]
    },
    {
      name: "Startups",
      desc: "Accelerate MVP launch velocity with proven architecture templates, database setups, and Stripe billing.",
      icon: Zap,
      capabilities: ["Rapid MVP Frameworks", "Postgres & Auth Setups", "API Architecture Docs", "Stripe SaaS Billing"]
    },
    {
      name: "SMEs",
      desc: "Consolidate business workflows, customer databases, and automated billing into a single dashboard.",
      icon: Briefcase,
      capabilities: ["Unified Operations Hub", "Automated Invoicing", "Client Database (CRM)", "Team Collaboration Portals"]
    }
  ];

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto border-t border-white/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Header & Tabs */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-[#F5C200]/20 bg-[#F5C200]/05 px-3.5 py-1 text-xs font-semibold text-[#F5C200]">
            <Layers className="h-3.5 w-3.5" />
            <span>Vertical Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Tailored for Your Industry
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-md">
            Purpose-built enterprise technology engineered to automate workflows, eliminate operational friction, and scale.
          </p>
          
          {/* Industry Buttons Grid */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={ind.name}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center space-x-2.5 px-3 py-2.5 rounded-lg border text-left text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#F5C200]/10 border-[#F5C200]/40 text-[#F5C200] shadow-sm shadow-[#F5C200]/10"
                      : "bg-white/[0.015] border-white/[0.06] text-white/50 hover:bg-white/[0.03] hover:border-white/[0.12] hover:text-white"
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 shrink-0 ${isActive ? "text-[#F5C200]" : "text-white/30"}`} />
                  <span className="truncate">{ind.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Active Industry Animated Detail */}
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.015] p-6 sm:p-10 relative overflow-hidden min-h-[380px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Header */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-[#F5C200]/10 text-[#F5C200] border border-[#F5C200]/20">
                    {React.createElement(industries[activeTab].icon, { className: "h-5 w-5" })}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest block">Sector</span>
                    <h3 className="text-xl font-bold text-white">{industries[activeTab].name}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {industries[activeTab].desc}
                </p>

                {/* Capabilities */}
                <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                  <h4 className="text-[11px] font-bold text-[#F5C200] uppercase tracking-wider">Engineered Capabilities</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {industries[activeTab].capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-xs text-white/70">
                        <ChevronRight className="h-3 w-3 text-[#F5C200] shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-4 mt-8">
              <span className="text-[11px] text-white/30 font-mono">VP Veyora Enterprise Systems</span>
              <a 
                href="/contact"
                className="inline-flex items-center space-x-1 text-xs font-semibold text-[#F5C200] hover:text-white transition-colors"
              >
                <span>Request Blueprint</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
