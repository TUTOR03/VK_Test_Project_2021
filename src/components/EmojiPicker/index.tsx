import React from 'react'
import { EmojiBlock } from './EmojiPicker.styles'
import EmojiSmileButton from '@assets/svgs/EmojiSmileButton.svg'
import { EmojiMenu, EmojiScrollBlock } from './EmojiPicker.styles'

const EmojiPicker: React.FC = () => {
  return (
    <EmojiBlock>
      <EmojiSmileButton />
      <EmojiMenu>
        <EmojiScrollBlock></EmojiScrollBlock>
      </EmojiMenu>
    </EmojiBlock>
  )
}

export default EmojiPicker
