// Import React
import React from 'react';

import { withProps } from 'recompose';

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  S,
  Slide,
  Spectacle,
  Text
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  perf: require('../assets/perf-elm.png')
};

preloader(images);

const theme = createTheme({
});

const SmallListItem = withProps({
  textSize: '2rem'
})(ListItem);


export default () =>
  <Spectacle theme={theme}>
    <Deck progress="pacman" transition={['slide']}>
      <Slide>
        <Heading size={1}>Elm!</Heading>
        <Appear>
          <Text italic margin="2rem">og litt sjakk</Text>
        </Appear>
      </Slide>

      <Slide>
        <Heading size={1} textColor="firebrick" italic>Hva er Elm?</Heading>
      </Slide>

      <Slide align="flex-start flex-start">
        <Heading size={2}>Et programmeringsspråk</Heading>
        <List>
          <ListItem>ML-style (Haskell, oCaml)</ListItem>
          <ListItem>Funksjonelt</ListItem>
          <ListItem>Strengt typet</ListItem>
          <ListItem>Immuterbart</ListItem>
          <ListItem>Interoprerer med JavaScript</ListItem>
          <Appear><ListItem>Raskt!</ListItem></Appear>
        </List>
      </Slide>

      <Slide bgColor="firebrick">
        <Image src={images.perf} />
      </Slide>

      <Slide transition={['fade']}>
        <Heading size={1} textColor="darkblue">
          React + Redux + Flow + Immutable.js
        </Heading>
      </Slide>

      <Slide transition={['fade']} bgColor="black">
        <Appear><Heading size={1} textColor="gold">
          One feature to rule them all
        </Heading></Appear>
      </Slide>

      <Slide transition={['fade']}>
        <Heading size={2} italic>Kompilatoren</Heading>
        <Appear>
          <Text margin="4rem">aka svart magi</Text>
        </Appear>
      </Slide>

      <Slide>
        <Heading size={2}>En arkitektur</Heading>
        <List>
          <ListItem>Model</ListItem>
          <ListItem>View</ListItem>
          <ListItem>Update</ListItem>
        </List>
      </Slide>

      <Slide>
        <Heading size={2}>Fine lenker</Heading>
        <List>
          <SmallListItem><a href="http://elm-lang.org/try">http://elm-lang.org/try</a></SmallListItem>
          <SmallListItem><a href="http://www.elmbark.com/2016/03/16/mainstream-elm-user-focused-design">http://www.elmbark.com/2016/03/16/mainstream-elm-user-focused-design</a></SmallListItem>
          <SmallListItem><a href="https://guide.elm-lang.org/architecture/">https://guide.elm-lang.org/architecture/</a></SmallListItem>
        </List>
      </Slide>


    </Deck>
  </Spectacle>;
