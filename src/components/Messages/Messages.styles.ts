import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 4px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`
export const Message = styled.div`
  width: 90%;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  padding: 7px;
  margin-bottom: 7px;
  border-bottom: 1px solid #99A2AD;
`

export const Colored = styled.span`
  color: #2a5885;
  cursor: pointer;
`