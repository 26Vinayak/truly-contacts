import React from 'react'
import {Form,Button, Grid,Header as SemanticHeader, Segment, Message} from 'semantic-ui-react';
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom';

function LoginUI({form: {onChange,form,loading,error,LoginFormValid,onSubmit}}) {
    return (
        <div>
            <Header/>
            <Grid centered>
                <Grid.Column style = {{maxWidth:550,marginTop:20}}>
                    <SemanticHeader>
                        Login to your account
                    </SemanticHeader>
                    <Segment>
                    {error && <Message content ={error?.detail} negative/>}
                        <Form>
                            <Form.Field>
                                <Form.Input 
                                    value = {form.username || ""}
                                    onChange = {onChange}
                                    name = "username" placeholder = "User Name" label = "Username"
                                     />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    value = {form.password || ""}
                                    onChange = {onChange}
                                    name = "password" type = "password" placeholder = "Password" label = "Password"
                                    />
                            </Form.Field>
                            <Button
                                onClick = {onSubmit} 
                                loading = {loading}
                                disabled={LoginFormValid || loading} fluid primary type = "submit">Submit</Button>
                        </Form>
                        <Segment>Need an account? <Link to="/auth/register">Register.</Link></Segment>
                    </Segment>
                </Grid.Column>
            </Grid>            
        </div>        
    )
}

export default LoginUI; 
 