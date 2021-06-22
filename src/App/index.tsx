import React, { useState } from 'react'
import { Container, Dialogue } from './App.styles'
import Messages from '@components/Messages'
import InputArea from '@components/InputArea'
import { wrapWords } from '@utils/WrapWords'

const App: React.FC = () => {
  const [messages, setMessages] = useState<string[][][]>([
    [['HELLO'],[]],
    [['IT IS MY MESSAGEaaaaaaaaaaaaaaaaaaaa'],[]]
  ])

  const addMessage = (message: string)=>{
    console.log(wrapWords(message))
    setMessages((prev)=>([
      ...prev,
      wrapWords(message)
    ]))
  }

  return (
    <Container>
      <Dialogue>
        <Messages messages={messages} />
        <InputArea addMessage={addMessage} />
      </Dialogue>
    </Container>
  )
}

export default App
