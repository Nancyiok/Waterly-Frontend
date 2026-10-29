import {differenceInYears} from "date-fns";

export const calculateAge = (
    dateOfBirth: Date,
) => {
    return differenceInYears(new Date(), dateOfBirth)
};
