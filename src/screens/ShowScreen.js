import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ShowScreen = ({ route }) => {
  const { state } = useContext(Context);
  const { id } = route.params;
  const navigation = useNavigation();

  const blogPost = state.find((blogPost) => blogPost.id === id);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'greenyellow'
      },
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Edit', { id: blogPost.id })}
        >
          <FontAwesome name='pencil' size={30} />
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});
