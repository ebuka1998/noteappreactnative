import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'


const CreateNoteScreen = ({navigation}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    return (
        <View style={{flex: 1, margin: 3}}>
            <Text style={{fontSize: 32}}>Enter Title</Text>
            <TextInput
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.input}
            />

            <Text style={{fontSize: 32}}>Enter content</Text>
            <TextInput
                value={content}
                onChangeText={(text) => setContent(text)}
                style={styles.input}
                numberOfLines={3}
                multiline={true}
            />
            <TouchableOpacity
                style={{backgroundColor: 'blue', padding: 12}}
            
            >
                <Text 
                 style={{fontSize: 22, color: 'white', textAlign: 'center'}}
                 onpress={() => {
                     dispatch({type: 'ADD', payload: {title, content}})
                     navigation.goBack()
                 }}
                    
                >
                    save
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 8
    }
})

export default CreateNoteScreen
