import React from 'react';

class CheckBox extends React.Component {
  render() {
    const { title, type, name, consent, text, checked, onChange } = this.props;
    return (
      <>
        <label className="item">
          {title}
          <span className="required">*</span>
        </label>
        <div className="item">
          <input
            type={type}
            name={name}
            checked={checked}
            onChange={onChange}
          />
          <span>{consent}</span>
          <p>{text}</p>
        </div>
      </>
    );
  }
}

export default CheckBox;
