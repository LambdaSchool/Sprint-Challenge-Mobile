import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

export default class Breeds extends React.Component {
    render() {
        return (
            <View style={container}>
                <Text>Doggo Breeds Go Here</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  const { container } = styles;