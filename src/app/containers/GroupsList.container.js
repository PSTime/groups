import {connect} from 'react-redux';
import GroupsList from '../components/GroupsList.component';

const mapStateToProps = state => {
  return {
    form: state.form
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCard: action => {
      console.log(action);
      console.log(dispatch(action));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsList);
