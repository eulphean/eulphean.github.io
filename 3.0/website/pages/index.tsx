import Spline from '../components/Spline';
import Building from '../components/Building';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Signup from '../components/Signup';
import Footer from '../components/Footer';
import Intro from '../components/Intro'

// These props can be filled using staticProps on the server.
type HomeProps = {}
export default function Home(props: HomeProps) {
  return (
    <Layout>
      <Intro />
      <Navbar />
      <div className='grid absolute w-full grid-cols-1 md:grid-cols-2 mt-12'>
        <div className='flex flex-col order-last md:order-first'>
          <Building />
          <Signup />
        </div>
        <Spline />
      </div>
      <Footer />
    </Layout>
  );
}