import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { TextInput } from "../components";
import Container from "../Layout/Container";

const INITIAL_FORM_FIELD = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const { values, handleSubmit, errors, touched, handleChange } = useFormik({
    initialValues: INITIAL_FORM_FIELD,
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Please provide a valid email"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      alert("Will add the submit endpoint shortly");
      resetForm(INITIAL_FORM_FIELD);
    },
  });

  return (
    <section className="my-5 lg:my-10">
      <Container className="grid lg:grid-cols-2 gap-4 justify-between min-h-[calc(100vh-150px)] lg:min-h-[calc(100vh-190px)]">
        <div className="max-w-[450px]">
          <h1 className="text-3xl lg:text-7xl font-bold">
            Tell me about your project.
          </h1>
          <p className="my-3 text-lg">
            I'm available for commissions and Collaborations, and i’m excited to
            hear from you about your projects.
          </p>
        </div>
        <div className="w-full lg:w-[500px] mx-auto lg:mr-0">
          <h2 className="text-2xl lg:text-4xl font-bold">Get in touch</h2>
          <form
            className="my-4 lg:my-6 flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <TextInput
              label="Your Name"
              id="name"
              name="name"
              value={values.name}
              handleChange={handleChange}
              touched={touched.name}
              error={errors.name}
            />
            <TextInput
              label="Your Email"
              id="email"
              name="email"
              value={values.email}
              handleChange={handleChange}
              touched={touched.email}
              error={errors.email}
            />
            <TextInput
              label="Message"
              id="message"
              name="message"
              value={values.message}
              handleChange={handleChange}
              touched={touched.message}
              error={errors.message}
            />
            <button
              className="gradientBg text-black text-center py-3 w-[150px] lg:w-[200px] px-4 rounded-md flex gap-2 items-center justify-center mt-4"
              //   type="submit"
            >
              Contact Me
              <span className="text-2xl flex items-center justify-center">
                <ion-icon name="arrow-forward"></ion-icon>
              </span>
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
