import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Grid, Chip, CardHeader, CardActions, Typography, IconButton, useMediaQuery } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {
    WorkRounded,
    LanguageRounded,
    HomeRounded,
    EmailRounded,
    PhoneRounded,
    LaptopMacRounded,
    LinkedIn,
    GitHub,
    Twitter,
    Favorite,
    Share,
} from '@material-ui/icons';

import WorkExperienceComponent from './../../component/MainMenu/WorkExperience.comopnent'

const themeColor = '#009688';


const data= {
        image: 'https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/92848436_3004369792957899_2076351894292267008_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=K6nkMxbhMHUAX85R2tT&_nc_ht=scontent-maa2-1.xx&oh=d4b5a2c332af7069088ab148c78e5198&oe=5EB6D615',
        name: 'Vipin Kumar',
        tech: ['Javascript', 'Node.js', 'React.js', 'Angular.js', 'TypeScript', 'Html', 'Css', 'Aws', 'MongoDb', 'Redis'],
        info: [{
        header: {
            icon: 'WorkRounded',
            title: 'Work Experience',
        },
        isContant: true,
        contant: [{
            title: 'Full Stack Developer / datamatics.com',
            date: 'Apr 2017 - ',
            isCurrent: true,
            data: 'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
        },
        {
            title: 'Full Stack Developer / noesyssoftware.com',
            date: 'Dec 2015 - Apr 2017',
            isCurrent: false,
            data: 'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
        }],
    }, {
        header: {
            icon: 'SchoolRounded',
            title: 'Education',
        },
        isContant: true,
        contant: [{
            title: 'Jaypee Institute of Information Technology, Noida',
            date: 'Jul 2011 - May 2015',
            isCurrent: false,
            data: 'Bachelor Degree'
        }]
    },
    {
        header: {
            icon: 'AssignmentRounded',
            title: 'Projects',
        },
        isContant: false,
    }],
}

const useStyles = makeStyles((theme) => ({
    root: {},
    themeColor: {
        color: themeColor,
    },
    name: {
        fontSize: 30,
        fontWeight: 600,
        position: 'relative',
        top: -60,
        height: 0,
        color: themeColor,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    grid: {
        height: '95vh',
        overflowX: 'hidden'
    },
    chip: {
        margin: 5,
        backgroundColor: themeColor,
        color: '#fff',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        color: themeColor,
    }
}));

export default function RecipeReviewCard() {
    const classes = useStyles();

    const matches = useMediaQuery('(min-width:600px)');
    return (
        <Fragment>
            <Grid
                container
            >
                <Grid item xs={12} sm={6} xl={3} lg={3} md={3}>
                    <Card className={classes.root}>
                        <CardMedia className={classes.media} image={data.image} title={data.name} />
                        <CardContent>
                        <div className={classes.name}>{data.name}</div>
                        <List>
                            <ListItem>
                                <ListItemAvatar><WorkRounded className={classes.themeColor} /></ListItemAvatar>
                                <ListItemText primary="Developer" secondary="Techjini.com" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar><HomeRounded className={classes.themeColor}/></ListItemAvatar>
                                <ListItemText primary="Bengaluru" secondary="Dec 15, 2015" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar><EmailRounded className={classes.themeColor}/></ListItemAvatar>
                                <ListItemText primary="vip1509ku@gmail.com" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar><PhoneRounded className={classes.themeColor}/></ListItemAvatar>
                                <ListItemText primary="+91 - 8884702587" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar><LaptopMacRounded className={classes.themeColor}/></ListItemAvatar>
                                <ListItemText primary="Skills" />
                            </ListItem>
                            <ListItem>
                                    <ListItemAvatar><div /></ListItemAvatar>
                                    <ListItemText>{data.tech.map(t => <Chip key={t} className={classes.chip} label={t} />)}</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <LanguageRounded className={classes.themeColor}/>
                                </ListItemAvatar>
                                <ListItemText primary="Languages" secondary="Hindi, English"  />
                            </ListItem>
                        </List>
                        <div className={classes.center}>
                            <LinkedIn onClick={() => window.open("https://www.linkedin.com/in/vip1509ku/")}/>
                            <GitHub onClick={() => window.open("https://github.com/vipinpal")} />
                            <Twitter onClick={() => window.open("https://twitter.com/vipin_k1")} />
                        </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} xl={9} lg={9} md={9} className={classes.grid} style={{ marginTop: matches ? 0 : 20 }}>
                    <div style={{ backgroundColor: 'inherit', paddingLeft: matches ? 14 : 0}}>
                       {data.info.map(d => <WorkExperienceComponent data={d} />)}
                    <Card className={classes.root}>
                        <CardHeader
                            title="Spireon"
                            subheader="September 14, 2016"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            <Favorite />
                            </IconButton>
                            <IconButton aria-label="share">
                            <Share />
                            </IconButton>
                        </CardActions>
                        </Card>
                        
                    </div>
                </Grid>
            </Grid>
        </Fragment>
    );
}
