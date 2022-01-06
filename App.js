import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    Text,
    View,
    Switch,
    TouchableOpacity
} from "react-native";

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


export default function App() {
    const [ name, onChangeName ] = useState('');
    const [ sex, onChangeSex ] = useState('');
    const [ age, onChangAge ] = useState();
    const [ limit, onChangLimit ] = useState(0);
    const [ isStudent, onChangStudent ] = useState(false);

    const sendData = () => {
        alert(
            `Nome: ${name}, idade: ${age}, limite: ${limit}, sexo: ${sex}, é estudante: ${isStudent ? 'Sim' : 'não'} `
        )
    }

    return (
        <SafeAreaView
            style={styles.container}
        >
            <Text
                style={styles.title}
            >
                Nuubank
            </Text>

            <TextInput
                value={name}
                placeholder="Seu nome..."
                style={styles.input}
                onChangeText={onChangeName}

            />
            <TextInput
                style={styles.input}
                onChangeText={onChangAge}
                value={age}
                placeholder="Sua idade..."
                keyboardType="numeric"
            />

            <Picker
                style={styles.picker}
                selectedValue={sex}
                onValueChange={(itemValue, itemIndex) =>
                    onChangeSex(itemValue)
                }
            >
                <Picker.Item label="Sexo" enabled={false}/>
                <Picker.Item label="Masc" value="masc"/>
                <Picker.Item label="Fem" value="fem"/>
            </Picker>

            <Slider
                style={{ width: 300 }}
                value={limit}
                onValueChange={value => onChangLimit(value)}
                minimumValue={0}
                maximumValue={1000}
                minimumTrackTintColor="#ccc"
                maximumTrackTintColor="#000"
            />

            <Text style={styles.limit}>
                O limite selecionado é de: R$ {limit.toFixed(0)}
            </Text>

            <View style={styles.isStudentContainer}>
                <Text style={styles.isStudentText}> É estudante? </Text>

                <View style={styles.yesOrNoContainer}>
                    <Text style={styles.isStudentText}> Não </Text>

                    <Switch
                        value={isStudent}
                        onValueChange={value => onChangStudent(value)}
                        thumbColor='#ccc'
                        trackColor={{ false: '#ccc', true: '#9400d3' }}
                    />

                    <Text style={styles.isStudentText}> Sim </Text>
                </View>
            </View>

            <TouchableOpacity
                onPress={() => sendData()}
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                >
                    Abrir conta!
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: '#9400d3'
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        borderRadius: 10,
        borderWidth: 1,
        width: 300,
        height: 40,
        margin: 12,
        padding: 10,
    },

    picker: {
        width: 300,
    },

    limit: {
        fontSize: 18,
        color: '#000',
        marginTop: 10,
        alignSelf: 'center'
    },

    isStudentContainer: {
        marginTop: 20,
    },

    isStudentText: {
        fontSize: 18,
        color: '#000',
        alignSelf: 'center'
    },

    yesOrNoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    button: {
        width: 250,
        height: 50,
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 25,
        backgroundColor: '#9400d3',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff'
    }
});
