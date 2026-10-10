"use client";

import { useState } from "react";

const models = ["Claude Sonnet 5.5", "Local Ollama"];

export default function ModelToggle() {
  const [active, setActive] = useState(models[0]);

  return (
    <div className="segmented" role="radiogroup" aria-label="Model source">
      {models.map((m) => (
        <button
          key={m}
          type="button"
          role="radio"
          aria-checked={active === m}
          onClick={() => setActive(m)}
        >
          {m}
        </button>
      ))}
    </div>
  );
}
