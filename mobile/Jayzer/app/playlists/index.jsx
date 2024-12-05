import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const Sonarize = () => {
  return (
    
    <ScrollView style={styles.container}>
      <ImageBackground source={require('../assets/playlist/BRABA.png')} style={styles.imageBackground}>
      </ImageBackground>
      
      <View style={styles.spacing} /> 

      <FlatList
        data={TopPlaylists}
        renderItem={PlaylistCard}
        contentContainerStyle={styles.playlistContainer}
        horizontal={false}
      />
    </ScrollView>
  );
};

const PlaylistCard = ({ item }) => (
  <View style={styles.card}>
    <Image source={item.imagem} style={styles.playlistImage} />
    <View style={styles.textContainer}>
      <Text style={styles.playlistTitle}>{item.nome}</Text>
      <Text style={styles.playlistDescription}>{item.artista}</Text>
    </View>
    <TouchableOpacity style={styles.playButton}>
      <Text style={styles.playButtonText}>▶</Text>
    </TouchableOpacity>
  </View>
);

const TopPlaylists = [
  { id: '1', nome: 'Braba', artista: 'Tuto, Joazinho da vt ...', imagem: require('../assets/playlist/BRABA.png') },
  { id: '2', nome: 'Parada Rap', artista: 'Racionais mcs, Dexter...', imagem: require('../assets/playlist/ParadaRap.png') },
  { id: '3', nome: 'Poesia Acústica', artista: 'Xamã, Mc Poze, ...', imagem: require('../assets/playlist/PoesiaAcustica.png') },
  { id: '4', nome: 'Top Sertanejo', artista: 'Marilia, Jorge e Mateus ...', imagem: require('../assets/playlist/TopSertanejo.png') },
];

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
    },
    imageBackground: {
      width: 200,
      height: 200,
      justifyContent: 'center',
      alignSelf: 'center',
      marginVertical: 20,
      borderRadius: 15,
      overflow: 'hidden',
    },
    spacing: {
      height: 20,
    },
    playlistContainer: {
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#1f1f1f',
      padding: 15,
      borderRadius: 10,
      marginVertical: 8,
      marginHorizontal: 10,
      shadowColor: '#00bcd4',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5,
    },
    playlistImage: {
      width: 80,
      height: 80,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#00bcd4',
    },
    textContainer: {
      flex: 1,
      paddingLeft: 15,
    },
    playlistTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#00eaff',
    },
    playlistDescription: {
      fontSize: 14,
      color: '#9e9e9e',
    },
    playButton: {
      backgroundColor: '#00bcd4',
      padding: 12,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#00bcd4',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
    playButtonText: {
      fontSize: 16,
      color: '#ffffff',
      fontWeight: 'bold',
    },
  });

export default Sonarize;