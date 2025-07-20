"use client"

import { useState } from "react";
import { X } from "lucide-react";
import SignIn from "./sign-in";
import SignUp from "./sign-up";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "signin" | "signup";
}

export default function AuthModal({ isOpen, onClose, initialMode = "signin" }: AuthModalProps) {
  const [mode, setMode] = useState<"signin" | "signup">(initialMode);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 h-[500px]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-6">
          {mode === "signin" ? (
            <div>
              <SignIn />
              <div className="mt-4 text-center text-sm text-gray-600">
                New to Reddit?{" "}
                <button
                  onClick={() => setMode("signup")}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Sign Up
                </button>
              </div>
            </div>
          ) : (
            <div>
              <SignUp />
              <div className="mt-4 text-center text-sm text-gray-600">
                Already a redditor?{" "}
                <button
                  onClick={() => setMode("signin")}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Log In
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
