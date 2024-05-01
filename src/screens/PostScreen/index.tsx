import {ActivityIndicator, FlatList, SafeAreaView, Text} from 'react-native';

import {PostItem} from '@components';
import {handleQueryError} from '@features';
import {UseGetAllQuery, UseLayout} from '@hooks';
import {Article} from '@types';

import {styles} from './styles.ts';

const PostScreen = (): JSX.Element => {
  const {data, error, isLoading} = UseGetAllQuery();
  const {getItemLayout} = UseLayout();

  const renderItem = ({item}: {item: Article}) => <PostItem item={item} />;

  const keyExtractor = (item: Article) => item.id.toString();

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
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          getItemLayout={getItemLayout}
        />
      ) : (
        <Text style={styles.text}>No data available</Text>
      )}
    </SafeAreaView>
  );
};

export default PostScreen;
