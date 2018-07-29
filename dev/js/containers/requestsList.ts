import {connect} from 'react-redux';
import Requests from '../components/Requests';

const mapStateToProps = (state) => ({
    users: state.users
});

const matchDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, matchDispatchToProps)(Requests);
