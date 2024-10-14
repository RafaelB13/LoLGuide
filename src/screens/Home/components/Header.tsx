import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LoL Guide</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Header;
