import React from 'react'
import { Image } from 'semantic-ui-react'
import './style.css';

function ImageThumb({firstName,lastName,src,className,style}) {

    const x = firstName[0];
    const y = lastName[0];
    return (
        <div>
            {src && <Image circular width = {45} height = {45} src = {src} style = {style}
                className =  {`thumbnail ${className}`}
            />
            }
            
            {!src && (
              <div style = {style} className = {`thumbnail ${className}`}>

                  <span>{x}{y}</span> 
              </div>  
            )}
        </div>
    )
}

export default ImageThumb;
