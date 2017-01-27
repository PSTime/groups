import {connect} from 'react-redux';
import OneGroup from '../components/OneGroup.component';
import {removeCard} from '../actions/groups.action';

const mapStateToProps = () => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeCard: index => {
      dispatch(removeCard(index));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OneGroup);
