import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native'
import React, { useLayoutEffect, useContext } from 'react'
import { FOODS } from '../data/dummy-data';
import FoodIngredients from '../components/FoodIngredients';
import { AntDesign } from '@expo/vector-icons';
import { FavoriteContext } from '../store/FavoritesContext';

export default function FoodDetailScreen({
    route,
    navigation,
}) {
    const favoriteFoodContext = useContext(FavoriteContext);
    const foodId = route.params.foodId;
    const selectedFood = FOODS.find((food) => food.id === foodId);
    const foodIsFavorite = favoriteFoodContext.ids.includes(foodId);

    const pressHandler = () => {
        console.log("Tıklandı!!");
    }

    function changeFavorite() {
        if (foodIsFavorite) {
            favoriteFoodContext.removeFavorite(foodId);
        }
        else {
            favoriteFoodContext.addFavorite(foodId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Pressable
                        style={({ pressed }) => (pressed ? styles.pressed : null)}
                        onPress={pressHandler}
                    >
                        <AntDesign
                            name={foodIsFavorite ? 'heart' : 'hearto'}
                            size={28} color="red"
                            onPress={changeFavorite}
                        />
                    </Pressable>
                )
            }
        });
    }, [navigation, changeFavorite]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                source={{ uri: selectedFood.imageUrl }}
                style={styles.image}
            />
            <Text style={styles.title}>{selectedFood.title}</Text>
            <View style={styles.details}>
                <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
                <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
            </View>
            <View style={styles.listContainer}>
                <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitle}>İÇİNDEKİLER</Text>
                </View>
                <FoodIngredients data={selectedFood.ingredients} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 50,
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
        color: 'red',
        marginVertical: 10,
    },
    listContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    subTitleContainer: {
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'gray',
    },
    subTitle: {
        color: 'red',
        fontSize: 24,
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.5,
    },
})