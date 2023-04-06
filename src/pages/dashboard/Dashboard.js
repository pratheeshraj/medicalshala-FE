import React from "react";

import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";

const Dashboard = () => {
  useRedirectLoggedOutUser("/login");
 

  return (
    <div>
     
      hi
    </div>
  );
};

export default Dashboard;
