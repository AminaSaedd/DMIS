import React, { useCallback, useEffect, useState } from "react";
import { PaginatedResult, PagingOptions } from "../../api";
import { axiosRequest, ENDPOINTS } from "../../api/config";
import { Categorymodel } from "../../models/category";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import MyContainer from "../shared/MyContainer";
import {
  Action,
  ComplexHeader,
  Filterable,
  MyBarLoader,
  Table,
} from "../../shared";
import NewCategory from "./NewCategory";
import { EditCategory } from "./EditCategory";
const Category = () => {
  const MySwal = withReactContent(Swal);
  const [categories, setCategories] = useState<Categorymodel[]>([]);
  const [fetching, setIsFetching] = useState(true);

  const fetchData = useCallback(async () => {
    const options = new PagingOptions();
    const categoryDetails = await axiosRequest(ENDPOINTS.Categories).fetchAll();

    setCategories(categoryDetails?.data);
    console.log("category", categories);
    setIsFetching(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const onAddClickHandler = () => {
    MySwal.fire({
      showConfirmButton: false,
      allowOutsideClick: false,
      showCloseButton: true,
      width: 700,
      html: <NewCategory callback={fetchData} />,
    });
  };
  const onEditClickHandler = (d: Categorymodel) => {
    MySwal.fire({
      showConfirmButton: false,
      allowOutsideClick: false,
      showCloseButton: true,
      width: 600,
      html: <EditCategory categories={d} callback={fetchData} />,
    });
  };
  const headers: ComplexHeader[] = [{ key: "name", title: "Category" }];

  const actions: Action[] = [
    {
      key: "",
      click: (e: Categorymodel) => {
        onEditClickHandler(e);
      },
      title: "Edit",
      color: "warning",
    },
  ];

  return (
    <>
      <MyContainer head="Categories">
        <div className="row mb-1">
          <div className="col">
            <button
              type="button"
              className="btn btn-dark btn-sm float-right "
              onClick={onAddClickHandler}
            >
              New Category
            </button>
          </div>
        </div>
        {fetching ? (
          <MyBarLoader />
        ) : (
          <Table
            data={categories}
            headers={headers}
            actions={actions}
            hidePagination
          />
        )}
      </MyContainer>
    </>
  );
};

export default Category;
