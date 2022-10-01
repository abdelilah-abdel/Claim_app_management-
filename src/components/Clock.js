import React, { Component } from 'react';
import { Box, Clock, Stack, Text } from 'grommet';
import SandboxComponent from './SandboxComponent';



export default () => (

        <Box >
                  <Box round='large' background='dark-4' pad='small'>
                    <Clock type='digital' size='large' run='forward' time='PT20H34M48S' />

            </Box>


        </Box>

);
