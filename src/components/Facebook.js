import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export class Facebook extends Component {
    state={
        isLoggedIn:false,
        userID:'',
        name:'',
        email:'',
        picture:''
    }

    componentClicked = () => {
        console.log('logged');
    }

    responseFacebook = (response) => {
        console.log(response);
    }

    render() {
        let fbContent;
        if(this.state.isLoggedIn){
            fbContent = null;
        } else {
            fbContent = (
                <FacebookLogin
                    appId="896644754523937"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} 
                />
            );
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}

export default Facebook
