import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    textField: { fontSize: 12 },
}));

export default function DatePickers() {
    const classes = useStyles();

    const style = {
        fontSize: '14px',
        padding: '0 5px',
    };

    return (
        <form noValidate>
            <TextField variant='standard' id='date' type='date' className={classes.textField} style={style} />
        </form>
    );
}
