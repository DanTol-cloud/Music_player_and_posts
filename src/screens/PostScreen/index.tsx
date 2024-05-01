import {ActivityIndicator, FlatList, SafeAreaView, Text} from 'react-native';

import PostItem from '../../components/Post/postItem.tsx';
import {styles} from './styles.ts';
import {Article} from '../../../types.ts';
import handleQueryError from '../../features/handleQueryError.tsx';
import {useGetAllQuery} from '../../hooks/hooks.ts';

const PostScreen = (): JSX.Element => {
  const {data, error, isLoading} = useGetAllQuery();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    handleQueryError({error});
  }

  return (
    <SafeAreaView style={styles.container}>
      {data ? (
        <FlatList
          data={data.articles}
          renderItem={({item}) => <PostItem item={item} />}
          keyExtractor={(item: Article) => item.id.toString()}
        />
      ) : (
        <Text style={styles.text}>No data available</Text>
      )}
    </SafeAreaView>
  );
};

export default PostScreen;
