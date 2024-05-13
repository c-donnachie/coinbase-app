import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { MyInput } from '@/components/MyInput/MyInput'
import { MyButton } from '../MyButton/MyButton'
import Colors from '@/constants/Colors'
import { contactsStore } from '@/reducers/contactReducer'

export const AddContact = () => {

    const { handleAddContact } = React.useContext(contactsStore)

    const [name, setName] = React.useState('')

    const handleAdd = () => {
        setName('')
        handleAddContact(name)
    }

    return (
        <View style={s.container}>
            <View style={{ width: '80%' }}>
                <MyInput
                    label={'Add contact'}
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <Button
                title='Add'
                color={Colors.cbBlue}
                onPress={handleAdd}
            />
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: '5%'
    }
})