import React from 'react';

const TimeAgo = ({time}) => {
  const milliseconds = Date.now() - (new Date(time));
  let renderAgo;
  let renderNumber;
  if (milliseconds < (1000*60)) {
    renderNumber = Math.floor(milliseconds / (1000));
    renderAgo =  " second";
  } else if (milliseconds < (1000*60*60)) {
    renderNumber = Math.floor(milliseconds / (1000*60))
    renderAgo = " minute";
  } else if (milliseconds < (1000*60*60*24)) {
    renderNumber = Math.floor(milliseconds / (1000*60*60))
    renderAgo = " hour";
  } else if (milliseconds < (1000*60*60*24*365)) {
    renderNumber = Math.floor(milliseconds / (1000*60*60*24));
    renderAgo = " day";
  } else if (milliseconds >= (1000*60*60*24*365)){
    renderNumber = Math.floor(milliseconds / (1000*60*60*24));
    renderAgo = " year";
  }
  const renderPlural = renderNumber == 1 ? "" : "s";
  return (
    <>
      {renderNumber}{renderAgo}{renderPlural}{" ago"}
    </>
  );
};

export default TimeAgo;
