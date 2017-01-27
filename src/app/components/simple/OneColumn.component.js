import React, {Component} from 'react';
import OneLine from './OneLine.component';

class OneColumn extends Component {

  constructor(props) {
    super(props);
    this.handleOnAddLine = this.handleOnAddLine.bind(this);
  }

  static get propTypes() {
    return {
      fields: React.PropTypes.object,
      label: React.PropTypes.string
    };
  }

  handleOnAddLine() {
    const {fields} = this.props;
    fields.push({});
  }

  render() {
    const {fields, label} = this.props;
    return (
      <div>
        {fields.map((group, key) => <OneLine group={group} key={key} removeGroup={fields.remove} label={label} index={key} removeLine={fields.remove}/>)}
        <button className="button" type="button" onClick={this.handleOnAddLine}>Add line</button>
      </div>
    );
  }
}

export default OneColumn;
