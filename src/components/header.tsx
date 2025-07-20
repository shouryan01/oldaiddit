"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import AuthModal from "@/components/auth/auth-modal";

export default function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  return (
    <header className="sticky top-0 z-50 w-full border-b pb-1 bg-white">
      <div className="flex h-12 items-center justify-between px-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2 ml-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-[#FF4500]">
            <div className="size-4 rounded-full bg-white"></div>
          </div>
          <span className="text-3xl font-extrabold text-[#FF4500]">aiddit</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search aiddit"
              className="pl-10 bg-gray-200 text-2xl border-0 h-10 rounded-full focus-visible:ring-1 focus-visible:ring-orange-500"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <Button
            className="bg-[#FF4500] hover:bg-orange-600 text-white border-0 max-w-20 h-10 font-semibold rounded-full"
            onClick={() => {
              setAuthMode("signin");
              setIsAuthModalOpen(true);
            }}
          >
            Log In
          </Button>
          <Button variant="outline" size="icon" className=" border-0 hover:bg-gray-200">
            <MoreHorizontal className="size-5" />
          </Button>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </header>
  );
}
