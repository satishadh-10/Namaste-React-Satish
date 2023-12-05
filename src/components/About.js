import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{

    constructor(props){
        super(props);

        // console.log("Parent constructor is Called");
    }

    componentDidMount(){
        // console.log("Parent CDM is called");
    }
    render(){
        // console.log("Parent Render is Called");
        return(
            <div>
            <h1>About Page</h1>
            <div>
                LoggedIn User
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="font-bold text-lg">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <h2>This is Namaste React About Page</h2>

            {/* <User name={"Satish Adhikari (function)"} /> */}

            <UserClass name={"Satish Adhikari (class)"} />
            
        </div>
        )
    }
};

export default About;
