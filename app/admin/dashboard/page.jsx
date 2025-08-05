import Link from "next/link"
import { Home, FolderKanban, LayoutList, Users, MessageSquareText, Settings, LogOut, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Admin Dashboard - InnovateGardens",
  description: "Admin panel for managing InnovateGardens website content.",
}

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-garden-green-800 text-white p-6 flex flex-col">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-garden-green-500">Admin</h1>
          <p className="text-sm text-gray-300">InnovateGardens</p>
        </div>
        <nav className="flex-grow space-y-4">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-3 text-lg font-medium hover:text-garden-green-500 transition-colors"
          >
            <Home className="w-5 h-5" />
            Dashboard
          </Link>
          <Link
            href="/admin/projects"
            className="flex items-center gap-3 text-lg font-medium hover:text-garden-green-500 transition-colors"
          >
            <FolderKanban className="w-5 h-5" />
            Projects
          </Link>
          <Link
            href="/admin/services"
            className="flex items-center gap-3 text-lg font-medium hover:text-garden-green-500 transition-colors"
          >
            <LayoutList className="w-5 h-5" />
            Services
          </Link>
          <Link
            href="/admin/team"
            className="flex items-center gap-3 text-lg font-medium hover:text-garden-green-500 transition-colors"
          >
            <Users className="w-5 h-5" />
            Team
          </Link>
          <Link
            href="/admin/testimonials"
            className="flex items-center gap-3 text-lg font-medium hover:text-garden-green-500 transition-colors"
          >
            <MessageSquareText className="w-5 h-5" />
            Testimonials
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center gap-3 text-lg font-medium hover:text-garden-green-500 transition-colors"
          >
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </nav>
        <div className="mt-auto">
          <Button
            variant="ghost"
            className="w-full justify-start text-lg font-medium text-white hover:text-garden-green-500 hover:bg-transparent"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-8">
        <h2 className="text-4xl font-bold text-text-dark mb-8">Dashboard Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
              <FolderKanban className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">25</div>
              <p className="text-xs text-muted-foreground">+5 this month</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">New Inquiries</CardTitle>
              <Mail className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Unread messages</p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Team Members</CardTitle>
              <Users className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Active staff</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity / Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Recent Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex justify-between items-center text-text-light">
                  <span>University Campus Revitalization</span>
                  <span className="text-xs text-gray-500">2 days ago</span>
                </li>
                <li className="flex justify-between items-center text-text-light">
                  <span>Eco-Friendly Residential Garden</span>
                  <span className="text-xs text-gray-500">1 week ago</span>
                </li>
                <li className="flex justify-between items-center text-text-light">
                  <span>Downtown Public Park Upgrade</span>
                  <span className="text-xs text-gray-500">3 weeks ago</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Button className="bg-garden-green-600 hover:bg-garden-green-700 text-white w-full">
                Add New Project
              </Button>
              <Button
                variant="outline"
                className="border-garden-green-600 text-garden-green-600 hover:bg-garden-green-50 hover:text-garden-green-700 w-full bg-transparent"
              >
                View All Inquiries
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
