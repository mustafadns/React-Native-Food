import { StyleSheet, Text, View } from 'react-native';
import React , { useContext }from 'react';
import { FavoriteContext } from '../store/FavoritesContext';
import { FOODS } from '../data/dummy-data';
import FoodList from '../components/FoodList';

export default function FavoritesScreen() {
    const favoriteFoodContext = useContext(FavoriteContext);

    const favoriteFoods = FOODS.filter((food) => favoriteFoodContext.ids.includes(food.id));

    if (favoriteFoods.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.emptyText}>Favorilere Ürün Eklemediniz !!!</Text>
            </View>
        )
    }
    return (
        <FoodList items={favoriteFoods}/>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5f5f5f',
        textDecorationLine: 'underline',
    }
})