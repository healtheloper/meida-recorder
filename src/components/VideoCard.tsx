import { Button, Paper, Stack } from '@mui/material';

type VideoCardProps = {
  title: string;
  onPlayClick: () => void;
  onDeleteClick: () => void;
};

const VideoCard = (props: VideoCardProps) => {
  const { title, onPlayClick, onDeleteClick } = props;

  const handlePlayClick = () => {
    onPlayClick();
  };

  const handleDeleteClick = () => {
    onDeleteClick();
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
      }}
    >
      <span>{title}</span>
      <Stack direction='row' spacing={1}>
        <Button variant='outlined' onClick={handlePlayClick}>
          Play
        </Button>
        <Button variant='outlined' color='error' onClick={handleDeleteClick}>
          Delete
        </Button>
      </Stack>
    </Paper>
  );
};

export default VideoCard;
