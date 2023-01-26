import React, {useEffect, useState} from "react";
import './loginPopup.css'
import loginUser from "../../../../assets/images/user.png";
import AxiosFunction from "../../../../common/axios";
import {Redirect} from "react-router-dom";

export default function LoginPopup() {

    const [redirect, setRedirect] = useState();

    useEffect(() => {
        setRedirect(false);
    }, []);

    if (redirect)
        return <Redirect push to="/login"/>

    function authorizationCallbackSuccess(resp){
        localStorage.removeItem("access_token");
        setRedirect(true);
        console.log("Logout success...")
    }

    function onSubmit() {

        const options = {
            callbackSuccess: authorizationCallbackSuccess,
            method: 'post',
            url: 'https://eafaddev-auth.afad.gov.tr/oauth/revoke',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        };

        AxiosFunction(options);

    }

    return (
        <>
            <div className="container loginPopup text-center">
                <div className="col w-100 text-center mt-3">
                    <img src={loginUser} className="text-center"/>
                </div>
                <div className="w-100 mt-5">
                    <div className="col text-center">Ad Soyad</div>
                </div>
                <div className="w-100 mt-5">
                    <div className="col text-center">
                        {<button onClick={onSubmit}>Oturumu Kapat </button>}
                    </div>
                </div>
            </div>
        </>
    )


}



