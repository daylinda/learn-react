import PropTypes from 'prop-types';

//conditional rendering example

function UserGreeting(props) {

    const welcomeMessage = <div className="welcome-message">
                                <h2>Welcome back, {props.username}!</h2>
                            </div>;
    
    const loginPrompt =  <div className="login-prompt">
                            <h2>Please log in to continue.</h2>
                         </div>;

    return (props.isloggedIn? welcomeMessage : loginPrompt);


   

}

UserGreeting.propTypes = {
    isloggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string
};

UserGreeting.defaultProps = {
    isloggedIn: false,
    username: "Guest"
};

export default UserGreeting;