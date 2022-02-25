import React from "react";
import { useForm } from "react-hook-form";

const UploadFile = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("file", {
          required: "Required",
        })}
        type="file"
        name="file"
      />
      <button>Upload</button>
    </form>
  );
};

export default UploadFile;
