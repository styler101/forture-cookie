import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import cookie1 from './assets/biscoito.png';
import cookie2 from './assets/biscoitoAberto.png';
import quotes from './data/quotes';

export default function App() {
  const [message, setMessage] = useState(null);

  function showMessage() {
    let randomNumber = Math.floor(Math.random() * (quotes.length - 0 + 1) + 0);
    setMessage(quotes[randomNumber]);
  }

  function resetCookie() {
    setMessage(null);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Biscoito da sorte </Text>
      <Image
        source={message !== null ? cookie2 : cookie1}
        style={styles.cookieImage}
      />
      {message !== null && (
        <View style={styles.messageContainer}>
          <Text style={styles.message}> "{message}" </Text>
        </View>
      )}
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.btn1} onPress={showMessage}>
          <Text style={styles.bnt1Text}> Quebrar Biscoito </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} onPress={resetCookie}>
          <Text> Reiniciar Biscoito </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    color: '#c8c8c8',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  messageContainer: {},
  message: {
    color: '#FD841F',
    fontSize: 13,
    textAlign: 'center',
  },
  cookieImage: {
    width: 200,
    height: 200,
  },

  containerButton: {
    marginTop: 16,
  },

  btn1: {
    width: 320,
    height: 42,
    borderWidth: 1,
    borderColor: '#FD841F',
    borderStyle: 'solid',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bnt1Text: {
    color: '#FD841F',
    fontWeight: 'bold',
  },

  btn2: {
    marginTop: 8,
    width: 320,
    height: 42,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
