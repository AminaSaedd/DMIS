import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { axiosRequest, ENDPOINTS } from "../../api/config";
import { Categorymodel } from "../../models/category";
interface Props {
  categories: Categorymodel;
  callback?: () => Promise<void>;
}
export const EditCategory: React.FC<Props> = ({ categories, callback }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [category, setCategories] = useState<Categorymodel>(
    new Categorymodel()
  );
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = useCallback(async () => {}, []);

  useEffect(() => {
    setCategories(categories as Categorymodel);
    fetchData();
  }, [fetchData, categories]);

  const OnEdit = async (data: any, e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const editCategory = new Categorymodel();
    editCategory.id = category.id;
    editCategory.name = data.name;
    const res = await axiosRequest(ENDPOINTS.Categories).put(
      category.id,
      editCategory
    );
    console.log("error accured", res);
    if (res.request.status === 204) {
      Swal.fire("✅", "SuccessFully Updated .", "success");
      callback?.();
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(OnEdit)}>
      <div className="row">
        <h5 className="card-title" id="form-header">
          Edit Category
        </h5>
      </div>
      <hr />
      <div className="col-12">
        <div className="row mb-3">
          <label htmlFor="inputText" className="col-4">
            Name
          </label>
          <div className="col-8">
            <input
              defaultValue={category?.name}
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
          <div className="col float-right">
            <button
              type="submit"
              className="btn btn-secondary btn-lg"
              id="btns"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
