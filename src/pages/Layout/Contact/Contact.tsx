import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast'
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import SendIcon from '@mui/icons-material/Send';
import Footer from '../../../components/Footer/Footer';

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
            color: '#111111',
            backgroundColor: 'transparent',
            // width: '300px',
            '&:before': {
              borderBottom: '2px solid #5c3d2e',
            },
            '&:hover:not(.Mui-disabled):before': {
              borderBottom: '2px solid #5c3d2e',
            },
            '&:after': {
              borderBottom: '2px solid #5c3d2e',
            },
            ['@media (max-width:450px)']: {
              width: '200px'
            }
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: '#5c3d2e',
            fontSize: '25px',
            transform: 'translate(0, 13px) scale(1)',
            '&.Mui-focused': {
              color: '#5c3d2e',
            },
            '&.MuiInputLabel-shrink': {
              transform: 'translate(0, -10px) scale(0.85)',
            },
            ['@media (max-width:450px)']: {
              fontSize: '20px'
            }
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: '#5c3d2e',
            fontSize: '30px',
            marginRight: '15px'
          }
        }
      }
    },
  });


  return (
    <div className={styles.containerContact}>
      <div className={styles.containerPositionContact}>

        <div className={styles.contentContact}>
          <div className={styles.header}>
            <h1 className={styles.titleHeader}>Contáctate conmigo </h1>
            <h2 className={styles.subtitleHeader}>Si quieres trabajar conmigo o simplemente compartir ideas sobre tecnología, estaré encantado de hablar contigo.</h2>
          </div>

          <form ref={form} className={styles.form} onSubmit={handleSubmit(sendEmail)}>
            <ThemeProvider theme={theme}>

              <div className={`${styles.nameEmailDiv} ${styles.marginInput}`}>
                <div className={styles.inputs}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}>
                    <AssignmentIndIcon />
                    <TextField
                      id="input-with-sx"
                      label="Nombre"
                      variant="standard"
                      autoComplete='off'
                      style={{ width: '100%' }}
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
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}>
                    <AlternateEmailIcon />
                    <TextField
                      id="input-with-sx"
                      label="Correo electrónico"
                      variant="standard"
                      autoComplete='off'
                      style={{ width: '100%' }}
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
              </div>
              {/* Name Input */}


              {/* Message Input */}
              <div className={`${styles.inputs} ${styles.marginInput}`}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}>
                  <MarkunreadIcon />
                  <TextField
                    label="Mensaje"
                    multiline
                    variant="standard"
                    autoComplete='off'
                    maxRows={2}
                    style={{ width: '100%' }}
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
              backgroundColor: 'transparent',
              border: '1px solid #5c3d2e',
              color: '#5c3d2e',
              marginTop: '30px',
              width: '350px',
              fontSize: '20px',
              padding: '10px',
              '&:hover': {
                backgroundColor: '#111111',
                color: '#eae4d4'
              },
            }}>
              Enviar
            </Button>
          </form>

        </div>
        <Footer />
      </div>

    </div>
  );
};

export default Contact