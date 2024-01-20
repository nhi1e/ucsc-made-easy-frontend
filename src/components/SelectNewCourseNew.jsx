import Select, { createFilter } from "react-select";
import CustomOption from "./CustomOption";

export default function SelectNewCourseNew() {
  return (
    <>
      <Select
        classNamePrefix="react-select"
        //   value={selectedOption[`${year} - ${season} - Slot ${selectIndex}`]}
        //   key={`Select ${selectIndex}`}
        isClearable={true}
        //   defaultValue={prev_vals[index]}
        filterOption={createFilter({ ignoreAccents: false })}
        //   options={courses}
        //   onChange={(selectedOption) =>
        //     handleChange(
        //       selectedOption,
        //       `${year} - ${season} - Slot ${selectIndex}`,
        //       year,
        //       season,
        //       selectIndex,
        //       index
        //     )
        //   }
        captureMenuScroll={false}
        components={{ Option: CustomOption }}
        //   className={singleValueClass}
        //   styles={{
        //     dropdownIndicator: (provided) => ({
        //       ...provided,
        //       svg: {
        //         fill: colorMode === "dark" ? "white-dark" : "",
        //       },
        //     }),
        //     clearIndicator: (provided) => ({
        //       ...provided,
        //       svg: {
        //         fill: colorMode === "dark" ? "white-dark" : "",
        //       },
        //     }),
        //     input: (provided) => ({
        //       ...provided,

        //       color: colorMode === "dark" ? "white" : "",
        //     }),

        // control: (baseStyles, state) => ({
        //   ...baseStyles,
        //   border: 0,
        //   boxShadow: "none",
        //   backgroundColor:
        //     sharedState[index] === 1
        //       ? "#ff6961"
        //       : colorMode === "dark"
        //         ? "black-dark"
        //         : "white",
        //   "&:hover": {
        //     color: "green",
        //   },
        // }),
        // option: (provided, state) => ({
        //   ...provided,
        //   backgroundColor: state.isSelected ? "#61677A" : "",
        // }),
        //   }}
      />
    </>
  );
}
