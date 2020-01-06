import React from 'react';
export const defaultValue = {
  state: null,
  audioUrl: null,
  recognition: null,
  setRecordingState: () => {},
  record: () => { console.log("Not implemented!"); },
};

export const ReciteContext = React.createContext(defaultValue);

export class DefaultReciteContextProvider extends React.Component {
  constructor(props) {
    super(props);

    let mediaRecorder;

    const setRecordingState = (recordingState) => {;
      this.setState({
        ...this.state,
        state: recordingState,
      });
    };

    let setAudioUrl = (audioUrl) => {
      this.setState({
        ...this.state,
        audioUrl,
      });
    };

    let setRecognition = (recognition) => {
      this.setState((state) => ({
        ...this.state,
        recognition
      }));
    };

    const record = ({ targetLanguageCode }) => {
      setRecordingState("listening");


      if(this.state.state !== "stopped") {
        let { recognition } = this.state;

        if(recognition) {
          recognition.abort();
        }

        setRecordingState("stopped");
        setRecognition(null);

        if(mediaRecorder) {
          mediaRecorder.stop();
        }

        return;
      }

      if(navigator.mediaDevices) {
        let chunks = [];
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then(function(stream) {

            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.start();

            mediaRecorder.onstart = function(e) {
            };

            mediaRecorder.onstop = function(e) {
              setRecordingState("stopped");

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
      recognition.lang = targetLanguageCode;

      recognition.addEventListener('audiostart', () => {
        setRecordingState("listening");
      });

      recognition.addEventListener('soundstart', (e) => {
        setRecordingState("recording");
      });

      recognition.addEventListener('soundend', (e) => {
        recognition.stop();

        if(mediaRecorder) {
          mediaRecorder.stop();
        }


        setRecognition(null);
      });

      document.addEventListener("visibilitychange", () => {
        if(document.hidden) {
          recognition.abort();

          if(mediaRecorder) {
            mediaRecorder.stop();
          }
        }
      });

      recognition.start();

      setRecordingState("listening");

      setRecognition(recognition);

    };

    this.state = {
      ...defaultValue,
      state: "stopped",
      record,
    };
  }

  render() {
    return (
      <ReciteContext.Provider value={this.state}>
          { this.props.children }
      </ReciteContext.Provider>
    );
  }
}

export default ReciteContext;
