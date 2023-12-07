import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})


test('should Search resList for burger text input', async () => { 

    await act(async () => render(<BrowserRouter><Body/></BrowserRouter>))

    const cardsBeforeClick = screen.getAllByTestId("resCards")
    expect(cardsBeforeClick.length).toBe(20)

    const searchbtn = screen.getByRole("button", {name: "Search"})

    const searchtxt = screen.getByTestId("searchTxt")
    fireEvent.change(searchtxt, {target: {value: "burger"}})
    fireEvent.click(searchbtn)

    expect(searchbtn).toBeInTheDocument();

    const cardsAfterClick = screen.getAllByTestId("resCards")
    expect(cardsAfterClick.length).toBe(2)
 })




 
test('should filter top rated resturant', async () => { 

    await act(async () => render(<BrowserRouter><Body/></BrowserRouter>))

    const cardsBeforeFilter = screen.getAllByTestId("resCards")
    expect(cardsBeforeFilter.length).toBe(20)

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Resturants"})
    fireEvent.click(topRatedBtn)
    
    const cardsAfterFilter = screen.getAllByTestId("resCards")
    expect(cardsAfterFilter.length).toBe(18)

    
 })