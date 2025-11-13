import React from 'react';
import './Notifications.css';

function NotificationItem({ type, html, value }) {
    return (
        <>
            {type && value ? <li data-notification-type={type}>{value}</li> : null}
            {html ? <li dangerouslySetInnerHTML={{ __html }}>{value}</li> : null}
        </>
    )
}

export default NotificationItem;
