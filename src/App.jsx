import { CssBaseline } from "@mui/material"
import { Routes, Route, } from "react-router-dom"
import { Error404, Movies, MovieInformation, Actors, Profile, NavBar } from './components/index'
import { Content, Main, StyledToolbar } from './styles'

const App = () => {

	return (
		<Main>
			<CssBaseline />
			<NavBar />
			<Content>
				<StyledToolbar />
				<Routes>
					<Route path="*" element={<Error404 />} />
					<Route path="/" element={<Movies />} />
					<Route path="/movie/:id" element={<MovieInformation />} />
					<Route path="/actors/:id" element={<Actors />} />
					<Route path="/profile/:id" element={<Profile />} />
				</Routes>
			</Content>
		</Main>
	)
}

export default App