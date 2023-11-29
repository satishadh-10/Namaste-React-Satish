import React from "react";

class UserClass extends React.Component {

      constructor(props){
        super(props)

        this.state={
            userInfo:{
                
                
            }
        }

        // console.log("Child Constructor is Called");

      };

         async componentDidMount(){

            const data = await fetch("https://api.github.com/users/satishadh-10");
            const json = await data.json();

            this.setState({
                userInfo: json
            });

            console.log(json);
            
          };

    render() {
        // console.log("Child Render is called");

        const {name, location, avatar_url} = this.state.userInfo
       
        return (
            <div className="user-card">
                <h1>Name: {name}</h1>
                <h2>Address: {location}</h2>
                <h2>Contact: me_sawtish11</h2>
                <h2>Avatar: {avatar_url}</h2>
           </div>
        );
    }

}

export default UserClass;