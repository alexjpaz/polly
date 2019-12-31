# [🦜 polly](https://alexjpaz.github.io/polly/)

> Polyglot language learning tools 

[![Build Status](https://travis-ci.org/alexjpaz/polly.svg?branch=master)](https://travis-ci.org/alexjpaz/polly)
[![Demo](https://img.shields.io/badge/%F0%9F%A6%9C-demo-green?&style=flat)](https://alexjpaz.github.io/polly)


## Why

When learning a language apps like [Duolingo](https://www.duolingo.com/) or [Memrise](https://www.memrise.com/) are valuable tools to building vocubulrary and grammar. **Polly** takes one aspect of these tools, *reciting a phrase*, and allows a user to practice a phrase as many times as they want until they feel comfortable using it with a native speaker for further training.

## Where

You can see a [demo](https://alexjpaz.github.io/polly) of the application with a deck of the ["13 Sentences You Need To Know"](https://www.realfastspanish.com/grammar/13-sentences-need-know-guide-spanish-grammar-hacking) (inspired by [Tim Ferris](https://tim.blog/2007/11/07/how-to-learn-but-not-master-any-language-in-1-hour-plus-a-favor/)). It is also a [progressive web application](https://developers.google.com/web/progressive-web-apps) so you can add this to your home screen to get a native app feel.

## How

The application leverages several [Web APIS](https://developer.mozilla.org/en-US/docs/Web/API):

* [SpeechSythesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) for text-to-speech functionality in a target language.
* [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) for speech recognition to a target language.
* [MediaRecorder](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder) for recording audio while speech recognition is taking place and audio playback.

### Contributing

##### [Developers Guide](../../wiki/Developers-Guide)
