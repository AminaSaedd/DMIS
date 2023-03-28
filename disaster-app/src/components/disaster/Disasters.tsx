import React, { useCallback, useEffect, useState } from "react";
import { axiosRequest, ENDPOINTS } from "../../api";
import { Disaster } from "../../models/disaster";

const Disasters = () => {
  const [customers, setCustomers] = useState<Disaster[]>([]);
  const [fetching, setIsFetching] = useState(true);
  const fetchData = useCallback(async () => {
    const disasterList = await axiosRequest(ENDPOINTS.Disasters).fetchAll();

    setCustomers(disasterList?.data);
    console.log("Disasters", disasterList?.data);
    setIsFetching(false);
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  return <div>hi there Disaster</div>;
};

export default Disasters;
