import React, {Component} from 'react';
import GroupsList from '../containers/GroupsList.container';
import {reduxForm, FieldArray} from 'redux-form';
import ReactTooltip from 'react-tooltip';

class Form extends Component {

  constructor(props) {
    super(props);
    this.handleOnAddCard = this.handleOnAddCard.bind(this);
  }

  static get propTypes() {
    return {
      addCard: React.PropTypes.func,
      groups: React.PropTypes.array
    };
  }

  handleOnAddCard() {
    this.props.addCard();
  }

  handleSubmit(value) {
    console.log(value);
  }

  render() {
    return (<div className="row">
      <div className="column">
        <form onSubmit={this.handleSubmit}>
          <div className="column">
            <FieldArray name="groups" component={GroupsList}/>
            <button type="submit">Save</button>
            <ReactTooltip html/>
          </div>
        </form>
      </div>
    </div>);
  }
}

export default reduxForm({
  form: 'GroupsList'
})(Form);
