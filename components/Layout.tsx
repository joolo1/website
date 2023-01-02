import Head from 'next/head';
import Link from 'next/link';
import Navbar from './Navbar';

interface Props {
  children?: React.ReactNode;
  title?: string;
}

const Layout = ({children, title}: Props) => {
  return (
      <>
        <Head>
          <title>{title ? title : 'JoDev'}</title>
        </Head>

        <header className="bg-primary p-5 shadow-md">
          <div className="flex container mx-auto items-center">
            <div className="w-3/12">
              <Link href="/" className="flex inline-flex">
                <h1 className="font-bold text-white text-2xl">
                  JoDev
                  <span className="block text-sm">Software Development</span>
                </h1>
              </Link>
            </div>

            <div className="w-9/12">
              <Navbar />
            </div>
          </div>
        </header>

        {children}
      </>
  )
}

export default Layout
