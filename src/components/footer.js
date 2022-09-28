import React from 'react';
import styled from 'styled-components';

import { Grommet as GrommetIcon } from 'grommet-icons';
import { Anchor, Box, Footer, Main, Text } from 'grommet';
import { fiveColumns as data } from './footerdata';

const StyledAnchor = styled(Anchor)`
  font-weight: 200;
`;


const logo =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Ffr%2Fthumb%2Fb%2Fb2%2FLogo_CIH.png%2F120px-Logo_CIH.png&f=1&nofb=1";

const FooterAnchor = ({ ...rest }) => (
    <StyledAnchor href="/" size="small" color="white" {...rest} />
);

const FooterContent = () =>
    data.map((item) => (
        <Box gap="medium" key={item[0]}>
            <Text weight="bold" size="small">
                {item[0]}
            </Text>
            <Box>
                {[1, 2, 3, 4].map((i) => (
                    <FooterAnchor key={item[i]}>{item[i]}</FooterAnchor>
                ))}
            </Box>
        </Box>
    ));

export const DoubleFooter = () => (
    // Uncomment <Grommet> lines when using outside of storybook
    // <Grommet theme={...}>
    <Box>

        <Footer background="dark-1" pad="large">
            <FooterContent />
        </Footer>
        <Footer
            background="dark-1"
            pad={{ horizontal: 'large', vertical: 'small' }}
        >
            <Box direction="row" gap="small">
                <img src={logo} />
                <Text alignSelf="center">cihbank.ma</Text>
            </Box>
            <Text textAlign="center" size="small">
                © CIH 2022 Copyright
            </Text>
        </Footer>
    </Box>
    // </Grommet>
);

DoubleFooter.storyName = 'Double footer';

export default {
    title: 'Layout/Footer/Double footer',
};