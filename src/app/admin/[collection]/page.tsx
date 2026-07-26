"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { GlassCard } from "@/components/shared/GlassCard";
import { 
  Plus, 
  Trash2, 
  Edit2, 
  ArrowLeft, 
  Save, 
  AlertCircle,
  Check
} from "lucide-react";

const VALID_COLLECTIONS = ["services", "portfolio", "blog", "testimonials", "careers", "pricing"];

interface Field {
  name: string;
  label: string;
  type: "text" | "textarea" | "checkbox" | "number" | "select";
  required: boolean;
  placeholder?: string;
  options?: string[];
}

export default function DynamicCmsPage() {
  const params = useParams();
  const router = useRouter();
  const collection = params.collection as string;

  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Dynamic Form State
  const [formData, setFormData] = useState<Record<string, any>>({});

  useEffect(() => {
    if (!VALID_COLLECTIONS.includes(collection)) {
      router.push("/admin/dashboard");
      return;
    }
    fetchItems();
  }, [collection]);

  const fetchItems = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/cms/${collection}`);
      if (res.ok) {
        const data = await res.json();
        setItems(data);
      } else {
        setError(`Failed to fetch ${collection} records.`);
      }
    } catch (err) {
      console.error(err);
      setError("Network error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  // 1. Define fields configuration for each collection type
  const getFieldsConfig = (): Field[] => {
    switch (collection) {
      case "services":
        return [
          { name: "title", label: "Service Title", type: "text", required: true },
          { name: "slug", label: "Slug", type: "text", required: true, placeholder: "artificial-intelligence" },
          { name: "category", label: "Category", type: "text", required: true, placeholder: "Artificial Intelligence" },
          { name: "description", label: "Description", type: "textarea", required: true },
          { name: "icon", label: "Lucide Icon Name", type: "text", required: true, placeholder: "Brain, Cpu, Code, Globe" },
          { name: "features", label: "Features (JSON String Array)", type: "textarea", required: true, placeholder: '["Feature 1", "Feature 2"]' },
          { name: "techStack", label: "Tech Stack (JSON String Array)", type: "textarea", required: false, placeholder: '["Next.js", "PostgreSQL"]' }
        ];
      case "portfolio":
        return [
          { name: "title", label: "Project Title", type: "text", required: true },
          { name: "slug", label: "Slug", type: "text", required: true, placeholder: "enterprise-automation-engine" },
          { name: "category", label: "Category", type: "text", required: true, placeholder: "AI Automation" },
          { name: "client", label: "Client Name", type: "text", required: true },
          { name: "description", label: "Short Description", type: "textarea", required: true },
          { name: "challenge", label: "Challenge Details", type: "textarea", required: true },
          { name: "solution", label: "Solution Details", type: "textarea", required: true },
          { name: "results", label: "Results (JSON Key-Value Map)", type: "textarea", required: true, placeholder: '{"Time Saved": "85%", "Accuracy": "99.2%"}' },
          { name: "imageUrl", label: "Image URL", type: "text", required: true, placeholder: "https://images.unsplash.com/..." },
          { name: "websiteUrl", label: "Website URL", type: "text", required: false },
          { name: "featured", label: "Featured Case Study", type: "checkbox", required: false }
        ];
      case "blog":
        return [
          { name: "title", label: "Article Title", type: "text", required: true },
          { name: "slug", label: "Slug", type: "text", required: true, placeholder: "gen-ai-enterprise-automation" },
          { name: "excerpt", label: "Excerpt / Summary", type: "textarea", required: true },
          { name: "content", label: "Article Content", type: "textarea", required: true },
          { name: "coverImage", label: "Cover Image URL", type: "text", required: true, placeholder: "https://images.unsplash.com/..." },
          { name: "author", label: "Author Name", type: "text", required: true, placeholder: "Vignesh Pandiya" },
          { name: "readTime", label: "Read Time Tag", type: "text", required: true, placeholder: "5 min read" },
          { name: "tags", label: "Tags (JSON String Array)", type: "textarea", required: true, placeholder: '["AI", "Automation", "Enterprise"]' },
          { name: "published", label: "Publish Article", type: "checkbox", required: false }
        ];
      case "testimonials":
        return [
          { name: "name", label: "Client Name", type: "text", required: true },
          { name: "role", label: "Client Role", type: "text", required: true, placeholder: "Founder / CTO" },
          { name: "company", label: "Company", type: "text", required: true },
          { name: "feedback", label: "Feedback Quote", type: "textarea", required: true },
          { name: "rating", label: "Rating Stars (1-5)", type: "number", required: true, placeholder: "5" },
          { name: "avatarUrl", label: "Avatar Image URL", type: "text", required: false },
          { name: "featured", label: "Display on Home", type: "checkbox", required: false }
        ];
      case "careers":
        return [
          { name: "title", label: "Job Title", type: "text", required: true },
          { name: "department", label: "Department", type: "text", required: true, placeholder: "Engineering / Security" },
          { name: "location", label: "Location", type: "text", required: true, placeholder: "Tamil Nadu, India (Hybrid) / Remote" },
          { name: "type", label: "Job Type", type: "text", required: true, placeholder: "Full-time / Contract" },
          { name: "description", label: "Job Description", type: "textarea", required: true },
          { name: "requirements", label: "Requirements (JSON String Array)", type: "textarea", required: true, placeholder: '["3+ years experience with Next.js", "Strong database skills"]' },
          { name: "benefits", label: "Benefits (JSON String Array)", type: "textarea", required: true, placeholder: '["Flexible work hours", "Health insurance"]' },
          { name: "status", label: "Job Status", type: "select", required: true, options: ["OPEN", "CLOSED"] }
        ];
      case "pricing":
        return [
          { name: "name", label: "Plan Name", type: "text", required: true },
          { name: "price", label: "Plan Price", type: "text", required: true, placeholder: "₹49,999" },
          { name: "billingPeriod", label: "Billing Period", type: "text", required: true, placeholder: "one-time / month" },
          { name: "description", label: "Short Description", type: "textarea", required: true },
          { name: "features", label: "Features list (JSON String Array)", type: "textarea", required: true, placeholder: '["Feature 1", "Feature 2"]' },
          { name: "buttonText", label: "Button Label", type: "text", required: false, placeholder: "Get Started" },
          { name: "buttonUrl", label: "Button Redirect Link", type: "text", required: false, placeholder: "/contact" },
          { name: "featured", label: "Highlight Plan", type: "checkbox", required: false }
        ];
      default:
        return [];
    }
  };

  const handleCreateNew = () => {
    setIsEditing(true);
    setEditingId(null);
    const initialForm: Record<string, any> = {};
    getFieldsConfig().forEach(f => {
      initialForm[f.name] = f.type === "checkbox" ? false : f.type === "number" ? 5 : f.name === "status" ? "OPEN" : "";
    });
    setFormData(initialForm);
  };

  const handleEditClick = (item: any) => {
    setIsEditing(true);
    setEditingId(item.id);
    const initialForm: Record<string, any> = {};
    getFieldsConfig().forEach(f => {
      let val = item[f.name];
      if (f.name === "features" || f.name === "techStack" || f.name === "requirements" || f.name === "benefits" || f.name === "results" || f.name === "tags") {
        if (val && typeof val !== "string") {
          val = JSON.stringify(val);
        }
      }
      initialForm[f.name] = val !== undefined ? val : f.type === "checkbox" ? false : "";
    });
    setFormData(initialForm);
  };

  const handleFieldChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // JSON Validation parsing check
    const fieldsToParse = ["features", "techStack", "requirements", "benefits", "results", "tags"];
    const parsedForm = { ...formData };
    
    for (const key of fieldsToParse) {
      if (parsedForm[key] !== undefined && typeof parsedForm[key] === "string" && parsedForm[key] !== "") {
        try {
          JSON.parse(parsedForm[key]);
        } catch (err) {
          setError(`Invalid JSON array or object format inside ${key} field.`);
          return;
        }
      }
    }

    const method = editingId ? "PATCH" : "POST";
    const url = editingId ? `/api/cms/${collection}/${editingId}` : `/api/cms/${collection}`;

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsedForm),
      });

      if (res.ok) {
        setIsEditing(false);
        setEditingId(null);
        fetchItems();
      } else {
        const result = await res.json();
        setError(result.error || "Submission failed.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error saving configuration.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    try {
      const res = await fetch(`/api/cms/${collection}/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setItems(prev => prev.filter(item => item.id !== id));
      } else {
        setError("Deletion failed.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-900 pb-4">
        <div>
          <h1 className="text-3xl font-bold text-white capitalize">{collection} CMS Editor</h1>
          <p className="text-sm text-gray-500 mt-1">Manage, add, and update details for the public {collection} section.</p>
        </div>
        {!isEditing && (
          <button
            onClick={handleCreateNew}
            className="flex items-center space-x-1.5 rounded-xl bg-indigo-650 hover:bg-indigo-550 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all focus:outline-none"
          >
            <Plus className="h-4 w-4" />
            <span>Add Item</span>
          </button>
        )}
      </div>

      {isEditing ? (
        /* Edit / Create Form View */
        <GlassCard interactive={false} className="border-gray-900 bg-gray-900/10 p-6 sm:p-10 space-y-6">
          
          <div className="flex items-center justify-between border-b border-gray-850 pb-4">
            <h3 className="font-bold text-white text-lg">{editingId ? "Edit Item" : "Create New Item"}</h3>
            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center space-x-1.5 rounded-lg bg-gray-900 border border-gray-800 px-3 py-1.5 text-xs text-gray-400 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Cancel</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
            {getFieldsConfig().map((field) => (
              <div key={field.name} className="space-y-2">
                <label htmlFor={field.name} className="text-sm font-semibold text-gray-300">
                  {field.label} {field.required && "*"}
                </label>
                
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    required={field.required}
                    rows={4}
                    value={formData[field.name] || ""}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-gray-850 bg-gray-950/80 px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none"
                  ></textarea>
                ) : field.type === "checkbox" ? (
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={field.name}
                      checked={!!formData[field.name]}
                      onChange={(e) => handleFieldChange(field.name, e.target.checked)}
                      className="rounded border-gray-800 bg-gray-950 text-indigo-650 h-4 w-4 focus:ring-0 focus:ring-offset-0"
                    />
                    <span className="text-xs text-gray-400">{field.label} active status</span>
                  </div>
                ) : field.type === "select" ? (
                  <select
                    id={field.name}
                    required={field.required}
                    value={formData[field.name] || ""}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    className="w-full rounded-xl border border-gray-850 bg-gray-950/80 px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none [&>option]:bg-gray-950"
                  >
                    {field.options?.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    required={field.required}
                    value={formData[field.name] || ""}
                    onChange={(e) => handleFieldChange(field.name, field.type === "number" ? Number(e.target.value) : e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-gray-850 bg-gray-950/80 px-4 py-3 text-sm text-white focus:border-indigo-500 focus:outline-none"
                  />
                )}
              </div>
            ))}

            {error && (
              <div className="flex items-center space-x-2 rounded-xl bg-red-500/10 p-4 text-xs sm:text-sm text-red-400 border border-red-500/20">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="flex items-center space-x-1.5 rounded-xl bg-indigo-650 hover:bg-indigo-550 px-6 py-3 text-sm font-semibold text-white transition-all focus:outline-none"
            >
              <Save className="h-4 w-4" />
              <span>Save Record</span>
            </button>
          </form>

        </GlassCard>
      ) : (
        /* List View (Table of Items) */
        <GlassCard interactive={false} className="border-gray-900 bg-gray-900/10 p-0 overflow-hidden">
          {loading ? (
            <div className="text-center py-20">
              <span className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent inline-block"></span>
              <p className="text-xs text-gray-500 mt-2">Loading CMS items...</p>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              No items in this collection. Click "Add Item" to add some!
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-gray-900 text-gray-400 bg-gray-900/20">
                    <th className="p-4 font-semibold uppercase">Item Details</th>
                    <th className="p-4 font-semibold uppercase">Category / Group</th>
                    <th className="p-4 font-semibold uppercase">Slug / Link</th>
                    <th className="p-4 font-semibold uppercase text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-900">
                  {items.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-900/10 transition-colors">
                      {/* Name / Title */}
                      <td className="p-4">
                        <div className="font-bold text-white">{item.title || item.name}</div>
                        <div className="text-[10px] text-gray-500 mt-0.5">{item.client || item.author || item.price || "No metadata"}</div>
                      </td>

                      {/* Category */}
                      <td className="p-4">
                        <span className="text-gray-300 font-semibold">{item.category || item.department || "General"}</span>
                      </td>

                      {/* Slug */}
                      <td className="p-4 text-gray-400 font-mono">
                        {item.slug || `ID: ${item.id.substring(0, 8)}...`}
                      </td>

                      {/* Actions */}
                      <td className="p-4 text-right space-x-2">
                        <button
                          onClick={() => handleEditClick(item)}
                          className="p-2 text-indigo-400 bg-indigo-500/10 border border-indigo-500/10 hover:border-indigo-500/30 rounded-xl"
                          title="Edit"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 text-red-400 bg-red-500/10 border border-red-500/10 hover:border-red-500/30 rounded-xl"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </GlassCard>
      )}

    </div>
  );
}
