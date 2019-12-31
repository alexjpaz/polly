import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import ReciteButton from './ReciteButton';

import ReciteContext from '../../ReciteContext';

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

  const reciteContext = React.useContext(ReciteContext);

  const { audioUrl } = reciteContext;

  const { recognition } = reciteContext;

  const { state: recordingState } = reciteContext;

  const playAudioUrl = (e) => {
    e.preventDefault();
    e.stopPropagation();
    var audio = new Audio();
    audio.src = audioUrl;
    audio.play();
  };

  const record = () => reciteContext.record(props.phrase);

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
