import * as React from 'react'
import { AddContact } from '@/components/AddContact/AddContact'
import { GS } from '@/styles/global'
import { StyleSheet, Text, View } from 'react-native'
import { ContactList } from '@/components/ContactList/ContactList'
import { ContactsProvider } from '@/reducers/contactReducer'

export const Portafolio = () => {

  // useState
  // const [contacts, setContacts] = React.useState(initialContants)

  // UseReducer
  // const [contacts, dispatch] = React.useReducer(contactReducer, initialContants)


  // const handleAddContact = (name) => {
  //   dispatch({ type: 'ADD', id: nextId++, name })
  // }

  // const handleDeleteContact = (id) => {
  //   dispatch({ type: 'DELETE', id })
  //   Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
  // }

  // const handleChangeContact = (contact) => {
  //   dispatch({ type: 'CHANGE', contact })
  // }

  // const handleAddContact = (namez) => {
  //   setContacts([...contacts, { id: nextId++, name }])
  // }

  // const handleDeleteContact = (id) => {
  //   setContacts(contacts.filter(contact => contact.id !== id))
  //   Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
  // }

  // const handleChangeContact = (contact) => {
  //   setContacts(contacts.map(c => (c.id === contact.id ? contact : c)))
  // }

  return (
    <ContactsProvider>
      <View style={GS.simpleContainer}>
        <AddContact/>
        <ContactList/>
      </View>
    </ContactsProvider>

  )
}

// let nextId = 4
// const initialContants = [
//   {
//     id: 0,
//     name: 'Sara Lee'
//   },
//   {
//     id: 1,
//     name: 'John doe'
//   },
//   {
//     id: 3,
//     name: 'Jack Lee'
//   },
// ]

const s = StyleSheet.create({

})