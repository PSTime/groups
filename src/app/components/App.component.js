import React, {Component} from 'react';
import Form from '../containers/Form.container';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getFormData();
  }

  static get propTypes() {
    return {
      sendForm: React.PropTypes.func,
      getFormData: React.PropTypes.func,
      loading: React.PropTypes.bool
    };
  }

  handleSubmit(val) {
    const {sendForm} = this.props;
    sendForm(val);
  }

  render() {
    const {loading} = this.props;
    return (<div className={loading ? 'FormContainer FormContainer--loading' : 'FormContainer'}>
      <Form onSubmit={this.handleSubmit}/>
    </div>);
  }
}

export default App;
