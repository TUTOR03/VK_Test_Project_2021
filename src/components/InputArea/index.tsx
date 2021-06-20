import React, {
  useState,
  ChangeEvent,
  useRef,
  KeyboardEvent,
  useEffect,
  useMemo,
  SyntheticEvent,
} from 'react'
import { InputRow, FormGroup, Formfield } from './InputArea.styles'
import EmojiPicker from '@components/EmojiPicker'
import { MessageInputT } from '@type/InputArea'

const InputArea: React.FC = () => {
  const [messageInputState, setMessageInputState] = useState<MessageInputT>({
    rows: 1,
    value: '',
    cursor: {
      start: 0,
      end: 0,
    },
    needRefocus: false,
  })
  const messageInput = useRef<HTMLTextAreaElement>(null)

  const inputSubmit = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.code == 'Enter' && !event.ctrlKey) {
      event.preventDefault()
      console.log('ENTER')
    } else if (event.code == 'Enter' && event.ctrlKey) {
      addSymbol('\n')
    }
  }

  const inputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageInputState((prev) => ({
      ...prev,
      value: event.target.value,
    }))
  }

  const emojiInput = (event: SyntheticEvent<HTMLDivElement>) => {
    addSymbol((event.target as HTMLElement).innerHTML)
  }

  const addSymbol = (str: string) => {
    const st = messageInput.current ? messageInput.current.selectionStart : 0
    setMessageInputState((prev) => {
      const split_prev = prev.value.split('')
      return {
        ...prev,
        needRefocus: true,
        cursor: {
          start: st + str.length,
          end: st + str.length,
        },
        value:
          split_prev.slice(0, messageInput.current?.selectionStart).join('') +
          str +
          split_prev.slice(messageInput.current?.selectionEnd).join(''),
      }
    })
  }

  useEffect(() => {
    if (messageInput.current) {
      messageInput.current.style.height = '0px'
      let temp_rows = Math.ceil((messageInput.current.scrollHeight - 18) / 18)
      messageInput.current.style.height = ''
      setMessageInputState((prev) => ({
        ...prev,
        rows: temp_rows,
      }))
      if (messageInputState.needRefocus) {
        messageInput.current.focus()
        messageInput.current.selectionStart = messageInputState.cursor.start
        messageInput.current.selectionEnd = messageInputState.cursor.end
        setMessageInputState((prev) => ({
          ...prev,
          needRefocus: false,
        }))
      }
    }
  }, [messageInputState.value])

  return (
    <InputRow>
      <FormGroup>
        <Formfield
          onKeyPress={inputSubmit}
          onChange={inputChange}
          ref={messageInput}
          rows={messageInputState.rows}
          wrap="hard"
          value={messageInputState.value}
          placeholder="Ваше сообщение..."
        />
        {useMemo(
          () => (
            <EmojiPicker emojiInput={emojiInput} />
          ),
          []
        )}
      </FormGroup>
    </InputRow>
  )
}

export default InputArea
