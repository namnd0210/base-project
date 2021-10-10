import { Button } from 'antd';
import React, { useState } from 'react';
import Mentions from './Mentions';

// {
//   "message": "[Walter White]{__@id__} oke desu [Jesse Pinkman]{__@id__} [Saul Goodman]{__@id__} ",
//   "mentions": [
//       {
//           "id": "Walter White",
//           "display": "Walter White",
//           "childIndex": 0,
//           "index": 0,
//           "plainTextIndex": 0
//       },
//       {
//           "id": "Jesse Pinkman",
//           "display": "Jesse Pinkman",
//           "childIndex": 0,
//           "index": 33,
//           "plainTextIndex": 22
//       },
//       {
//           "id": "Saul Goodman",
//           "display": "Saul Goodman",
//           "childIndex": 0,
//           "index": 58,
//           "plainTextIndex": 36
//       }
//   ]
// }

const ChatPage = () => {
  const [message, setMessage] = useState('');
  const [mentions, setMentions] = useState([]);

  const onChange = (event, newValue, newPlainTextValue, mentions) => {
    setMentions(mentions);
    setMessage(newValue);
  };

  const onSubmit = () => {
    //filter
    console.log({ message, mentions });
  };

  return (
    <div>
      <Mentions message={message} onChange={onChange} />

      <Button onClick={onSubmit}>Send</Button>
    </div>
  );
};

export default ChatPage;
