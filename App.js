import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const url = 'https://randomuser.me/api/';
import Card from './components/Card';

export default function App() {
  const [data, setData] = useState([]);

  const getUser = async () => {
    try{
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Card data={data[0]} getUser={getUser} />
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
