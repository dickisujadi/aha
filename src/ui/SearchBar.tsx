import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

function SearchBar() {
    return (
        <div className='w-full h-full'>
            <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                    id="outlined-adornment-weight"
                    value={''}
                    // onChange={handleChange('weight')}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                    style={{
                        border: '3px solid rgba(255, 255, 255, 0.5)',
                        color: '#FFFFFF',
                        margin: 0,
                        borderRadius: 6
                    }}
                    placeholder={'Keyword'}
                />
            </FormControl>
        </div>
    )
}

export default SearchBar;