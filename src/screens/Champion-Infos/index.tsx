import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Champion } from '../../models/LeagueOfLegends';
import Icon from 'react-native-vector-icons/FontAwesome';
import { baseURLImage } from '../../services/axios';

interface RootStackParamList {
  ChampionsInfo: Champion;
  [key: string]: Champion | undefined;
}

type ChampionInfosProps = RouteProp<RootStackParamList, 'ChampionsInfo'>;

export default function ChampionInfos() {
  const route = useRoute<ChampionInfosProps>();
  const [champion, setChampion] = React.useState<Champion | undefined>(route.params);

  const championInfo = route.params;

  useEffect(() => {
    setChampion(championInfo);
  }, [championInfo]);

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `${baseURLImage}/img/champion/splash/${champion?.name}_0.jpg`,
        }}
      />

      <View style={styles.championInfos}>
        <Text style={styles.titleName}>{champion?.name}</Text>
        <Text style={styles.subTitle}>{champion?.title}</Text>
        <Text style={styles.lore}>{champion?.blurb}</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Stats</Text>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="heartbeat" color="red" size={20} />
            <Text style={styles.statText}>HP: {champion?.stats.hp}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="heartbeat" color="red" size={20} />
            <Text style={styles.statText}>HP per Level: {champion?.stats.hpperlevel}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="bolt" color="blue" size={20} />
            <Text style={styles.statText}>MP: {champion?.stats.mp}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="bolt" color="blue" size={20} />
            <Text style={styles.statText}>MP per Level: {champion?.stats.mpperlevel}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="tachometer" color="green" size={20} />
            <Text style={styles.statText}>Move Speed: {champion?.stats.movespeed}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="shield" color="brown" size={20} />
            <Text style={styles.statText}>Armor: {champion?.stats.armor}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="shield" color="brown" size={20} />
            <Text style={styles.statText}>Armor per Level: {champion?.stats.armorperlevel}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="magic" color="purple" size={20} />
            <Text style={styles.statText}>Spell Block: {champion?.stats.spellblock}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="magic" color="purple" size={20} />
            <Text style={styles.statText}>Spell Block per Level: {champion?.stats.spellblockperlevel}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="crosshairs" color="white" size={20} />
            <Text style={styles.statText}>Attack Range: {champion?.stats.attackrange}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="heartbeat" color="red" size={20} />
            <Text style={styles.statText}>HP Regen: {champion?.stats.hpregen}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="heartbeat" color="red" size={20} />
            <Text style={styles.statText}>HP Regen per Level: {champion?.stats.hpregenperlevel}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="bolt" color="blue" size={20} />
            <Text style={styles.statText}>MP Regen: {champion?.stats.mpregen}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="bolt" color="blue" size={20} />
            <Text style={styles.statText}>MP Regen per Level: {champion?.stats.mpregenperlevel}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="gavel" color="white" size={20} />
            <Text style={styles.statText}>Attack Damage: {champion?.stats.attackdamage}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="gavel" color="white" size={20} />
            <Text style={styles.statText}>Attack Damage per Level: {champion?.stats.attackdamageperlevel}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="clock-o" color="white" size={20} />
            <Text style={styles.statText}>Attack Speed: {champion?.stats.attackspeed}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="clock-o" color="white" size={20} />
            <Text style={styles.statText}>Attack Speed per Level: {champion?.stats.attackspeedperlevel}</Text>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Info</Text>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="crosshairs" color="white" size={20} />
            <Text style={styles.statText}>Attack: {champion?.info.attack}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="shield" color="brown" size={20} />
            <Text style={styles.statText}>Defense: {champion?.info.defense}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="magic" color="purple" size={20} />
            <Text style={styles.statText}>Magic: {champion?.info.magic}</Text>
          </View>
          <View style={styles.statRow}>
            <Icon style={styles.icon} name="exclamation-circle" color="orange" size={20} />
            <Text style={styles.statText}>Difficulty: {champion?.info.difficulty}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  championInfos: {
    padding: 12,
  },
  image: {
    width: '100%',
    height: 200,
  },
  titleName: {
    fontSize: 36,
    color: '#ffffff',
    fontFamily: 'Rubik',
  },
  lore: {
    fontSize: 14,
    fontWeight: '300',
    marginBottom: 10,
    marginTop: 10,
    color: '#ffffff',
    fontFamily: 'Rubick',
  },
  subTitle: {
    fontSize: 24,
    color: '#ffffff',
    fontFamily: 'Rubick',
  },
  title: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'Rubick',
  },
  statsContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
    textTransform: 'uppercase',
    marginRight: 20,
    textAlign: 'right',
    color: '#ffffff',
    fontFamily: 'Rubik',
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    marginRight: 10, // Adiciona separação entre o ícone e o texto
    width: 30,
  },
  statText: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'Rubick',
  },
});
