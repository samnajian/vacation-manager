let moment = require('moment');

if ("default" in moment) {
    moment = moment["default"];
}

const dateDifferenceInDays = (endTimestamp: number, startTimestamp: number) => {
    const start = moment(new Date(startTimestamp * 1000));
    const end = moment(new Date(endTimestamp * 1000));
    var duration = moment.duration(end.diff(start));
    return duration.asDays();
};

export default dateDifferenceInDays;