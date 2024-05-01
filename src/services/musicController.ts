import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
} from 'react-native-track-player';

import {Audio} from '../../types.ts';

export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
      ],
      compactCapabilities: [Capability.Play, Capability.Pause],
      progressUpdateEventInterval: 2,
    });

    isSetup = true;
  } finally {
    return isSetup;
  }
}

export async function addTrack(tracks: Audio[]) {
  await TrackPlayer.add(
    tracks.map(item => {
      return {
        id: item.id.toString(),
        url: item.media.url,
        artwork: item.icon,
        title: item.title,
        artist: 'Unknown',
        duration: item.media.duration,
      };
    }),
  );
  await TrackPlayer.setQueue(
    tracks.map(item => {
      return {
        id: item.id.toString(),
        url: item.media.url,
        artwork: item.icon,
        title: item.title,
        artist: 'Unknown',
        duration: item.media.duration,
      };
    }),
  );
}
