import React from 'react';
import { Box } from 'native-base';
import { DetailBackground } from '../../atomic/atoms/DetailBackground';
import { MainBanner } from '../../atomic/molecules';

export function Home() {
    return <Box flex="1" padding="20px" pt="-10px" position="relative">
        <DetailBackground />
        <MainBanner />
    </Box>
}