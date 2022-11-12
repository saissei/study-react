import { Box, AppBar, Typography, Toolbar, Paper, TextField, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import './App.css';

function App() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [company, setCompany] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const setNameText = (val) => {
    setName(val);
  };

  const setCompanyText = (val) => {
    setCompany(val);
  };

  return (
    <>
      <Box display="flex">
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              sample application
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={{ p: 4 }}>
            <TextForm title="お名前" val={name} setVal={setNameText}></TextForm>
            <TextForm title="会社名" val={company} setVal={setCompanyText} />
            <Button variant="contained" onClick={handleClickOpen}>
              確認
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <ConfirmDialog open={open} handleClose={handleClose} name={name} company={company} />
    </>
  );
}

const TextForm = ({ title, val, setVal }) => {
  return (
    <Grid container direction="column" dispplay="flex" spacing={2}>
      <Grid item xs={12}>
        <TextField id="outlined-basic" value={val} onChange={(e) => setVal(e.target.value)} label={title} variant="outlined" fullWidth />
      </Grid>
    </Grid>
  );
};

const ConfirmDialog = ({ open, handleClose, name, company }) => {
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          おなまえ：　{name}, かいしゃ：　{company}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>書き直す</Button>
        <Button onClick={handleClose} autoFocus>
          送信
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default App;
