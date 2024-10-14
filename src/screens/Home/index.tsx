import React, { useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import axiosInstance, { baseURL } from '../../services/axios';
import { LeagueOfLegends, Champion } from '../../models/LeagueOfLegends';
import { NavigationProp } from '@react-navigation/native';

const fetchChampion = async () => {
  const response = await axiosInstance.get<LeagueOfLegends>(
    '/data/pt_BR/champion.json',
  );
  const championsData = response.data.data;
  const championsList: Champion[] = Object.values(championsData);
  return championsList;
};

export default function HomeScreen({ navigation }: { navigation: NavigationProp<any> }): React.JSX.Element {
  const [champions, setChampions] = React.useState<Champion[]>([]);

  useEffect(() => {
    fetchChampion().then(data => {
      setChampions(data);
    });
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={champions}
      keyExtractor={item => item.id}
      numColumns={3}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Champions Info', item)}
          style={styles.card}>
          <Image
            source={{ uri: `${baseURL}/img/champion/${item.image.full}` }}
            style={styles.image}
          />
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 10,
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: 5,
    color: '#ffffff',
    fontFamily: 'Rubik',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#888',
  },
});
