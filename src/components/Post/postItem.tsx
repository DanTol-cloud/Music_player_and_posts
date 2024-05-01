import {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {UseLayout} from '@hooks';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList, Article} from '@types';
import {styles} from 'screens/PostScreen/styles.ts';

const PostItem = ({item}: {item: Article}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const {onLayout} = UseLayout();

  return (
    <>
      <TouchableOpacity
        onLayout={onLayout}
        style={styles.renderItem}
        onPress={() => navigation.navigate('PostDetails', {post: item})}
        key={item.id}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>
          {item.description.length < 100
            ? item.description
            : `${item.description.slice(0, 100)}...`}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default memo(PostItem);
