import {ScrollView, Text} from 'react-native';

import {replaceImageLinks} from '@features';
import {PostDetailsScreenNavigationProp} from '@types';

import {styles} from './styles.ts';

interface PostDetailsScreenProps {
  route: PostDetailsScreenNavigationProp;
}
const PostDetailsScreen = ({route}: PostDetailsScreenProps) => {
  const post = route.params?.post;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{post?.title}</Text>
      {replaceImageLinks(post?.description)}
    </ScrollView>
  );
};

export default PostDetailsScreen;
