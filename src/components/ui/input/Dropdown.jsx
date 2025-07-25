// Style
import "./Dropdown.css";
// Components
import Icon from "../icons/Icon";
// Data
import { SVG_PATHS } from "../../../data/utilData";

export default function Dropdown({
  options = [],
  value = "",
  onChange = () => {},
  short = false,
  rounded = false,
  radius = 6,
  trailingIcon = null,
  backgroundColor = null,
  textColor = null,
  chevronDown = false,
}) {
  const classes = [
    "dropdown",
    short ? "short" : "",
    rounded ? "rounded-pill" : "rounded-soft",
    trailingIcon || chevronDown ? "with-icon" : "",
  ].join(" ");

  const style = {
    ...(backgroundColor && { backgroundColor }),
    ...(textColor && { color: textColor }),
    borderRadius: rounded ? "360px" : `${radius}px`,
  };

  return (
    <div className="dropdown-wrapper" style={style}>
      <select
        className={classes}
        value={value}
        onChange={onChange}
        style={{ color: textColor }}
      >
        {options.map((option) =>
          option.options ? (
            <optgroup key={option.label} label={option.label}>
              {option.options.map((sub) => (
                <option key={sub.value} value={sub.value}>
                  {sub.label}
                </option>
              ))}
            </optgroup>
          ) : (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        )}
      </select>

      {(chevronDown || trailingIcon) && (
        <span className="dropdown-icon">
          <Icon
            path={trailingIcon ?? SVG_PATHS.chevronDown}
            width={12}
            height={12}
          />
        </span>
      )}
    </div>
  );
}
