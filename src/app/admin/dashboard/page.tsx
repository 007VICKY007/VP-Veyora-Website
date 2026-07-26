import React from "react";
import { db } from "@/lib/db";
import DashboardClient from "./DashboardClient";

// Next.js App Router Page Config (Dynamic rendering to get latest DB updates)
export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  let leads: { status: any; budget: string }[] = [];
  
  try {
    leads = await db.lead.findMany({
      select: {
        status: true,
        budget: true,
      }
    });
  } catch (error) {
    console.error("Failed to query leads for admin panel:", error);
    // Fall back to empty array so layout doesn't crash in development
    leads = [];
  }

  return <DashboardClient leads={leads} />;
}
