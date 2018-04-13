import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import Button from '../Button';
import Modal from './Modal';

const stories = storiesOf('5. Modal', module);

class ModalStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleOpen = () => this.setState({ showModal: !this.state.showModal });

  render() {
    return (
      <Heading atom title="Modal">
        <TabbedView>
          <Tab title="Usage">
            <Button skin="primary" onClick={this.handleOpen}>
              {this.state.showModal ? 'Close' : 'Open'} Modal
            </Button>

            <Modal
              title="Example Title"
              opened={this.state.showModal}
              closeModal={this.handleOpen}
            >
              Example Message
            </Modal>
          </Tab>

          <Tab title="API">
            <AutoPropsApi component={Modal} />
          </Tab>
        </TabbedView>
      </Heading>
    );
  }
}

stories
  .add('Modal', () => (
    <ModalStory />
  ));