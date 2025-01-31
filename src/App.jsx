
import {menu} from "./routes/index"
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          {menu.map(route => {
            return (
              <Route key= {route.name} path={route.path} element={route.element}>
                {route.children.map(route2 => {
                 return <Route 
                 key={route2.path} 
                 index={route2.index}
                 path={route2.path}
                  element={route2.element} />
                })}

              </Route>
            )
          })}

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

// lesson1 start project and 

// axios lybrary = fetch