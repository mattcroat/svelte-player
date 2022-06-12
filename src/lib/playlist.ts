export type Playlist = typeof playlist
export type Track = typeof playlist.tracks[0]

export const playlist = {
  title: 'Peaceful Lofi',
  description:
    'Relax and indulge with a puff of peaceful lofi.',
  cover: 'playlist/cover.jpg',
  tracks: [
    {
      title: 'Missing You',
      album: 'Distant Worlds',
      artist: 'Purrple Cat',
      cover: 'playlist/track-01/cover.jpg',
      added: '2 days ago',
      duration: 62,
      url: 'playlist/track-01/track.mp3',
    },
    {
      title: 'And So It Begins',
      album: 'Artifical Music',
      artist: 'Aryll Fae',
      cover: 'playlist/track-02/cover.jpg',
      added: '2 days ago',
      duration: 47,
      url: 'playlist/track-02/track.mp3',
    },
  ],
}
