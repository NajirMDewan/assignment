import Layout from "./layout";
import Link from "next/link";


export default function Login() {
    return(
        <Layout>
            <form>
                <h2>Login</h2>
                <input type="text" name="userid" placeholder="Email or Mobile" required/>
                <input type="password" name="password" placeholder="password" required/>
                <button type="submit">Login</button>

                <p>
                    <Link href="/signup">Signup</Link>
                </p>
            </form>

        </Layout>
    );
}