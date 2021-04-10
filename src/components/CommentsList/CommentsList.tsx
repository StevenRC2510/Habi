import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 20,
    marginBottom: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const CommentsList = () => {
  const classes = useStyles();

  return (
    <>
      {[1, 2, 3].map(() => (
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                R
              </Avatar>
            }
            title='Steven Ruiz'
            subheader='April 09, 2021'
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit egestas neque, etiam mi dis arcu suscipit dapibus platea conubia
              potenti, litora in massa dui enim torquent natoque hendrerit. Mattis ornare urna in blandit taciti pellentesque mollis
              sagittis sem, eros conubia phasellus lobortis dictum mi ad molestie ligula, non vulputate per aliquam nullam proin suscipit
              ut. Habitant senectus faucibus dis diam curae ante cum parturient, molestie elementum proin massa neque ornare euismod mauris,
              integer eget per porttitor nunc quisque mus.
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
