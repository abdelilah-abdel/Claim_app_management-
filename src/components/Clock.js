import React, { Component } from 'react';
import { Box, Clock, Stack, Text } from 'grommet';
import SandboxComponent from './SandboxComponent';



export default () => (
    <SandboxComponent>
        <Box gap='large'>
                  <Box round='large' background='dark-3' pad='small'>
                    <Clock type='digital' size='large' run='forward' time='PT20H34M48S' />

            </Box>


        </Box>
    </SandboxComponent>
);
