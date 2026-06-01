import React from "react";

export default function Switch({
  options = [],
  selectedOption,
  onChange,
  onClickSwitch,
}) {
  const [selected, setSelected] = React.useState(selectedOption);

  React.useEffect(() => {
    setSelected(selectedOption);
  }, [selectedOption]);

  const index = options.indexOf(selected);

  function handleSelect(option) {
    setSelected(option);
    onChange?.(option);
    onClickSwitch();
  }

  return (
    <div className="toggle-wrapper">
      <div
        className="toggle-slider"
        style={{
          transform: `translateX(${index * 100}%)`,
        }}
      />

      {options.map((option) => (
        <div
          key={option}
          className={`toggle-option ${selected === option ? "selected" : ""}`}
          onClick={() => handleSelect(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
}
