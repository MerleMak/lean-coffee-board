import Entryform from './Entryform.js';

export default {
  title: 'components/EntryForm',
  component: Entryform,
  argTypes: {
    onSubmit: 'onSubmit',
  },
};

const Template = args => <Entryform {...args} />;

export const Default = Template.bind({});
Default.args = {};
