import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { format, formatDistance, isBefore } from 'date-fns';

const App = () => {

    const today = new Date();

   console.log(today);

    const onDateChanged = (date) => {

        const distance = formatDistance(date,today)
        const formatteDate = format(date,'d/m/y')
        console.log(formatteDate);

        const isB = isBefore(Date, today);
        console.log('isB')
    };
    const isDateInvalid = (date) => {
        return false;
     };


    
    return (

        <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    orientation="landscape"
                    openTo="day"
                    value={today}
                   shouldDisableDate={isDateInvalid}
                    onChange={onDateChanged}

                />
            </LocalizationProvider>
        </div>


    );
};

export default App;