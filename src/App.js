/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState, useEffect} from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Switch,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import music_data from "./music-data.json";
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar/SearchBar';


function App(){

  const [list,setList] = useState(music_data);

  const renderSong = ({item}) => <SongCard song={item} />

  const renderSeperator = () => <View style={styles.seperator}></View>

  const handleSearch = text =>{
    const filteredList = music_data.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLocaleLowerCase();

      return currentTitle.indexOf(searcedText) > -1;
    });

    setList(filteredList);
  };
  return(
    <SafeAreaView style={styles.container}>
        <SearchBar
          onSearch={handleSearch}
        />
        <FlatList
          keyExtractor={(item) => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  seperator:{
    borderWidth: 1,
    borderColor:"#e0e0e0",
  }
});

export default App;



