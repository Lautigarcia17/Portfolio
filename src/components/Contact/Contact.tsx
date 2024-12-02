import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css'
import { useForm } from 'react-hook-form';
import {toast,Toaster} from 'react-hot-toast'

function Contact(){
  const form : any = useRef(null);
  const {register, formState: { errors },reset, handleSubmit} = useForm( {
    mode: 'onChange'
  });

  const sendEmail = () => {
    emailjs
      .sendForm('service_byak6uf', 'template_p8ijnnd', form.current, {
        publicKey: 'fAB2RK69MGGS_vqtv',
      })
      .then(
        () => {
          toast.success('Enviado!', {position:'top-right'})
          reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className={styles.content}>
      <div className={styles.header}>
          <h1 className={styles.titleHeader}> &lt;/&gt; Contacto </h1>
      </div> 
      <div className={styles.card}>
        <form ref={form} className={styles.form} onSubmit={handleSubmit(sendEmail)}>

          <label htmlFor="user_name">Nombre</label>
          <input type="text"  id='user_name' className={styles.inputText} {...register('user_name',{
            required: true,
            pattern: /^[A-Za-z\s]+$/
          })}  />
          {errors.user_name?.type === 'required' && <p className={styles.messageError}>El nombre es requerido</p>}
          {errors.user_name?.type === 'pattern' && <p className={styles.messageError}>El nombre solo puede tener letras y espacios</p>}


          <label htmlFor="user_email">Email</label>
          <input type="text" id="user_email" className={styles.inputText} {...register("user_email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          })} />
          {errors.user_email?.type === 'required' && <p className={styles.messageError}>El email es requerido</p>}
          {errors.user_email?.type === 'pattern' && <p className={styles.messageError}>Formato de email invalido</p>}



          <label htmlFor="message">Mensaje</label>
          <textarea  id="message" className={styles.inputText} {...register("message", {
            required: true
          })}/>
          {errors.message?.type === 'required' && <p className={styles.messageError}>El mensaje es requerido</p>}
          
          <input type="submit" value="Enviar" className={styles.submit} />
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default Contact