import React from "react";
import Form from "../../components/shared/form/Form";

const Login = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-8 form-banner">
          <img src="./assets/images/banner.jpg" alt="Login" />
        </div>
        <div className="col-md-4 form-container">
          <Form formTitle={"Login Page"} submitBtn={"Login"} />
        </div>
      </div>
    </>
  );
};

export default Login;