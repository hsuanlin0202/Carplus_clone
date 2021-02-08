import Head from 'next/head';
import WebHeader from '../components/Webheader';
import Banner from '../components/Banner';
import Services from '../components/Services';

export default function Home() {
    return (
        <div className='w-full p-0 m-0'>
            <Head>
                <title>Carplus</title>
            </Head>

            <main className='w-full p-0 flex flex-wrap'>
                <header className='w-full p-0'>
                    <WebHeader />
                </header>
                <section className='w-full p-0 flex flex-wrap'>
                    <Banner />
                    <Services />
                </section>
            </main>

            <footer></footer>
        </div>
    );
}
