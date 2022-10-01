import React from 'react'
import {Avatar, Button, Box, Nav, Stack, Text, Sidebar} from 'grommet';
import {
    Analytics,
    Chat,
    Clock,
    Configure,
    Help,
    Projects,
    Split,
    StatusInfoSmall,
} from 'grommet-icons';


function Test() {
  return (
    <div>
      <Sidebar background="brand" round="small"
                   header={
                       <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
                   }
                   footer={
                       <Button   hoverIndicator />
                   }
          >
              <Nav gap="small">
                  <Button  hoverIndicator />
                  <Button  hoverIndicator />
              </Nav>
          </Sidebar>
    </div>
  )
}

export default test;
