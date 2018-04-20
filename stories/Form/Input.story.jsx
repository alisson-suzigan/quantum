import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from '../../components/Form/Form';

import Validate from '../../components/Form/validate';

storiesOf('8. Form validation', module)
  .add('Input', () => (
    <Form>
      <Form.Input.CPF
        name="valid"
        label="CPF"
        validate={[
          {
            validate: Validate.REQUIRED,
            error: 'CARALEO',
          },
          Validate.MIN,
        ]}
        min={3}
      />


      <Form.Submit
        skin="default"
      >
        ENVIA ESSA MERDA
      </Form.Submit>
    </Form>
  ));
