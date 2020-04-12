import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Divider, Chip } from '@material-ui/core';
import { WorkRounded, DateRangeRounded, SchoolRounded, AssignmentRounded } from '@material-ui/icons';

const themeColor = '#009688';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: 30,
    },
    header: {
        fontSize: 30,
        fontWeight: 400,
        position: 'relative',
        color: themeColor,
    },
    headerPaddingBottom: {
        paddingBottom: 15,
    },
    headerIcon: {
        fontSize: 40,
    },
    headerTitle: {
        position: 'absolute',
        margin: '5px 0 0 10px',
        color: themeColor,
    },
    chip: {
        backgroundColor: themeColor,
        color: '#fff',
    },
    subHeaderTitle: {
        color: '#000',
        opacity: 0.6,
        fontSize: 18,
        fontWeight: 400,
        margin: 0,
    },
    subHeaderContant: {
        margin: '10px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: themeColor,
    },
    subHeaderTime: {
        padding: '4px 0 0 10px',
        color: themeColor,
    },
}));

const getIcon = (type, headerIcon) => {
    if(type === 'WorkRounded') {
        return <WorkRounded className={headerIcon} />
    } else if (type === 'SchoolRounded') {
        return <SchoolRounded className={headerIcon} />
    } else if (type === 'AssignmentRounded') {
        return <AssignmentRounded className={headerIcon} />
    }
};

function WorkExperienceComponent(props) {
    const classes = useStyles();
    const data = props.data;
    return (
        <Card className={classes.root}>
            <CardContent>
                <div className={`${classes.header} ${data.isContant ? classes.headerPaddingBottom : ''}`}>
                    {getIcon(data.header.icon, classes.headerIcon)}
                    <span className={classes.headerTitle}>{data.header.title}</span>
                </div>
                <div style={{ paddingLeft: 15 }}>
                {data.isContant && data.contant.map((d, i) => {
                    return (
                        <Fragment key={d.title}>
                            {i !== 0 && <Divider style={{ margin: '24px 0 40px 0'}}/>}
                            <h5 className={classes.subHeaderTitle}><b>{d.title}</b></h5>
                            <div className={classes.subHeaderContant}>
                                <DateRangeRounded />
                                <span className={classes.subHeaderTime}>
                                    {d.date}{d.isCurrent && <Chip className={classes.chip} style={{ margin: 0 }} label={"Current"} />}
                                </span>
                            </div>
                            <div>{d.data}</div>
                        </Fragment>
                    )
                })}
                </div>
            </CardContent>
        </Card>
    )
}

export default WorkExperienceComponent;
