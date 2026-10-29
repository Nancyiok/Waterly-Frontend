import dayjs from 'dayjs';

export const getCurrentWeekDay = () =>{
    return `${dayjs().format('dddd, D MMMM')}`;
}