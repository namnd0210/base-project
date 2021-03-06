export const defaultMentionStyle = {
  //   color: '#0567A8',
};

export const defaultStyle = {
  control: {
    backgroundColor: '#fff',
    fontSize: 14,
    fontWeight: 'normal',
    color: '#0567A8',
  },
  highlighter: {
    overflow: 'hidden',
  },
  input: {
    margin: 0,
    overflow: 'auto',
    height: 30,
  },
  '&multiLine': {
    control: {
      fontFamily: 'monospace',
      border: '1px solid silver',
    },
    highlighter: {
      padding: 9,
    },
    input: {
      padding: 9,
      minHeight: 3,
      outline: 0,
      border: 0,
    },
  },
  suggestions: {
    bottom: '0',
    top: 'unset',
    list: {
      backgroundColor: 'white',
      border: '1px solid rgba(0,0,0,0.15)',
      fontSize: 14,
    },
    item: {
      padding: '5px 15px',
      borderBottom: '1px solid rgba(0,0,0,0.15)',
      '&focused': {
        backgroundColor: '#cee4e5',
      },
    },
  },
};
