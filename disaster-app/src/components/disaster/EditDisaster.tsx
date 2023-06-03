import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { axiosRequest, ENDPOINTS } from "../../api/config";
import { Categorymodel } from "../../models/category";
import { Disaster } from "../../models/disaster";

interface Props {
  disaster: Disaster;
  callback?: () => Promise<void>;
}
const EditDisaster: React.FC<Props> = ({ disaster, callback }) => {
  const [categories, setCategories] = useState<Categorymodel[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [disasters, setDisaster] = useState<Disaster>(new Disaster());

  const fetchData = useCallback(async () => {
    const category: any = await axiosRequest(ENDPOINTS.Categories).fetchAll();
    setCategories(category?.data);
  }, []);

  useEffect(() => {
    setDisaster(disaster as Disaster);

    fetchData();
  }, [fetchData, disaster]);

  const OnEdit = async (data: any, e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const editDisaster = disasters;

    editDisaster.categoryId = +data.categoryId;
    editDisaster.description = data.description;
    editDisaster.typeOfDisaster = data.typeOfDisaster;
    editDisaster.district = data.district;
    editDisaster.neighborhood = data.neighborhood;

    const res = await axiosRequest(ENDPOINTS.Disasters).put(
      disasters.id,
      editDisaster
    );
    setIsLoading(false);

    console.log("Editing Disaster", res);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(OnEdit)}>
      <div className="row offset-2">
        <h5 className="card-title" id="form-header">
          Edit Disaster
        </h5>
      </div>
      <hr />
      <div className="row mb-3">
        <label className="col-4">Categories</label>
        <div className="col-8">
          <select
            className="form-control"
            id="categoryId"
            aria-label="Default select example"
            {...register("categoryId", { required: true })}
          >
            <option></option>
            {categories?.map((d: Categorymodel, i) => {
              return (
                <option
                  selected={d?.id === disasters?.categoryId}
                  key={i}
                  value={d.id}
                >
                  {d.name}
                </option>
              );
            })}
          </select>
          <span className="text-danger">
            {errors.categoryId && <span>This field is required.</span>}
          </span>
        </div>
      </div>
      <div className="col-12">
        <div className="row mb-3">
          <label htmlFor="inputText" className="col-4">
            Description
          </label>
          <div className="col-8">
            <input
              defaultValue={disasters?.description}
              type="text"
              className="form-control"
              id="description"
              {...register("description", { required: true })}
            />
            <span className="text-danger">
              {errors.description && <span>This field is required.</span>}
            </span>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputText" className="col-4">
            Tyoe Of Disaster
          </label>
          <div className="col-8">
            <input
              defaultValue={disasters?.typeOfDisaster}
              type="text"
              className="form-control"
              id="typeOfDisaster"
              {...register("typeOfDisaster", { required: true })}
            />
            <span className="text-danger">
              {errors.typeOfDisaster && <span>This field is required.</span>}
            </span>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputText" className="col-4">
            District
          </label>
          <div className="col-8">
            <input
              defaultValue={disasters?.district}
              type="text"
              className="form-control"
              id="district"
              {...register("district", { required: true })}
            />
            <span className="text-danger">
              {errors.district && <span>This field is required.</span>}
            </span>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputText" className="col-4">
            Neighborhood
          </label>
          <div className="col-8">
            <input
              defaultValue={disasters?.district}
              type="text"
              className="form-control"
              id="neighborhood"
              {...register("neighborhood", { required: true })}
            />
            <span className="text-danger">
              {errors.neighborhood && <span>This field is required.</span>}
            </span>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col float-right">
            <button
              type="submit"
              className="btn btn-info btn-lg"
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

export default EditDisaster;
