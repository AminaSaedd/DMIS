import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { axiosRequest, ENDPOINTS } from "../../api/config";
import { Categorymodel } from "../../models/category";
import { Disaster } from "../../models/disaster";
const AddDisaster = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [category, setCategories] = useState<Categorymodel[]>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    const categories = await axiosRequest(ENDPOINTS.Categories).fetchAll();

    setCategories(categories?.data ?? []);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  console.log("category", category);
  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const disasters = new Disaster();
    disasters.categoryId = +data.categoryId;
    disasters.description = data.description;
    disasters.typeOfDisaster = data.typeOfDisaster;
    disasters.district = data.district;
    disasters.neighborhood = data.neighborhood;
    disasters.location = data.location;
    disasters.currentStatus = data.currentStatus;
    disasters.remarks = data.remarks;
    disasters.numberOfDamagedHouses = data.numberOfDamagedHouses;
    disasters.numberOfDeaths = data.numberOfDeaths;
    disasters.numberOfInjuries = data.numberOfInjuries;
    disasters.numberOfSurvivors = data.numberOfSurvivors;
    disasters.lossCost = data.lossCost;
    disasters.reportedBy = data.reportedBy;
    disasters.contact = data.contact;
    // disasters.date = data.date;

    const res = await axiosRequest(ENDPOINTS.Disasters).post(disasters);

    setIsLoading(false);
    if (res.request.status === 400) {
      Swal.fire("🤷‍♀️", "waxba dhacay .", "warning");
    }
    e.target.reset();
    console.log("status", res.data);
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-row align-items-center justify-content-center mb-5">
          <div className="container p-2 mb-5">
            <div className="row justify-content-start  mb-5">
              <div className="col-lg-8 offset-2 d-flex flex-column align-items-center justify-content-center mb-5">
                <div className="card mb-3 mb-5">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title p-2" id="form-header">
                        Register New Disaster
                      </h5>
                    </div>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="row g-3 p-2 d-flex justify-content-center mb-5"
                    >
                      <div className="col-12">
                        <label className="form-label">Categories</label>

                        <select
                          className="form-control"
                          id="categoryId"
                          aria-label="Default select example"
                          {...register("categoryId", { required: true })}
                        >
                          <option></option>
                          {category?.map((d: Categorymodel, i) => {
                            return (
                              <option key={i} value={d.id}>
                                {d.name}
                              </option>
                            );
                          })}
                        </select>
                        <span className="text-danger">
                          {errors.categoryId && (
                            <span>This field is required.</span>
                          )}
                        </span>
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputText" className="form-label">
                          Description
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="description"
                          {...register("description", { required: true })}
                        />
                        <span className="text-danger">
                          {errors.C && <span>This field is required.</span>}
                        </span>
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputText" className="form-label">
                          TypeOfDisaster
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          id="typeOfDisaster"
                          {...register("typeOfDisaster", { required: true })}
                        />
                        <span className="text-danger">
                          {errors.phone && <span>This field is required.</span>}
                        </span>
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputText" className="form-label">
                          district
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="district"
                          {...register("district", { required: true })}
                        />
                        <span className="text-danger">
                          {errors.tIN && <span>This field is required.</span>}
                        </span>
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputText" className="form-label">
                          neighborhood
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="neighborhood"
                          {...register("neighborhood", { required: true })}
                        />
                        <span className="text-danger">
                          {errors.serialNo && (
                            <span>This field is required.</span>
                          )}
                        </span>
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputText" className="form-label">
                          location
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="location"
                          {...register("location", { required: true })}
                        />
                        <span className="text-danger">
                          {errors.serialNo && (
                            <span>This field is required.</span>
                          )}
                        </span>
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputText" className="form-label">
                          currentStatus
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="currentStatus"
                          {...register("currentStatus", { required: true })}
                        />
                        <span className="text-danger">
                          {errors.serialNo && (
                            <span>This field is required.</span>
                          )}
                        </span>
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputText" className="form-label">
                          remarks
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="remarks"
                          {...register("remarks", { required: true })}
                        />
                        <span className="text-danger">
                          {errors.serialNo && (
                            <span>This field is required.</span>
                          )}
                        </span>
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputText" className="form-label">
                          numberOf Damaged Houses
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="numberOfDamagedHouses"
                          {...register("numberOfDamagedHouses", {
                            required: true,
                          })}
                        />
                        <span className="text-danger">
                          {errors.serialNo && (
                            <span>This field is required.</span>
                          )}
                        </span>
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputText" className="form-label">
                          numberOfDeaths
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="numberOfDeaths"
                          {...register("numberOfDeaths", { required: true })}
                        />
                        <span className="text-danger">
                          {errors.serialNo && (
                            <span>This field is required.</span>
                          )}
                        </span>
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputText" className="form-label">
                          numberOfInjuries
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="numberOfInjuries"
                          {...register("numberOfInjuries", { required: true })}
                        />
                        <span className="text-danger">
                          {errors.serialNo && (
                            <span>This field is required.</span>
                          )}
                        </span>
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputText" className="form-label">
                          numberOfSurvivors
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="numberOfSurvivors"
                          {...register("numberOfSurvivors", { required: true })}
                        />
                        <span className="text-danger">
                          {errors.serialNo && (
                            <span>This field is required.</span>
                          )}
                        </span>
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputText" className="form-label">
                          lossCost
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lossCost"
                          {...register("lossCost", { required: true })}
                        />
                        <span className="text-danger">
                          {errors.serialNo && (
                            <span>This field is required.</span>
                          )}
                        </span>
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputText" className="form-label">
                          reportedBy
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="reportedBy"
                          {...register("reportedBy", { required: true })}
                        />
                        <span className="text-danger">
                          {errors.serialNo && (
                            <span>This field is required.</span>
                          )}
                        </span>
                      </div>
                      <div className="col-12">
                        <label htmlFor="inputText" className="form-label">
                          contact
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="contact"
                          {...register("contact", { required: true })}
                        />
                        <span className="text-danger">
                          {errors.serialNo && (
                            <span>This field is required.</span>
                          )}
                        </span>
                      </div>
                      <div className="col-12 mt-3">
                        <button
                          type="submit"
                          className="form-control  btn btn-secondary"
                          disabled={isLoading}
                        >
                          {isLoading ? "Loading..." : "Submit"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AddDisaster;
