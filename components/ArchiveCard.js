import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({ title, text, createdAt }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">
          {text}
        </Typography>
        <Typography sx={{ fontSize:10, marginTop: '10px' }} color="text.secondary">
          {createdAt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: 'red' }}>{'Delete'}</Button>
      </CardActions>
    </Card>
  );
}
