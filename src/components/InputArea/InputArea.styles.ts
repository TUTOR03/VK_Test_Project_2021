import styled from 'styled-components'

export const InputRow = styled.div`
  width: 100%;
  background-color: #fafbfc;
  border-top: 1px solid #c5d0db;
  border-radius: 0 0 4px 4px;
  padding: 14px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const FormGroup = styled.div`
  position: relative;
  border: 1px solid #c5d0db;
  border-radius: 4px;
  display: flex;
  width: 90%;
  background-color: #ffffff;
`
export const Formfield = styled.textarea`
  display: block;
  position: relative;
  z-index: 1;
  width: 457px;
  padding: 9px;
  border-radius: 4px;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  color: #000000;
  overflow-y: hidden;
  overflow-x: hidden;
  appearance: none;
  border: none;
  outline: none;
  resize: none;
  word-wrap: break-word;
  box-sizing: border-box;
  &:focus {
    border: none;
  }
`
