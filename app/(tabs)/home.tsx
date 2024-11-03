import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../src/firebase';

export default function HomeScreen (){
    const [rows, setRows] = useState([{
        intensity1: '',
        situation: '',
        feeling: '',
        whatHappened: '',
        isHotThought: false,
        confirmsThought: '',
        contradictsThought: '',
        intensity2: '',
    }]);

    const addRow = () => {
        setRows([...rows, {
            intensity1: '',
            situation: '',
            feeling: '',
            whatHappened: '',
            isHotThought: false,
            confirmsThought: '',
            contradictsThought: '',
            intensity2: '',
        }]);
    };

    const saveToFirebase = async () => {
        try {
            const thoughtsRef = collection(db, 'thoughts');
            for (const row of rows) {
                await addDoc(thoughtsRef, {
                    ...row,
                    timestamp: new Date(),
                });
            }
            // Clear form after saving
            setRows([{
                intensity1: '',
                situation: '',
                feeling: '',
                whatHappened: '',
                isHotThought: false,
                confirmsThought: '',
                contradictsThought: '',
                intensity2: '',
            }]);
        } catch (error) {
            console.error('Error saving thoughts:', error);
        }
    };

    return (
        <ScrollView style={styles.container}>
            {rows.map((row, index) => (
                <View key={index} style={styles.row}>
                    <TextInput
                        style={styles.input}
                        placeholder="Intensity (1-100)"
                        keyboardType="numeric"
                        value={row.intensity1}
                        onChangeText={(text) => {
                            const newRows = [...rows];
                            newRows[index].intensity1 = text;
                            setRows(newRows);
                        }}
                    />
                    {/* Add other inputs for the row */}
                </View>
            ))}
            <Button title="Add Row" onPress={addRow} />
            <Button title="Save" onPress={saveToFirebase} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    row: {
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 8,
    },
});

