import React from 'react';

import LargeText from '../../elements/LargeText';

function UtteranceText({ defaultText, utterance }) {
  const [text, setText] = React.useState(defaultText);
  console.log(defaultText, text);

  React.useEffect(() => {
    if(utterance) {
      utterance.onboundary = function(ev) {
        let { charIndex, charLength } = ev;

        let before = utterance.text.substring(0, charIndex);

        let highlighted = utterance.text.substring(charIndex, charIndex+charLength);

        let after = utterance.text.substring(charIndex+charLength);

        setText(
          <span>
            <span>{before}</span>
            <span style={{color:"red"}}>{highlighted}</span>
            <span>{after}</span>
          </span>
        );
      }

      utterance.onend = function(ev) {
        setText(defaultText);
      }
    }
    return () => {
      if(utterance) {
        utterance.onboundary = function() {};
      }
    };
  });

  return (
    <LargeText>{text}</LargeText>
  );
}

export default UtteranceText;
