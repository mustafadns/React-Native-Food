import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FoodIngredients({data}) {
    return data.map((dataIng) => (
        <View
            style={styles.listItem}
            key={dataIng}
        >
            <Text style={styles.itemText}>{dataIng}</Text>
        </View>
    ))
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#b5b5b5',
        marginVertical: 4,
        marginHorizontal: 12,
        borderRadius: 10,
        paddingVertical: 7,
    },
    itemText: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '500',
    },
})