import React, {
  useState,
  ChangeEvent,
  useRef,
  KeyboardEvent,
  useEffect,
  EventHandler,
} from 'react'
import { InputRow, FormGroup, Formfield } from './InputArea.styles'
import EmojiPicker from '@components/EmojiPicker'
import { MessageInputT } from '@type/InputArea'

const InputArea: React.FC = () => {
  const [messageInputState, setMessageInputState] = useState<MessageInputT>({
    rows: 1,
    value: '',
  })
  const messageInput = useRef<HTMLTextAreaElement>(null)

  const inputSubmit = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.code == 'Enter' && !event.ctrlKey) {
      event.preventDefault()
      console.log('ENTER')
    } else if (event.code == 'Enter' && event.ctrlKey) {
      setValueResize('\n', true)
    }
  }

  const inputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValueResize(event.target.value, false)
  }

  const setValueResize = (new_value: string, add: boolean) => {
    if (messageInput.current) {
      messageInput.current.style.height = '0px'
      let temp_rows = Math.ceil((messageInput.current.scrollHeight - 18) / 18)
      messageInput.current.style.height = ''
      setMessageInputState((prev) => ({
        value: add ? prev.value + new_value : new_value,
        rows: temp_rows + (add ? 1:0),
      }))
    }
  }

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
        <EmojiPicker />
      </FormGroup>
    </InputRow>
  )
}

export default InputArea
