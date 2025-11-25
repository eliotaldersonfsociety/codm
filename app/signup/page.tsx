"use client";

import { Suspense } from "react";
import SignupPageContent from "./SignupPageContent";

export default function SignupPageWrapper() {
  return (
    <Suspense fallback={<div className="text-white text-center p-10">Loading...</div>}>
      <SignupPageContent />
    </Suspense>
  );
}
