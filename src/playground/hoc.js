// Higher Order Component (HOC) - component that renders another component
// reuse code
// Render hijacking
// prop manipulation
// abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This information is private. Please use discretion.</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please authenticate to access this resource.</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="FUCK" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="FUCK" />, document.getElementById('app'))