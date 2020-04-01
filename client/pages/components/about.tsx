import React from 'react';

type Props = {};

type States = {};

class AboutComponent extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <p>Made in the name of chaos and cockie by Xilel!</p>
    )
  }
}

export default AboutComponent;
