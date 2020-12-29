import Head from 'next/head';
import WebHeader from '../components/Webheader';
import Banner from '../components/Banner';
import Services from '../components/Services';

export default function Home() {
    return (
        <div className='container'>
            <Head>
                <title>Carplus</title>
            </Head>

            <main className='wid100 fx fx_wrap'>
                <header className='wid100'>
                    <WebHeader />
                    <Banner />
                    <Services />
                </header>
            </main>

            <footer></footer>
        </div>
    );
}
