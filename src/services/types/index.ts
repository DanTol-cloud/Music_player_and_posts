import {RouteProp} from '@react-navigation/native';
import {Track} from 'react-native-track-player';

type Article = {
  id: string;
  description: string;
  title: string;
};

type Media = {
  url: string;
  mimetype: string;
  preview_img: string;
  duration: number;
};

type Audio =
  | {
      id: string;
      name: string;
      title: string;
      icon: string;
      media: Media;
      paid: boolean;
    }
  | Track;

type Affirmations = {
  articles: Article[];
  audio: Audio[];
};

type TabStackParamList = {
  AudioTab: undefined;
  PostTab: undefined;
};

type AppStackParamList = {
  PostDetails: {post: Article} | undefined;
  Audio: undefined;
  Post: undefined;
};

type PostDetailsScreenNavigationProp = RouteProp<
  AppStackParamList,
  'PostDetails'
>;

export type {
  Article,
  Audio,
  Affirmations,
  TabStackParamList,
  AppStackParamList,
  PostDetailsScreenNavigationProp,
};
