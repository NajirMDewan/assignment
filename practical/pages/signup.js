import Link from "next/link";
import Layout from "../components/Layout";

export default function Signup() {
    return(
        <Layout>
                <form>
                    <h2>SignUp here</h2>
                    <input type="text" name="userid" placeholder="Email or Mobile" required/>
                    <input type="password" name="password" placeholder="password" required/>
                    <input type="password" name="re-type password" placeholder="password" required/>
                    <button type="submit">Create New User</button>
                    &nbsp;
                    <Link href="/login"><button>Login</button></Link>
                </form>
        </Layout>
        
    );
}
