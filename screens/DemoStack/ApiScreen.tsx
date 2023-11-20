import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {useQuery} from '@tanstack/react-query';

export const API_SCREEN_NAME = 'API_SCREEN';

export default function ApiScreen() {
  useEffect(() => {
    console.log('FETCHING');
    (async function initData() {
      try {
        console.log('FETCHED');
        const res = await getTestData();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const getTestData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
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
