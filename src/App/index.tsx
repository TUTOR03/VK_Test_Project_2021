import React from 'react'
import { Container, Dialogue } from './App.styles'
import Messages from '@components/Messages'
import InputArea from '@components/InputArea'

const App: React.FC = () => {
  return (
    <Container>
      <Dialogue>
        <Messages />
        <InputArea />
      </Dialogue>
    </Container>
  )
}

export default App
