export type MessageInputT = {
  rows: number
  value: string
  cursor: {
    start: number
    end: number
  }
  needRefocus: boolean
}
