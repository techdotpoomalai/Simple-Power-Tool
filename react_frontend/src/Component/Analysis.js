import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';

function Analysis() {
  const [checkedItems, setCheckedItems] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <DropdownButton id="dropdown-basic-button" title="Analysis">
      <Dropdown.Item as="div">
        <Form.Check
          type="checkbox"
          label="Scatter"
          name="option1"
          checked={checkedItems.option1}
          onChange={handleCheckboxChange}
        />
      </Dropdown.Item>
      <Dropdown.Item as="div">
        <Form.Check
          type="checkbox"
          label="Line"
          name="option2"
          checked={checkedItems.option2}
          onChange={handleCheckboxChange}
        />
      </Dropdown.Item>
      <Dropdown.Item as="div">
        <Form.Check
          type="checkbox"
          label="Bar"
          name="option3"
          checked={checkedItems.option3}
          onChange={handleCheckboxChange}
        />
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default Analysis;
