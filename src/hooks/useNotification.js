import { useRef } from "react";
import { loadingNotify, notify, stopNotify } from "../utils/notify";

export const useNotification = (messages) => {
  const defaultMessages = {
    start: 'In progress',
    success: 'Finished',
    error: 'Error'
  };
  const toastId = useRef(null)
  const notifyLoading = (message) => {
    return loadingNotify(message);
  };

  const notifySuccess = (message) => {
    notify(message, "success");
  };

  const notifyError = (message) => {
    notify(message, "error");
  };

  const stopNotification = (id) => {
    stopNotify(id);
  };
  const handleNotify = (status) => {
    if (status === 'start') {
      const id = notifyLoading(messages[status] || defaultMessages[status]);
      toastId.current = id;
    } else if (status === 'success') {
      notifySuccess(messages[status] || defaultMessages[status]);
    } else if (status === 'error') {
      notifyError(messages[status] || defaultMessages[status]);
    }else if (status === 'finish'){
      stopNotification(toastId.current);
    }
  }
  return {
    handleNotify
  };
};
