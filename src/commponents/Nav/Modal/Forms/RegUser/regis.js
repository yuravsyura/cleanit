import Auth from "./auth";
import Dashboard from "./../RegUser/dashboard";
import { useUserContext } from "../../../../../context/userContext";
import './regis.css'

function Regis() {
    const { user, loading, error } = useUserContext();

    return (
        <div className="App">
            {error && <p className="error">{error}</p>}
            {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
        </div>
    );
}

export default Regis;