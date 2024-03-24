import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

export default function ContactForm({ onAddContact }) {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  function handleSubmit(values, actions) {
    onAddContact({
      name: values.name.trim(),
      number: values.number.trim(),
      id: nanoid(),
    });
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formContainer}>
        <FormInput id={nameFieldId} type="text" name="name">
          Name
        </FormInput>

        <FormInput id={numberFieldId} type="text" name="number">
          Number
        </FormInput>

        <button className={css.button} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

function FormInput({ id, type, name, children }) {
  return (
    <div className={css.fieldContainer}>
      <label htmlFor={id}>{children}</label>
      <Field type={type} name={name} id={id} className={css.input}></Field>
      <span className={css.error}>
        <ErrorMessage name={name} as="span" />
      </span>
    </div>
  );
}
