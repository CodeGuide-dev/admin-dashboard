"use client"

import { DashboardLayout } from '@/components/dashboard/layout'
import { UserManagement } from '@/components/dashboard/user-management'

export default function UsersPage() {
  return (
    <DashboardLayout>
      <UserManagement />
    </DashboardLayout>
  )
}