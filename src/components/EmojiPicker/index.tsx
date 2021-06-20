import React, { SyntheticEvent, useEffect, useState } from 'react'
import { EmojiBlock } from './EmojiPicker.styles'
import EmojiSmile from '@assets/svgs/EmojiSmileButton.svg'
import ClockButton from '@assets/svgs/ClockButton.svg'
import {
  EmojiMenu,
  EmojiScrollBlock,
  EmojiSmileButton,
  MenuNav,
  MenuNavItem,
} from './EmojiPicker.styles'
import { emojis } from '@assets/emoji'
import EmojiSection from '@components/EmojiSection'
import { MessageInputT } from '@type/InputArea'

interface EmojiPickerProps {
  emojiInput: (event: SyntheticEvent<HTMLDivElement>) => void
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({ emojiInput }) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)

  const menutoggle = (event: SyntheticEvent<HTMLDivElement>) => {
    setMenuOpened((prev) => !prev)
  }
  return (
    <EmojiBlock>
      <EmojiSmileButton onClick={menutoggle} menuOpened={menuOpened}>
        <EmojiSmile />
      </EmojiSmileButton>
      {menuOpened && (
        <EmojiMenu menuOpened={menuOpened}>
          <EmojiScrollBlock>
            {emojis.map((section, sectionIndex) => (
              <EmojiSection
                title={section.title}
                emojis={section.items}
                key={sectionIndex}
                emojiInput={emojiInput}
              />
            ))}
          </EmojiScrollBlock>
          <MenuNav>
            <MenuNavItem>
              <EmojiSmile />
            </MenuNavItem>
            <MenuNavItem>
              <ClockButton />
            </MenuNavItem>
          </MenuNav>
        </EmojiMenu>
      )}
    </EmojiBlock>
  )
}

export default EmojiPicker
