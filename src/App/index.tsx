import React, { useState } from 'react'
import { Container, Dialogue } from './App.styles'
import Messages from '@components/Messages'
import InputArea from '@components/InputArea'
import { wrapWords } from '@utils/WrapWords'

const App: React.FC = () => {
  const [messages, setMessages] = useState<string[][][]>([
    [
      [
        'Привет, ',
        '! Выложил тестовое в репозиторий ',
        ' 🔥🔥🔥 Было непросто, но весело. Если что, пиши на почту ',
        ' ',
        '',
      ],
      [
        '@tc',
        'https://github.com/CoolCoder/task',
        'coolcoder@ya.ru',
        '#nofilters',
      ],
    ],
    [
      [
        'Добро пожаловать в 🔥🔥🔥',
        '🔥🔥🔥<br/><br/>Это форма ввода сообщений позволяет добавлять 🤩эмоджи🤩 и запоминает последнии 25 эмоджи, которые были спользованы<br/><br/>Также данное приложение подсвечивает в сообщениях упоминания, хэштеги, ссылки и емайлы<br/><br/>Ниже приведен пример сообещния из маента Figma',
      ],
      ['#EmojiPicker'],
    ],
  ])

  const addMessage = (message: string) => {
    setMessages((prev) => [wrapWords(message), ...prev])
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
