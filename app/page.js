export default async function Home({ params: { lng } }) {
	return (
		<div className='note--empty-state'>
			<span className='note-text--empty-state'>
				Click a note on the left to view something! 🥺
			</span>
		</div>
	)
}
