"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function BetaForm() {
  const [joined, setJoined] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send the address to a backend / waitlist provider.
    setJoined(true);
  }

  if (joined) {
    return (
      <p className="form-success" role="status">
        <Check size={18} aria-hidden /> You&apos;re on the list. We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form className="beta-form" onSubmit={handleSubmit}>
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@company.com"
      />
      <button type="submit">
        Request Access <ArrowRight size={16} aria-hidden />
      </button>
    </form>
  );
}
