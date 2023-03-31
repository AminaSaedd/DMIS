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
import AddDisaster from "./AddDisaster";
import { Disaster } from "../../models/disaster";
import EditDisaster from "./EditDisaster";
// import { EditDisaster } from "./EditDisaster";
const DisastersList = () => {
  const MySwal = withReactContent(Swal);
  const [disasters, setDisasters] = useState<Disaster[]>([]);
  const [fetching, setIsFetching] = useState(true);

  const fetchData = useCallback(async () => {
    const options = new PagingOptions();
    const disastersDetails = await axiosRequest(ENDPOINTS.Disasters).fetchAll();

    setDisasters(disastersDetails?.data);
    console.log("disastersDetails", disastersDetails?.data);
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
      // html: <AddDisaster callback={fetchData} />,
    });
  };
  const onEditClickHandler = (d: Disaster) => {
    MySwal.fire({
      showConfirmButton: false,
      allowOutsideClick: false,
      showCloseButton: true,
      width: 600,
      html: <EditDisaster disaster={d} callback={fetchData} />,
    });
  };
  const headers: ComplexHeader[] = [
    { key: "categoryId", title: "Category Id" },
    { key: "description", title: "Description " },
    { key: "typeOfDisaster", title: "TypeOf Disaster" },
    { key: "district", title: "District" },
    { key: "location", title: "Location" },
  ];
  const actions: Action[] = [
    {
      key: "",
      click: (e: Disaster) => {
        onEditClickHandler(e);
      },
      title: "Edit",
      color: "warning",
    },
  ];

  return (
    <>
      <MyContainer head="Disasters">
        <div className="row mb-1">
          <div className="col">
            <button
              type="button"
              className="btn btn-dark btn-sm float-right "
              onClick={onAddClickHandler}
            >
              New Disaster
            </button>
          </div>
        </div>
        {fetching ? (
          <MyBarLoader />
        ) : (
          <Table
            data={disasters}
            headers={headers}
            actions={actions}
            hidePagination
          />
        )}
      </MyContainer>
    </>
  );
};

export default DisastersList;
