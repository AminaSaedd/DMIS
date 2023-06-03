import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { axiosRequest, ENDPOINTS } from "../../api/config";
import { Categorymodel } from "../../models/category";

interface Props {
  callback?: () => Promise<void>;
}

const NewCategory: React.FC<Props> = ({ callback }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();
    const category = new Categorymodel();
    category.name = data.name;
    const res = await axiosRequest(ENDPOINTS.Categories).post(category);
    if (res.request.status === 201) {
      Swal.fire("✅", "SuccessFully Added .", "success");
      callback?.();
    }
    e.target.reset();
  };
  return (
    <>
      <h5 className="card-title" id="form-header offset-2">
        Add Category
      </h5>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="aligncenter"
      >
        <div className="row mb-3">
          <label htmlFor="inputText" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              {...register("name", { required: true })}
            />
            <span className="text-danger">
              {errors.name && <span>This field is required.</span>}
            </span>
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label"></label>
          <div className="col-sm-10">
            <button type="submit" className="form-control  btn btn-secondary">
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewCategory;
