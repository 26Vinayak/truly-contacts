import React, { useRef } from 'react'
import Header from '../../../Components/Header/Header';
import {Grid, Header as SemanticHeader, Card, Form, Button, Select, Icon,Image} from 'semantic-ui-react';
import './index.css';
import countries from '../../../utils/countries';
import { Prompt } from 'react-router-dom';

function CreateContextUI({onChange,onSubmit,formInValid,loading,formIsHalffilling,onImageChange,tempFile}) {
    
    const imagePicRef = useRef(null);

    const choseImage = ()=>{
        if(imagePicRef.current){
            imagePicRef.current.click();   
        }
    }
    return (
        <div>

            <Prompt when={formIsHalffilling} message = {JSON.stringify({
                header: 'Confirm',
                content: "You have unsaved Changes, Are you sure you want to leave?",
            })}/>
            <Header/>
            <Grid centered>
                <Grid.Column className = "form-column">
                        <SemanticHeader>
                            Create Contact
                        </SemanticHeader>
                        <Card fluid>
                            <Card.Content>
                            <Form unstackable>
                                <input onChange = {onImageChange} ref = {imagePicRef} type = "file" hidden/>


                                <div className = "image_wrapper">                                    
                                    {tempFile && <Image className ="contactpicture" src = {tempFile}/>}
                                    {!tempFile && 
                                        <div onClick = {choseImage} className = "contactpicture">
                                            <span>Choose Picture</span>
                                        </div>}

                                    <Icon name = "pencil" onClick = {choseImage}/>

                                </div>


                                <Form.Group widths={2}>
                                        <Form.Input  name = "firstName" onChange = {onChange}   label='First name' placeholder='First name' />
                                        <Form.Input  name = "lastName" onChange = {onChange} label='Last name' placeholder='Last name' />
                                </Form.Group>
                                <Form.Group widths={2}>
                                        <Form.Input  name = "countryCode" onChange = {onChange}
                                            control = {Select}
                                            options = {countries}
                                            label='Country' placeholder='Country' />
                                        <Form.Input  name = "phoneNumber" onChange = {onChange} label='PhoneNumber' placeholder='Phone Number' />
                                </Form.Group> 
                                <Form.Checkbox name = "isFavorite" onChange = {(e,data)=>{
                                    onChange(e,{name:"isFavorite",value:data.checked})
                                }} label='Add to favorite' />
                                <Button primary
                                        disabled = {formInValid || loading}  loading = {loading}  onClick = {onSubmit} type='submit'>Submit</Button>
                            </Form>
                            </Card.Content>
                        </Card>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default CreateContextUI;
