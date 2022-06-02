
import axios from 'axios';
import { useState } from 'react';

const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setpassword] = useState('');


    const login = async () => {
        const api_url = 'https://fci-back-end.herokuapp.com/login';
         try {
            const response = await axios.post(api_url, {
                userName,
                password,
            });

            const { data } = response;

        } catch (error) {
            console.log('wrong credentials');
        }
    };
    const onUsernameChanged = (event) => {
        setUserName(event.target.value);
    };
    const onPasswordChanged = (event) => {
        setpassword(event.target.value);
    };

    return (

        <div>
            {/*user name  */}
            <input onChange={onUsernameChanged} />

            {/*password  */}
            <input onChange={onPasswordChanged} />

            <button onClick={login}> login</button >
        </div>


    );
};

export default Login;