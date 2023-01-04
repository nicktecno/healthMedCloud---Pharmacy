import { toast } from "react-toastify";

export default function notification(message, theme) {
  toast[theme](message, {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: "notification",
  });
}
