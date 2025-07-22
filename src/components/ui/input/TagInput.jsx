import { useState } from "react";
// Style
import "./TagInput.css";

export default function TagInput({
  value = "",
  onChange,
  onBlur,
  prefix = "#", // e.g. "#"
}) {
  const initial = value
    .split(",")
    .filter(Boolean)
    .map((tag) => tag.replace(prefix, ""));
  const [tags, setTags] = useState(initial);
  const [input, setInput] = useState("");

  function finish() {
    onBlur?.();
  }

  function handleAdd() {
    let clean = input
      .trim()
      .replace(/[^a-zA-Z]/g, "") // letters only
      .slice(0, 20);

    if (!clean || tags.length >= 3 || tags.includes(clean)) {
      finish();
      return;
    }

    clean = clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase();
    const next = [...tags, clean];
    setTags(next);
    onChange(next.map((t) => prefix + t).join(","));
    setInput("");
    finish();
  }

  function handleRemove(tag) {
    const next = tags.filter((t) => t !== tag);
    setTags(next);
    onChange(next.map((t) => prefix + t).join(","));
    finish();
  }

  return (
    <div className="tag-input">
      <div className="tag-list">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {prefix}
            {tag}
            <button type="button" onClick={() => handleRemove(tag)}>
              ×
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        onBlur={finish}
        placeholder="Add tag"
      />
    </div>
  );
}
