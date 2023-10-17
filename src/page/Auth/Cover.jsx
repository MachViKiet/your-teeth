
const Cover_Style = {
  width: '100%',
  height: '100%',
  backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
  backgroundRepeat: 'no-repeat',
  backgroundColor: (t) =>
    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

const Cover_URL = 'https://source.unsplash.com/random?wallpapers'

export const Cover = {
  Cover_Style,
  Cover_URL
}