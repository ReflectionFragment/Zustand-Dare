import React, {FC} from 'react';
import {MenuBarStyle,A} from './Modal.styled'
import ItemHeader from './Tabs/ItemHeader';
export const MenuBar: FC = () => {
  return(
      <A>
          <MenuBarStyle>
              <ItemHeader name = 'hollow'/>
              <ItemHeader name = 'knight'/>
              <ItemHeader name = 'beautiful'/>
              <ItemHeader name = 'man'/>
          </MenuBarStyle>
      </A>
  )
};

export default MenuBar;