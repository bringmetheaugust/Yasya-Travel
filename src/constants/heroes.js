const HEROES = {
	yasya: {
		id: 1,
		heroImg: require('@src/media/heroes/yasya/hero.png'),
		enemyImg: require('@src/media/heroes/yasya/enemy.jpeg'),
		audio: require('@src/media/heroes/yasya/audio.mp3'),
		name: 'Яся',
		description: 'помогите Ясе сбежать с АТБ и добраться до Синявки!',
		about: 'Яся пережила на своём пути очень трудные моменты, которые заставляли\
			бедняжку часто менять работу и мировозрение, которое не давало часто ездить\
			в своё родное село и проводить время с родными, иногда просто сидя в своей\
			комнате, смотря на сарай с курями, скупо пуская слезу. Несмотря на все трудности,\
			она нашла смелость, и, поймав удачу, сделала серьёзный шаг переехав в Киев,\
			где не так часто встретишь окна, которые открывают вид на чей-то сарай, что\
			позволило бедняжке по-немного забыть о той боли, которая напоминала ей о своём селе,\
			о Синявке..\
		',
		opened: true
	},
	niko: {
		id: 2,
		heroImg: require('@src/media/heroes/niko/hero.png'),
		enemyImg: require('@src/media/heroes/niko/enemy.jpg'),
		audio: require('@src/media/heroes/niko/audio.mp3'),
		name: 'Коля',
		description: 'помогите Коле поймать все таблетки и вылечиться от шизофрении!',
		about: 'Не смотря на все тревоги со стороны родителей и близких,\
			Нико никогда не хотел жить по правилам и подчиняться каким-либо\
			правила жизни, и, вопреки своёму взрослению, он постоянно\
			игнорировал реальность, подвергая себя приключениям.\
			Однажды он даже сумел побороть законы физики,\
			которые должны были изменить его жизнь после падения с очень высокого\
			дерева, но Нико дал им отпор и остался почти здоров. После этого, казалось бы,\
			безрассудного поединка с законом Ньютона, истории и легенды о его подвигах\
			быстро расходились по всему Каневу, часто привлекая внимание людей.\
		',
		opened: true
	},
	yelya: {
		id: 3,
		heroImg: require('@src/media/heroes/yelya/hero.png'),
		enemyImg: require('@src/media/heroes/yelya/enemy.png'),
		audio: require('@src/media/heroes/yelya/audio.mp3'),
		name: 'Еля',
		description: 'помогите Еле сбежать от негров!',
		about: 'Итс нау о невер, кам холд ми тайт, кисс ми май дарлинг, би май\
			тунайт. Туморол вил би тудей. Итс нау о невер май лав вил нот веит..\
		',
		opened: true
	},
	natasha: {
		id: 4,
		heroImg: require('@src/media/heroes/natasha/hero.png'),
		enemyImg: require('@src/media/heroes/natasha/enemy.png'),
		audio: require('@src/media/heroes/natasha/audio.mp3'),
		name: 'Наташа',
		description: 'помогите Наташе сбежать от алкоголизма и не спиться!',
		about: 'Пока жители Канева, окутанные во тьму этого гиблого места, медленно\
			борясь против алкоголизма и быдло-популяции на улицах города, Наташа\
			пытается соблюдать баланс добра и зла, безостановочно скупая весь алкоголь\
			и уничтожая его внутри себя. но давление со стороны близких и постоянно\
			растущая цена спирного значительно усложняет её цель с каждим разом,\
			что ставит под угрозу её план - выйти из запоя..\
		',
		opened: false
	},
	vitya: {
		id: 5,
		heroImg: require('@src/media/heroes/vitya/hero.png'),
		enemyImg: require('@src/media/heroes/vitya/enemy.jpg'),
		audio: require('@src/media/heroes/vitya/audio.mp3'),
		name: 'Витя',
		description: 'помоги Вите сбежать от польского пана и не поехать в Польшу!',
		about: 'Не смотря на все жизненные преграды, неизлечимый логоневроз и привычку\
			пару раз покрутиться вокруг себя перед тем как войти в какой-то дверную проём,\
			Витя всегда оставался тёмным кардиналом души компании, её могзом и двигателем\
			безудержного веселья. Трудно найти человека, который сможет бросить свой\
			дом и мечту, смело отправиться ломать далеко за высокие холмы своей родины\
			и там сносить старые стены и строить новые под пыльным присмотром польского\
			пана.\
		',
		opened: false
	},
	saliy: {
		id: 6,
		heroImg: require('@src/media/heroes/saliy/hero.png'),
		enemyImg: require('@src/media/heroes/saliy/enemy.jpg'),
		audio: require('@src/media/heroes/saliy/audio.mp3'),
		name: 'Саша',
		description: 'помогите Саше поймать все объявления и устроится на Нашу Рябу!',
		about: 'Однажды легенда гласили, что на свет появиться тот, кто ниразу\
			не покинет свою комнату и порог своего дома; тот, кто мужественно будет\
			осуждать несовершенство этого мира и оскорблять всех, кто появиться у\
			него на пути; тот, кто потеряет свю девственность с мамой своего соседа\
			по дому; тот, чья спина напоминает ствол дерева, которого пытался сломать\
			сильный ветер, но не сломал, а лишь сильно погнул; тот, кто до сих \
			пор верит, что он не тот самый человек из этой легенды, и что можно \
			было бы что-то исправить..\
		',
		opened: false
	},
	nester: {
		id: 7,
		heroImg: require('@src/media/heroes/nester/hero.png'),
		enemyImg: require('@src/media/heroes/nester/enemy.jpg'),
		audio: require('@src/media/heroes/nester/audio.mp3'),
		name: 'Нестер',
		description: 'помогите Нестеру поймать все гантели и не стать дрыщем!',
		about: 'Андрюха, я в тебя верю)',
		opened: false
	},
	dasha: {
		id: 8,
		heroImg: require('@src/media/heroes/dasha/hero.png'),
		enemyImg: require('@src/media/heroes/dasha/enemy.png'),
		audio: require('@src/media/heroes/dasha/audio.mp3'),
		name: 'Дашка',
		description: 'помогите Дашке выучить Реакт!',
		about: 'Ничто так не стремиться вырваться с плена тьмы и тщености, как \
			глупенькая московская принцесса из отдела контент-менеджмента\
		',
		opened: false
	}
};

export const HEROES_ID= {
	niko: HEROES.niko.id,
	yasya: HEROES.yasya.id,
	yelya: HEROES.yelya.id,
	natasha: HEROES.natasha.id,
	vitya: HEROES.vitya.id,
	saliy: HEROES.saliy.id,
	nester: HEROES.nester.id,
	dasha: HEROES.dasha.id,
}

export default HEROES;
