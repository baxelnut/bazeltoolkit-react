import { useState } from "react";
// Style
import "./UIPage.css";
// Components
import Button from "../components/ui/buttons/Button";
import Checkbox from "../components/ui/input/Checkbox";
import DateRangePicker from "../components/ui/input/DateRangePicker";
import Dropdown from "../components/ui/input/Dropdown";
import EditableTile from "../components/ui/input/EditableTile";
import Input from "../components/ui/input/Input";
import SearchInput from "../components/ui/input/SearchInput";
import TagInput from "../components/ui/input/TagInput";
// Data
import { SVG_PATHS } from "../data/utilData";

const OPS = ["ALL", "Option A", "Option B", "Option C", "Option D"].map(
  (value) => ({ value, label: value })
);

export default function UIPage({ API_URL }) {
  const [selectedSegmen, setSelectedSegmen] = useState("ALL");

  return (
    <div className="ui-page">
      <h1>UI</h1>
      <code>{API_URL}</code>

      <div className="cards-container col">
        <div className="card ui">
          <h6>Buttons</h6>
          <div className="display-content-container">
            <Button text="Default" />
            <Button text="Hollow" hollow />
            <Button text="Short" short />
            <Button text="Rounded" rounded />
            <Button text="Full Width" fullWidth />
            <Button text="Full Width + Hollow" fullWidth hollow />
            <Button
              text="Full Width + Hollow + Rounded"
              fullWidth
              hollow
              rounded
            />
            <Button text="Left Arrow" arrowLeft />
            <Button text="Right Arrow + Short" arrowRight short />
            <Button text="With Icon" iconPath={SVG_PATHS.heart} />
            <Button
              text="Icon After + Short"
              iconPath={SVG_PATHS.heart}
              iconAfter
              short
            />
            <Button iconPath={SVG_PATHS.diamond} rounded /> {/* icon-only */}
            <Button iconPath={SVG_PATHS.diamond} rounded hollow />
            <Button
              text="Custom Colors"
              backgroundColor="green"
              textColor="yellow"
              hoverBackgroundColor="red"
              hoverTextColor="black"
            />
            <Button text="Hollow + Rounded" hollow rounded />
          </div>
        </div>

        <div className="card ui">
          <h6>Dropdown</h6>
          <div className="display-content-container">
            <Dropdown
              options={OPS}
              value={selectedSegmen}
              onChange={(e) => setSelectedSegmen(e.target.value)}
              chevronDown
            />
            <Dropdown
              options={OPS}
              value={selectedSegmen}
              onChange={(e) => setSelectedSegmen(e.target.value)}
              short
            />
            <Dropdown
              options={OPS}
              value={selectedSegmen}
              onChange={(e) => setSelectedSegmen(e.target.value)}
              fullWidth
              chevronDown
            />
            <Dropdown
              options={OPS}
              value={selectedSegmen}
              onChange={(e) => setSelectedSegmen(e.target.value)}
              rounded
              chevronDown
            />
          </div>
        </div>

        <div className="card ui">
          <h6>Input</h6>
          <div className="display-content-container">
            <Input
              placeholder="Enter email here..."
              type="email"
              fullWidth
              required
            />
            <Input
              placeholder="Enter password here..."
              type="password"
              fullWidth
              required
            />
            <Input
              placeholder="Re-enter password here..."
              type="password"
              fullWidth
              obscurial
              required
            />
          </div>
        </div>

        <div className="card ui">
          <h6>Search</h6>
          <div className="display-content-container">
            <SearchInput placeholder="Search for..." />
            <SearchInput placeholder="Search for..." fullWidth />
            <SearchInput placeholder="Search for..." rounded />
          </div>
        </div>

        <div className="card ui">
          <h6>Others</h6>
          <div className="display-content-container">
            <Checkbox label="Checkbox" />
            <Checkbox label="Checkbox Reverse" reverse />
            <DateRangePicker
              startDate={new Date("2025-02-01")}
              endDate={new Date("2025-07-31")}
              onChange={(range) => console.log("Date range changed", range)}
              icon={SVG_PATHS.calendarRange}
            />
            <EditableTile title="Edit this" subtitle="placeholder" editable />
            <TagInput />
          </div>
        </div>
      </div>
    </div>
  );
}
