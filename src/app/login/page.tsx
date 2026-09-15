"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Lock, ArrowRight, CheckCircle2, Shield, AlertCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!emailOrPhone.trim()) {
      setErrorMsg("Please enter your email address or phone number.");
      return;
    }

    const res = login(emailOrPhone, password);
    if (res.success) {
      router.push("/account");
    } else {
      setErrorMsg(res.error || "Login failed. Please check your credentials.");
    }
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setResetSuccess(true);
    setTimeout(() => {
      setResetSuccess(false);
      setShowForgotPassword(false);
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-md mx-auto">
        {/* Header Title */}
        <div className="space-y-2 mb-8">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Customer Portal
          </span>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Log In to Farm City</h1>
          <p className="text-xs text-slate-600 leading-relaxed">
            Access your order history, manage delivery addresses, and track active produce & seedling orders.
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          {errorMsg && (
            <div className="bg-rose-50 border border-rose-200 p-4 rounded-2xl flex items-start gap-3 text-rose-800 text-xs">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email Address or Phone Number *
              </label>
              <div className="relative">
                <User size={18} className="absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. 0711 911 690 or jane@example.com"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-slate-700">Password *</label>
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-[11px] font-bold text-emerald-700 hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock size={18} className="absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold py-3.5 rounded-2xl shadow-md transition-all text-sm flex items-center justify-center gap-2"
            >
              <span>LOG IN</span>
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-slate-400 text-[11px] font-bold">New to Farm City?</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <Link
            href="/register"
            className="w-full bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-900 font-bold py-3 rounded-2xl transition-all text-xs flex items-center justify-center gap-2 border border-slate-200"
          >
            Create Customer Account
          </Link>
        </div>

        {/* Benefits Note */}
        <div className="mt-6 bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100 flex items-center gap-3 text-xs text-emerald-900">
          <Shield size={20} className="text-emerald-700 shrink-0" />
          <p className="leading-snug">
            <strong>Guest Checkout Supported:</strong> You do not need an account to make quick purchases or order directly via WhatsApp.
          </p>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-4 shadow-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">Reset Your Password</h3>
            <p className="text-xs text-slate-600">
              Enter your registered email address or phone number and we will send you a reset link.
            </p>

            {resetSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-emerald-800 text-xs flex items-center gap-2 font-medium">
                <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                <span>Password reset instructions sent via SMS / Email!</span>
              </div>
            ) : (
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Email or phone number"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-600"
                />
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(false)}
                    className="flex-1 bg-slate-100 text-slate-700 font-bold py-2.5 rounded-xl text-xs hover:bg-slate-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-emerald-800 text-white font-bold py-2.5 rounded-xl text-xs hover:bg-emerald-900"
                  >
                    Send Reset Link
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
