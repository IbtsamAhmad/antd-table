import React from 'react';
import { DatePicker } from 'antd';

const applicationDateSearch = ({onChange, label}) => (
  <div>
      <h2>{label}</h2>
    <DatePicker onChange={onChange}  
       style={{
        width: 200,
      }}/>
  </div>
);
export default applicationDateSearch;