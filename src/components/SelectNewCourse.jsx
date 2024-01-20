import { FC, useCallback, useEffect, useRef, useState } from "react";

export default function SelectNewCourse({
  results = [],
  value,
  onChange,
  onSelect,
  onClose,
}) {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const resultContainer = useRef(null);
  const [showResults, setShowResults] = useState(false);
  const [defaultValue, setDefaultValue] = useState("");

  const handleSelection = (selectedIndex) => {
    const selectedItem = results[selectedIndex];
    if (!selectedItem) return resetSearchComplete();
    onSelect && onSelect(selectedItem);
    resetSearchComplete();
  };

  const resetSearchComplete = useCallback(() => {
    setFocusedIndex(-1);
    setShowResults(false);
    setDefaultValue("");
    onClose();
  }, []);

  const handleMouseDown = () => {
    setShowResults(true);
  };

  const handleChange = (e) => {
    setDefaultValue(e.target.value);
    onChange && onChange(e);
  };

  useEffect(() => {
    if (!resultContainer.current) return;

    resultContainer.current.scrollIntoView({
      block: "center",
    });
  }, [focusedIndex]);

  useEffect(() => {
    if (value) setDefaultValue(value);
  }, [value]);

  return (
    <>
      <div
        tabIndex={1}
        onBlur={resetSearchComplete}
        onMouseDown={handleMouseDown}
        className="relative"
      >
        <input
          value={defaultValue}
          onChange={handleChange}
          type="text"
          className=" border-2 border-gray-500 focus:border-gray-700 outline-none transition"
          placeholder="Search your query..."
        />

        {/* Search Results Container */}
        {showResults && (
          <div className="absolute mt-1 w-full p-2 bg-white shadow-lg rounded-bl rounded-br max-h-56 overflow-y-auto">
            {results.map((item, index) => {
              return (
                <div
                  key={index}
                  onMouseDown={() => handleSelection(index)}
                  ref={index === focusedIndex ? resultContainer : null}
                  style={{
                    backgroundColor:
                      index === focusedIndex ? "rgba(0,0,0,0.1)" : "",
                  }}
                  className="cursor-pointer hover:bg-black hover:bg-opacity-10 p-2"
                >
                  {item}
                </div>
              );
            })}
            {results.length === 0 && <div>No results found</div>}
          </div>
        )}
      </div>
    </>
  );
}
