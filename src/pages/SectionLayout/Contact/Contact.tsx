import { useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Footer from '../../../components/Footer/Footer'

function Contact() {
  const form: any = useRef(null)
  const { formState: { errors }, reset, handleSubmit, control } = useForm({
    mode: 'onSubmit'
  })

  const sendEmail = () => {
    emailjs
      .sendForm('service_byak6uf', 'template_p8ijnnd', form.current, {
        publicKey: 'fAB2RK69MGGS_vqtv',
      })
      .then(
        () => {
          toast.success('Mensaje enviado!', { 
            position: 'top-right',
            style: {
              background: 'rgba(26, 26, 39, 0.95)',
              color: '#00fff9',
              border: '1px solid rgba(0, 255, 249, 0.3)',
            }
          })
          reset()
        },
        (error) => {
          toast.error('Error al enviar', { position: 'top-right' })
          console.log('FAILED...', error.text)
        },
      )
  }

  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiInputLabel-root': {
              color: 'rgba(255, 255, 255, 0.5)',
              fontWeight: 500,
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#00fff9',
            },
            '& .MuiInput-root': {
              color: '#ffffff',
              '&:before': {
                borderBottom: '1px solid rgba(0, 255, 249, 0.2)',
              },
              '&:hover:not(.Mui-disabled):before': {
                borderBottom: '1px solid rgba(0, 255, 249, 0.4)',
              },
              '&:after': {
                borderBottom: '2px solid #00fff9',
                boxShadow: '0 2px 10px rgba(0, 255, 249, 0.3)',
              },
            },
            '& .MuiInput-input': {
              fontSize: '1rem',
              padding: '8px 0',
            },
          },
        },
      },
    },
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.83, 0, 0.17, 1]
      }
    }
  }

  return (
    <div className={styles.containerContact}>
      <div className={styles.containerPositionContact}>
        <motion.div 
          className={styles.contentContact}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div className={styles.header} variants={itemVariants}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>◉</span>
              <span>Contacto</span>
            </div>
            <h2 className={styles.titleHeader}>
              <span className={styles.titleLine1}>Hablemos</span>
              <span className={styles.titleLine2}>de tu proyecto</span>
            </h2>
            <p className={styles.subtitleHeader}>
              ¿Tienes una idea en mente? Trabajemos juntos para hacerla realidad. 
              Estoy disponible para proyectos freelance y colaboraciones.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form 
            ref={form} 
            className={styles.form} 
            onSubmit={handleSubmit(sendEmail)}
            variants={itemVariants}
          >
            <ThemeProvider theme={theme}>
              <div className={styles.inputs}>
                {/* Name & Email Row */}
                <div className={styles.nameEmailDiv}>
                  {/* Name Input */}
                  <div className={styles.inputWrapper}>
                    <Controller
                      name="user_name"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "El nombre es requerido",
                        pattern: {
                          value: /^[A-Za-zÀ-ÿ\s]+$/,
                          message: "Solo letras y espacios",
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Nombre completo"
                          variant="standard"
                          autoComplete="off"
                          fullWidth
                          error={!!errors.user_name}
                        />
                      )}
                    />
                    <p className={`${styles.messageError} ${errors.user_name ? styles.visible : ''}`}>
                      {errors.user_name?.message as string}
                    </p>
                  </div>

                  {/* Email Input */}
                  <div className={styles.inputWrapper}>
                    <Controller
                      name="user_email"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "El correo es requerido",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Correo inválido"
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Correo electrónico"
                          variant="standard"
                          autoComplete="off"
                          fullWidth
                          error={!!errors.user_email}
                        />
                      )}
                    />
                    <p className={`${styles.messageError} ${errors.user_email ? styles.visible : ''}`}>
                      {errors.user_email?.message as string}
                    </p>
                  </div>
                </div>

                {/* Message Input */}
                <div className={styles.inputWrapper}>
                  <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "El mensaje es requerido",
                      minLength: {
                        value: 10,
                        message: "Mínimo 10 caracteres"
                      }
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Mensaje"
                        multiline
                        rows={4}
                        variant="standard"
                        autoComplete="off"
                        fullWidth
                        error={!!errors.message}
                        sx={{
                          '& .MuiInput-root': {
                            paddingTop: '8px',
                          },
                        }}
                      />
                    )}
                  />
                  <p className={`${styles.messageError} ${errors.message ? styles.visible : ''}`}>
                    {errors.message?.message as string}
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type='submit' 
                  size='large' 
                  variant="contained" 
                  fullWidth
                  sx={{
                    background: 'linear-gradient(135deg, rgba(0, 255, 249, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
                    border: '1px solid rgba(0, 255, 249, 0.3)',
                    color: '#00fff9',
                    fontSize: '1rem',
                    padding: '14px 32px',
                    fontWeight: 600,
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)',
                    textTransform: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, rgba(0, 255, 249, 0.25) 0%, rgba(139, 92, 246, 0.25) 100%)',
                      border: '1px solid rgba(0, 255, 249, 0.5)',
                      boxShadow: '0 10px 30px rgba(0, 255, 249, 0.3)',
                    },
                  }}
                >
                  Enviar mensaje
                </Button>
              </motion.div>
            </ThemeProvider>
          </motion.form>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
