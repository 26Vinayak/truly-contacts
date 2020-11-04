import React from 'react'
import { Placeholder, List, Container, Message, Header, Button, Icon } from 'semantic-ui-react';
import AppHeader from '../../../Components/Header/Header';
// import contacts from '../../../Context/reducers/contacts';
import ImageThumb from '../../../Components/imageThumb/index';
import Favorites from '../Favorites/Favorites';
function ContactListUI({
    deleteContact,starUnstar,
    state: {
        contacts:{loading,error,data,isSearchActive,foundContacts}},
    }) {
    const currentContacts = isSearchActive?foundContacts:data;


    return (
        <div>

            <AppHeader/>
           <Container> 
                    

                    <Header>STARRED</Header>
                        
                    <Favorites favorites = {currentContacts.filter(item => item.is_favorite)} loading = {loading}/>

                    <Header>All</Header>
                    {loading &&  (
                        <>
                        {" "}
                        <Placeholder>
                            <Placeholder.Header image>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            </Placeholder.Header>
                            <Placeholder.Paragraph>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </>
                    )}


                    {!loading && currentContacts.length===0 && (
                        <Message
                            content='No Contacts to show!'
                        />
                    )}

                    <List>
                        {currentContacts.length>0 && currentContacts.map((contact) => (
                            <List.Item key ={contact.id}   disabled = {contact.deleting}>
                                <List.Content floated = "right" >
                                    <span>
                                        {contact.country_code}
                                        {contact.phone_number}</span>  
                                    <Button color = "red" size = "tiny" onClick = {()=>{deleteContact(contact.id)}}>
                                        <Icon name = "delete"/>
                                    </Button>

                                    <Button onClick = {()=>{starUnstar(contact.id,contact.is_favorite)}}>
                                            {contact.is_favorite?"UNSTAR":"STAR"}
                                    </Button>
                                </List.Content>
                                <List.Content style = {{display:"flex", alignItems:"center",marginRight:"10px"}}>
                                    <ImageThumb firstName = {contact.first_name} lastName= {contact.last_name} src = {contact.contact_picture}
                                        style = {{width:40,height:40}}
                                    />
                                    <span>{contact.first_name} {contact.last_name}{" "}</span>
                                   {contact.is_favorite &&  <Icon name = "heart" color = "red" style = {{marginLeft:5}}/>}
                                </List.Content>
                            </List.Item>))}
                    </List>
            </Container>
        </div>
    )
}

export default ContactListUI;
