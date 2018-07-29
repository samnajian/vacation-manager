let moment = require('moment');

const dateDifferenceInDays = (endTimestamp: number, startTimestamp: number) => {
    const start = moment.unix(startTimestamp);
    const end = moment.unix(endTimestamp);
    var duration = moment.duration(end.diff(start));
    return duration.asDays();
};

export default dateDifferenceInDays;