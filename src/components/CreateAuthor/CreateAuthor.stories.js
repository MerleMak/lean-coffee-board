import CreateAuthor from './CreateAuthor';

export default {
  title: 'components/Entry',
  component: CreateAuthor,
  argTypes: {
    onSubmit: 'onSubmit',
  },
};

const Template = args => <CreateAuthor {...args} />;

export const Default = Template.bind({});
Default.args = {};
