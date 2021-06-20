import styled from 'styled-components'

export const SectionHeader = styled.h5`
  margin: 0;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  color: #939393;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
`
export const SectionRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

export const RowItem = styled.div`
  width: 27px;
  height: 27px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.1s;
  border-radius: 4px;
  :hover {
    background-color: #c5d0db;
    cursor: pointer;
  }
`
