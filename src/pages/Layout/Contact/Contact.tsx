import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css'
import { Controller, useForm } from 'react-hook-form';
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
  const { formState: { errors }, reset, handleSubmit, control } = useForm({
    mode: 'onSubmit'
  });

  const sendEmail = () => {
    emailjs
      .sendForm('service_byak6uf', 'template_p8ijnnd', form.current, {
        publicKey: 'fAB2RK69MGGS_vqtv',
      })
      .then(
        () => {
          toast.success('Enviado!', { position: 'top-right' })
          reset()

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 450,
        md: 768,
        lg: 1024,
        xl: 1200,
      },
    },
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
              fontSize: '15px'
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
                  <Box sx={{ display: "flex", alignItems: "flex-end", width: { sm: '450px',   md: '350px'}, }}>
                    <AssignmentIndIcon />
                    <Controller
                      name="user_name"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "El nombre es requerido",
                        pattern: {
                          value: /^[A-Za-z\s]+$/,
                          message: "El nombre solo puede tener letras y espacios",
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Nombre"
                          variant="standard"
                          autoComplete="off"
                          style={{ width: "100%" }}
                        />
                      )}
                    />
                  </Box>
                  <p className={`${styles.messageError} ${errors.user_name ? styles.visible : ''}`}>
                    {errors.user_name?.type === 'required' && 'El nombre es requerido'}
                    {errors.user_name?.type === 'pattern' && 'El nombre solo puede tener letras y espacios'}
                  </p>
                </div>

                {/* Email Input */}
                <div className={styles.inputs}>
                  <Box sx={{ display: "flex", alignItems: "flex-end", width: { sm: '450px',   md: '350px'} }}>
                    <AlternateEmailIcon />
                    <Controller
                      name="user_email"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Correo electrónico"
                          variant="standard"
                          autoComplete="off"
                          style={{ width: "100%" }}
                        />
                      )}
                    />
                  </Box>
                  <p className={`${styles.messageError} ${errors.user_email ? styles.visible : ''}`}>
                    {errors.user_email?.type === 'required' && 'El correo electrónico es requerido'}
                    {errors.user_email?.type === 'pattern' && 'Formato de correo electrónico invalido'}
                  </p>
                </div>
              </div>
              {/* Name Input */}


              {/* Message Input */}
              <div className={`${styles.inputs} ${styles.marginInput}`}>
                <Box sx={{ display: "flex", alignItems: "flex-end", height: "30px", width: { sm: '450px', md: '100%', lg: '100%'} }}>
                  <MarkunreadIcon />
                  <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "El mensaje es requerido",
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Mensaje"
                        multiline
                        variant="standard"
                        autoComplete="off"
                        className={styles.textareaScroll}
                        maxRows={2}
                        style={{ width: "100%" }}
                        sx={{
                          width: "100%",
                          "& .MuiInputBase-root": {
                            overflowY: "auto",
                            maxHeight: "4.5em",
                          },
                          "& .MuiInputBase-input": {
                            overflowY: "auto",
                            resize: "none",
                            "&::-webkit-scrollbar": {
                              width: "6px",
                              display: "block !important",
                            },
                            "&::-webkit-scrollbar-thumb": {
                              background: "#888",
                              borderRadius: "3px",
                            },
                            "&::-webkit-scrollbar-thumb:hover": {
                              background: "#555",
                            },
                          },
                        }}
                      />
                    )}
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
              width: { xs: '200px',sm: '300px', lg: '350px'},
              fontSize: { xs: '16px',sm: '20px'},
              padding: { xs: '6px',sm: '10px'},
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