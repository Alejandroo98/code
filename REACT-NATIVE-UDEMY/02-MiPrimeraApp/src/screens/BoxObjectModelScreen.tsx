import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Chanel} from '../components/Chanel';

import {Title} from '../components/Title';
export const BoxObjectModelScreen = () => {
  interface chanel {
    title: string;
    url: string;
  }

  //Esto obviamaente vendra desde una DB
  const chanels: chanel[] = [
    {title: 'Cuenca vs Catolica', url: 'https//www.tataltal.com'},
    {title: 'BSC vs Liga de Quito', url: 'https//www.tataltal.com'},
    {title: 'Emeleb vs Catolica', url: 'https//www.tataltal.com'},
    {title: 'Olmedo vs D.Quito', url: 'https//www.tataltal.com'},
    {title: 'Cuenca vs Catolica', url: 'https//www.tataltal.com'},
    {title: 'Cuenca vs Catolica', url: 'https//www.tataltal.com'},
    {title: 'Cuenca vs Catolica', url: 'https//www.tataltal.com'},
    {title: 'Cuenca vs Catolica', url: 'https//www.tataltal.com'},
  ];

  return (
    <>
      <View style={styles.titleName}>
        <Title />
      </View>

      {chanels.map(chanel => (
        <Chanel title={chanel.title} url={chanel.url} />
      ))}
    </>
  );
};

//stles -> sniipet
const styles = StyleSheet.create({
  titleName: {
    backgroundColor: 'black',
  },
});
