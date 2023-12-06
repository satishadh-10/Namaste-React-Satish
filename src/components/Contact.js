const Contact = () => {
    return(
        <div>
        <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
        <h2>This is contact page of Namaste React from Satish</h2>
        <form>
            <input type="text" className="border-black border p-2 m-2" placeholder="name"></input>
            <input type="text" className="border-black border p-2 m-2" placeholder="message"></input>
            <button className="border-black border bg-gray-200 rounded-lg font-bold p-2 m-2">Submit</button>
        </form>
        </div>
    );
};

export default Contact;