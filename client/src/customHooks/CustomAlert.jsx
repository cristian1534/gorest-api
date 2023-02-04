import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomAlert = () => {
  const notify = () => toast.success("Hello There!");

  return(
    <div>
      <button onClick={notify}>Notify</button>
      <ToastContainer/>
    </div>
  )

}

export default CustomAlert;