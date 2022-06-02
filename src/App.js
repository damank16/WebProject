import React from 'react';
import './style.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function App() {
  const [searchDialogOpen, setsearchDialogOpen] = React.useState(false);
  const [disableSearch, setDisableSearch] = React.useState(true);
  const handleSearchDialogOpen = () => setsearchDialogOpen(true);
  const searchAction = () => {
    setsearchDialogOpen(false);
    //Loading
    //toast message
  };

  const [searchFields, setSearchFields] = React.useState({
    bookName: '',
    author: '',
    subject: '',
    publication: '',
    publicationYear: '',
  });

  const [sortParameters, setSortingParameters] = React.useState({
    bookName: false,
    author: false,
    publicationYear: false,
  });

  const handleSearchFeildOnChanges = (event, param) => {
    let obj = {};
    if(param === 'publicationYear')
    event.target.value = event.target.value.replace(/\D/g, "");
    obj[param] = event.target.value;
      console.log(event.target.value);
      setSearchFields((prevSearchFields) => ({
        ...prevSearchFields,
        ...obj,
      }));
  };

  const handleSortFeildOnChanges = (event, param) => {
    let obj = {};
      obj[param] = event.target.value;
      console.log(event.currentTarget.value);
      setSortingParameters((prevSearchFields) => ({
        ...prevSearchFields,
        ...obj,
      }));
  };

  React.useEffect(() => {
    const disableSearch = Object.values(searchFields).some((searchField) => {
      console.log('searchField: ', searchField);
      if (searchField) {
        return true;
      }
      return false;
    });
    console.log('disableSearch: ', disableSearch);
    setDisableSearch(!disableSearch);
  }, [searchFields]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <div
            style={{
              display: 'flex',
              flexFlow: 'row',
              justifyContent: 'flex-end',
              width: '100%',
            }}
          >
            <Box
              sx={{
                // marginLeft: '100%',
                width: '10%',
              }}
            >
              <SearchIcon onClick={handleSearchDialogOpen} />
            </Box>
            <Dialog open={searchDialogOpen}>
              <DialogTitle id="search_dialog_title">
                {'Search Books'}
              </DialogTitle>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="name_search"
                    label="Name"
                    variant="outlined"
                    
                    onChange={(event) => {
                      handleSearchFeildOnChanges(event, 'bookName');
                    }}
                    sx={{
                      marginLeft: '10px',
                      marginRight: '10px',
                      width: 'calc(100% - 20px)',
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="author_search"
                    label="Author"
                    variant="outlined"
                    onChange={(event) => {
                      handleSearchFeildOnChanges(event, 'author');
                    }}
                    sx={{
                      marginLeft: '10px',
                      marginRight: '10px',
                      width: 'calc(100% - 20px)',
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="subject_search"
                    label="Subject"
                    variant="outlined"
                    onChange={(event) => {
                      handleSearchFeildOnChanges(event, 'subject');
                    }}
                    sx={{
                      marginLeft: '10px',
                      marginRight: '10px',
                      width: 'calc(100% - 20px)',
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="publication_search"
                    label="Publication"
                    variant="outlined"
                    onChange={(event) => {
                      handleSearchFeildOnChanges(event, 'publication');
                    }}
                    sx={{
                      marginLeft: '10px',
                      marginRight: '10px',
                      width: 'calc(100% - 20px)',
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="publication_year_search"
                    label="Publication Year (YYYY)"
                    variant="outlined"
                    //type="number"
                    inputProps={{ maxLength: 4  }}
                    // inputProps={{  }}
                    onChange={(event) => {
                      handleSearchFeildOnChanges(event, 'publicationYear');
                    }}
                    sx={{
                      marginLeft: '10px',
                      marginRight: '10px',
                      width: 'calc(100% - 20px)',
                    }}
                  />
                </Grid>
              </Grid>
              <br />
              <Typography
                sx={{
                  marginLeft: '10px',
                  marginRight: '10px',
                  width: 'calc(100% - 20px)',
                }}
              >
                Sort By
              </Typography>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="name_sort"
                  control={<Radio />}
                  label="Name"
                  onChange={(event) => {
                    handleSortFeildOnChanges(event, 'bookName');
                  }}
                />
                <FormControlLabel
                  value="author_sort"
                  control={<Radio />}
                  label="Author"
                  onChange={(event) => {
                    handleSortFeildOnChanges(event, 'author');
                  }}
                />
                <FormControlLabel
                  value="publication_year_sort"
                  control={<Radio />}
                  label="Publication Year"
                  onChange={(event) => {
                    handleSortFeildOnChanges(event, 'publicationYear');
                  }}
                />
              </RadioGroup>
              <DialogActions>
                <Button disabled={disableSearch} onClick={searchAction}>
                  Search
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
