'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useEffect, useState } from "react"
import { createUserByAdmin, getAllUsers, updateUserRole, getCurrentUser } from "@/app/actions/auth"
import { useRouter } from "next/navigation"

interface User {
  id: number
  email: string
  role: string | null
  createdAt: number | null
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const userResult = await getCurrentUser()

    // Allow access if user is admin OR if there are no admins yet (initial setup)
    const usersResult = await getAllUsers()
    const hasAdmins = usersResult.success && usersResult.users.some(u => u.role === 'admin')

    if (!hasAdmins && !userResult) {
      // Allow initial setup without login
      setCurrentUser(null)
    } else if (!userResult || userResult.role !== 'admin') {
      router.push('/dashboard')
      return
    } else {
      setCurrentUser(userResult)
    }

    if (usersResult.success) {
      setUsers(usersResult.users as User[])
    }
    setLoading(false)
  }

  const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const result = await createUserByAdmin(formData)
    if (result.success) {
      loadData() // Reload users
      e.currentTarget.reset()
    } else {
      alert(result.error)
    }
  }

  const handleRoleChange = async (userId: number, newRole: string) => {
    const result = await updateUserRole(userId, newRole)
    if (result.success) {
      loadData() // Reload users
    } else {
      alert(result.error)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  // Allow access if user is admin OR if there are no admins yet (initial setup)
  const hasAdmins = users.some(u => u.role === 'admin')
  if (!hasAdmins && !currentUser) {
    // Allow initial setup
  } else if (!currentUser || currentUser.role !== 'admin') {
    return <div>Access denied</div>
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">User Management</h1>
          <p className="text-gray-400">Manage users and their roles</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Create User Form */}
          <Card className="border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-black">
            <CardHeader>
              <CardTitle className="text-white">Create New User</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreateUser} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-black/60 border-white/10 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="bg-black/60 border-white/10 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-gray-300">
                    Role
                  </Label>
                  <Select name="role" defaultValue="user">
                    <SelectTrigger className="bg-black/60 border-white/10 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple-600 text-white hover:bg-purple-700"
                >
                  Create User
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Users List */}
          <Card className="border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-black">
            <CardHeader>
              <CardTitle className="text-white">All Users ({users.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-gray-300">Email</TableHead>
                    <TableHead className="text-gray-300">Role</TableHead>
                    <TableHead className="text-gray-300">Created</TableHead>
                    <TableHead className="text-gray-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="text-white">{user.email}</TableCell>
                      <TableCell>
                        <Select
                          value={(user.role || 'user') as string}
                          onValueChange={(value) => handleRoleChange(user.id, value)}
                        >
                          <SelectTrigger className="w-24 bg-black/60 border-white/10 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="user">User</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-gray-400">
                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-white"
                          onClick={() => {/* Could add delete functionality */}}
                        >
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}