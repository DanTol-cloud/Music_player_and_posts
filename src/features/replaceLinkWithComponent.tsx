import {Image, Text, View} from 'react-native';

const replaceImageLinks = (text: string | undefined) => {
  const parts = text?.split(/(!\[.*?]\(.*?\.(jpg|png)\))/);

  const newText = parts?.map((part, index) => {
    if (part.startsWith('![')) {
      const imageUrl = part.substring(part.indexOf('(') + 1, part.indexOf(')'));
      return (
        <View key={index}>
          <Image style={{width: 50, height: 50}} source={{uri: imageUrl}} />
        </View>
      );
    } else if (part.endsWith('png') || part.endsWith('jpg')) {
      return null;
    } else {
      return (
        <Text style={{color: 'black'}} key={index}>
          {part}
        </Text>
      );
    }
  });

  return <View>{newText}</View>;
};

export default replaceImageLinks;
