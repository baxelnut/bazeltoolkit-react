import { useState } from "react";
// Style
import "./EditableTile.css";
// Components
import Dropdown from "./Dropdown";

export default function EditableTile({
  title = "",
  subtitle = "",
  editable = false,
  editorType = "text", // "text" | "dropdown" | "select" | "date" | "partial" | "custom"
  editorOptions = [], // for dropdown/select
  customEditor = null, // ({ value, onChange, onBlur }) => JSX
  editorPrefix = "", // e.g. "yeahsum.com/@"
  onTitleChange,
  onSubtitleChange,
}) {
  const [editingSubtitle, setEditingSubtitle] = useState(false);
  const [currentTitle] = useState(title);
  const [currentSubtitle, setCurrentSubtitle] = useState(subtitle);

  function finishEdit() {
    setEditingSubtitle(false);
    onSubtitleChange?.(currentSubtitle);
  }

  function renderEditor() {
    const common = {
      className: "tile-input tile-subtitle",
      onBlur: finishEdit,
      autoFocus: true,
    };

    switch (editorType) {
      case "dropdown":
        return (
          <Dropdown
            options={editorOptions}
            value={currentSubtitle}
            onChange={(e) => {
              setCurrentSubtitle(e.target.value);
              finishEdit();
            }}
          />
        );

      case "select":
        return (
          <select
            {...common}
            value={currentSubtitle}
            onChange={(e) => setCurrentSubtitle(e.target.value)}
          >
            {editorOptions.map((opt) => (
              <option key={opt.value ?? opt} value={opt.value ?? opt}>
                {opt.label ?? opt}
              </option>
            ))}
          </select>
        );

      case "date":
        return (
          <input
            {...common}
            type="date"
            value={currentSubtitle}
            onChange={(e) => setCurrentSubtitle(e.target.value)}
          />
        );

      case "partial":
        return (
          <div className="tile-input tile-subtitle partial-input">
            <span className="prefix">{editorPrefix}</span>
            <input
              {...common}
              type="text"
              value={currentSubtitle}
              onChange={(e) => setCurrentSubtitle(e.target.value)}
            />
          </div>
        );

      case "custom":
        return customEditor?.({
          value: currentSubtitle,
          onChange: setCurrentSubtitle,
          onBlur: finishEdit,
        });

      default: // "text"
        return (
          <input
            {...common}
            type="text"
            value={currentSubtitle}
            onChange={(e) => setCurrentSubtitle(e.target.value)}
          />
        );
    }
  }

  function findLabel(value, editorOptions) {
    // simple flat options
    let found = editorOptions.find(
      (opt) => (typeof opt === "object" ? opt.value : opt) === value
    );
    if (found) return found.label ?? found;

    // grouped options: [{ label, options: [ {label, value}, ... ] }, ...]
    for (const group of editorOptions) {
      if (group.options) {
        const o = group.options.find((o) => o.value === value);
        if (o) return o.label;
      }
    }
    return null;
  }

  // Display logic when *not* editing:
  function renderDisplay() {
    let text;
    if (editorType === "partial") {
      text = `${editorPrefix}${currentSubtitle}`;
    } else if (editorType === "select" || editorType === "dropdown") {
      const label = findLabel(currentSubtitle, editorOptions);
      text = label || "—";
    } else {
      text = currentSubtitle || "—";
    }

    return (
      <div
        className="tile-subtitle"
        onClick={() => editable && setEditingSubtitle(true)}
      >
        <p>{text}</p>
        {editable && (
          <button
            className="tile-edit-btn"
            onClick={() => setEditingSubtitle(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="editable-tile">
      <div className="tile-text">
        <h6 className="small-p">{currentTitle}</h6>
        {editingSubtitle ? renderEditor() : renderDisplay()}
      </div>
    </div>
  );
}
