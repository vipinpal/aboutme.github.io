import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Tooltip } from '@material-ui/core';
import { MailOutline, Facebook, LinkedIn, GitHub } from '@material-ui/icons';
import { Context } from './../../App';

const useStyles = makeStyles(theme => ({
  avatar: {
    marginTop: 15,
  },
  name: {
    display: 'block',
    textAlign: 'center',
    color: '#000',
    paddingRight: '.3em',
    marginTop: 15,
    fontWeight: 700,
    fontSize: 30,
  },
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
  mailIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    marginTop: 10
  },
  mailText: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    marginTop: 8,
  },
  icons: {
    position: 'absolute',
    bottom: 20,
  },
}));

function SideMenuContent(props) {
  const classes = useStyles();

  return (
    <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
  >
    <Grid item className={classes.avatar}>
      <Avatar alt="Remy Sharp" src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/76199474_2679063768821838_8362746932463927296_o.jpg?_nc_cat=107&_nc_ohc=ZYTNM0fqjFYAX8JVfu5&_nc_ht=scontent-sin6-2.xx&oh=af06ff80016885be230ffe4f0ca7517c&oe=5ED1A160" className={classes.large} />
    </Grid>
    <Context.Consumer>
      {value =>
      <Grid item xs={12} className={classes.name}>
        {value.name}
      </Grid>
      }
    </Context.Consumer>
    <Grid item xs={4} className={classes.mailIcon}>
      <MailOutline></MailOutline>
    </Grid>
    <Grid item xs={8} className={classes.mailText}>
        vip1509ku@gmail.com
    </Grid>
    <Grid item xs={12} className={classes.icons}>
        <div>
            <Tooltip title='Facebook'>
                <Facebook />
            </Tooltip>
            <Tooltip title='LinkedIn'>
                <LinkedIn />
            </Tooltip>
            <Tooltip title='Github'>
                <GitHub />
            </Tooltip>
        </div>
    </Grid>
  </Grid>
  )
}

export default SideMenuContent;
