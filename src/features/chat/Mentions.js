import React, { useState } from 'react';
import { MentionsInput, Mention } from 'react-mentions';
import { defaultMentionStyle, defaultStyle } from './style';

const users = [
  {
    id: 'walter',
    display: 'Walter White',
  },
  {
    id: 'jesse',
    display: 'Jesse Pinkman',
  },
  {
    id: 'gus',
    display: 'Gustavo "Gus" Fring',
  },
  {
    id: 'saul',
    display: 'Saul Goodman',
  },
  {
    id: 'hank',
    display: 'Hank Schrader',
  },
  {
    id: 'skyler',
    display: 'Skyler White',
  },
  {
    id: 'mike',
    display: 'Mike Ehrmantraut',
  },
];

const Mentions = () => {
  const [value, setValue] = useState('');

  const onChange = (event, newValue, newPlainTextValue, mentions) => {
    console.log(event, newValue, newPlainTextValue, mentions);

    setValue(newValue);
  };

  return (
    <MentionsInput value={value} onChange={onChange} style={defaultStyle}>
      <Mention
        markup="[__display__]{__@id__}"
        trigger="@"
        data={users}
        style={defaultMentionStyle}
        // renderSuggestion={this.renderUserSuggestion}
      />
    </MentionsInput>
  );
};

export default Mentions;
