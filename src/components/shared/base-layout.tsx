import { Box } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import React from 'react'
import { TChildrenProps } from '../../style/utils/chidren-props'

const useStyles = makeStyles(() => createStyles({
    container: {
        backgroundImage: `url(${process.env.PUBLIC_URL}/res/background/winter.jpg)`,
        backgroundPosition: 'center'
    }
}));

export const BaseLayout = (props: TChildrenProps) => {
    const classes = useStyles();

    return (
        <Box display='block'
             flexDirection='column'
             height='100vh'
             className={classes.container} >
            {props.children}
        </Box>
    )
}