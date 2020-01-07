import axios from 'axios';
import React, {useState, useEffect} from 'react';

function ApiGet(){
    const [chefInfo, setInfo] = useState([]);

    useEffect(() =>{
        axios.get('https://chef-portfolio1-bw.herokuapp.com/api')
        .then((res) => {
            console.log(res.data.posts);
            let newData = res.data.posts
            setInfo(newData)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return(
        <div>
            { chefInfo.map((info, index) => (
                <section key = {index}>
                    <ul>
                        {/*<li>*/}
                            <figure>
                                <img src={info.image}/>
                                <h1>{info.food_name}</h1>
                                <h4>{info.meal_type}</h4>
                                <h3>{info.description}</h3>
                                <p>{info.instructions}</p>
                            </figure>
                        {/*</li>*/}
                    </ul>

                </section>
            ))}
        </div>
    )
}
export default ApiGet