import moment from 'moment';

export default (timestamp: number): string => moment.unix(timestamp).format("DD.MM.YYYY");
