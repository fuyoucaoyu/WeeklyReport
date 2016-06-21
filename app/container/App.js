/**
 * @file
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as UserActions from '../actions/userActions.js';
import MainSection from '../components/MainSection.js';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user, actions} = this.props;
        return (
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                    <MainSection user={user} actions={actions} />
                </View>
            );
    }
}

App.propTypes = {
    user: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
    loginButton: {
        width: 100,
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

const mapStateToProps = function (state) {
    return {
        user: state.user
    };
}

const mapDispatchToProps = function (dispatch) {
    return {
        actions: bindActionCreators(UserActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);