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
                    clientId="972482179616-nhdfecvqepr2hut0fsctf3a9g2auffe5.apps.googleusercontent.com"
                    buttonText="Login"
                    render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
                    )}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}

export default Google
