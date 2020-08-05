import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import {NotesContext} from '../context/NotesContext'

const ShowNotesScreen = ({route}) => {
    const {id} = route.params
    const {state, dispatch} = useContext(NotesContext)

    const note = state.find((record) => {
        return record.id === id
    })
    return (
        <View>
            <Text>{note.title}</Text>
            <Text>{note.content}</Text>
        </View>
    )
}

export default ShowNotesScreen
