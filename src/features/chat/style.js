export const defaultMentionStyle = {
  backgroundColor: '#c5daf4',
  opacity: 0.4,
  padding: '3px 0',
};

export const defaultStyle = {
  control: {
    backgroundColor: '#fff',
    fontSize: 14,
    fontWeight: 'normal',
    color: '#050505',
  },
  highlighter: {
    overflow: 'hidden',
  },
  input: {
    margin: 0,
    overflow: 'hidden',
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
    top: '0',
    list: {
      backgroundColor: 'white',
      border: '1px solid rgba(0,0,0,0.15)',
      fontSize: 14,
    },
    item: {
      padding: '5px 15px',
      borderBottom: '1px solid rgba(0,0,0,0.15)',
      '&focused': {
        backgroundColor: '#c5daf4',
      },
    },
  },
};
