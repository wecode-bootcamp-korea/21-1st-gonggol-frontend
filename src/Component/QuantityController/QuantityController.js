import React from 'react';
import './QuantityController.scss';

class QuantityController extends React.Component {
  minusBefore = () => {
    if (this.props.quantityNumber === 0) {
      return;
    }
    this.props.minus();
  };

  onChangeNumber = e => {
    const input = isNaN(e.target.value) ? 1 : parseInt(e.target.value);
    if (input < 1) {
      alert(`최소 주문수량은 1개 입니다.`);
    }
    this.props.insert(input);
  };

  render() {
    const { quantityNumber, plus } = this.props;

    return (
      <div className="quantityController">
        <i className="fas fa-minus" onClick={this.minusBefore}></i>
        <input
          type="text"
          className="number"
          value={quantityNumber}
          onChange={this.onChangeNumber}
        />
        <i className="fas fa-plus" onClick={plus}></i>
      </div>
    );
  }
}

export default QuantityController;
