import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  barColorPrimary: {
    backgroundColor: '#0756FB',
  },
  colorPrimary: {
    backgroundColor: '#eef9f1',
  },
});

const ProgressBar = () => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.barColorPrimary}>
      <LinearProgress
        classes={classes}
        color='primary'
        variant='determinate'
        value={progress}
      />
    </div>
  );
};

export default ProgressBar;
