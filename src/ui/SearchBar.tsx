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

function SearchBar({ onChange }: SearchBarProps) {
    const [text, setText] = useState<StateProps>({
        text: ''
    })
    
    const changeHandler = (prop: keyof StateProps) => (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        setText({...text, [prop]: event.target.value});
    };

    useEffect(() => {
        console.log(text);
    }, [text])
    return (
        <div className='w-full h-full'>
            <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                    id="outlined"
                    onChange={changeHandler('text')}
                    value={text?.text}
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