import React, {useState} from 'react';
import {Text, SafeAreaView, View, Image, StyleSheet} from 'react-native';

function movieDetails(props: any) {
  const [item, setItem] = useState(props.route.params.item);
  const url = `https://image.tmdb.org/t/p/w300${item.poster_path}`;
  console.log(item);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#d4a373'}}>
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
          <Text style={style.text}>Overview</Text>
          <Text> {item.overview}</Text>
        </View>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Text style={style.langText}>Language:</Text>
          <Text> {item.original_language}</Text>
        </View>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Text style={style.text}>Popularity: </Text>
          <Text> {item.popularity}</Text>
        </View>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Text style={style.text}>Vote Count: </Text>
          <Text> {item.vote_count}</Text>
        </View>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Text style={style.text}>Vote Avg: </Text>
          <Text> {item.vote_average}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default movieDetails;

const style = StyleSheet.create({
  flatView: {
    margin: 10,
    marginBottom: 30,
    marginLeft: 15,
    borderRadius: 20,
    backgroundColor: '#fefae0',

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
  text: {
    fontWeight: '700',
    textAlign: 'center',
  },
  langText: {
    fontWeight: '700',
  },
  image: {
    alignSelf: 'center',
    margin: 10,
  },
});
