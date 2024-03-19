import Spline from '../components/Spline';
import Building from '../components/Building';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Signup from '../components/Signup';
import Footer from '../components/Footer';

// These props can be filled using staticProps on the server.
type HomeProps = {}
export default function Home(props: HomeProps) {
  return (
    <Layout>
      <Navbar />
        <div className="flex flex-row">
            <div className='flex flex-col'>
                <Building />
                <Signup />
            </div>
            <Spline />
        </div>
        <Footer />
    </Layout>
  );
}