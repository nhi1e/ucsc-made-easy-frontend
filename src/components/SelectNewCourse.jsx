import Select, { createFilter } from "react-select";
import CustomOption from "./CustomOption";
import real_courses from "../data/real_course_list";
import { useToast } from "./ToastContext";
export default function SelectNewCourse({
  quarter_index,
  courses,
  setCourses,
  client_id,
  satisfied,
  setSatisfied,
  apCredit,
  colorMode,
}) {
  const customSelect = {
    control: (provided, state) => ({
      ...provided,
      background: colorMode ? "#101725" : "#E7E8E7",
      borderColor: colorMode ? "#101725" : "#E7E8E7",
      borderRadius: "20px",
      maxHeight: "30px",
      height: "30px",
      boxShadow: state.isFocused ? null : null,
      transition: "all .3s",
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "30px",
      padding: "0 6px",
      fontSize: "14px",
      transition: "all .3s",
    }),

    input: (provided, state) => ({
      ...provided,
      margin: "0px",
      color: colorMode ? "#f2f2f2" : "#A9A5A5", //when typing
      transition: "all .3s",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
      transition: "all .3s",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "30px",
      transition: "all .3s",
    }),
    menuPortal: (base) => ({
      ...base,
      fontSize: "3px",
      transition: "all .3s",
    }),
  };

  const { showToast } = useToast();

  const handleChange = (selectedOption) => {
    console.log(selectedOption.label);
    const new_courses = [...courses];
    new_courses[quarter_index].push(selectedOption.label);
    setCourses(new_courses);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: client_id,
        slot: quarter_index,
        course: selectedOption.label,
        ap_courses: apCredit.map((val) => val.label), // UPDATE
        schedule: courses,
      }),
    };

    if (import.meta.env.PROD) {
      fetch(
        "https://ucsc-made-easy-backend-shy-wave-1904.fly.dev//add",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
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
    } else {
      fetch("http://127.0.0.1:5000//add", requestOptions)
        .then((response) => response.json())
        .then((data) => {
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
    }
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
