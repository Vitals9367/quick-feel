'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LayoutDashboard, MessageSquare, BarChart2, Bell, Settings, Users } from 'lucide-react'

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Feedback', href: '/dashboard/feedback', icon: MessageSquare },
  { name: 'Reports', href: '/dashboard/reports', icon: BarChart2 },
  { name: 'Alerts', href: '/dashboard/alerts', icon: Bell },
  { name: 'Team', href: '/dashboard/team', icon: Users },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="flex items-center gap-2 pb-8">
          <div className="h-8 w-8 rounded-full bg-[#2A9D8F]" />
          <span className="text-xl font-bold">QuickFeel</span>
        </div>
        <nav className="flex flex-col space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                'group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold',
                pathname === item.href
                  ? 'bg-gray-50 text-[#2A9D8F]'
                  : 'text-gray-700 hover:text-[#2A9D8F] hover:bg-gray-50'
              )}
            >
              <item.icon
                className={cn(
                  'h-6 w-6 shrink-0',
                  pathname === item.href
                    ? 'text-[#2A9D8F]'
                    : 'text-gray-400 group-hover:text-[#2A9D8F]'
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

