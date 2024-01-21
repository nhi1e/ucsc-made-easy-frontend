import Select, { createFilter } from "react-select";
import CustomOption from "./CustomOption";
import real_courses from "../data/real_course_list";
import { useToast } from "./ToastContext";

const customSelect = {
  control: (provided, state) => ({
    ...provided,
    background: "#101725",
    borderColor: "#101725",
    borderRadius: "20px",
    maxHeight: "30px",
    height: "30px",
    boxShadow: state.isFocused ? null : null,
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: "30px",
    padding: "0 6px",
    fontSize: "14px",
    color: "#ffffff",
  }),

  input: (provided, state) => ({
    ...provided,
    margin: "0px",
    color: "ffffff",
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "30px",
  }),
  menuPortal: (base) => ({
    ...base,
    fontSize: "3px",
  }),
};

export default function SelectNewCourse({
  quarter_index,
  courses,
  setCourses,
  client_id,
  satisfied,
  setSatisfied,
  apCredit,
}) {
  const { showToast } = useToast();

  const handleChange = (selectedOption) => {
    console.log(selectedOption.label);
    const new_courses = [...courses];
    new_courses[quarter_index].push(selectedOption.label);
    console.log(new_courses);
    setCourses(new_courses);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: client_id,
        slot: quarter_index,
        course: selectedOption.label,
        ap_courses: apCredit, // UPDATE
        schedule: courses,
      }),
    };

    fetch("http://127.0.0.1:5000/add", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("FRom flask", data);
        setSatisfied(data);
        for (let i = 0; i < data.length - 4; i++) {
          if (data[i].includes(1)) {
            // toast("You have unsatisfied prerequisites", {
            //   position: "bottom-center",
            //   autoClose: 5000,
            // });
            showToast("You have unsatisfied prerequisites");

            break;
          }
        }
      });
  };

  return (
    <>
      <Select
        classNamePrefix="react-select"
        placeholder="Add Course"
        key={quarter_index}
        value={""}
        isClearable={true}
        filterOption={createFilter({ ignoreAccents: false })}
        options={real_courses}
        onChange={(selectedOption) => {
          handleChange(selectedOption);
        }}
        captureMenuScroll={false}
        components={{
          Option: CustomOption,
        }}
        styles={customSelect}
      />
    </>
  );
}
