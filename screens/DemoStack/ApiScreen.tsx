import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from 'axios';
// import {useQuery} from '@tanstack/react-query';

export const API_SCREEN_NAME = 'API_SCREEN';

export default function ApiScreen() {
  useEffect(() => {
    console.log('FETCHING');
    (async function initData() {
      try {
        console.log('FETCHED');
        const res2 = await apiTest();
        console.log('RESPONSE');
        console.log(res2);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const apiTest = () => {
    return new Promise((resolve, reject) => {
      axios({
        url: 'http://jsonplaceholder.typicode.com/todos/1',
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(resJson => {
          console.log('RES JSON');
          console.log(resJson);
          resolve(resJson);
        })
        .catch(error => {
          console.log('ERROR');
          console.log(error);
          reject(error);
        });
    });
  };

  // const getTestData = () => {
  //   return fetch('https://jsonplaceholder.typicode.com/todos/1', {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // };
  return (
    <View style={styles.container}>
      <Text>ApiScreen Component works !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
