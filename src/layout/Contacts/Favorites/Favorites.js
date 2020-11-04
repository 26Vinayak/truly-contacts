import React, { useRef } from 'react'
import { Placeholder, Icon, Message } from 'semantic-ui-react';
import ImageThumb from '../../../Components/imageThumb';
import './style.css';

function Favorites({favorites:data,loading}) {


    const listRef = useRef(null);
    const showIcons = data.length>2;
    const scrollleft  = ()=>{
        if(listRef.current)
        {
            listRef.current.scrollBy({
                top:0,
                left:500,
                behavior:"smooth",
            })
        }
    }
    const scrollRight  = ()=>{
        if(listRef.current)
        {
            listRef.current.scrollBy({
                top:0,
                left:-500,
                behavior:"smooth",
            })                    
        }
    }
    return (
        <>
          {!loading && data.length===0 && (
                        <Message
                            content='No Contacts to show!'
                        />
                    )}

            <div className = "slide-container">

                {showIcons && 
                    <Icon className = "icon-class" name = "caret left" size = "huge" onClick = {scrollleft}/>
                }
                {data.length>0 && <div className = 'item-container' ref = {listRef}>

                    {Array.isArray(data) && data.map((item)=>{
                        return <div key = {item.id} className = "single-item-container">
                            <ImageThumb firstName = {item.first_name} 
                            lastName = {item.last_name} src = {item.contact_picture}
                                style = {{width:75,height:75}}
                            />
                            <p className = "name">{item.first_name}{" "}{item.last_name}</p>
                        </div>
                    })}
                </div>}



                

                {loading &&     <>
                                {" "}
                                <Placeholder>
                                    <Placeholder.Header image>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    </Placeholder.Header>
                                </Placeholder>
                            </>
                }
                {showIcons &&      
                    <Icon className = "icon-class" name = "caret right" size = "huge" onClick = {scrollRight}/>
                }
            </div>
        </>
    )
}

export default Favorites;
