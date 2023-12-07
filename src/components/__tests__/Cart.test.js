import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import Cart from "../Cart"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})

test('should load resturant menu component', async() => { 
    await act(async () => render(<BrowserRouter><Provider store={appStore}>
        
        <Header/>
        <RestaurantMenu/>
        <Cart/>
        </Provider>
        </BrowserRouter>
        ))

    const accordianHeader = screen.getByText("CHICKEN CHIZZA (5)")
    fireEvent.click(accordianHeader)

    const FoodItem = screen.getAllByTestId("foodItems")
    expect(FoodItem.length).toBe(5);

    const addBtns = screen.getAllByRole("button", {name: "Add+"})
    fireEvent.click(addBtns[0])
    
    const cart = screen.getByText("Cart (1items)")
    expect(cart).toBeInTheDocument();

    const FoodItems = screen.getAllByTestId("foodItems")
    expect(FoodItems.length).toBe(6);

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}))
    expect(screen.getAllByTestId("foodItems").length).toBe(5)
 })