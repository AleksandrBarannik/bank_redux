import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const UserList:React.FC = () => {

    const state = useSelector(state=> state);
    const dispatch = useDispatch();
    console.log(state)

    return (
        <div>
            
        </div>
    );
};

export default UserList;