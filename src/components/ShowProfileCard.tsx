import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    depositContext: {
      flex: 1,
    },
    media: {
      height: 140,
    },
    avatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      margin: "20px auto",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    titles: {
      textAlign: "center",
    },
  })
);
export default function ShowProfileCard() {
  const classes = useStyles();
  return (
    <div>
      <Avatar
        alt="Ellina Nurmukhametova"
        src="/static/images/avatar/1.jpg"
        className={classes.avatar}
      />
      <CardContent>
        <Grid className={classes.titles}>
          <Typography className={classes.title} gutterBottom>
            Filmuniversiät Babelsberg
          </Typography>
          <Typography variant="h5" component="h2" color="primary">
            Ellina Nurmukhametova
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Creative Technologies
          </Typography>
        </Grid>
        <Typography variant="body2" color="textSecondary" component="p">
          A Russian girl who is passionate about art and technology, based in
          Potsdam, Germany. I have a strong knowledge of HTML, CSS, Javascript
          and fundamentals of Python and C++.
        </Typography>
      </CardContent>
    </div>
  );
}
