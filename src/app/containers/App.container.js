import {connect} from 'react-redux';
import App from '../components/App.component';
import {sendForm, getFormData} from '../actions/groups.action';

const mapStateToProps = state => {
  return {
    loading: state.groupsReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendForm: data => {
      dispatch(sendForm(data));
    },
    getFormData: () => {
      dispatch(getFormData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
