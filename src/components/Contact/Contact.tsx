import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css'
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast'
import TextField from '@mui/material/TextField';
import { Avatar, Box, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import SendIcon from '@mui/icons-material/Send';

function Contact() {
  const form: any = useRef(null);
  const { register, formState: { errors }, reset, handleSubmit } = useForm({
    mode: 'onChange'
  });

  const sendEmail = () => {
    emailjs
      .sendForm('service_byak6uf', 'template_p8ijnnd', form.current, {
        publicKey: 'fAB2RK69MGGS_vqtv',
      })
      .then(
        () => {
          toast.success('Enviado!', { position: 'top-right' })
          reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  const theme = createTheme({
    components: {
      MuiInput: {
        styleOverrides: {
          root: {
            color: 'white',
            backgroundColor: 'transparent',
            width: '300px',
            '&:before': {
              borderBottom: '2px solid #0a9eb1',
            },
            '&:hover:not(.Mui-disabled):before': {
              borderBottom: '2px solid #0a9eb1',
            },
            '&:after': {
              borderBottom: '2px solid #0a9eb1',
            },
            ['@media (max-width:450px)'] :{
              width: '200px'
            }
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: 'white',
            fontSize: '25px',
            transform: 'translate(0, 13px) scale(1)',
            '&.Mui-focused': {
              color: 'white',
            },
            '&.MuiInputLabel-shrink': {
              transform: 'translate(0, -10px) scale(0.85)',
            },
            ['@media (max-width:450px)'] :{
              fontSize: '20px'
            }
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: '#F0EBD8',
            fontSize: '30px',
            marginRight: '20px'
          }
        }
      }
    },
  });


  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h1 className={styles.titleHeader}> &lt;/&gt; Contacto </h1>
      </div>
      <div className={styles.card}>
        <div>
        <Avatar
        alt="Lautaro Garcia"
        src="/me.jpg"
        sx={{ width: 60, height: 60, marginBottom: 2 }}
      />

        </div>

        <form ref={form} className={styles.form} onSubmit={handleSubmit(sendEmail)}>
          <ThemeProvider theme={theme}>
            {/* Name Input */}
            <div className={styles.inputs}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AssignmentIndIcon />
                <TextField
                  id="input-with-sx"
                  label="Nombre"
                  variant="standard"
                  autoComplete='off'
                  {...register('user_name', {
                    required: true,
                    pattern: /^[A-Za-z\s]+$/,
                  })}
                />
              </Box>
              <p className={`${styles.messageError} ${errors.user_name ? styles.visible : ''}`}>
                {errors.user_name?.type === 'required' && 'El nombre es requerido'}
                {errors.user_name?.type === 'pattern' && 'El nombre solo puede tener letras y espacios'}
              </p>

            </div>

            {/* Email Input */}
            <div className={styles.inputs}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AlternateEmailIcon />
                <TextField
                  id="input-with-sx"
                  label="Mail"
                  variant="standard"
                  autoComplete='off'
                  {...register('user_email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                />
              </Box>
              <p className={`${styles.messageError} ${errors.user_email ? styles.visible : ''}`}>
                {errors.user_email?.type === 'required' && 'El mail es requerido'}
                {errors.user_email?.type === 'pattern' && 'Formato de mail invalido'}
              </p>
            </div>

            {/* Message Input */}
            <div className={styles.inputs}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <MarkunreadIcon />
                <TextField
                  id="filled-multiline-flexible"
                  label="Mensaje"
                  multiline
                  variant="standard"
                  autoComplete='off'
                  {...register('message', {
                    required: true,
                  })}
                />
              </Box>
              <p className={`${styles.messageError} ${errors.message?.type === 'required' ? 'visible' : ''}`}>
                El mensaje es requerido
              </p>
            </div>
          </ThemeProvider>
          <Button type='submit' size='large' variant="contained" endIcon={<SendIcon />} sx={{
            backgroundColor: '#0a9eb1',
            color: '#F0EBD8',
            marginTop: '30px',
            '&:hover': {
              backgroundColor: '#268693', 
            },
          }}>
              Enviar
          </Button>
        </form>




        <Toaster />
      </div>
    </div>
  );
};

export default Contact