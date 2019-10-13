import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default Header = (props) => {
    let textColor = props.result==='Victory!'? 'green': 'red'
    return (
        <View style={styles.headerWrapper}>
            <Text style={[styles.headerText,{color: textColor}]}>{props.result}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    headerWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold',
    }
})
