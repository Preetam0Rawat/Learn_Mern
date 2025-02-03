import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, TextField } from '@mui/material'
import ChipInput from 'material-ui-chip-input'
import Blog from '../components/Blog'

const Home = () => {
  const [search, setSearch] = useState('')

  const [tags, setTags] = useState([])
  const handleAdd = (tag) => setTags([...tags, tag])
  const handleDelete = (tagTodelete) => setTags(tags.filter((tag) => tag !== tagTodelete))


  return (
    <div>
      <Navbar />
      <Box sx={{ padding: 4 }} >
        <Box  display = 'flex' justifyContent= 'center' alignItems='center'>
          <TextField
            name='search'
            label='searc Blogs'
            variant='outlined'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginRight: '20px' }}
          />

          <ChipInput
            style={{ marginRight: '20px' }}
            value={tags}
            onAdd={handleAdd}
            onDelete={handleDelete}
            label='search tags'
            variant='outlined'
          />
          <Button
            sx={{
              color: 'white',
              mt: 0.5,
              backgroundColor: 'black',
              '&:hover': {
                backgroundColor: '#FFD42F',
                color: 'black'
              }
            }}
            >
            Search
            </Button>
        </Box>
        <Blog/>
      </Box>
    </div>
  )
}

export default Home
