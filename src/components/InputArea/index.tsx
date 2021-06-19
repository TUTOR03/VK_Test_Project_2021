import React, {useState, ChangeEvent} from 'react'
import { InputRow, FormGroup, Formfield } from './InputArea.styles'
import EmojiPicker from '@components/EmojiPicker'
import { MessageInputT } from '../../InputArea'

const InputArea: React.FC = () => {
	const [messageInput, setMessageInput] = useState<MessageInputT>({
		rows: 1,
		value: ''
	})
	const inputChange = (event: ChangeEvent<HTMLTextAreaElement>)=>{
		event.preventDefault()
		const st_height = event.target.style.height
		event.target.style.height='0px'
		let temp_rows = Math.ceil((event.target.scrollHeight-18)/18)
		event.target.style.height=st_height
		setMessageInput((prev)=>({
			value: event.target.value,
			rows: temp_rows,
		}))
	}
  return (
    <InputRow>
      <FormGroup>
        <Formfield onChange={inputChange} rows={messageInput.rows} wrap="hard" value={messageInput.value} placeholder="Ваше сообщение..." />
			</FormGroup>
    </InputRow>
  )
}

export default InputArea
