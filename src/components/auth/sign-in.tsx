"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Loader2, Phone, Mail } from "lucide-react";
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";
import router from "next/router";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const [rememberMe, setRememberMe] = useState(false);

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-center mb-2 mt-6">Log In</h2>
        <p className="text-sm text-gray-600 text-center">
          By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.
        </p>
      </div>

      {/* Social Login Buttons */}
      {/* <div className="space-y-3 mb-6">
        <Button variant="outline" className="w-full justify-start border-gray-300 hover:bg-gray-50">
          <Phone className="w-5 h-5 mr-3" />
          Continue With Phone Number
        </Button>
        <Button variant="outline" className="w-full justify-start border-gray-300 hover:bg-gray-50">
          <div className="w-5 h-5 mr-3 flex items-center justify-center">
            <span className="text-sm font-bold text-blue-600">G</span>
          </div>
          Continue with Google
        </Button>
        <Button variant="outline" className="w-full justify-start border-gray-300 hover:bg-gray-50">
          <div className="w-5 h-5 mr-3 flex items-center justify-center">
            <span className="text-sm font-bold">🍎</span>
          </div>
          Continue With Apple
        </Button>
      </div> */}

      {/* Divider */}
      {/* <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">OR</span>
        </div>
      </div> */}

      {/* Manual Login Form */}
      <div className="space-y-4">
          <div className="grid gap-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                autoComplete="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  onClick={() => {
                    setRememberMe(!rememberMe);
                  }}
                />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <button className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </button>
            </div> */}



          <Button
              type="submit"
              className="w-full rounded-full bg-[#FF4500] h-12 text-white"
              disabled={loading || !email || !password}
              onClick={async () => {
                await signIn.email(
                {
                    email,
                    password
                },
                {
                  onRequest: (ctx) => {
                    setLoading(true);
                  },
                  onResponse: (ctx) => {
                    setLoading(false);
                  },
                  onError: (ctx) => {
										toast.error(ctx.error.message);
									},
                  onSuccess: async () => {
										router.push("/dashboard");
									},
                },
                );
              }}
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <p> Login </p>
              )}
              </Button>
        </div>
    </div>
  );
}
