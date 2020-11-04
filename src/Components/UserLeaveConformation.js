import React from 'react';
import ReactDom from 'react-dom';
import { Confirm, TransitionablePortal } from 'semantic-ui-react';
const UserLeaveConformation = (message,callback,confirmOpen,setConfirmOpen) => {

    const container  = document.createElement('div');

    container.setAttribute('custom-confirm-view','');

    const handleConfirm = callbackState => {

        ReactDom.unmountComponentAtNode(container);
        callback(callbackState);
        setConfirmOpen(false);
    };

    const handleCancel = callbackState => {
        
        ReactDom.unmountComponentAtNode(container);
        callback();
        setConfirmOpen(false);
    };



    document.body.appendChild(container);

    const {header,content} = JSON.parse(message);

    ReactDom.render( 
        <TransitionablePortal open = {confirmOpen} onClose = {handleCancel}>
            <Confirm
                open={confirmOpen}
                header={header}
                onCancel={handleCancel}
                content = {content}
                centered = {false}
                onConfirm={handleConfirm}
            />
        </TransitionablePortal>,container);
};

export default UserLeaveConformation;