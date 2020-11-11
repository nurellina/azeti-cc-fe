import React from "react";
import { Field, ErrorMessage } from "formik";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) => createStyles({}));
interface FormikFieldProps {
  name: string;
  label: string;
  type?: string;
  variant?: string;
  multiline?: boolean;
  required?: boolean;
}
const FormikField: React.FC<FormikFieldProps> = ({
  name,
  label,
  type = "text",
  variant,
  multiline = false,
  required = false,
}) => {
  const classes = useStyles();

  return (
    <Field
      autocomplete="off"
      as={TextField}
      name={name}
      label={label}
      type={type}
      fullWidth
      multiline={multiline}
      required={required}
      variant={variant}
      rows={3}
      size="small"
      helperText={<ErrorMessage name={name} />}
    />
  );
};
export default FormikField;
