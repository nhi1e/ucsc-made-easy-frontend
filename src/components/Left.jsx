import MainSelect from "./MainSelect";
import Navbar from "./Navbar";
import React, { useEffect } from "react";
import { useToast } from "./ToastContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Left({
  courses,
  setCourses,
  client_id,
  satisfied,
  setSatisfied,
  apCredit,
  setAPCredit,
}) {
  const { toastMessage, hideToast } = useToast();

  useEffect(() => {
    // Display toast when toastMessage changes
    if (toastMessage) {
      toast.error(toastMessage);
      // You can customize the type of toast (info, success, error, etc.)
      // Check react-toastify documentation for more options
      hideToast(); // Hide the toast after displaying
    }
  }, [toastMessage, hideToast]);
  return (
    <div className="flex-none w-3/4 overflow-y-scroll select-none">
      <Navbar
        apCredit={apCredit}
        setAPCredit={setAPCredit}
        client_id={client_id}
        courses={courses}
        setSatisfied={setSatisfied}
      />
      <MainSelect
        courses={courses}
        setCourses={setCourses}
        client_id={client_id}
        satisfied={satisfied}
        setSatisfied={setSatisfied}
        apCredit={apCredit}
      />
      <ToastContainer
        position="bottom-center"
        toastClassName="error"
        autoClose={2700}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
      <div className="py-20"></div>
    </div>
  );
}
