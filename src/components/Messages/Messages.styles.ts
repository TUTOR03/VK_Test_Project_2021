import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #dae2ea;
    border-radius: 4px;
    :hover {
      cursor: pointer;
    }
  }
`
export const Message = styled.div`
  width: 90%;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  padding: 7px;
  margin-bottom: 7px;
  border-bottom: 1px solid #99a2ad;
`

export const Colored = styled.span`
  color: #2a5885;
  cursor: pointer;
`
