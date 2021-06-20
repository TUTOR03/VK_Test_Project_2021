import React, { SyntheticEvent, useEffect } from 'react'
import { SectionHeader, SectionRow, RowItem } from './EmojiSection.styles'
import { MessageInputT } from '@type/InputArea'

interface EmojiSectionProps {
  title: string
  emojis: string[][]
  emojiInput: (event: SyntheticEvent<HTMLDivElement>) => void
}

const EmojiSection: React.FC<EmojiSectionProps> = ({
  title,
  emojis,
  emojiInput,
}) => {
  return (
    <>
      <SectionHeader>{title}</SectionHeader>
      {emojis.map((row, rowIndex) => (
        <SectionRow key={rowIndex}>
          {row.map((emoji, emojiIndex) => (
            <RowItem onClick={emojiInput} key={emojiIndex + 10 * rowIndex}>
              {emoji}
            </RowItem>
          ))}
        </SectionRow>
      ))}
    </>
  )
}

export default EmojiSection
