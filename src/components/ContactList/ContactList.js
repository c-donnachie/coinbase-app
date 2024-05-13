import * as React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Button, Pressable } from 'react-native'
import { MyInput } from '../MyInput/MyInput'
import { getRandomPhoto } from '@/utils/radomPhotos'
import Colors from '@/constants/Colors'
import { FontAwesome } from '@expo/vector-icons'
import { contactsStore } from '@/reducers/contactReducer'
import { GS } from '@/styles/global'

export const ContactList = () => {

    const { contacts } = React.useContext(contactsStore)

    if (contacts.length === 0) return (
        <View style={{alignItems: 'center'}}>
            <Text style={GS.title}>You don't have any contacts!</Text>
        </View>
    )
    return (
        <ScrollView>
            {
                contacts.map((contact) => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                    />
                ))
            }
        </ScrollView>
    )
}

const Contact = ({ contact }) => {

    const { handleChangeContact, handleDeleteContact } = React.useContext(contactsStore)

    const photoMemo = React.useMemo(() => getRandomPhoto(), [])

    const [isEditing, setIsEditing] = React.useState(false)
    let contactContainer
    if (isEditing) {
        contactContainer = (
            <View>
                <MyInput
                    value={contact.name}
                    onChangeText={text => handleChangeContact({ ...contact, name: text })}
                />
            </View>
        )
    } else {
        contactContainer = (
            <View>
                <Text style={s.name}>{contact.name}</Text>
            </View>
        )
    }

    return (
        <View style={s.contactContainer}>
            <View style={s.row}>
                <Image
                    source={photoMemo}
                    style={s.image} />
                {contactContainer}
            </View>
            <View style={s.row}>
                {
                    isEditing ? (
                        <Button title='Save' onPress={() => setIsEditing(false)} />
                    ) : (
                        <Pressable
                            onPress={() => setIsEditing(true)}
                        >
                            <FontAwesome
                                name='edit'
                                size={24}
                                color={Colors.cbBlue}
                                style={{ marginRight: 15, marginTop: 5 }}
                            />
                        </Pressable>
                    )}
                <Pressable
                    onPress={() => handleDeleteContact(contact.id)}
                >
                    <FontAwesome
                        name='trash'
                        size={24}
                        color={Colors.cbBlue}
                        style={{ marginRight: 15, marginTop: 5 }}
                    />
                </Pressable>
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    contactContainer: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        borderColor: Colors.secondarySubtitle,
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'space-between',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.black,
    },
})