import { render, screen } from "@testing-library/react"
import ResturantCard from "../ResturantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"


test('should render restaurant card component with props data', () => { 
    render(<ResturantCard resData={MOCK_DATA} />);

    const resName = screen.getByText("Andhra Gunpowder")
    
    expect(resName).toBeInTheDocument()

    
 })