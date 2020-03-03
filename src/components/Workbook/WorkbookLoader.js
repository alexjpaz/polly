import React, { useState, useContext } from 'react';

import { AppContext } from '../../AppContext';

export const WorkbookFileHandler = () => {

  const ctx = useContext(AppContext);
  console.log(ctx);

  const onChange = (e) => {
    const f = e.target.files[0];

    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target.result;
      const json = JSON.parse(text);

      ctx.setWorkbookData(json);
    };

    reader.readAsText(f);
  };

  return (
    <input
      type='file'
      accept="application/json"
      onChange={onChange}/>
  );
};

export const WorkbookLoader = () => {
  return (
    <React.Fragment>
      <WorkbookFileHandler setWorkbookData={(data) => {
        console.log(data);
      }}/>
    </React.Fragment>
  );
};

export default WorkbookLoader;
