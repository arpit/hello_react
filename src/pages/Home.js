import { useEffect, useState } from "react"
import axios from "axios";

export default function Home(props) {

    const [ivar, setIvar] = useState("");

    useEffect(() => {
        console.log("Fetching data");
        async function getData() {
            try {
                const response = await axios.get('/data.json');
                setIvar(response.data.name);

            } catch (error) {
                console.error(error);
            }
        }
        getData()
    }, [])

    return (<div>
        Greetings {ivar}
    </div>)
}