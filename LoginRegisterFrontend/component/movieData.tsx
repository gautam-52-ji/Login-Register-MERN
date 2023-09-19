import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function movieData(props: any) {
  const [movieData, setMovieData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const [searchInput, setSearchInput] = useState('');
  const getMovieData = async () => {
    const token = await AsyncStorage.getItem('token');
    const axiosCall = await axios.get('http://localhost:3000/movie/data', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setMovieData(axiosCall.data);
    setSearchData(axiosCall.data);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  const searchHandle = (input: string) => {
    const searchMovie: any = movieData.filter((item: any) => {
      return item.title.includes(input);
    });

    setSearchData(searchMovie);
  };

  useEffect(() => {
    searchHandle(searchInput);
  }, [searchInput]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#d4a373'}}>
      <View style={style.searchView}>
        <TextInput
          style={style.searchInput}
          placeholder="Search movie"
          onChangeText={setSearchInput}
          value={searchInput}></TextInput>
        <TouchableOpacity onPress={() => searchHandle(searchInput)}>
          <Image
            source={{
              uri: 'https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-10.png',
            }}
            height={30}
            width={30}
            style={style.searchLogo}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={searchData}
        renderItem={({item}: any) => {
          const url = `https://image.tmdb.org/t/p/w300${item.poster_path}`;
          return (
            <View>
              <View style={style.flatView}>
                <Image
                  source={{uri: url}}
                  height={300}
                  width={200}
                  style={style.image}
                />

                <Text style={style.titleText}>{item.title}</Text>
                <View style={{flexDirection: 'row', margin: 10}}>
                  <Text style={style.releaseText}>Release Date: </Text>
                  <Text>{item.release_date}</Text>
                </View>
                <View style={{margin: 10}}>
                  <Text style={style.overviewText}>Overview</Text>
                  <Text> {item.overview.substring(0, 100) + '......'}</Text>
                </View>
              </View>
              <View style={style.buttonView}>
                <TouchableOpacity
                  style={style.button}
                  onPress={() =>
                    props.navigation.navigate('Movie Detail Page', {
                      item,
                    })
                  }>
                  <Text style={style.buttonText}>Read More Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default movieData;

const style = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
  },
  searchLogo: {
    marginTop: 5,
  },
  searchInput: {
    width: '90%',
    borderWidth: 1,
    padding: 5,
    margin: 5,
    borderRadius: 10,
    color: 'white',
    textAlign: 'center',
  },
  flatView: {
    flex: 1,
    margin: 10,
    marginBottom: 30,
    paddingBottom: 20,
    marginLeft: 15,
    borderRadius: 20,
    backgroundColor: '#fefae0',
    height: '100%',
    width: 400,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  releaseText: {
    fontWeight: '700',
  },
  overviewText: {
    fontWeight: '700',
    textAlign: 'center',
  },
  image: {
    alignSelf: 'center',
    margin: 10,
  },
  buttonView: {
    marginTop: -45,
    marginLeft: 68,
  },
  button: {
    backgroundColor: '#e7c8a0',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 30,
    borderRadius: 15,
  },
  buttonText: {
    color: '#fefae0',
    fontSize: 25,
  },
});
