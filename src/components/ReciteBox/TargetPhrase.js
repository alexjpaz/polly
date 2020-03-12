import React from 'react';

import './TargetPhrase.css';

import UtteranceText from './UtteranceText';

import CenteredContainer from '../../elements/CenteredContainer';

import RepeatSlowerButton from './RepeatSlowerButton';
import ReciteButton from './ReciteButton';

function RecognitionText({ recognition }) {
  const [text, setText] = React.useState(null);

  React.useEffect(() => {
    if(!recognition) {
      return () => {};
    }

    recognition.onresult = (e) => {
      if(!e.results) return;

      let { transcript, } = e.results[0][0];

      setText(<div><h1>{transcript}</h1></div>)
    }

    return () => {
      recognition.onresult = function() {};
    };
  });

  return (text);
}

function TargetPhrase({ phrase }) {
  const [ utterance, setUtterance ] = React.useState(null);
  const [ recognition, setRecognition ] = React.useState(null);
  const [ audioUrl, setAudioUrl ] = React.useState(null);

  const playAudioUrl = (e) => {
    e.preventDefault();
    e.stopPropagation();
    var audio = new Audio();
    audio.src = audioUrl;
    audio.play();
  };

  const record = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let mediaRecorder = null;

    if(navigator.mediaDevices) {
      let chunks = [];
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {

          mediaRecorder = new MediaRecorder(stream);

          mediaRecorder.start();

          mediaRecorder.onstop = function(e) {
            var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
            chunks = [];

            var audioURL = URL.createObjectURL(blob);

            var audio = new Audio();
            audio.src = audioURL;
            audio.play();

            setAudioUrl(audioURL);
          };

          mediaRecorder.ondataavailable = function(e) {
            chunks.push(e.data);
          }
        });
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = phrase.targetLanguageCode; // TODO

    recognition.onresult = (e) => {
      console.log('soundresult', e);
    }

    recognition.onsoundstart = (e) => {
    };

    recognition.onsoundend = (e) => {
      recognition.stop();

      if(mediaRecorder) {
        mediaRecorder.stop();
      }
    };

    recognition.start();

    setRecognition(recognition);
  };

  return (
    <div className='TargetPhrase'>
      <CenteredContainer>
        <div onClick={playAudioUrl}>
          <RecognitionText recognition={recognition} />
        </div>
      </CenteredContainer>

      <CenteredContainer>
        <ReciteButton onClick={record} />
      </CenteredContainer>
    </div>
  );
}

export default TargetPhrase;
