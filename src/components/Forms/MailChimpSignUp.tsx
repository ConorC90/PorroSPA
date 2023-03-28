import React, { useState, useEffect } from "react";
// import "./mcFormStyles.scss";
import MailchimpSubscribe from "react-mailchimp-subscribe";
// import PrimaryCTAButton from "../../ui/PrimaryCTAButton/PrimaryCTAButton";
// import { useGHStContext } from "../../../utils/ContextProvider";
// import InputField from "../../ui/InputField/InputField";
// import { Button } from 'antd';
import { Button } from "../../common/Button";
import Input from "../../common/Input";

// https://dev.to/gedalyakrycer/create-an-email-list-with-react-mailchimp-965

// let loginForm = document.getElementById("loginForm");

// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let username = document.getElementById("username");

//   if (username.value == "") {
//     alert("Ensure you input a value in both fields!");
//   } else {
//     // perform operation with form input
//     alert("This form has been successfully submitted!");
//     console.log(
//       `This form has a username of ${username.value} and password of`
//     );

//     username.value = "";
//   }
// });

const CustomForm = ({ status, message, onValidated }: any) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.email.value);
    setEmail(e.target.email.value);
    // console.log(email.target.value);
    e.preventDefault();
    email &&
      onValidated({
        EMAIL: email,
      });
  };

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail("");
  };

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      <h3 className="mc__title">
        {status === "success"
          ? "Success you have signed up to our mailing list!"
          : "Join our email list for future updates."}
      </h3>

      {status === "sending" && (
        <div className="mc__alert mc__alert--sending">sending...</div>
      )}
      {status === "error" && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status !== "success" ? (
        <div className="mc__field-container">
          <Input
            name="email"
            onChange={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com"
          />
        </div>
      ) : null}

      {/*Close button appears if form was successfully sent*/}
      {/* {status === "success" ? (
        // <Button onClick={() => setModalOpen(false)} label="close" />
        <Button label="close" />
      ) : (
        <Input
          placeholder="submit"
          name="submit"
          type="submit"
          value={[email]}
        />
      )} */}
      {/* {status === "success" ? (
        <Button
          // handleClick={() => setModalOpen(false)}
          label="close"
          // size="big"
          // customClass="g__justify-self-center"
        />
      ) : (
        <Input
          placeholder="subscribe"
          name="submit"
          type="submit"
          value={[email]}
        />
      )} */}
      <button type="submit">Submit</button>
    </form>
  );
};

const MailchimpForm = (props: any) => {
  const url = `https://espadisc.us18.list-manage.com/subscribe/post?u=439ccd3e80bf75e3d5261460b&amp;id=f5913439d3&amp;f_id=001125e7f0`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData: any) => subscribe(formData)}
          />
        )}
      />

      {/* <form action="" id="loginForm">
        <h1>Login</h1>
        <input type="text" id="username" placeholder="Enter your Username..." />
        <input
          type="password"
          id="password"
          placeholder="Enter your Password..."
        />
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
};

export default MailchimpForm;
