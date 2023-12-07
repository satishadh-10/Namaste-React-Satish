import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";



test('should load header component with login button', () => { 
    
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>);

    const logInButton = screen.getByText("Login")

    expect(logInButton).toBeInTheDocument()
 })
test('should load header component with cart 0 items', () => { 
    
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>);

    const cartItem = screen.getByText(/Cart/)

    expect(cartItem).toBeInTheDocument()
 })



test('should change login button to logout on click', () => { 
    
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>);

    const loginButton = screen.getByRole("button",{ name : "Login" })

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", {name : "Logout"})

    expect(logoutButton).toBeInTheDocument()
 })