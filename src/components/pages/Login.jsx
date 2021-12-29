import React, { useState } from 'react'
import {
    Card,
    Checkbox,
    FormControlLabel,
    Grid,
    Button,    
    withWidth,
    CircularProgress,
} from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import image from '../../assets/dreamer.svg'
import { makeStyles } from '@material-ui/core/styles'
// import history from 'history.js'
import clsx from 'clsx'
// import useAuth from '../hooks/useAuth'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    card: {
        maxWidth: 400,
        height: 400,
        borderRadius: 5,
        margin: '1rem',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    }

}));

const Login = () => {
    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })
    const [message, setMessage] = useState('')
    // const { login } = useAuth()

    const classes = useStyles()

    const handleChange = ({ target: { name, value } }) => {
        let temp = { ...userInfo }
        temp[name] = value
        setUserInfo(temp)
    }

    const handleFormSubmit = async (event) => {
        setLoading(true)
        try {
            // await login(userInfo.email, userInfo.password)
            // history.push('/')
        } catch (e) {
            console.log(e)
            setMessage(e.message)
            setLoading(false)
        }
    }

    return (
        <Card className={classes.card}>
            {/* <Grid item lg={5} md={5} sm={5} xs={12}>
                    <div className="p-8 flex justify-center items-center h-full">
                        <img
                            className="w-200"
                            src={image}
                            alt=""
                        />
                    </div>
                </Grid> */}
            <ValidatorForm onSubmit={handleFormSubmit}>
                <Grid container
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center">

                    <Grid item>
                        <TextValidator
                            className=""
                            variant="outlined"
                            size="small"
                            label="Email"
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={userInfo.email}
                            validators={['required', 'isEmail']}
                            errorMessages={[
                                'this field is required',
                                'email is not valid',
                            ]}
                        />
                    </Grid>
                    <Grid item>
                        <TextValidator
                            className=""
                            label="Password"
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            name="password"
                            type="password"
                            value={userInfo.password}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            className=""
                            name="agreement"
                            onChange={handleChange}
                            control={
                                <Checkbox
                                    size="small"
                                    onChange={({
                                        target: { checked },
                                    }) =>
                                        handleChange({
                                            target: {
                                                name: 'agreement',
                                                value: checked,
                                            },
                                        })
                                    }
                                    checked={userInfo.agreement || true}
                                />
                            }
                            label="Remeber me"
                        />
                    </Grid>
                    <Grid item>
                        {message && (
                            <p className="text-error">{message}</p>
                        )}
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={loading}
                            type="submit"
                            style={{ width: '100%' }}
                        >
                            Sign in
                        </Button>
                        {loading && (
                            <CircularProgress
                                size={24}
                                className={
                                    classes.buttonProgress
                                }
                            />
                        )}
                    </Grid>
                    <Grid item >
                        <Button
                            className="capitalize"
                        // onClick={() =>
                        //     history.push('/session/signup')
                        // }
                        >
                            Sign up
                        </Button>
                        <Button
                            className="text-primary"
                        // onClick={() =>
                        //     history.push('/session/forgot-password')
                        // }
                        >
                            Forgot password?
                        </Button>
                    </Grid>
                </Grid>
            </ValidatorForm>
        </Card>
    )
}

export default Login


