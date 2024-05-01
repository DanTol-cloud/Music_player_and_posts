import {ScrollView, Text} from 'react-native';

import {RouteProp} from '@react-navigation/native';

import {styles} from './styles.ts';
import {AppStackParamList} from '../../../types.ts';
import replaceImageLinks from '../../features/replaceLinkWithComponent.tsx';

type PostDetailsScreenNavigationProp = RouteProp<
  AppStackParamList,
  'PostDetails'
>;

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
