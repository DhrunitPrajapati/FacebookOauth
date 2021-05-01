import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login'

export class Google extends Component {
    responseGoogle = (response) => {
        console.log(response);
    }
    render() {
        return (
            <div>
                <GoogleLogin
                    clientId="972482179616-spat5nts1obpfcrtc0vpa5oc41vic1ro.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}

export default Google
