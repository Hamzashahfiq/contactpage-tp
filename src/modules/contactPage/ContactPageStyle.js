import { styled } from '@mui/material/styles';

export const CP = {
        MainDiv: styled('div')(() => ({
            height:'100vh',
        })),
        LogoDiv: styled('div')(() => ({
            height:'220px',
            background: 'linear-gradient(to right, #4A00E0, #8E2DE2)',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            padding:'8px',
        })),
        logoImg: styled('img')(() => ({
            maxWidth:'100%',
            maxHeight:'200px'
        })),
}
