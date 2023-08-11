import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const BlogPostForm = ({ initialValues, onSubmit }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title: </Text>
      <TextInput
        style={styles.input}
        placeholder='Please enter title....'
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content: </Text>
      <TextInput
        style={styles.input}
        placeholder='Please enter content...'
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title='Save Blog Post' onPress={() => onSubmit(title, content)} />
    </View>
  );
};

// automatic
BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
};

export default BlogPostForm;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5
  }
});
