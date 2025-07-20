"use client"

import { DashboardLayout } from '@/components/dashboard/layout'
import { SettingsPage } from '@/components/dashboard/settings'

export default function Settings() {
  return (
    <DashboardLayout>
      <SettingsPage />
    </DashboardLayout>
  )
}