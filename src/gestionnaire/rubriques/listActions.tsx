import { TopToolbar, ExportButton } from 'react-admin';
import { Box } from '@mui/material';

export const ListActions = () => (
    <Box width="100%">
        <TopToolbar>
            <ExportButton />
        </TopToolbar>
    </Box>
);