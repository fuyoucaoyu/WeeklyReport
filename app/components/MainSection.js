/**
 * @file
 */

import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

class MainSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeMsg: 'Welcome: '
        }
    }

    render() {
        const {user, actions} = this.props;
        return (
                <TouchableOpacity
                    onPressIn={(event) => {actions.loggedIn();}}>
                    <Text style={styles.loginText}>
                        {this.state.welcomeMsg} {user.isLoggedIn ? 'true' : 'false'}
                    </Text>
                </TouchableOpacity>
            );
    }
}

const styles = StyleSheet.create({
    loginText: {
        width: 200,
        height: 30,
        margin: 0,
        marginTop: 100,
        borderRadius: 10,
        textAlign: 'center',
        lineHeight: 20,
        backgroundColor: '#0000ff',
        color: '#ffffff',
    }
});

MainSection.propTypes = {
    user: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}

export default MainSection;