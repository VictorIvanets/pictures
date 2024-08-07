export interface IImg {
	id: string
	size: string
	year: string
	name: string
}

export interface IPicleng {
	title: string
	section: string
	img: IImg[]
}

export const ua = [
	{
		title: 'МІКРОКОСМОС',
		section: 'Секція',
		img: [
			{ id: '101', size: '47х38', year: '2006', name: 'ПОВІТРЯ.ЗАПАХ ПАРФУМУ' },
			{ id: '102', size: '44х30', year: '2005', name: 'ПОВІТРЯ.ІДЕАЛЬНИЙ КОНЕКШЕН' },
			{ id: '103', size: '30х42', year: '2017', name: 'ПОВІТРЯ. МІС ДІОР' },
			{ id: '104', size: '39х39', year: '2009', name: 'ЧАС.ГОДИННИК.СЕКУНДИ' },
			{ id: '105', size: '38х29', year: '2007', name: 'ПОВІТРЯ.ЗАПАХ ВЕСНИ' },
			{ id: '106', size: '41х27', year: '2000', name: 'КРАПЛЯ РОЗУМУ' },
			{ id: '107', size: '39х42', year: '2005', name: 'ІДЕАЛЬНІ СТОСУНКИ' },
		],
	},

	{
		title: 'МАКРОКОСМОС',
		section: 'Секція',
		img: [
			{ id: '201', size: '35х50', year: '1999', name: 'СОНЯЧНЕ ЗАТЕМНЕННЯ' },
			{ id: '202', size: '35х35', year: '2019', name: 'ЗОЛОТИЙ ДРАКОН БАЛІ' },
			{ id: '203', size: '37x65', year: '2016', name: 'КЛЮЧ ДО ЖИТТЯ.ЄГИПЕТ' },
			{ id: '204', size: '38х46', year: '2017', name: 'НЕБЕСНИЙ ГІСТЬ' },
			{ id: '205', size: '40х35', year: '2005', name: 'ПЛАНЕТА А' },
			{ id: '206', size: '47х42', year: '2004', name: 'ПЛАНЕТА В' },
			{ id: '207', size: '46х34', year: '2004', name: 'ЩАСЛИВА ГАЛАКТИКА' },
			{ id: '208', size: '37х41', year: '2018', name: 'РІЗДВЯНА ЗІРКА' },
			{ id: '209', size: '32x32', year: '2022-2023', name: 'ВСЕСВІТ' },
			{ id: '210', size: '98x102', year: '2023', name: 'ЧУМАЦЬКИЙ ШЛЯХ' },
		],
	},
]

export const en = [
	{
		title: 'Micro space',
		section: 'Section',
		img: [
			{ id: '101', size: '47х38', year: '2006', name: 'Air. Smell of perfume' },
			{ id: '102', size: '44х30', year: '2005', name: 'Air. Perfect Connection' },
			{ id: '103', size: '30х42', year: '2017', name: 'Air. Miss Dior' },
			{ id: '104', size: '39х39', year: '2009', name: 'Time. Clock. Seconds' },
			{ id: '105', size: '38х29', year: '2007', name: 'Air. The smell of spring' },
			{ id: '106', size: '41х27', year: '2000', name: 'A drop of mind' },
			{ id: '107', size: '39х42', year: '2005', name: 'Perfect relationship' },
		],
	},
	{
		title: 'Macro space',
		section: 'Section',
		img: [
			{ id: '201', size: '35х50', year: '1999', name: 'Solar eclipse' },
			{ id: '202', size: '35х35', year: '2019', name: 'The Golden Dragon of Bali' },
			{ id: '203', size: '37x65', year: '2016', name: 'The key to life' },
			{ id: '204', size: '38х46', year: '2017', name: 'Guest from sky' },
			{ id: '205', size: '40х35', year: '2005', name: 'Planet A' },
			{ id: '206', size: '47х42', year: '2004', name: 'Planet В' },
			{ id: '207', size: '46х34', year: '2004', name: 'Happy Galaxy' },
			{ id: '208', size: '37х41', year: '2018', name: 'Christmas star' },
			{ id: '209', size: '32x32', year: '2022-2023', name: 'Universe' },
			{ id: '210', size: '98x102', year: '2023', name: 'Milky way' },
		],
	},
]

export const fr = [
	{
		title: 'Micro la vie',
		section: 'La section',
		img: [
			{ id: '101', size: '47х38', year: '2006', name: `Air. l'odeur du parfum` },
			{ id: '102', size: '44х30', year: '2005', name: 'Air. Сonnexion parfaite' },
			{ id: '103', size: '30х42', year: '2017', name: 'Air. Miss Dior' },
			{ id: '104', size: '39х39', year: '2009', name: 'Temps. Horloge. Secondes' },
			{ id: '105', size: '38х29', year: '2007', name: `Air. L'odeur du printemps` },
			{ id: '106', size: '41х27', year: '2000', name: 'Une goutte idée' },
			{ id: '107', size: '39х42', year: '2005', name: 'Relation parfaite' },
		],
	},
	{
		title: 'Universal infinite',
		section: 'La section',
		img: [
			{ id: '201', size: '35х50', year: '1999', name: 'Eclipse solaire' },
			{ id: '202', size: '35х35', year: '2019', name: 'Le dragon d`or de Bali' },
			{ id: '203', size: '37x65', year: '2016', name: 'La cle de la vie' },
			{ id: '204', size: '38х46', year: '2017', name: 'Invité du ciel' },
			{ id: '205', size: '40х35', year: '2005', name: 'Planète A' },
			{ id: '206', size: '47х42', year: '2004', name: 'Planète В' },
			{ id: '207', size: '46х34', year: '2004', name: 'Galaxie heureuse' },
			{ id: '208', size: '37х41', year: '2018', name: 'Étoile de Noël' },
			{ id: '209', size: '32x32', year: '2022-2023', name: 'L’Univers' },
			{ id: '210', size: '98x102', year: '2023', name: 'La Voie Lactée  de l’Univers' },
		],
	},
]
