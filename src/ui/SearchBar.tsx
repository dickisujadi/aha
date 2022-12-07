import { createTheme, ThemeProvider } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useEffect, useState } from 'react';

interface StateProps {
    text: string
}
interface SearchBarProps {
    onChange: (newValue: string) => void,
    text? : string
}

const theme = createTheme({
    components: {
      // Inputs
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
                border: `3px solid rgba(255, 255, 255, 0.5)`,
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                border: `3px solid #FF9B33`
              },
            }
          },
        }
      }
    }
});

function SearchBar({ onChange, text }: SearchBarProps) {
    // const [text, setText] = useState<StateProps>({
    //     text: ''
    // })
    
    // const changeHandler = (prop: keyof StateProps) => (
    //     event: React.ChangeEvent<HTMLInputElement>
    //   ) => {
    //     setText({...text, [prop]: event.target.value});
    // };

    return (
        <div className='w-full h-full'>
            <FormControl variant="outlined" fullWidth>
                <ThemeProvider theme={theme}>
                    <OutlinedInput
                        id="outlined"
                        onChange={(event) => {onChange(event.target.value)}}
                        value={text}
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        style={{
                            color: '#FFFFFF',
                            margin: 0,
                            borderRadius: 6
                        }}
                        placeholder={'Keyword'}
                    />
                </ThemeProvider>
            </FormControl>
        </div>
    )
}

export default SearchBar;