import React from 'react';
// import AboutComponent from '@components/about';
import AboutComponent from '@components/about';

type Props = {};

type States = {};

class AboutPage extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }


  render(): JSX.Element {
    return (
      <AboutComponent />
    )
  }
}

export default AboutPage;
