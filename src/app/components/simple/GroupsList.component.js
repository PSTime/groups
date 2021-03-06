import React, {Component} from 'react';
import OneGroup from './OneGroup.component';

class GroupsList extends Component {

  constructor(props) {
    super(props);
    this.handleOnAddCard = this.handleOnAddCard.bind(this);
  }

  static get propTypes() {
    return {
      addCard: React.PropTypes.func,
      fields: React.PropTypes.object
    };
  }

  handleOnAddCard() {
    const {fields} = this.props;
    fields.push({});
  }

  render() {
    const {fields} = this.props;
    return (
      <div>
        <div className="button-group">
          <button className="success button" type="button" onClick={this.handleOnAddCard}>Add card</button>
          <button type="submit" className="button">Save</button>
        </div>
        {fields.map((group, key) => <OneGroup group={group} key={key} removeGroup={fields.remove} index={key}/>)}
      </div>
    );
  }
}

export default GroupsList;
