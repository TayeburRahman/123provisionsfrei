import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";

import { config } from "../assets/config/config";


const apiUrl = config.api.url;
// create context
export const FlowFactContext = React.createContext();

export const FlowFactProvider = ({ children }) => {
  const [recentImmobilien, setRecentImmobilien] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/v1/userList/immobilien/recent`)
      .then((response) => {
        if(response.data.message === 'success'){
          setRecentImmobilien(response.data.recentImmobilien)
          return
        }
      })
      .catch((error) => console.log(error));
  }, []);


  const value = useMemo(() => {
    return {
        recentImmobilien,
    };
  }, [recentImmobilien]);

  return (
    <FlowFactContext.Provider value={value}>
        {children}
    </FlowFactContext.Provider>
  );
};
