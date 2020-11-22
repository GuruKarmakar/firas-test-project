import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

const Box = () => (
  <View
    style={{
      backgroundColor: 'black',
      height: 50,
      width: 50,
      borderRadius: 8,
    }}
  />
);

export default App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.shapeColor}>
        <View style={styles.shape}>
          <View style={styles.headerBox}>
            <Box />
            <Text>Name</Text>
            <Box />
          </View>
        </View>
      </View>
      <View style={styles.flll}>
        <View style={styles.fillContainer}>
          <Text>Balance</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shapeColor: {
    backgroundColor: '#e8e8e8',
  },
  shape: {
    height: height * 0.16,
    width,
    backgroundColor: 'white',
    borderBottomStartRadius: 40,
  },
  headerBox: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flll: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    borderTopEndRadius: 40,
  },
  fillContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
