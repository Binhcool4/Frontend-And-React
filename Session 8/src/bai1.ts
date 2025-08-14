enum weekDays {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}
for (let day in weekDays) {
    console.log(weekDays[day as keyof typeof weekDays]);
}