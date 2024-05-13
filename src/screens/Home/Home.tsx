import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Switch, Platform } from 'react-native'
import React, { useState, FC, useEffect } from 'react'
import Colors from '@/constants/Colors'
import { CBButton } from '@/components/CBButton/CBButton'
import dataCoins from '@/data/CoinMarketCapData'

export const Home = () => {

  const [isActive, setIsActive] = useState(false)


  const data = [
    {
      id: 1,
      name: "TV"
    },
    {
      id: 2,
      name: "Celular"
    }
  ]

  const handleChange = () => {
    setIsActive(!isActive);
  }

  interface CardProps {
    name: string
  }

  const Card: FC<CardProps> = ({ name }) => {
    return (
      <View>
        <Text>{name}</Text>
      </View>
    )
  }
  const CoinsFilters = dataCoins.data
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
        {/* 
        <View style={[s.coinsList, { marginTop: Platform.OS === 'ios' ? 20 : 0 }]}>

            {
              CoinsFilters.map((item) => (
                <View
                  key={item.id}
                  style={s.cardCoins}
                >
                  <Text>{item.name}</Text>
                  <Text>{item.symbol}</Text>
                  </View>
              ))
            }

        </View> */}

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
  },
  coinsList: {
    display: 'flex',
    gap: 10,
    marginTop: 20
  },
  cardCoins: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    padding: 10
  }

})