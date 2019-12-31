import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import UtteranceText from './UtteranceText';
import RepeatSlowerButton from './RepeatSlowerButton';


function speakPhrase(phrase, extraArgs) {
  let lang = phrase.targetLanguageCode;
  let text = phrase.target;

  var msg = new SpeechSynthesisUtterance(text);
  var voices = speechSynthesis.getVoices();

  let voice = voices
    .find(v => v.lang === lang);

  msg.voice = voice;
  msg.voiceURI = 'native';
  msg.volume = 1;
  msg.rate = 0.75;
  msg.pitch = 1;
  msg.text = text;
  msg.lang = phrase.targetLanguageCode;

  Object.assign(msg, extraArgs);

  speechSynthesis.speak(msg);

  return msg;
}

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

export default function PhraseCard(props) {
  const [ utterance, setUtterance ] = React.useState(null);

  const classes = useStyles();

  const repeat = (args) => (e) => {
    e.preventDefault();
    e.stopPropagation();

    let ut = speakPhrase(props.phrase, args);

    setUtterance(ut);
  };

  const repeatSlow = repeat({ rate: 0.5 });

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.phrase.source}
       </Typography>
        <Typography variant="h4" component="h2">
          <UtteranceText
            defaultText={props.phrase.target}
            utterance={utterance}
          />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={repeat()}>
          <PlayCircleOutlineIcon />
        </Button>
        <RepeatSlowerButton onClick={repeatSlow} size='small'>
        </RepeatSlowerButton>
      </CardActions>
    </Card>
  );
}
