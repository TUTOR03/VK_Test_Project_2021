import React from 'react'
import { Container, Message, Colored } from './Messages.styles'

interface MessagesProps {
  messages: string[][][]
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((mes, mesIndex) => (
        <Message key={mesIndex}>
          <span dangerouslySetInnerHTML={{ __html: mes[0][0] }}></span>
          {mes[1].map((ob, obIndex) => (
            <span key={`${mesIndex}${obIndex}`}>
              <Colored>{ob}</Colored>
              <span
                dangerouslySetInnerHTML={{ __html: mes[0][obIndex + 1] }}
              ></span>
            </span>
          ))}
        </Message>
      ))}
    </Container>
  )
}

export default Messages
