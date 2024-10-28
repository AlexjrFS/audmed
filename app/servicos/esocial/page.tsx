"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Final from '../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import Foto from '../../../public/servicosfts/Esocial.jpeg';
export default function LtcatService(){
    const listStyle:React.CSSProperties = {
        listStyleType: 'square',
      }; 
    return(
        <>
        <Navbar/>
        <section id="page-title">
        <div className="sobre">
        <h1 className="container">Serviços</h1>
        <ol className="breadcrumb ">
            <li>
                <Link href="/" className='hidden md:inline-block lg:inline-block'>Home</Link>
            </li>
            <p className="pl-1 pr-1 text-gray-500 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
               <Link href="/servicos">Serviços</Link> 
            </li>
            <p className="pl-1 pr-1 text-gray-400 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
                LTCAT - Laudo Técnico das Condições Ambientais de Trabalho.  
            </li>
        </ol>
        </div>
    </section>
    <main id="descricao">            
   <section id="content" className='mb-0'>
    <div className="content-padding">
        <div className="container roww clearflix">
        <div className="col-md-2 md:-ml-8 lg:-ml-8">
                <h4 className='font-bold text-xl' >Outros Serviços:</h4>
                <div className="outrosservice">
                    <ul style={listStyle} className='text-sm' >
                        <li className='mb-2'>
                        <Link href="/servicos/pcmso" className='text-black'>
                        PCMSO - Programa de Controle Médico de Saúde Ocupacional</Link>
                        </li>
                        <li className='mb-2'>
                        <Link href="/servicos/pgr" className='text-black'>
                        PGR - Programa de Gerenciamento de Riscos</Link>
                        </li>
                        <li className='mb-2'>
                        <Link href="/servicos/ltcat" className='text-black'>
                        LTCAT - Laudo Técnico das Condições Ambientais de Trabalho</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-10 ml-2"  >
                <div className="semmarginbotton">
                    <div className="clearflix">
                        <div className='relative mt-0'>
                        <div className="entry-image alignleft">
                        <Image src={Foto} alt="" width={500}/>
                        </div>
                        <div><span className='font-bold text-lg'>
                            O QUE É? / OBJETIVO
                        </span></div>
                        <div><br /></div>
                        <p >O eSocial é um projeto do governo federal que busca digitalizar e unificar o envio das informações fiscais, previdenciárias e trabalhistas das empresas. O eSocial é parte do Sistema Público de Escrituração Digital (Sped) e foi criado em dezembro de 2014.</p>
                        <p>Vale ressaltar que o eSocial não muda a legislação, apenas tem como objetivo gerar mais controle, transparência e confiabilidade das informações enviadas ao Governo.</p>    
                        <br/>    
                        <p><span className='font-bold text-base mt-5'>O porquê desta obrigatoriedade?</span></p>    
                        <p>O Governo tem procurado diminuir a quantidade de acidentes causados dentro dos ambientes de trabalho, por conta das áreas de riscos que não possuem certos cuidados.</p>    
                        <p>Com esta obrigação do eSocial, as empresas precisam estar sempre atualizando dados no sistema e tendo tudo de acordo com as normas. Todos que contratam pessoas (jurídicos ou físicos) devem lançar as informações no sistema, funcionários registrados ou até estagiários.</p>    
                        <p></p>    
                        <p><span className='font-bold text-base'>Haverá penalidades para aqueles que não implantarem o eSocial?</span></p>    
                        <p>A empresa/contribuinte que deixar de enviar as informações no prazo definido ou que as apresentar com incorreções ficará sujeito às penalidades previstas na legislação.</p>
                        <p>Isso significa que não haverá novas multas e sim a aplicação daquelas já existentes nas legislações fiscais, tributárias, previdenciárias e trabalhistas. Assim, a partir da entrada do eSocial, a fiscalização por parte dos órgãos ligados ao eSocial acontecerá em tempo real.</p>
                        <p></p> 
                        <p><span className='font-bold text-lg'>Quais são as vantagens e desvantagens do eSocial?</span></p>
                        <p>Apesar do eSocial ser considerado por algumas pessoas apenas uma estratégia para arrecadação de dinheiro, por meio da fiscalização tributária e trabalhista mais acirrada, o que de fato se percebe é a oportunidade de um projeto que pode trazer vantagens às três principais partes envolvidas no projeto.</p>
                        <p>Os empregadores não precisarão enviar a mesma informação para órgãos diferentes, eliminando o retrabalho e consequentemente custos. Já o Governo receberá os dados de forma padronizada e em uma única plataforma online, ampliando sua capacidade de controle e fiscalização sobre as empresas, e os empregados terão mais agilidade e garantia em relação a efetivação dos seus direitos trabalhistas e previdenciários e maior agilidade na concessão de direitos trabalhistas e previdenciários.</p>
                        <p><span className='font-bold'>Vantagens do eSocial:</span></p>
                        <p>De forma um pouco mais detalhada, as vantagens para os empregadores, decorrentes do eSocial são:</p>
                        <ul style={listStyle}>
                            <li>Eliminação da transmissão da mesma informação para os diversos órgãos do governo;</li>
                            <li>Maior eficiência dos processos impactados pelo eSocial;</li>
                            <li>Simplicidade no envio e correção das informações;</li>
                            <li>Maior segurança no armazenamento dos dados;</li>
                            <li>Substituição de processos manuais por processos automatizados.</li>
                        </ul>
                        <p>Já o Governo, pretende atingir diversos objetivos, sendo alguns deles:</p>
                        <ul style={listStyle}>
                            <li>Viabilizar a garantia de direitos previdenciários e trabalhistas;</li>
                            <li>Simplificar o cumprimento das obrigações da Empresa com o Governo;</li>
                            <li>Eliminar a redundância e aprimorar a qualidade das informações prestadas;</li>
                            <li>Substituir a entrega de formulários e declarações, como GFIP, RAIS, CAGED, DIRF e etc pelo eSocial.</li>
                        </ul>
                        <p><span className='font-bold'>Desvantagens do eSocial:</span></p>
                        <p>Com relação às desvantagens, o eSocial exigirá uma nova forma de fazer e executar os processos, dado a sua dimensão e complexidade, demandando um grande esforço na padronização e digitalização das informações.</p>       
                        <p>As empresas que não se adequarem estarão altamente expostas aos riscos do não cumprimento das obrigações.</p>         
                        <div><br/></div>
                    
                    </div>
                    </div>
                </div>
            </div>
            <div className="clear"></div>
        </div>       
    </div>
   </section>
        <Final/>
        </main>
        </>
    )
}
