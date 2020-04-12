import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Grid, Chip, Divider, CardHeader, CardActions, Typography, IconButton } from '@material-ui/core';
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
    DateRangeRounded,
    SchoolRounded,
    AssignmentRounded,
    Favorite,
    Share,
} from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 450,
    },
    root1: {
        marginBottom: 30,
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
        backgroundColor: '#009688',
        color: '#fff',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    }
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Fragment>
            <Grid
                container
            >
                <Grid item xs={12} sm={6} xl={3} lg={3} md={3}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image="https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/92848436_3004369792957899_2076351894292267008_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=K6nkMxbhMHUAX85R2tT&_nc_ht=scontent-maa2-1.xx&oh=d4b5a2c332af7069088ab148c78e5198&oe=5EB6D615"
                            title="Vipin Kumar"
                        />
                        <CardContent>
                        <div style={{
                                fontSize: 30,
                                fontWeight: 600,
                                position: 'relative',
                                top: -60,
                                height: 0,
                                color: '#009688',
                        }}> Vipin Kumar </div>
                        <List className={classes.root}>
                            <ListItem>
                                <ListItemAvatar>
                                    <WorkRounded style={{ color: '#009688' }}  />
                                </ListItemAvatar>
                                <ListItemText primary="Developer" secondary="Techjini.com" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <HomeRounded style={{ color: '#009688' }} />
                                </ListItemAvatar>
                                <ListItemText primary="Bengaluru" secondary="Dec 15, 2015" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <EmailRounded style={{ color: '#009688' }} />
                                </ListItemAvatar>
                                <ListItemText primary="vip1509ku@gmail.com" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <PhoneRounded style={{ color: '#009688' }} />
                                </ListItemAvatar>
                                <ListItemText primary="+91 - 8884702587" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <LaptopMacRounded style={{ color: '#009688' }} />
                                </ListItemAvatar>
                                <ListItemText primary="Skills" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar />
                                    <ListItemText>
                                    <Chip className={classes.chip} label={"Javascript"} />
                                    <Chip className={classes.chip} label={"Node.js"} />
                                    <Chip className={classes.chip} label={"React.js"} />
                                    <Chip className={classes.chip} label={"Angular.js"} />
                                    <Chip className={classes.chip} label={"TypeScript"} />
                                    <Chip className={classes.chip} label={"Html"} />
                                    <Chip className={classes.chip} label={"Css"} />
                                    <Chip className={classes.chip} label={"Aws"} />
                                    <Chip className={classes.chip} label={"MongoDb"} />
                                    <Chip className={classes.chip} label={"Redis"} />
                                    </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <LanguageRounded style={{ color: '#009688' }} />
                                </ListItemAvatar>
                                <ListItemText primary="Languages" secondary="Hindi, English"  />
                            </ListItem>
                        </List>
                        <div className={classes.center}>
                            <LinkedIn style={{ color: '#009688' }} />
                            <GitHub style={{ color: '#009688' }} />
                            <Twitter style={{ color: '#009688' }} />
                        </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} xl={9} lg={9} md={9} className={classes.grid}>
                    <div style={{ backgroundColor: 'inherit', paddingLeft: 14 }}>
                        <Card className={classes.root1}>
                            <CardContent>
                                <div style={{ color: '#009688', fontSize: 30, fontWeight: 400, paddingBottom: 15, position: 'relative' }}>
                                    <WorkRounded style={{ color: '#009688', fontSize: 40 }} />
                                    <span style={{
                                        position: 'absolute',
                                        marginTop: 5,
                                        marginLeft: 10,
                                    }}>Work Experience</span>
                                </div>
                                <div style={{ paddingLeft: 15 }}>
                                    <h5 style={{ color: '#000',  opacity: 0.6, fontSize: 18, fontWeight: 400, margin: 0 }}><b>Full Stack Developer / datamatics.com</b></h5>
                                    <div style={{
                                        margin: '10px 0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        }}>
                                        <DateRangeRounded style={{ color: '#009688' }} />
                                        <span style={{
                                            paddingTop: 4,
                                            paddingLeft: 10
                                        }}>Apr 2017 - <Chip className={classes.chip} style={{ margin: 0 }} label={"Current"} /></span>
                                    </div>
                                    <div>
                                        Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.
                                    </div>
                                </div>
                                <Divider style={{ margin: '24px 0 40px 0'}}/>
                                <div style={{ paddingLeft: 15 }}>
                                    <h5 style={{ color: '#000',  opacity: 0.6, fontSize: 18, fontWeight: 400, margin: 0 }}><b>Full Stack Developer / noesyssoftware.com</b></h5>
                                    <div style={{
                                        margin: '10px 0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        }}>
                                        <DateRangeRounded style={{ color: '#009688' }} />
                                        <span style={{
                                            paddingTop: 4,
                                            paddingLeft: 10
                                        }}>Dec 2015 - Apr 2017</span>
                                    </div>
                                    <div>
                                        Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.
                                    </div>
                                </div>
                            </CardContent>
                    </Card>
                    <Card className={classes.root1}>
                            <CardContent>
                                <div style={{ color: '#009688', fontSize: 30, fontWeight: 400, paddingBottom: 15, position: 'relative' }}>
                                    <SchoolRounded style={{ color: '#009688', fontSize: 40 }} />
                                    <span style={{
                                        position: 'absolute',
                                        marginTop: 5,
                                        marginLeft: 10,
                                    }}>Education</span>
                                </div>
                                <div style={{ paddingLeft: 15 }}>
                                    <h5 style={{ color: '#000',  opacity: 0.6, fontSize: 18, fontWeight: 400, margin: 0 }}><b>Jaypee Institute of Information Technology, Noida</b></h5>
                                    <div style={{
                                        margin: '10px 0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        }}>
                                        <DateRangeRounded style={{ color: '#009688' }} />
                                        <span style={{
                                            paddingTop: 4,
                                            paddingLeft: 10
                                        }}>Jul 2011 - May 2015</span>
                                    </div>
                                    <div>
                                        Bachelor Degree
                                    </div>
                                </div>
                            </CardContent>
                    </Card>
                    <Card className={classes.root1}>
                            <CardContent>
                                <div style={{ color: '#009688', fontSize: 30, fontWeight: 400, position: 'relative' }}>
                                    <AssignmentRounded style={{ color: '#009688', fontSize: 40 }} />
                                    <span style={{
                                        position: 'absolute',
                                        marginTop: 5,
                                        marginLeft: 10,
                                    }}>Projects</span>
                                </div>
                            </CardContent>
                    </Card>

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
