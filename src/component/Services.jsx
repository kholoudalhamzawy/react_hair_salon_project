import axios from 'axios';

const Services = () => {
    const firstType = async () => {
        const api_url =  'https://fci-project.herokuapp.com/services';

            const response = await axios.get(api_url) ; 
            const {data} = response;
            console.log(data);

    };

    return (

        <div>
            <button onClick={firstType}> click me to get the data from api</button >
        </div>


    );
};

export default Services ;