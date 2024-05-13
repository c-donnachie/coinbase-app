import * as React from 'react'
import * as Haptics from 'expo-haptics'
import AsyncStorage from '@react-native-async-storage/async-storage'

const initialContants = [
    {
        id: 0,
        name: 'Sara Lee'
    },
    {
        id: 1,
        name: 'John doe'
    },
    {
        id: 3,
        name: 'Jack Lee'
    },
]

const contactsStore = React.createContext([])
const { Provider } = contactsStore

const ContactsProvider = ({ children }) => {

    const [contacts, dispatch] = React.useReducer(contactReducer, [])

    React.useEffect(() => {
        getContacts()
    }, [])

    const getContacts = async () => {
        const contacts = await AsyncStorage.getItem('@contacts')
        if (contacts === null) {
            await AsyncStorage.setItem('@contacts', JSON.stringify(initialContants))
            dispatch({ type: 'SET_CONTACTS', contacts: initialContants })
        } else {
            dispatch({ type: 'SET_CONTACTS', contacts: JSON.parse(contacts) })
        }
    }

    const handleAddContact = (name) => {
        dispatch({ type: 'ADD', id: Math.random(), name })
    }

    const handleDeleteContact = (id) => {
        dispatch({ type: 'DELETE', id })
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    }

    const handleChangeContact = (contact) => {
        dispatch({ type: 'CHANGE', contact })
    }

    return (
        <Provider value={{
            contacts,
            handleAddContact,
            handleChangeContact,
            handleDeleteContact,
        }}>
            {children}
        </Provider>
    )
}

export { ContactsProvider, contactsStore }


export const contactReducer = (contacts, action) => {
    switch (action.type) {
        case 'SET_CONTACTS': {
            return action.contacts
        }
        case 'ADD': {
            const newContacts = [...contacts, { id: action.id, name: action.name }]
            const jsonValue = JSON.stringify(newContacts)
            AsyncStorage.setItem('@contacts', jsonValue)
            return newContacts
        }
        case 'DELETE': {
            const newContacts = contacts.filter(contact => contact.id !== action.id)
            const jsonValue = JSON.stringify(newContacts)
            AsyncStorage.setItem('@contacts', jsonValue)
            return newContacts
        }
        case 'CHANGE': {
            const newContacts = contacts.map(c => (c.id === action.contact.id ? action.contact : c))
            const jsonValue = JSON.stringify(newContacts)
            AsyncStorage.setItem('@contacts', jsonValue)
            return newContacts
        }
        default: {
            throw new Error("Unknown action type: " + action.type)
        }
    }
}