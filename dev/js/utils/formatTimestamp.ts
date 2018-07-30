import moment from 'moment';

const formatTimestamp = (timestamp: number): string => moment.unix(timestamp).format("DD.MM.YYYY");
export default formatTimestamp;