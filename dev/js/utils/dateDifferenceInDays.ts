let moment = require('moment');

export default (endTimestamp: number, startTimestamp: number) => {
    const start = moment.unix(startTimestamp);
    const end = moment.unix(endTimestamp);
    var duration = moment.duration(end.diff(start));
    return duration.asDays();
};

