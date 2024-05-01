import {Track} from 'react-native-track-player';

export type Article = {
  id: string;
  description: string;
  title: string;
};

export type Media = {
  url: string;
  mimetype: string;
  preview_img: string;
  duration: number;
};

export type Audio =
  | {
      id: string;
      name: string;
      title: string;
      icon: string;
      media: Media;
      paid: boolean;
    }
  | Track;

export type Affirmations = {
  articles: Article[];
  audio: Audio[];
};

export type TabStackParamList = {
  AudioTab: undefined;
  PostTab: undefined;
};

export type AppStackParamList = {
  PostDetails: {post: Article} | undefined;
  Audio: undefined;
  Post: undefined;
};
