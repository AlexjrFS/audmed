"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../../components/navbar';
import Final from '../../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import Esocial from '../../../../public/blog/esocial.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';

export default function BlogEsocial(){
    const listStyle:React.CSSProperties = {
        listStyleType: 'circle',
      };
    return(
        <>
        <Navbar/>
        <section id="page-title">
            <div className="sobre">
            <h1 className="container">
                Blog
            </h1> 
            <ol className="breadcrumb ">
            <li>
                <Link href="/" className='hidden md:inline-block lg:inline-block'>Home</Link>
            </li>
            <p className="pl-1 pr-1 text-gray-500 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
                 <Link href="/blog">  Blog </Link> 
                </li>
                <p className="pl-1 pr-1 text-gray-400 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
               E-Social            
            </li>
            </ol>
            </div>
        </section>
        <main id="descricao"> 
        <div className="content-wrap">
        <div className="container clearfix col-md-10">
            <div className="postcontent nobottommargin clearfix w-full md:w-3/4">
                <div className="single-post nobottommargin">
                    <div className="entry clearfix">
                            <div className="entry-image">
                                <Link href="/blog/categorias/e-social/1-esocial-obrigacao-que-facilita-os-direitos-do-trabalhador"><Image src={Esocial} alt="eSOCial: obrigação que facilita os direitos do trabalhador" title="eSOCial: obrigação que facilita os direitos do trabalhador" width={1000}/></Link>
                            </div>
                            <div className="entry-title">
                            <h2 className='mt-8'>Obrigação que facilita os direitos do trabalhador</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 -mt-8">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>4 de janeiro de 2024</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                        </ul>
                        <div className="entry-content notopmargin">
                            <p>Houveram algumas mudanças nas Normas Regulamentadoras (NR). O governo
                            pretende facilitar as NRs e focar na saúde e segurança do trabalhador. 
                            Principalmente, pelo alto índice de acidentes, doenças ocupacionais e 
                            mortes em locais de trabalho no Brasil.</p>
                            <div className="link">
                <Link href="/blog/categorias/e-social/1-esocial-obrigacao-que-facilita-os-direitos-do-trabalhador" className='text-uppercases'>Saiba mais...</Link>
            </div>
                            <p><br/></p>
                            <div className="clear"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div className="sidebar nobottommargin col_last clearfix col-md-2 ">
         
                        <div className="widget clearfix -ml-20 md:-ml-6 lg:-ml-6">
                            <h4>Categorias</h4>
                            <div className="widget_links ">
                                <ul style={listStyle}>
                                <li><Link href="/blog/categorias/dicas" className='text-black'>Dicas</Link></li>
                                <li><Link href="/blog/categorias/diversos" className='text-black'>Diversos</Link></li>
                                <li><Link href="/blog/categorias/e-social" className='text-black'>e-SOCIAL</Link></li>
                                <li><Link href="/blog/categorias/saude-ocupacional" className='text-black'>Saúde Ocupacional</Link></li>
                                <li><Link href="/blog/categorias/seguranca-do-trabalho" className='text-black'>Segurança do Trabalho</Link></li>
                                </ul>
                            </div>
                        </div>
        <div className="widget clearfix -ml-20 md:-ml-6 lg:-ml-6">
            <h4 className=''>Posts Recentes</h4>
            <div className="spost clearfix roww">
                                   
                                   <div className="entry-c">
                                       <div className="entry-title">
                                           <h4><Link href="/blog/categorias/seguranca-do-trabalho/importancia-do-EPC">A importância dos EPC – Equipamento de Proteção Coletivo</Link></h4>
                                       </div>
                                       <ul className="entry-meta">
                                           <li>04 de janeiro de 2024</li>
                                       </ul>
                                   </div>
                               </div>
            <div className="spost clearfix roww">
        <div className="entry-c">
            <div className="entry-title">
        <h4><Link href="/blog/categorias/saude-ocupacional/medicina-ocupacional-colaboracao" className='md:hover:text-blue-500' >Como a medicina ocupacional pode colaborar para o sucesso nas empresas </Link></h4>
        </div>
        <ul className="entry-meta">
        <li>29 de Dezembro de 2023</li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        <Final/>
        </main>
        </>
    )
}