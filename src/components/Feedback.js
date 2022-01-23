import { Centered } from '.'
import {
  EmojiWinkFill,
  EmojiSmileUpsideDownFill,
  HourglassSplit,
  EmojiNeutralFill,
  EmojiDizzyFill
} from 'react-bootstrap-icons'

export function Feedback ({ type }) {
  switch (type) {
    case 'noLocation':
      return smileUpside
    case 'welcome':
      return wink
    case 'loading':
      return hourglass
    case 'noResults':
      return neutral
    case 'noFavs':
      return dizzy
  }
  return <></>
}

const emojiProps = {
  size: 40,
  color: 'lightseagreen'
}

const pClassName = {
  className: 'mt-4'
}

const smileUpside = (
  <Centered>
    <EmojiSmileUpsideDownFill {...emojiProps} />
    <p {...pClassName}>Geoposition not available. Try typing a location</p>
  </Centered>
)

const wink = (
  <Centered>
    <EmojiWinkFill {...emojiProps} />
    <p {...pClassName}>Set your position and try some search</p>
  </Centered>
)

const hourglass = (
  <Centered>
    <HourglassSplit {...emojiProps} />
    <p {...pClassName}>Loading ...</p>
  </Centered>
)

const neutral = (
  <Centered>
    <EmojiNeutralFill {...emojiProps} />
    <p {...pClassName}>No results! Try other search ...</p>
  </Centered>
)

const dizzy = (
  <Centered>
    <EmojiDizzyFill size={80} color='lightgrey' />
    <p {...pClassName}>Ops! It seems you do not have any favorite yet.</p>
  </Centered>
)
