import { IndexPageDTO } from '@dto/indexPage';
import { NextPageContext } from 'next';
import * as React from 'react';

type States = {};

class Index extends React.Component<IndexPageDTO, States> {
  constructor(props: IndexPageDTO) {
    super(props);
  }

  static async getInitialProps(props: NextPageContext): Promise<IndexPageDTO> {
    return props.query;
  }

  render(): JSX.Element {
    const text = this.props.text ?? 'world';
    return <p>Hello, {text}!</p>;
  }
}

export default Index;
