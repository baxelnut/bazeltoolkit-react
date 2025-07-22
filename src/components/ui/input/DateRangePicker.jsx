import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
// Components
import Icon from "../icons/Icon";
import ChevronIcon from "../icons/ChevronIcon";
// Style
import "./DateRangePicker.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function DateRangePicker({
  icon,
  startDate = new Date("2025-02-31"),
  endDate = new Date("2025-07-31"),
  onChange = () => {},
  className,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState({
    startDate,
    endDate,
    key: "selection",
  });

  const ref = useRef();

  const formatMonthYear = (date) => format(date, "MMM yyyy");

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleRangeChange = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    setRange({ ...ranges.selection });
    onChange({ startDate, endDate });
  };

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={className ?? "date-range-wrapper"} ref={ref}>
      <div className="date-range-picker" onClick={handleToggle}>
        <Icon path={icon} fill="var(--n400)" />
        <span className="small-p">
          {formatMonthYear(range.startDate)} – {formatMonthYear(range.endDate)}
        </span>
        <ChevronIcon
          className={`chevron ${isOpen ? "rotate-down" : ""}`}
          direction="down"
          fill="var(--n400)"
        />
      </div>

      {isOpen &&
        createPortal(
          <>
            <div
              className="calendar-backdrop"
              onClick={() => setIsOpen(false)}
            />
            <div className="calendar-popup">
              <DateRange
                editableDateInputs={true}
                onChange={handleRangeChange}
                moveRangeOnFirstSelection={false}
                ranges={[range]}
                maxDate={new Date()}
              />
            </div>
          </>,
          document.body
        )}
    </div>
  );
}
