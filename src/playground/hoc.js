// HOC - a component that renders another component
    // re-use code
    // render hijacking
    // prop manipulation
    // abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

// withAdminWarning
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p> }
            <WrappedComponent {...props} />
        </div>
    );
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to see the info.</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='Elon Musk is THE MAN' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='Elon Musk is THE MAN' />, document.getElementById('app'));