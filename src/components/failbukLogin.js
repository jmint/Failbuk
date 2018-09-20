import React, {Component} from 'react'

class Failbuk extends Component {
    constructor() {
        super();
        this.state = {
            status: "Desactivate",
        }
        console.log(this);
        this.updateLoggedInState = this.updateLoggedInState.bind(this);
    }

    updateLoggedInState(response) {
        console.log(this);
        console.log(response);
    }


    componentDidMount() {
        window.fbAsyncInit = function() {
            FB.init({
            appId      : '2138774593004712',
            cookie     : true,
            xfbml      : true,
            version    : 'v3.1'
            });

            FB.getLoginStatus(function(response) {
                this.updateLoggedInState(response);
            }.bind(this));

            FB.AppEvents.logPageView();
            
        }.bind(this); // este bien pasa el this de

        


        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));


        }

    render() {
        return (<div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>)
    }

}

export default Failbuk