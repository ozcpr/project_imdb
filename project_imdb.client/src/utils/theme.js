import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3498db',
        },
        secondary: {
            main: '#ffffff', 
        },
    },
    typography: {
        fontFamily: 'Helvetica,Arial, sans-serif', 
        h1: {
            fontFamily: 'Helvetica, sans-serif', // 
        },
        
    },
    
});

export default theme;
