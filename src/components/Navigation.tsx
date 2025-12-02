"use client"

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, Bike, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { authClient, useSession } from '@/lib/auth-client';
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending, refetch } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();
    if (error?.code) {
      toast.error("Failed to sign out");
    } else {
      localStorage.removeItem("bearer_token");
      refetch();
      toast.success("Signed out successfully");
      router.push("/");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-600 to-green-400 p-2 rounded-lg">
              <Bike className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent">
              ZippGo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Services
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Contact
            </Link>

            {!isPending && session?.user ? (
              <>
                <Link href="/user">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Dashboard
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="gap-2">
                      <User className="w-4 h-4" />
                      {session.user.name}
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/user">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/partner">Partner Portal</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-gradient-to-r from-blue-600 to-green-400 hover:from-blue-700 hover:to-green-500 text-white">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 transition font-medium">
              Home
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600 transition font-medium">
              About
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-blue-600 transition font-medium">
              Services
            </Link>
            <Link href="/pricing" className="block text-gray-700 hover:text-blue-600 transition font-medium">
              Pricing
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600 transition font-medium">
              Contact
            </Link>

            {!isPending && session?.user ? (
              <>
                <div className="pt-2 border-t">
                  <p className="text-sm text-gray-600 mb-2">Signed in as {session.user.name}</p>
                  <Link href="/user">
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 mb-2">
                      Dashboard
                    </Button>
                  </Link>
                  <Link href="/partner">
                    <Button variant="outline" className="w-full mb-2">
                      Partner Portal
                    </Button>
                  </Link>
                  <Button
                    onClick={handleSignOut}
                    variant="outline"
                    className="w-full border-red-600 text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-400 hover:from-blue-700 hover:to-green-500 text-white">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}