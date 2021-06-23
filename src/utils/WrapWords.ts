export const wrapWords = (message: string) => {
  const re =
    /([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)|(https:\/\/[a-z,A-Z,0-9,\-,_,.]+\.[a-z,A-Z]{2,4}[А-Я,а-я,a-z,A-Z,0-9,\-,_,\/,=,?,&]*)|((@|#)[A-Z,a-z,0-9,_]+)/g
  message = message.replace(/\n/g, '<br/>')
  const found = message.match(re)
  let new_message = []
  if (found) {
    found.forEach((ob) => {
      const i = message.search(ob)
      new_message.push(message.slice(0, i))
      message = message.slice(i + ob.length)
    })
  }
  new_message.push(message)
  return [new_message, found || []]
}
