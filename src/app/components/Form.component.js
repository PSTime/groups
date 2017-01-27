import React, {Component} from 'react';
import GroupsList from './simple/GroupsList.component';
import {reduxForm, FieldArray} from 'redux-form';

class Form extends Component {

  constructor(props) {
    super(props);
    this.handleOnAddCard = this.handleOnAddCard.bind(this);
  }

  static get propTypes() {
    return {
      addCard: React.PropTypes.func,
      groups: React.PropTypes.array,
      handleSubmit: React.PropTypes.func
    };
  }

  handleOnAddCard() {
    this.props.addCard();
  }

  render() {
    return (<div className="row">
      <div className="column">
        <form onSubmit={this.props.handleSubmit}>
          <div className="column">
            <FieldArray name="groups" component={GroupsList}/>
          </div>
        </form>
      </div>
    </div>);
  }
}

export default reduxForm({
  form: 'GroupsList'
})(Form);
