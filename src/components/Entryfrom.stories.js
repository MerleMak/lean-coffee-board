import Entryform from './Entryform';

export default {
  title: 'components/Entryform',
  component: Entryform,
};

const Template = args => <Entryform {...args} />;

export const Default = Template.bind({});
Default.args = {};
