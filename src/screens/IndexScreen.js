import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const IndexScreen = () => {
  const navigation = useNavigation();
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  const renderBlogList = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Show', { id: item.id })}
      >
        <View style={styles.row}>
          <Text style={styles.title}>
            {item.title} - {item.id}
          </Text>
          <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
            <AntDesign style={styles.icon} name='delete' />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.title}
        renderItem={renderBlogList}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});
