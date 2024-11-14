import Layout from '../components/Layout';
import Link from 'next/link';

export default function Login() {
  return (
    <Layout>
      <h1>Login here</h1>
      <form>
        <input type="text" placeholder="User ID" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Login</button>
        &nbsp;
        <Link href="/signup"><button>SignUp</button></Link>
      </form>
    </Layout>
  );
}
