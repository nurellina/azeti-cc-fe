import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Formik, Form } from "formik";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import FormikField from "./FormikField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      padding: "0",
      paddingTop: "10px",
      margin: "0 15px 10px",
      borderRadius: "0",
      justifyContent: "space-between",
      alignItems: "center",
      display: "flex",
      backgroundColor: "transparent",
      border: "0",
    },
  })
);
interface MyFormValues {
  firstName: string;
  lastName: string;
  company: string;
  position: string;
  email: string;
  password: string;
  aboutMe: string;
}
const UserSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too short!")
    .max(20, "Too long!")
    .required("Required."),
});
const EditProfileCard: React.FC = () => {
  const classes = useStyles();
  const initialValues: MyFormValues = {
    firstName: "",
    lastName: "",
    company: "",
    position: "",
    email: "",
    password: "",
    aboutMe: "",
  };
  return (
    <div>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        My Profile
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        validationSchema={UserSchema}
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <FormikField name="firstName" required label="First Name" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormikField name="lastName" required label="Last Name" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormikField name="company" label="Company" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormikField name="position" label="Position" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormikField name="email" required label="Email Address" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormikField
                      name="password"
                      type="password"
                      label="Password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormikField
                      name="aboutMe"
                      multiline
                      variant="outlined"
                      label="About me"
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions className={classes.footer}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!dirty || !isValid}
                  type="submit"
                >
                  Update Profile
                </Button>
              </CardActions>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default EditProfileCard;
