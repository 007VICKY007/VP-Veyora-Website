"use client";

import React, { useState, useEffect } from "react";
import { GlassCard } from "@/components/shared/GlassCard";
import { 
  Search, 
  Filter, 
  Trash2, 
  Eye, 
  Check, 
  X, 
  AlertCircle, 
  Edit,
  Save,
  MessageSquare
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  companyName: string | null;
  email: string;
  phone: string | null;
  country: string | null;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  status: "PENDING" | "CONTACTED" | "IN_PROGRESS" | "CLOSED_WON" | "CLOSED_LOST";
  notes: string | null;
  createdAt: string;
}

export default function LeadsTrackerPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  // Modal Detail State
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [editNotes, setEditNotes] = useState("");
  const [updatingLeadId, setUpdatingLeadId] = useState<string | null>(null);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      if (res.ok) {
        const data = await res.json();
        setLeads(data);
      } else {
        setError("Failed to fetch leads records.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error fetching leads.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    setUpdatingLeadId(id);
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        const updated = await res.json();
        setLeads(prev => prev.map(lead => lead.id === id ? { ...lead, status: updated.lead.status } : lead));
        if (selectedLead && selectedLead.id === id) {
          setSelectedLead(prev => prev ? { ...prev, status: updated.lead.status } : null);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingLeadId(null);
    }
  };

  const handleSaveNotes = async (id: string) => {
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes: editNotes }),
      });
      if (res.ok) {
        const updated = await res.json();
        setLeads(prev => prev.map(lead => lead.id === id ? { ...lead, notes: updated.lead.notes } : lead));
        if (selectedLead && selectedLead.id === id) {
          setSelectedLead(prev => prev ? { ...prev, notes: updated.lead.notes } : null);
        }
        alert("Internal notes saved successfully!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this lead record?")) return;
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setLeads(prev => prev.filter(l => l.id !== id));
        setSelectedLead(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Filter & Search Logic
  const filteredLeads = leads.filter(lead => {
    const matchesStatus = filterStatus === "ALL" || lead.status === filterStatus;
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.companyName && lead.companyName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      lead.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING": return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
      case "CONTACTED": return "bg-yellow-500/10 text-yellow-500 border-blue-500/20";
      case "IN_PROGRESS": return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "CLOSED_WON": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "CLOSED_LOST": return "bg-red-500/10 text-red-400 border-red-500/20";
      default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <div className="space-y-8 relative">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Leads Tracker</h1>
          <p className="text-sm text-gray-500 mt-1">Review contact inquiries, budgets, and manage sales statuses.</p>
        </div>
        <button 
          onClick={fetchLeads}
          className="rounded-xl bg-gray-900 border border-gray-800 hover:bg-gray-850 px-4 py-2.5 text-xs sm:text-sm font-semibold"
        >
          Refresh Leads
        </button>
      </div>

      {/* Filters & Search bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-gray-900/20 border border-gray-900 p-4 rounded-2xl">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <span className="absolute left-3 top-3 text-gray-500">
            <Search className="h-4 w-4" />
          </span>
          <input
            type="text"
            placeholder="Search leads..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-gray-800 bg-gray-950/80 pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none"
          />
        </div>

        {/* Status Filter Tabs */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {["ALL", "PENDING", "CONTACTED", "IN_PROGRESS", "CLOSED_WON", "CLOSED_LOST"].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold border ${
                filterStatus === status
                  ? "bg-indigo-650 text-white border-indigo-650"
                  : "bg-gray-950 text-gray-400 border-gray-850 hover:text-white"
              }`}
            >
              {status.replace("_", " ")}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table Card */}
      <GlassCard interactive={false} className="border-gray-900 bg-gray-900/10 p-0 overflow-hidden">
        {loading ? (
          <div className="text-center py-20">
            <span className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent inline-block"></span>
            <p className="text-xs text-gray-500 mt-2">Loading submissions...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 text-red-400 space-y-2">
            <AlertCircle className="h-8 w-8 mx-auto" />
            <p className="text-sm">{error}</p>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No lead submissions found matching the criteria.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-900 text-gray-400 bg-gray-900/20">
                  <th className="p-4 font-semibold uppercase">Client</th>
                  <th className="p-4 font-semibold uppercase">Service</th>
                  <th className="p-4 font-semibold uppercase">Budget & Timeline</th>
                  <th className="p-4 font-semibold uppercase">Status</th>
                  <th className="p-4 font-semibold uppercase">Date</th>
                  <th className="p-4 font-semibold uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-900">
                {filteredLeads.map((lead) => {
                  const leadDate = new Date(lead.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                  return (
                    <tr key={lead.id} className="hover:bg-gray-900/10 transition-colors">
                      {/* Name/Company */}
                      <td className="p-4">
                        <div className="font-bold text-white">{lead.name}</div>
                        <div className="text-xs text-gray-500">{lead.companyName || "No Company"}</div>
                        <div className="text-[10px] text-indigo-400 mt-0.5">{lead.email}</div>
                      </td>

                      {/* Service */}
                      <td className="p-4">
                        <span className="font-semibold text-gray-200">{lead.service}</span>
                      </td>

                      {/* Budget / Timeline */}
                      <td className="p-4">
                        <div className="text-gray-300 font-medium">{lead.budget}</div>
                        <div className="text-xs text-gray-500">{lead.timeline}</div>
                      </td>

                      {/* Status */}
                      <td className="p-4">
                        <span className={`inline-flex rounded-md border px-2 py-0.5 text-xs font-semibold ${getStatusColor(lead.status)}`}>
                          {lead.status.replace("_", " ")}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="p-4 text-gray-400 font-medium">{leadDate}</td>

                      {/* Actions */}
                      <td className="p-4 text-right space-x-2">
                        <button
                          onClick={() => {
                            setSelectedLead(lead);
                            setEditNotes(lead.notes || "");
                          }}
                          className="p-2 text-indigo-400 bg-indigo-500/10 border border-indigo-500/10 hover:border-indigo-500/30 rounded-xl"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteLead(lead.id)}
                          className="p-2 text-red-400 bg-red-500/10 border border-red-500/10 hover:border-red-500/30 rounded-xl"
                          title="Delete Lead"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </GlassCard>

      {/* Details View Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <GlassCard interactive={false} className="max-w-2xl w-full border-gray-900 bg-gray-950 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-900 pb-4">
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Inquiry Details</span>
                <h3 className="text-xl font-bold text-white mt-1">{selectedLead.name}</h3>
                <p className="text-xs text-gray-500">{selectedLead.companyName || "Independent Startup"}</p>
              </div>
              <button 
                onClick={() => setSelectedLead(null)}
                className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Fields grid */}
            <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <span className="text-xs text-gray-500 block">Email Address</span>
                <a href={`mailto:${selectedLead.email}`} className="text-indigo-400 hover:underline font-semibold">{selectedLead.email}</a>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">Phone / WhatsApp</span>
                <span className="text-white font-semibold">{selectedLead.phone || "Not Provided"}</span>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">Country Location</span>
                <span className="text-white font-semibold">{selectedLead.country || "Not Provided"}</span>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">Selected Budget</span>
                <span className="text-white font-semibold">{selectedLead.budget}</span>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">Desired Timeline</span>
                <span className="text-white font-semibold">{selectedLead.timeline}</span>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">Workflow Status</span>
                <select
                  value={selectedLead.status}
                  onChange={(e) => handleUpdateStatus(selectedLead.id, e.target.value)}
                  className="rounded-lg border border-gray-800 bg-gray-900 px-2 py-1 text-xs text-white focus:outline-none mt-1 [&>option]:bg-gray-950"
                >
                  <option value="PENDING">Pending Review</option>
                  <option value="CONTACTED">Contacted Client</option>
                  <option value="IN_PROGRESS">Contract Pending</option>
                  <option value="CLOSED_WON">Closed Won</option>
                  <option value="CLOSED_LOST">Closed Lost</option>
                </select>
              </div>
            </div>

            {/* Scope Message */}
            <div className="space-y-1.5 border-t border-gray-900 pt-4">
              <span className="text-xs text-gray-500 font-semibold uppercase flex items-center space-x-1">
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Project Scope & Message:</span>
              </span>
              <p className="bg-gray-900/30 border border-gray-900 rounded-xl p-4 text-xs sm:text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">
                {selectedLead.message}
              </p>
            </div>

            {/* Internal CRM Notes */}
            <div className="space-y-2 border-t border-gray-900 pt-4">
              <label htmlFor="notes" className="text-xs text-gray-500 font-semibold uppercase block">Internal Admin Notes:</label>
              <textarea
                id="notes"
                rows={3}
                value={editNotes}
                onChange={(e) => setEditNotes(e.target.value)}
                placeholder="Log follow-up comments, quotation details, or meeting links here..."
                className="w-full rounded-xl border border-gray-850 bg-gray-900/50 p-3 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none"
              ></textarea>
              <button
                type="button"
                onClick={() => handleSaveNotes(selectedLead.id)}
                className="flex items-center space-x-1.5 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Notes</span>
              </button>
            </div>

          </GlassCard>
        </div>
      )}

    </div>
  );
}
