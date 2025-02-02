import React from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'

const Navbar = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

    return (
        <div>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingY: '20px',
                paddingX: '50px',
                boxShadow: '0px 2px 4px rgba(0,0,0,0.1)'
            }}>

                <Typography variant='h4'>Blog Website</Typography>
                <Box>
                    <Button sx={{
                        marginRight: 1,
                        color: 'white',
                        bgcolor: 'black',
                        borderRadius: 10,
                        '&:hover': {
                            bgcolor: '#FFD42F',
                            color: 'black'
                        }
                    }}
                        variant='contained'
                        onClick={handleOpen}
                    >Create Blog

                    </Button>
                    <Button sx={{
                        color: 'white',
                        bgcolor: 'black',
                        borderRadius: 10,
                        '&:hover': {
                            bgcolor: '#FFD42F',
                            color: 'black'
                        }
                    }}
                        variant='contained'>Signin

                    </Button>
                </Box>
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default Navbar
