import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import ReciteButton from './ReciteButton';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function RecognitionText({ defaultText, recognition }) {
  const [text, setText] = React.useState("...");

  React.useEffect(() => {
    if(!recognition) {
      return () => {};
    }

    recognition.addEventListener('audiostart', (e) => {
      setText("...");
    });

    recognition.addEventListener('nomatch', (e) => {
      setText("< No Match >");
    });

    recognition.onresult = (e) => {
      if(!e.results) return;

      let { transcript, } = e.results[0][0];

      setText(transcript)
    }

    return () => {
      recognition.onresult = function() {};
    };
  });

  return (text);
}

export default function RecitePhraseCard(props) {
  const classes = useStyles();

  const [ recognition, setRecognition ] = React.useState(null);
  const [ recordingState, setRecordingState ] = React.useState("stopped");
  const [ audioUrl, setAudioUrl ] = React.useState(null);

  const playAudioUrl = (e) => {
    e.preventDefault();
    e.stopPropagation();
    var audio = new Audio();
    audio.src = audioUrl;
    audio.play();
  };

  let mediaRecorder = null;

  // FIXME: goofy javascript errors :/
  const isRecording = () => recordingState !== "stopped";

  const stopRecording = () => {
    if(recognition) {
      recognition.abort();
    }

    setRecordingState("stopped");
    setRecognition(null);

    if(mediaRecorder) {
      mediaRecorder.stop();
    }

    return;
  };

  const record = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if(isRecording()) {
      return stopRecording();
    }

    setRecordingState("listening");

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
    recognition.lang = props.phrase.targetLanguageCode; // TODO

    recognition.onresult = (e) => {
      console.log('soundresult', e);
    }

    recognition.onsoundstart = (e) => {
      setRecordingState("recording");
    };

    recognition.onsoundend = (e) => {
      recognition.stop();

      if(mediaRecorder) {
        mediaRecorder.stop();
      }


      setRecognition(null);
    };

    recognition.start();

    setRecognition(recognition);
  };


  const repeat = (e) => playAudioUrl(e);

  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            Recite the phrase
       </Typography>
        <Typography variant="h4" component="h2" onClick={repeat}>
            <RecognitionText defaultText={props.phrase.target} recognition={recognition} />
        </Typography>
      </CardContent>
      <CardActions>
        <ReciteButton onClick={record} state={ recordingState } />

        <Button size='small' disabled={ !audioUrl } onClick={repeat}>
          <PlayCircleOutlineIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
