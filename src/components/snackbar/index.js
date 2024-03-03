import { toast } from 'react-toastify';

const useToaster = () => {
    const options = {
        position: "top-right",
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        style: {
            background: "#333",
            color: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
        }
    };

    const successToast = (message) => {
        toast.success(message, options);
    };

    const errorToast = (message) => {
        toast.error(message, options);
    };

    return { successToast, errorToast };
};

export default useToaster;
