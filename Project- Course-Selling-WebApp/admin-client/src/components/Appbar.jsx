import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isUserLoading } from "../store/selectors/isUserLoading";
import { userEmailState } from "../store/selectors/userEmail";
import { userState } from "../store/atoms/user";
import { Loading } from "./Loading";


function Appbar(){

    const navigate = useNavigate()
    const userLoading = useRecoilValue(isUserLoading)
    const userEmail = useRecoilValue( userEmailState )
    const setUser = useSetRecoilState(userState)

    if(userLoading){
        return <>
            <Loading />
        </>
    }

    if(userEmail){
        return (
            <>
                <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 4,
                zIndex: 1
            }}>
                <div style={{marginLeft: 10, cursor: "pointer"}} onClick={() => {
                    navigate("/")
                }}>
                    <Typography variant={"h6"}>CoursEd<span style={{fontSize: "1.5rem",color: "red"}}>.</span></Typography>
                </div>
        
                <div style={{display: "flex"}}>
                    <div style={{marginRight: 10}}>
                        <Button
                            onClick={() => {
                                navigate("/addcourse")
                            }}
                        >Add course</Button>
                    </div>
                    <div style={{marginRight: 10}}>
                        <Button
                            onClick={() => {
                                navigate("/courses")
                            }}
                        >Courses</Button>
                    </div>
                    <div>
                        <Button
                            variant={"contained"}
                            onClick={() => {
                                localStorage.setItem("token", null)
                                setUser({
                                    isLoading: false,
                                    userEmail: null
                                })
                                navigate("/")
                            }}
                        >Logout</Button>
                    </div>
                </div>
            </div>
            </>
        )
    }else{
        return (
            <>
                <div style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 4,
                zIndex: 1
            }}>
                <div style={{marginLeft: 10, cursor: "pointer"}} onClick={() => {
                    navigate("/")
                }}>
                    <Typography variant={"h6"}>CoursEd<span style={{fontSize: "1.5rem",color: "red"}}>.</span></Typography>
                </div>
        
                <div style={{display: "flex"}}>
                    <div style={{marginRight: 10}}>
                        <Button
                            variant={"contained"}
                            onClick={() => {
                                navigate("/signup")
                            }}
                        >Signup</Button>
                    </div>
                    <div>
                        <Button
                            variant={"contained"}
                            onClick={() => {
                                navigate("/signin")
                            }}
                        >Signin</Button>
                    </div>
                </div>
            </div>
            </>
        )
    }
    
}

export default Appbar