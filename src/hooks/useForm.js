import { useState } from "react";

export const useForm = ({ initialValues, onSubmit, onFinish = null, onNotify }) => {
  const [formData, setFormData] = useState(initialValues);
  const [enabledSubmit, setEnabledSubmit] = useState(true);

  const handleChange = ({ name, value, files }) => {
    if (name === undefined) return;

    if (files) {
      setFormData((prevState) => ({ ...prevState, [name]: files[0] }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnabledSubmit(false);
    onNotify("start");
    try {
      await onSubmit();
      onNotify("success");
      if (onFinish) {
        onFinish();
      }
      setFormData(initialValues);
    } catch (error) {
      onNotify("error");
      console.error("Submit Error:", error);
    } finally {
      onNotify("finish");
      setEnabledSubmit(true);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    enabledSubmit,
  };
};
