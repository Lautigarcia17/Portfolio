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

const contactInfo = [
    {
        icon: 'mail',
        title: 'Email',
        value: 'lautaronhgarcia@gmail.com',
        link: 'mailto:lautaronhgarcia@gmail.com'
    },
    {
        icon: 'linkedin',
        title: 'LinkedIn',
        value: '/lautarongarcia',
        link: 'https://www.linkedin.com/in/lautarongarcia/'
    },
    {
        icon: 'github',
        title: 'GitHub',
        value: '/Lautigarcia17',
        link: 'https://github.com/Lautigarcia17'
    }
]

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
                    toast.success('¡Mensaje enviado con éxito!', {
                        position: 'top-right',
                        style: {
                            background: 'rgba(26, 26, 39, 0.95)',
                            color: '#00fff9',
                            border: '1px solid rgba(0, 255, 249, 0.3)',
                            backdropFilter: 'blur(10px)'
                        }
                    })
                    reset()
                },
                (error) => {
                    toast.error('Error al enviar el mensaje', { position: 'top-right' })
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
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
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
            {/* Background Effects */}
            <div className={styles.bgEffects}>
                <div className={styles.bgGradient}></div>
                <div className={styles.gridOverlay}></div>
            </div>

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
                            <span className={styles.badgeDot}></span>
                            <span>CONTACTO</span>
                        </div>
                        <h2 className={styles.titleHeader}>
                            Construyamos algo{' '}
                            <span className={styles.titleGradient}>increíble juntos</span>
                        </h2>
                        <p className={styles.subtitleHeader}>
                            ¿Tienes un proyecto en mente? Me encantaría conocer tu idea y ayudarte a hacerla realidad.
                        </p>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className={styles.contactGrid}>
                        {/* Contact Info Cards */}
                        <motion.div className={styles.infoSection} variants={itemVariants}>
                            <h3 className={styles.infoTitle}>Información de contacto</h3>
                            <div className={styles.infoCards}>
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={info.title}
                                        href={info.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.infoCard}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className={styles.iconWrapper}>
                                            {info.icon === 'mail' && (
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M22 6l-10 7L2 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            )}
                                            {info.icon === 'linkedin' && (
                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                                </svg>
                                            )}
                                            {info.icon === 'github' && (
                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                                                </svg>
                                            )}
                                        </div>
                                        <div className={styles.infoText}>
                                            <span className={styles.infoLabel}>{info.title}</span>
                                            <span className={styles.infoValue}>{info.value}</span>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.form
                            ref={form}
                            className={styles.form}
                            onSubmit={handleSubmit(sendEmail)}
                            variants={itemVariants}
                        >
                            <h3 className={styles.formTitle}>Envíame un mensaje</h3>
                            <ThemeProvider theme={theme}>
                                <div className={styles.inputs}>
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
                                            border: '1px solid rgba(0, 255, 249, 0.4)',
                                            color: '#00fff9',
                                            fontSize: '1rem',
                                            padding: '16px 32px',
                                            fontWeight: 600,
                                            borderRadius: '12px',
                                            backdropFilter: 'blur(10px)',
                                            textTransform: 'none',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                background: 'linear-gradient(135deg, rgba(0, 255, 249, 0.25) 0%, rgba(139, 92, 246, 0.25) 100%)',
                                                border: '1px solid rgba(0, 255, 249, 0.6)',
                                                boxShadow: '0 10px 30px rgba(0, 255, 249, 0.3)',
                                            },
                                        }}
                                    >
                                        Enviar mensaje
                                    </Button>
                                </motion.div>
                            </ThemeProvider>
                        </motion.form>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
