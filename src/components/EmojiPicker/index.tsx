import React, { SyntheticEvent, useState, MouseEvent, useEffect } from 'react'
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
import { MenuStateT } from '@type/EmojiPicker'

interface EmojiPickerProps {
  emojiInput: (event: SyntheticEvent<HTMLDivElement>) => void
  last_used: string[][]
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({ emojiInput, last_used }) => {
  const [menuState, setMenuState] = useState<MenuStateT>({
    opened: false,
    page: 'all',
  })

  const menuToggle = (event: SyntheticEvent<HTMLDivElement>) => {
    setMenuState((prev) => ({
      ...prev,
      opened: !prev.opened,
    }))
  }

  const changePage = (event: MouseEvent<HTMLDivElement>) => {
    const new_name = event.currentTarget.dataset.name
    setMenuState((prev) => ({
      ...prev,
      page: new_name || '',
    }))
  }

  return (
    <EmojiBlock>
      <EmojiSmileButton onClick={menuToggle} menuOpened={menuState.opened}>
        <EmojiSmile />
      </EmojiSmileButton>
      {menuState.opened && (
        <EmojiMenu menuOpened={menuState.opened}>
          <EmojiScrollBlock>
            {menuState.page == 'all' ? (
              emojis.map((section, sectionIndex) => (
                <EmojiSection
                  title={section.title}
                  emojis={section.items}
                  key={sectionIndex}
                  emojiInput={emojiInput}
                />
              ))
            ) : (
              <EmojiSection
                emojiInput={emojiInput}
                emojis={last_used}
                title="Недавно использованные"
              />
            )}
          </EmojiScrollBlock>
          <MenuNav>
            <MenuNavItem
              page={menuState.page == 'all'}
              data-name="all"
              onClick={changePage}
            >
              <EmojiSmile />
            </MenuNavItem>
            <MenuNavItem
              page={menuState.page == 'last'}
              data-name="last"
              onClick={changePage}
            >
              <ClockButton />
            </MenuNavItem>
          </MenuNav>
        </EmojiMenu>
      )}
    </EmojiBlock>
  )
}

export default EmojiPicker
