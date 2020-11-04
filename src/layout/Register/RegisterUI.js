import React from 'react'
import {Form,Button, Grid,Header as SemanticHeader, Segment} from 'semantic-ui-react';
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom';

function RegisterUI({form: {onChange,form,loading,registerFormValid,onSubmit,fieldErrors}}) {
    return (
        <div>
            <Header/>
            <Grid centered>
                <Grid.Column style = {{maxWidth:550,marginTop:20}}>
                    <SemanticHeader>
                        Signup Here
                    </SemanticHeader>
                    <Segment>
                        <Form>
                            <Form.Field>
                                <Form.Input 
                                    value = {form.username || ""}
                                    onChange = {onChange}
                                    name = "username" placeholder = "User Name" label = "Username"
                                    error = {
                                        fieldErrors.username && {
                                            content : fieldErrors.username,
                                            pointing : "below",
                                        }                                        
                                    }
                                     />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    value = {form.firstName || ""}
                                    onChange = {onChange}
                                    name = "firstName" placeholder = "First Name" label = "First Name"
                                    error = {
                                        fieldErrors.first_name && {
                                            content : fieldErrors.first_name,
                                            pointing : "below",
                                        }                                        
                                    }
                                    />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    value = {form.lastName || ""}
                                    onChange = {onChange}
                                    name = "lastName" placeholder = "Last Name" label = "Last Name"
                                    error = {
                                        fieldErrors.last_name && {
                                            content : fieldErrors.last_name,
                                            pointing : "below",
                                        }                                        
                                    }
                                    />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    value = {form.email || ""}
                                    onChange = {onChange} 
                                    name = "email" type = "email" placeholder = "Email" label = "Email"
                                    error = {
                                        fieldErrors.email && {
                                            content : fieldErrors.email,
                                            pointing : "below",
                                        }                                        
                                    }
                                    />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    value = {form.password || ""}
                                    onChange = {onChange}
                                    name = "password" type = "password" placeholder = "Password" label = "Password"
                                    error = {
                                        fieldErrors.password && {
                                            content : fieldErrors.password,
                                            pointing : "below",
                                        }                                        
                                    }
                                    />
                            </Form.Field>
                            <Button
                                onClick = {onSubmit} 
                                loading = {loading}
                                disabled={registerFormValid || loading} fluid primary type = "submit">Submit</Button>

                           </Form>
                           <Segment>Already have an account? <Link to="/auth/login">Login.</Link></Segment>

                    </Segment>
                </Grid.Column>
            </Grid>            
        </div>        
    )
}

export default RegisterUI;
 