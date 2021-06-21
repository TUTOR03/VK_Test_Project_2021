import React, { SyntheticEvent } from 'react'
import { SectionHeader, SectionRow, RowItem } from './EmojiSection.styles'

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
    <div>
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
    </div>
  )
}

export default EmojiSection
