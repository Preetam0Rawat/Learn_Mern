import { Box, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import ChipInput from 'material-ui-chip-input'
const Form = () => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        selectedFile: '',

    })
    const [tags, setTags] = useState([])
    
    const handleAdd = (tag) => setTags([...tags, tag])
    const handleDelete = (tagTodelete) => setTags((tag)=> tag !== tagTodelete)
    return (
        <div>
            <Box
                display='flex'
                flex='1'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
            >
                <Typography fontSize='50px' fontWeight='bold'>Create Blog</Typography>
                <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    mt={1}
                    width='30vw'
                >
                    <TextField
                        id='title'
                        name='title'
                        label='title'
                        variant='outlined'
                        style={{ marginTop: '30px', width: '80%' }}
                        value={formData.title}
                    />
                    <TextField
                        id='description'
                        name='description'
                        label='description'
                        variant='outlined'
                        style={{ marginTop: '30px', width: '80%' }}
                        value={formData.description}
                    />
                    <ChipInput
                        style={{ marginTop: '30px' }}
                        value={tags}
                        onAdd={handleAdd}
                        onDelete={handleDelete}
                        label='Tags'
                        variant='outlined'>
                    </ChipInput>
                </Box>
            </Box>
        </div>
    )
}

export default Form
