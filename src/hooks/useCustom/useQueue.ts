import {useEffect, useState} from 'react';

import TrackPlayer, {
  Event,
  State,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';

const UseQueue = (didSetup: boolean) => {
  const [queue, setQueue] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<number | null>(0);

  useEffect(() => {
    const loadPlaylist = async () => {
      const newQueue = await TrackPlayer.getQueue();
      setQueue(newQueue);
    };
    if (didSetup) {
      loadPlaylist();
    }
  }, [didSetup]);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    //@ts-ignore
    if (event.state === State.nextTrack) {
      let index = await TrackPlayer.getCurrentTrack();
      setCurrentTrack(index);
    }
  });

  return {
    queue,
    currentTrack,
  };
};

export default UseQueue;
