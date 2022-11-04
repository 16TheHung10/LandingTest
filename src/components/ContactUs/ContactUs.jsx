import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import HomeLayout from "../../layouts/HomeLayout";
import { ContactUsWrapper } from "./styled";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const formRef = useRef();
  const onsubmit = (e) => {
    setLoading(true);
    const url =
      "https://script.google.com/macros/s/AKfycbzIb9jJxa_bwk4-GZoAYl7QE59CzL1rylkPQiczB_CMw_a-yD2hYbRNEjjIaF_06s5EKQ/exec";
    e.preventDefault();
    const data = new FormData(formRef.current);
    console.log("form", formRef.current);
    fetch(url, {
      method: "POST",
      body: data,
    })
      .then(() => {
        setLoading(false);
        alert("Success!");
      })
      .catch(() => {
        setLoading(false);
        alert("Somethings went wrong!. Please try again");
      });
  };
  return (
    <HomeLayout>
      <ContactUsWrapper className="container">
        <h1 className="title">{t("Contact-us")}</h1>
        <div className="form">
          <form ref={formRef} onSubmit={onsubmit}>
            <div className="row">
              <input name="Name" type="text" placeholder="Name" required />
              <input
                name="Phone"
                type="number"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="row">
              <input
                name="Email"
                type="email"
                placeholder="Email address"
                required
              />
            </div>
            <div className="row">
              <textarea
                maxlength="1000"
                name="Message"
                id=""
                cols="30"
                placeholder="Message"
              />
            </div>
            <div className="row">
              {loading ? (
                <button disabled style={{ cursor: "not-allowed" }}>
                  Please waiting for your information is saved...
                </button>
              ) : (
                <button>Submit</button>
              )}
            </div>
          </form>
        </div>
      </ContactUsWrapper>
    </HomeLayout>
  );
}
