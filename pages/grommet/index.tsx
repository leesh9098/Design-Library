import { Box, Grommet, Button, Heading, Collapsible, ResponsiveContext, Layer } from "grommet"
import { Notification, FormClose } from "grommet-icons"
import React, { useState } from "react"

const theme = {
    global: {
        colors: {
            brand: '#228BE6'
        },
        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px'
        }
    }
}

const AppBar = (props: any) => {
    return (
        <Box
            tag='header'
            direction='row'
            align="center"
            justify="center"
            background='brand'
            pad={{ left: 'medium', right: 'small', vertical: 'small' }}
            elevation='medium'
            style={{ zIndex: '1' }}
            {...props}
        />
    )
}

export default function GrommetHome() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <Grommet theme={theme} full themeMode="dark">
            <ResponsiveContext.Consumer>
                {size => (
                    <Box fill>
                        <AppBar>
                            <Heading level='3' margin='none'>This page is designed by grommet library</Heading>
                            <Button icon={<Notification />} onClick={() => setShowSidebar(!showSidebar)} />
                        </AppBar>
                        <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                            <Box flex align="center" justify="center">
                                app body
                            </Box>
                            {(!showSidebar || size !== 'small') ? (
                                <Collapsible direction="horizontal" open={showSidebar}>
                                    <Box
                                        flex
                                        width="medium"
                                        background="light-2"
                                        elevation="small"
                                        align="center"
                                        justify="center"
                                    >
                                        sidebar
                                    </Box>
                                </Collapsible>
                            ): (
                                <Layer>
                                    <Box
                                        background="light-2"
                                        tag="header"
                                        justify="end"
                                        align="center"
                                        direction="row"
                                    >
                                        <Button
                                            icon={<FormClose />}
                                            onClick={() => setShowSidebar(false)}
                                        />
                                    </Box>
                                    <Box
                                        fill
                                        background="light-2"
                                        align="center"
                                        justify="center"
                                    >
                                        sidebar
                                    </Box>
                                </Layer>
                            )}
                        </Box>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
    )
}