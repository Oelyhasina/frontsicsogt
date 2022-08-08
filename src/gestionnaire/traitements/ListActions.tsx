import { TopToolbar, ExportButton, CreateButton } from 'react-admin';
import { Box } from '@mui/material';

export const ListActions = () => (
    <Box width="100%">
        <TopToolbar>
            <CreateButton />
            <ExportButton />
        </TopToolbar>
    </Box>
);