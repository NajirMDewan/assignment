import Layout from "./layout";


export default function Signup() {
    return(
        <Layout>
            <form>
                <h2>SignUp</h2>
                <input type="text" name="userid" placeholder="Email or Mobile" required/>
                <input type="password" name="password" placeholder="password" required/>
                <input type="password" name="re-type password" placeholder="password" required/>
                <button type="submit">Create New User</button>
            </form>
        </Layout>
    )
}

