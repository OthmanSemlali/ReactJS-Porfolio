import React from 'react';
import { withFormsy } from 'formsy-react';

class FormsyInput extends React.Component {
  changeValue = (e) => {
    this.props.setValue(e.currentTarget.value);
    // console.log(e.currentTarget.value);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.getValue() !== this.props.getValue()) {
      // handle side effect here
    }
  }

  render() {
    return (
      <div style={{'position': 'relative'}}>
        <input
          className={`${this.props.isPristine() || this.props.isValid() ? 'no-error' : 'error'}`}
          onChange={this.changeValue}
          name={`${this.props.name}`}
          type="text"
          value={this.props.getValue() || ''}
          placeholder={this.props.placeholder}
        />
        <span className="error-message">{this.props.getValue() ?  this.props.getErrorMessage() : null}</span>
      </div>
    );
  }
}

export default withFormsy(FormsyInput);