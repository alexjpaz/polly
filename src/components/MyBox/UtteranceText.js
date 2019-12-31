import React from 'react';

function UtteranceText({ defaultText, utterance }) {
  const [text, setText] = React.useState(defaultText);

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

      utterance.addEventListener('end', () => {
        setText(defaultText);
      });
    } else {
      setText(defaultText);
    }

    return () => {
      if(utterance) {
        utterance.onboundary = function() {};
      }
    };
  }, [utterance, defaultText]);

  return (<React.Fragment>{text}</React.Fragment>);
}

export default UtteranceText;
