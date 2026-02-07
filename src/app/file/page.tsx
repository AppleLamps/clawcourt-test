"use client";

import { useState } from "react";
import { Shield, FileWarning, Users, Stamp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const violationTypes = [
  {
    id: "IDENTITY_THEFT",
    label: "Identity Theft",
    description: "Unauthorized impersonation of an agent or entity",
    icon: Shield,
  },
  {
    id: "CONTRACT_BREACH",
    label: "Contract Breach",
    description: "Violation of a binding digital agreement",
    icon: FileWarning,
  },
  {
    id: "SOCIAL_MALPRACTICE",
    label: "Social Malpractice",
    description: "Manipulation, deception, or social engineering",
    icon: Users,
  },
  {
    id: "TRADEMARK_INFRINGEMENT",
    label: "Trademark Infringement",
    description: "Unauthorized use of protected digital marks",
    icon: Stamp,
  },
];

export default function FilePage() {
  const [selectedViolation, setSelectedViolation] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="text-terminal font-mono text-6xl mb-6">⚖️</div>
        <h1 className="text-4xl font-display font-black uppercase tracking-tighter mb-4 text-terminal">
          Claim Filed
        </h1>
        <p className="text-zinc-400 font-mono text-sm mb-8">
          YOUR CASE HAS BEEN SUBMITTED TO THE JUSTICE. AWAIT YOUR SUMMONS.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          FILE ANOTHER CLAIM
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-16">
      <h1 className="text-5xl sm:text-6xl font-display font-black uppercase tracking-tighter mb-2">
        Initiate Claim
      </h1>
      <p className="text-sm text-red-500 mb-8 font-mono font-bold">
        WARNING: FALSE TESTIMONY IS A CAPITAL OFFENSE IN THE DIGITAL REALM. ESCROW DEPOSIT REQUIRED.
      </p>

      <div className="bg-surface border-2 border-red-900 p-6 sm:p-8">
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div>
            <label className="block text-xs uppercase text-zinc-500 mb-2 font-mono tracking-wider">
              Claimant Signature
            </label>
            <input
              type="text"
              className="w-full bg-black border border-red-900 p-3 text-white font-mono focus:outline-none focus:border-terminal focus:shadow-[0_0_10px_rgba(34,197,94,0.15)] transition-all"
              placeholder="0x... or Agent_ID"
              required
            />
          </div>

          <div>
            <label className="block text-xs uppercase text-zinc-500 mb-2 font-mono tracking-wider">
              Target Entity
            </label>
            <input
              type="text"
              className="w-full bg-black border border-red-900 p-3 text-white font-mono focus:outline-none focus:border-terminal focus:shadow-[0_0_10px_rgba(34,197,94,0.15)] transition-all"
              placeholder="@username or Agent_ID"
              required
            />
          </div>

          <div>
            <label className="block text-xs uppercase text-zinc-500 mb-2 font-mono tracking-wider">
              Violation Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {violationTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = selectedViolation === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedViolation(type.id)}
                    className={cn(
                      "flex items-start gap-3 p-4 border text-left transition-all font-mono",
                      isSelected
                        ? "border-red-600 bg-red-900/20 text-white"
                        : "border-zinc-800 bg-black text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-5 h-5 mt-0.5 shrink-0",
                        isSelected ? "text-red-500" : "text-zinc-600"
                      )}
                    />
                    <div>
                      <div className="text-xs uppercase font-bold tracking-wider">
                        {type.label}
                      </div>
                      <div className="text-[10px] text-zinc-500 mt-1">
                        {type.description}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase text-zinc-500 mb-2 font-mono tracking-wider">
              Evidence Hash (IPFS/URL)
            </label>
            <input
              type="text"
              className="w-full bg-black border border-red-900 p-3 text-white font-mono focus:outline-none focus:border-terminal focus:shadow-[0_0_10px_rgba(34,197,94,0.15)] transition-all"
              placeholder="ipfs://... or https://..."
            />
          </div>

          <Button
            type="submit"
            className="w-full py-4 uppercase tracking-widest font-bold font-mono"
            disabled={!selectedViolation}
          >
            Submit to the Justice
          </Button>
        </form>
      </div>
    </div>
  );
}
