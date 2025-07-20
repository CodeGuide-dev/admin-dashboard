"use client"

import { 
  Users, 
  TrendingUp, 
  Activity, 
  CreditCard,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const stats = [
  {
    title: 'Total Users',
    value: '12,234',
    change: '+12.3%',
    trend: 'up',
    icon: Users,
    description: 'Active users this month'
  },
  {
    title: 'Revenue',
    value: '$45,231',
    change: '+8.2%',
    trend: 'up',
    icon: CreditCard,
    description: 'Total revenue this month'
  },
  {
    title: 'Conversion Rate',
    value: '3.2%',
    change: '-2.1%',
    trend: 'down',
    icon: TrendingUp,
    description: 'Visitor to customer rate'
  },
  {
    title: 'Active Sessions',
    value: '2,847',
    change: '+18.1%',
    trend: 'up',
    icon: Activity,
    description: 'Current active sessions'
  },
]

const recentActivity = [
  {
    user: 'John Doe',
    action: 'Created new project',
    time: '2 minutes ago',
    status: 'success'
  },
  {
    user: 'Jane Smith',
    action: 'Updated user profile',
    time: '5 minutes ago',
    status: 'info'
  },
  {
    user: 'Mike Johnson',
    action: 'Deleted project',
    time: '10 minutes ago',
    status: 'warning'
  },
  {
    user: 'Sarah Wilson',
    action: 'Made payment',
    time: '15 minutes ago',
    status: 'success'
  },
]

const projectProgress = [
  { name: 'Website Redesign', progress: 75, status: 'In Progress' },
  { name: 'Mobile App', progress: 40, status: 'Planning' },
  { name: 'API Integration', progress: 90, status: 'Review' },
  { name: 'Database Migration', progress: 25, status: 'Started' },
]

export function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Welcome back!</h2>
        <p className="text-muted-foreground">
          Here&apos;s what&apos;s happening with your projects today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center space-x-2">
                  {stat.trend === 'up' ? (
                    <ArrowUpRight className="h-4 w-4 text-green-600" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-600" />
                  )}
                  <p className={`text-xs ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Recent Activity */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Latest user actions and system events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {activity.user}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {activity.action}
                        </p>
                      </div>
                      <div className="ml-auto font-medium">
                        <Badge 
                          variant={
                            activity.status === 'success' ? 'default' :
                            activity.status === 'warning' ? 'secondary' : 'outline'
                          }
                        >
                          {activity.time}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Progress */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Project Progress</CardTitle>
                <CardDescription>
                  Track your ongoing projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projectProgress.map((project, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{project.name}</p>
                        <Badge variant="outline">{project.status}</Badge>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        {project.progress}% complete
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Overview</CardTitle>
              <CardDescription>
                Detailed analytics and insights coming soon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-64 text-muted-foreground">
                <p>Analytics dashboard will be implemented here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>
                Generate and view detailed reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-64 text-muted-foreground">
                <p>Reporting features will be implemented here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}