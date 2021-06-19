import styled from 'styled-components'

export const EmojiBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  z-index: 2;
`

export const EmojiMenu = styled.div`
  width: 290px;
  height: 290px;
  border-radius: 4px;
  background-color: #ffffff;
  position: absolute;
  right: 0;
  bottom: 50px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

  &::before {
    position: absolute;
    pointer-events: none;
    content: '';
    height: 12px;
    width: 12px;
    background-color: #edeef0;
    right: 10px;
    transform: rotate(45deg);
    bottom: -5px;
    z-index: -1;
    border: 1px solid #c5d0db;
    border-radius: 4px;
  }
  &::after {
    position: absolute;
    content: '';
    top: -1px;
    left: -1px;
    border-radius: 4px;
    width: 292px;
    height: 292px;
    background-color: #c5d0db;
    z-index: -2;
  }
`

export const EmojiScrollBlock = styled.div`
  position: relative;
  width: 280px;
  left: 5px;
  top: 5px;
  height: 244px;
  margin-bottom: 10px;
  overflow-x: hidden;
  overflow-y: auto;

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
