import styled from 'styled-components'

interface EmojiSmileButtonProps {
  menuOpened: boolean
}

interface EmojiMenuProps {
  menuOpened: boolean
}

interface MenuNavItemProps {
  page: boolean
}

export const EmojiBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  z-index: 2;
`

export const EmojiSmileButton = styled.div<EmojiSmileButtonProps>`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  path {
    fill: ${(props) => (props.menuOpened ? '#99A2AD' : '#C5D0DB')};
    transition: all 0.1s;
  }
  :hover {
    path {
      fill: #99a2ad;
    }
    cursor: pointer;
  }
`

export const EmojiMenu = styled.div<EmojiMenuProps>`
  width: 290px;
  height: 290px;
  border-radius: 4px;
  background-color: #ffffff;
  position: absolute;
  right: 0;
  bottom: 50px;
  visibility: ${(props) => (props.menuOpened ? 'visible' : 'hidden')};

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
export const MenuNav = styled.div`
  height: 36px;
  width: 100%;
  background-color: #ebeef2;
  border-radius: 0 0 4px 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const MenuNavItem = styled.div<MenuNavItemProps>`
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.page ? '#FFFFFF' : '#ebeef2')};
  transition: all 0.1s;
  :nth-child(1) {
    border-radius: 0 0 0 4px;
  }
  path {
    fill: #99a2ad;
  }
  :hover {
    cursor: ${(props) => (props.page ? 'default' : 'pointer')};
    background-color: ${(props) => (props.page ? '#FFFFFF' : '#DAE2EA')};
  }
`
