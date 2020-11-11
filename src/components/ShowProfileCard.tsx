import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
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
    pos: {
      margin: 8,
    },
    text: {
      marginTop: 25,
    },
    titles: {
      textAlign: "center",
    },
  })
);
const ShowProfileCard: React.FC = () => {
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
          <Typography variant="h5" component="h2" color="primary">
            Ellina Nurmukhametova
          </Typography>
          <Typography
            variant="subtitle2"
            className={classes.pos}
            color="textSecondary"
            display="block"
          >
            Creative Technologies
          </Typography>
          <Typography variant="subtitle1" color="textPrimary">
            Filmuniversiät Babelsberg
          </Typography>
        </Grid>
        <Typography variant="body2" className={classes.text} component="p">
          A Russian girl who is passionate about art and technology, based in
          Potsdam, Germany. I have a strong knowledge of HTML, CSS, Javascript
          and fundamentals of Python and C++.
        </Typography>
      </CardContent>
    </div>
  );
};
export default ShowProfileCard;
