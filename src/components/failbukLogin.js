import React, {Component} from 'react'

class Failbuk extends Component {
    constructor() {
        super();
        this.state = {
            isLogged: false,
        }
        this.getFailbukStatus = this.getFailbukStatus.bind(this);
    }

    getFailbukStatus(response) {
        console.log(response)
        response.status==="connected" && this.setState({isLogged:true})
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
                this.getFailbukStatus(response);
            }.bind(this)); // este bind toma el this de la function de arriba que a su vez tomaba el this de la clase

            FB.AppEvents.logPageView();
            
        }.bind(this); // este bind pasa el this de la clase

        


        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));


        }   

    render() {
        return (
            
            <div className="App">
                {   
                    this.state.isLogged ? <PresentationalIn /> : <PresentationalOut />
                    
                }
            </div>
            
        );
    } 

}

const PresentationalIn = () => {
    return(<p>Hola</p>)
    
}

const PresentationalOut = () => {
    return(<div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>)
    
}

export default Failbuk