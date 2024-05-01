import {DownloadDirectoryPath, downloadFile} from 'react-native-fs';
import TrackPlayer from 'react-native-track-player';

type DownloadTrackType = {
  url: string;
  title: string | undefined;
  setIsExist: (value: boolean) => void;
  setIsPlay: (value: boolean) => void;
};

const downloadTrack = async ({
  url,
  title,
  setIsExist,
  setIsPlay,
}: DownloadTrackType) => {
  const options = {
    fromUrl: url,
    toFile: `${DownloadDirectoryPath}/${title?.slice(0, 10)}.mp3`,
    progressDivider: 1,
  };

  TrackPlayer.play();
  setIsPlay(true);

  console.log('DownloadDirectoryPath', DownloadDirectoryPath);

  try {
    const response = await downloadFile(options);
    response.promise.then(res =>
      res.statusCode === 200 ? setIsExist(true) : null,
    );
  } catch (error) {
    console.error('Помилка завантаження:', error);
  }
};

export default downloadTrack;
