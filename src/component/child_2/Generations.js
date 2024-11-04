import Gen from "../gen/Gen";
import Gen2 from "../gen/Gen2";
import Gen3 from "../gen/Gen3";
import Gen4 from "../gen/Gen4";

const generations = () => {
    return (
    <div>
        <h2>Generations</h2>
        <Gen/>
        <Gen2/>
        <Gen3/>
        <Gen4/>
    </div>
    );
}

export default generations;