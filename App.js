import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';
import IcRight from './assets/right.png';

const App = () => {
  const [data, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);

  const fixedUrl = 'https://randomuser.me/api/';
  const EndPoint = `?page=${currentPage}&results=0`;

  const getData = () => {
    axios.get(fixedUrl + EndPoint).then(res => {
      setdata([...data, ...res.data.results]);
    });
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  const renderData = ({item}) => {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.picture.large}} />
        <View style={styles.content}>
          <Text style={styles.text}>
            {`${item.name.title} ${item.name.first} ${item.name.last}`}
          </Text>
          <Text
            style={
              styles.textLocation
            }>{`${item.location.street.number} ${item.location.street.name}`}</Text>
          <Text style={styles.textMail}>{item.email}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Image style={styles.icon} source={IcRight} />
        </TouchableOpacity>
      </View>
    );
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.titleheader}>Data Users</Text>
      </View>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={renderData}
          keyExtractor={item => item.email}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 26,
    backgroundColor: '#383636',
    marginStart: 10,
    marginEnd: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 25,
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  textLocation: {
    fontSize: 12,
    color: '#787676',
    fontFamily: 'Poppins-Regular',
  },
  textMail: {
    color: '#007CC4',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  header: {
    height: 100,
    backgroundColor: '#242424',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  titleheader: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    color: '#fff',
  },
  body: {
    backgroundColor: '#242424',
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 10,
    marginTop: 5,
  },
});

export default App;
