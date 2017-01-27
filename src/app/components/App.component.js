import React, {Component} from 'react';
import Form from './Form.component';

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
      getFormData: React.PropTypes.func
    };
  }

  handleSubmit(val) {
    const {sendForm} = this.props;
    console.log(val, sendForm);
    sendForm(val);
  }

  render() {
    return <Form onSubmit={this.handleSubmit}/>;
  }
}

export default App;
