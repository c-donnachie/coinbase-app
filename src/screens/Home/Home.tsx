import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { CBButton } from '@/components/CBButton/CBButton'

export const Home = () => {
  return (
    <SafeAreaView style={s.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <Image
          style={s.image}
          source={{ uri: 'https://imgur.com/9EEaSaS.png' }}
        />
        <Text style={s.title}>Welcome to Coinbase!</Text>
        <Text style={s.subTitle}>Make your first investment today</Text>
        <CBButton title='Get started' />
      </ScrollView>
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff'
  },
  image: {
    height: 250,
    width: 150,
    marginTop: 40
  },
  title: {
    fontSize: 21,
    fontWeight: '600',
    marginBottom: 8,
    letterSpacing: .5,
  },
  subTitle: {
    fontSize: 17,
    marginBottom: 24,
    color: Colors.subTitle
  }

})