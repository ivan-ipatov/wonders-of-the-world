import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function PageExample(props) {
	useEffect(() => {
		document.title = `${props.title}`
	})

	return (
		<div className='grid md:grid-flow-col transition-all duration-[1.5s] ease-linear dark:bg-gray-800'>
			<div className='grid place-content-center h-[80vh] md:h-full gap-4 p-4 md:p-16'>
				<h1 className='mb-5 text-5xl md:text-6xl font-black dark:text-white'>
					{props.title}
				</h1>

				<div className='flex font-light text-gray-500'>
					<div className='flex pr-6 group'>
						<span
							className='material-icons pt-2 mr-2 text-base md:text-2xl font-semibold text-gray-900 group-hover:text-gray-500 dark:text-white dark:hover:text-gray-300'
							id='place'
						>
							place
						</span>
						<a
							className='pt-2 text-base md:text-2xl font-semibold group text-gray-900 group-hover:text-gray-500 dark:text-white dark:hover:text-gray-300'
							href={`${props.coordlink}`}
							target='_blank'
							id='linker'
						>
							{props.coord}
						</a>
					</div>
				</div>

				<p className='selection:bg-slate-600 dark:selection:bg-slate-500 w-full max-h-[45vh] overflow-y-auto text-sm md:text-base text-gray-500 transition-all duration-[1s] ease-linear selection:text-white dark:text-gray-400'>
					{props.text}
				</p>
				<Link
					className='text-sm border-2 p-3 text-center border-black/30 rounded-lg font-semibold hover:underline dark:text-gray-600 dark:border-gray-600'
					to='/'
				>
					Назад
				</Link>
			</div>

			<div
				className={`h-screen ${props.image} md:w-[40vw] lg:w-[60vw] bg-cover bg-top bg-no-repeat`}
			></div>
		</div>
	)
}

export default PageExample
