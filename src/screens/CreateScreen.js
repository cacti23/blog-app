import React, { useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = () => {
  const { addBlogPost } = useContext(Context);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'aquamarine'
      }
    });
  }, [navigation]);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'));
      }}
    />
  );
};

export default CreateScreen;
