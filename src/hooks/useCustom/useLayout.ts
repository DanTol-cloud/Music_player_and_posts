import {useState} from 'react';
import {LayoutChangeEvent} from 'react-native';

import {Article} from '@types';
import {Track} from 'react-native-track-player';

const UseLayout = () => {
  const [actualHeight, setActualHeight] = useState<number>(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout;
    setActualHeight(height);
  };

  const getItemLayout = (
    _: ArrayLike<Article | Track> | null | undefined,
    index: number,
  ) => ({
    length: actualHeight,
    offset: actualHeight * index,
    index,
  });

  return {
    getItemLayout,
    onLayout,
  };
};

export default UseLayout;
