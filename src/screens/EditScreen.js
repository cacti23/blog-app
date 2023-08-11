import React, { useEffect, useContext } from 'react';
import { Context } from '../context/BlogContext';
import { useNavigation } from '@react-navigation/native';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ route }) => {
  const { state, editBlogPost } = useContext(Context);
  const { id } = route.params;
  const navigation = useNavigation();

  const blogPost = state.find((blogPost) => blogPost.id === id);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'plum'
      }
    });
  }, [navigation]);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

export default EditScreen;
