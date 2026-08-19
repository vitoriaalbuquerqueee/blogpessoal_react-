import { Envelope, GithubLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';

function Footer() {
  return (
    <div className="flex justify-center bg-indigo-900 text-white">
      <div className="container flex flex-col items-center py-4">
        <p className="text-xl font-bold">Blog Pessoal Vitória Albuquerque | Copyright: 2026</p>
        <p className="text-md">Acesse as minhas redes e contatos</p>
        <div className='flex gap-2 pt-2'>
          <a 
            href="https://www.linkedin.com/in/vitória-albuqueerque" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <LinkedinLogo size={48} weight='bold' className='hover:text-indigo-300' />
          </a>
          
          <a 
            href="https://github.com/vitoriaalbuquerqueee" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <GithubLogo size={48} weight='bold' className='hover:text-indigo-300' />
          </a>

          <a 
            href="mailto:albuquerquevi790@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Envelope size={48} weight='bold' className='hover:text-indigo-300' />
          </a>

          <a 
            href="https://wa.me/5511932588235" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <WhatsappLogo size={48} weight='bold' className='hover:text-indigo-300' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;