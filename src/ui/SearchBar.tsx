import { createTheme, ThemeProvider } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { COLORS } from '../constants/colors';

interface StateProps {
    text: string
}
interface SearchBarProps {
    onChange: (newValue: string) => void,
    text? : string
}

const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: COLORS.pb_white,
            margin: 0,
            borderRadius: 6,
            "& .MuiOutlinedInput-notchedOutline": {
              border: `3px solid rgba(255, 255, 255, 0.5)`,
            },
            "&:hover": {
              "& .MuiOutlinedInput-notchedOutline": {
                border: `3px solid rgba(255, 255, 255, 0.5)`,
              },
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                border: `3px solid ${COLORS.line_grey}`
              },
            }
          },
        }
      }
    }
});

function SearchBar({ onChange, text }: SearchBarProps) {
    return (
        <div className='w-full h-[3.75rem]'>
            <FormControl variant="outlined" fullWidth>
                <ThemeProvider theme={theme}>
                    <OutlinedInput
                        id="outlined"
                        onChange={(event) => {onChange(event.target.value)}}
                        value={text}
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        placeholder={'Keyword'}
                    />
                </ThemeProvider>
            </FormControl>
        </div>
    )
}

export default SearchBar;