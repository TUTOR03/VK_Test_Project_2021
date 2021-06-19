import React from 'react'
import { InputRow, FormGroup, Formfield } from './InputArea.styles'

const InputArea: React.FC = () => {
  return (
    <InputRow>
      <FormGroup>
        <Formfield rows={1} wrap="hard" placeholder="Ваше сообщение" />
      </FormGroup>
    </InputRow>
  )
}

export default InputArea
