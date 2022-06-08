import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
	useEffect(() => {
		document.title = 'Чудеса света и Урала'
	})
	return (
		<div className='container h-screen mx-auto grid place-content-center'>
			<h1 className='text-center font-[Inter] text-3xl font-bold text-blue-500 sm:text-5xl'>
				Чудеса света и Урала
			</h1>
			<div className='h-[250px] md:h-[600px]'>
				<lottie-player
					src='https://assets9.lottiefiles.com/packages/lf20_bhebjzpu.json'
					background='transparent'
					speed='1'
					className=''
					loop
					autoplay
				></lottie-player>
			</div>
			<div className='grid grid-cols-[repeat(2,minmax(0,auto))] place-content-center gap-6'>
				<div className=' relative inline-block text-left dropdown'>
					<span className='rounded-md shadow-sm'>
						<button
							className='inline-flex items-center drop-shadow-lg rounded-lg bg-green-500 px-3 py-3 text-center font-[Inter] text-sm font-bold text-white transition-colors hover:bg-green-700 hover:text-[#F8F7C7] focus:ring-4 focus:ring-green-800  sm:px-6 sm:text-xl'
							type='button'
							aria-haspopup='true'
							aria-expanded='true'
							aria-controls='headlessui-menu-items-117'
						>
							<span>Чудеса света</span>
						</button>
					</span>
					<div className='opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95'>
						<div
							className='absolute left-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md drop-shadow-lg outline-none'
							aria-labelledby='headlessui-menu-button-1'
							id='headlessui-menu-items-117'
							role='menu'
						>
							<div className='py-1'>
								<Link
									to='/global/egypt'
									tabIndex='0'
									className='text-gray-700 flex justify-between w-full px-8 py-2 text-base leading-5 text-left'
									role='menuitem'
								>
									Египетские пирамиды
								</Link>
								<Link
									to='/global/garden'
									tabIndex='1'
									className='text-gray-700 flex justify-between w-full px-8 py-2 text-base leading-5 text-left'
									role='menuitem'
								>
									Сады Семирамиды
								</Link>
								<Link
									to='/global/tomb'
									tabIndex='2'
									className='text-gray-700 flex justify-between w-full px-8 py-2 text-base leading-5 text-left'
									role='menuitem'
								>
									Храм Артемиды Эфесской
								</Link>
								<Link
									to='/global/zeus'
									tabIndex='2'
									className='text-gray-700 flex justify-between w-full px-8 py-2 text-base leading-5 text-left'
									role='menuitem'
								>
									Статуя Зевса Олимпийского
								</Link>
								<Link
									to='/global/mausoleum'
									tabIndex='2'
									className='text-gray-700 flex justify-between w-full px-8 py-2 text-base leading-5 text-left'
									role='menuitem'
								>
									Галикарнасский мавзолей
								</Link>
								<Link
									to='/global/kolos'
									tabIndex='2'
									className='text-gray-700 flex justify-between w-full px-8 py-2 text-base leading-5 text-left'
									role='menuitem'
								>
									Колосс Родосский
								</Link>
								<Link
									to='/global/lighthouse'
									tabIndex='2'
									className='text-gray-700 flex justify-between w-full px-8 py-2 text-base leading-5 text-left'
									role='menuitem'
								>
									Александрийский маяк
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className='relative inline-block text-left dropdown'>
					<span className='rounded-md shadow-sm'>
						<button
							className='inline-flex shadow-lg items-center hover:text-[#F8F7C7] rounded-lg bg-blue-700 px-3 py-3 text-center font-[Inter] text-sm font-bold text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  sm:px-6 sm:text-xl'
							type='button'
							aria-haspopup='true'
							aria-expanded='true'
							aria-controls='headlessui-menu-items-117'
						>
							<span>Чудеса Урала</span>
						</button>
					</span>
					<div className='opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95'>
						<div
							className='absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none'
							aria-labelledby='headlessui-menu-button-1'
							id='headlessui-menu-items-117'
							role='menu'
						>
							<div className='py-1'>
								<Link
									to='/ural/pencil'
									tabIndex='0'
									className='text-gray-700 flex justify-between w-full px-8 py-2 text-base leading-5 text-left'
									role='menuitem'
								>
									Гора Карандаш
								</Link>
								<Link
									to='/ural/canyon'
									tabIndex='1'
									className='text-gray-700 flex justify-between w-full px-8 py-2 text-base leading-5 text-left'
									role='menuitem'
								>
									Устиновский каньон
								</Link>
								<Link
									to='/ural/sweet'
									tabIndex='2'
									className='text-gray-700 flex justify-between w-full px-8 py-2 text-base leading-5 text-left'
									role='menuitem'
								>
									Сладкое озеро
								</Link>
								<Link
									to='/ural/lake'
									tabIndex='2'
									className='text-gray-700 flex justify-between w-full px-8 py-2 text-base leading-5 text-left'
									role='menuitem'
								>
									Озеро Беляшкуль
								</Link>
								<Link
									to='/ural/icon'
									tabIndex='2'
									className='text-gray-700 flex justify-between w-full px-8 py-2 text-base leading-5 text-left'
									role='menuitem'
								>
									Наскальная икона
								</Link>
								<Link
									to='/ural/gems'
									tabIndex='2'
									className='text-gray-700 flex justify-between w-full px-8 py-2 text-base leading-5 text-left'
									role='menuitem'
								>
									Забор с драгоценными камнями
								</Link>
								<Link
									to='/ural/stone'
									tabIndex='2'
									className='text-gray-700 flex justify-between w-full px-8 py-2 text-base leading-5 text-left'
									role='menuitem'
								>
									Озеро Иткуль и Шайтан-Камень
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePage
