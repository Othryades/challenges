import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});



class OutlinedTextFields extends React.Component {
    state = {
        name: 'Name',
        // gilad: true,
        // jason: false,
        // antoine: false,
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        const { gilad, jason, antoine } = this.state;
        const error = [gilad, jason, antoine].filter(v => v).length !== 2;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-name"
                    label="Name"
                    className={classes.textField}
                    // value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    id="outlined-email-input"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                />


                <div className={classes.root}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">I agree too:</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={gilad} onChange={this.handleChange('gilad')} value="gilad" />
                                }
                                label="Receive newsletter"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={jason} onChange={this.handleChange('jason')} value="jason" />
                                }
                                label="Be shown targeted ads"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={antoine}
                                        onChange={this.handleChange('antoine')}
                                        value="antoine"
                                    />
                                }
                                label="Contribute to anonymous visit statistics"
                            />
                        </FormGroup>
                    </FormControl>
                </div>


            </form>
        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);