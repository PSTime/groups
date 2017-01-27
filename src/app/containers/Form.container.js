import {connect} from 'react-redux';
import Form from '../components/Form.component';

const mapStateToProps = state => {
  return {
    initialValues: state.groupsReducer.initialValues
  };
};

const mapDispatchToProps = () => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
