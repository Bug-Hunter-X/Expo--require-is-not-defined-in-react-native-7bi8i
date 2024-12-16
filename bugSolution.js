import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Asset } from 'expo-asset';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />

      <View style={styles.header}>
        <Image style={styles.image} source={{ uri: Asset.fromModule(require('./assets/logo.png')).uri }} />
      </View>

      <View style={styles.body}>
        <Text style={styles.text}> This is my first react native app</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});