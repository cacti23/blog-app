import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { Context, Provider } from '../context/BlogContext';

const ShowScreen = ({ route }) => {
  const { state } = useContext(Context);
  const { id } = route.params;

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});
