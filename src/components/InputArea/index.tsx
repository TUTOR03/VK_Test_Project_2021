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

interface InputAreaProps {
  addMessage: (message: string)=>void
}

const InputArea: React.FC<InputAreaProps> = ({addMessage}) => {
  const [messageInputState, setMessageInputState] = useState<MessageInputT>({
    rows: 1,
    value: '',
    cursor: {
      start: 0,
      end: 0,
    },
    needRefocus: false,
  })
  const [lastUsedState, setLastUsedState] = useState<string[][]>([[]])
  const messageInput = useRef<HTMLTextAreaElement>(null)

  const inputSubmit = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.code == 'Enter' && !event.ctrlKey) {
      event.preventDefault()
      addMessage(messageInputState.value)
      setMessageInputState((prev)=>({
        ...prev,
        value:''
      }))
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
    const new_emoji = (event.target as HTMLElement).innerHTML
    addSymbol(new_emoji)
    if(!lastUsedState[0].includes(new_emoji)){
      setLastUsedState((prev)=>[[(event.target as HTMLElement).innerHTML, ...prev[0].slice(0,24)]])
      localStorage.setItem('last_used', JSON.stringify([new_emoji, ...JSON.parse(localStorage.getItem('last_used') || '[]').slice(0, 24)]))
    }
  }

  useEffect(()=>{
    const storage = localStorage.getItem('last_used')
    if(storage){
      setLastUsedState([JSON.parse(storage)])
    }
    else{
      localStorage.setItem('last_used', JSON.stringify([]))
    }
  },[])

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
            <EmojiPicker last_used={lastUsedState} emojiInput={emojiInput} />
          ),
          [lastUsedState]
        )}
      </FormGroup>
    </InputRow>
  )
}

export default InputArea
